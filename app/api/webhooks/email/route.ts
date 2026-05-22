import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

// Configure these securely in Vercel environment variables
const WEBHOOK_SECRET = process.env.EMAIL_WEBHOOK_SECRET;
const GITHUB_TOKEN = process.env.GITHUB_BOT_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Repository details
const REPO_OWNER = 'gdx7';
const REPO_NAME = 'microbiology-theme-uva';
const BASE_BRANCH = 'main';

/**
 * Validates the incoming webhook request
 */
function validateWebhook(request: Request) {
    const authHeader = request.headers.get('authorization');
    if (!WEBHOOK_SECRET) {
        console.warn('EMAIL_WEBHOOK_SECRET is not set. Webhook is completely open!');
        return true; // For local testing if secret not set, but dangerous in prod
    }

    if (!authHeader || authHeader !== `Bearer ${WEBHOOK_SECRET}`) {
        return false;
    }
    return true;
}

/**
 * Calls Gemini to parse the email and generate Markdown content
 */
async function generateMarkdownContent(emailSubject: string, emailBody: string): Promise<{ filename: string, content: string, title: string } | null> {
    if (!GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY is not configured');
    }

    const systemInstruction = `You are a strict website data parser. Your job is to read an email requesting a website update, determine if it is a News item, a Seminar, or a person being added, and output ONLY a valid JSON object. 
  
  The JSON object must have exactly three keys:
  1. "filename": The file path to create/update. 
     - For news: "content/news/YYYY-MM-DD-[slug].md"
     - For seminars: "content/seminars/YYYY-MM-DD-[slug].md"
  2. "content": The EXACT markdown file content with YAML frontmatter.
  3. "title": A short description of this PR (e.g., "Add news: Nature Publication").
  
  Format references:
  
  # News Format
  ---
  title: "[Title]"
  date: "YYYY-MM-DDTHH:mm:ss.000Z"
  tag: "[Publication/Award/Event]"
  description: "[Short description under 150 chars]"
  featured: true
  ---
  [Full content if any]
  
  # Seminar Format
  ---
  title: "[Title]"
  date: "YYYY-MM-DDTHH:mm:ss.000Z"
  speaker: "[Speaker Name]"
  affiliation: "[Affiliation]"
  location: "[Room/Building]"
  description: "[Short description]"
  ---
  [Additional context if any]
  
  CRITICAL: Reply with ONLY valid, raw JSON. Do not use markdown blocks like \`\`\`json.`;

    const prompt = `Email Subject: ${emailSubject}\n\nEmail Body:\n${emailBody}`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemInstruction }] },
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
        }
      })
    });

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Gemini API Error:", errorText);
        throw new Error(`Gemini API returned ${response.status}`);
    }

    const data = await response.json();
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!resultText) {
        throw new Error('No text returned from Gemini');
    }

    return JSON.parse(resultText);

  } catch (err) {
    console.error('Error generating content with Gemini:', err);
    return null;
  }
}

/**
 * Creates a Pull Request on GitHub with the new content
 */
async function createPullRequest(filename: string, content: string, prTitle: string, sender: string) {
  if (!GITHUB_TOKEN) {
    throw new Error('GITHUB_BOT_TOKEN is not configured');
  }

  const octokit = new Octokit({ auth: GITHUB_TOKEN });
  
  // 1. Get reference to the main branch to find the latest commit SHA
  const { data: refData } = await octokit.rest.git.getRef({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    ref: `heads/${BASE_BRANCH}`,
  });
  const baseSha = refData.object.sha;

  // 2. Create a new branch
  const timestamp = new Date().getTime();
  const newBranchName = `update-from-email-${timestamp}`;
  await octokit.rest.git.createRef({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    ref: `refs/heads/${newBranchName}`,
    sha: baseSha,
  });

  // 3. Create the file (or update if it exists)
  // Check if file exists to get its SHA (required for updates)
  let fileSha;
  try {
    const { data: existingFileData } = await octokit.rest.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: filename,
      ref: newBranchName,
    });
    if (!Array.isArray(existingFileData) && existingFileData.type === 'file') {
        fileSha = existingFileData.sha;
    }
  } catch (err: any) {
    // 404 means file doesn't exist, which is fine
    if (err.status !== 404) {
        throw err;
    }
  }

  // Commit the file to the new branch
  await octokit.rest.repos.createOrUpdateFileContents({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    path: filename,
    message: `Automated update: ${prTitle}`,
    content: Buffer.from(content).toString('base64'),
    branch: newBranchName,
    sha: fileSha,
    committer: {
      name: 'Microbiology Web Bot',
      email: 'microbioSILS@gmail.com',
    },
    author: {
        name: sender || 'Microbiology Web Bot',
        email: 'microbioSILS@gmail.com', 
    }
  });

  // 4. Create the Pull Request
  const { data: prData } = await octokit.rest.pulls.create({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    title: `Website Update: ${prTitle}`,
    head: newBranchName,
    base: BASE_BRANCH,
    body: `This PR was automatically generated from an email sent by **${sender}**. \n\nPlease review the changes to \`${filename}\`.\n\n_Powered by AI_`,
  });

  return prData.html_url;
}

export async function POST(request: Request) {
  try {
    // 1. Validate Secret
    if (!validateWebhook(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse Incoming Data (Expected from Zapier/Make)
    const body = await request.json();
    const { subject, body_text, sender } = body;

    if (!subject || !body_text) {
      return NextResponse.json({ error: 'Missing subject or body_text' }, { status: 400 });
    }

    // For security, you might want to enforce that ONLY emails from specific domains or addresses are processed.
    // if (!sender?.includes('@uva.nl') && sender !== 'microbioSILS@gmail.com') {
    //    return NextResponse.json({ error: 'Sender not authorized' }, { status: 403 });
    // }

    console.log(`Received update request from: ${sender}`);

    // 3. Generate Markdown using LLM
    const generated = await generateMarkdownContent(subject, body_text);
    
    if (!generated) {
        return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
    }

    // 4. Create PR via GitHub
    const prUrl = await createPullRequest(generated.filename, generated.content, generated.title, sender);

    return NextResponse.json({ 
        success: true, 
        message: 'Pull request created successfully',
        pr_url: prUrl
    });

  } catch (error: any) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ 
        error: 'Internal server error processing webhook',
        details: error.message 
    }, { status: 500 });
  }
}
