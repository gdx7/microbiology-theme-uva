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

interface Attachment {
  filename: string;
  base64: string;
}

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
 * First Pass: Classifies the email request type
 */
async function classifyEmailRequest(emailSubject: string, emailBody: string): Promise<{
  action: 'create_news' | 'create_seminar' | 'edit_group' | 'unknown';
  group_slug: string | null;
  confidence: number;
} | null> {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not configured');
  }

  const systemInstruction = `You are an AI classifier for a biology department website.
Analyze the email subject and body to determine the type of update requested.

Valid actions:
1. "create_news": Requesting to add a new news article, publication highlight, event, or announcement.
2. "create_seminar": Requesting to schedule/add a new academic seminar or guest talk.
3. "edit_group": Requesting to edit an existing research group page (e.g. updating description, adding publications, adding or editing team members).
4. "unknown": None of the above.

Valid research group slugs (select one if action is "edit_group"):
- "branco-dos-santos" (Branco dos Santos Lab)
- "brul" (Brul Lab / Bacterial Cell Biology and Food Safety)
- "drna" (DNA & RNA Interaction Lab / Dugar Lab)
- "el-aidy" (El Aidy Lab)
- "hamoen" (Hamoen Lab)
- "kramer" (Kramer Lab)
- "postma" (Postma Lab)
- "schyns" (Schyns Lab)
- "verhoef" (Verhoef Lab)
- "wortel" (Wortel Lab)
- "zhang" (Gumi Lab / Zhang Lab)

Reply with ONLY a valid raw JSON object. Do not wrap in markdown block formatting.`;

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
      throw new Error(`Gemini classification returned ${response.status}`);
    }

    const data = await response.json();
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!resultText) throw new Error('No classification text returned');

    return JSON.parse(resultText);
  } catch (err) {
    console.error('Error classifying email:', err);
    return null;
  }
}

/**
 * Calls Gemini to generate new News or Seminar markdown
 */
async function generateNewMarkdown(emailSubject: string, emailBody: string, imageContext: string): Promise<{
  filename: string;
  content: string;
  title: string;
} | null> {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is not configured');

  const systemInstruction = `You are a website content generator. Read the email and output ONLY a valid JSON object.
The JSON object must have exactly three keys:
1. "filename": The file path to create:
   - For news: "content/news/YYYY-MM-DD-[slug].md"
   - For seminars: "content/seminars/YYYY-MM-DD-[slug].md"
2. "content": The EXACT markdown file content with YAML frontmatter.
3. "title": A short description of this PR (e.g., "Add news: Nature Publication").

Format references:

# News Format
---
title: "[Title]"
date: "YYYY-MM-DDTHH:mm:ss.000Z"
tag: "[Publication/Award/Event/Announcement]"
description: "[Short description under 150 chars]"
image: "[If an attached image path was provided, use it here, e.g. /images/uploads/upload_...]"
featured: true
---
[Full article body markdown, formatted nicely]

# Seminar Format
---
title: "[Title]"
date: "YYYY-MM-DDTHH:mm:ss.000Z"
speaker: "[Speaker Name]"
affiliation: "[Affiliation]"
location: "[Room/Building]"
description: "[Short description]"
---
[Additional description/context markdown if any]

CRITICAL: Reply with ONLY valid raw JSON. Do not wrap in markdown formatting or code blocks.`;

  const prompt = `Email Subject: ${emailSubject}\n\nEmail Body:\n${emailBody}\n\n${imageContext}`;

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

    if (!response.ok) throw new Error(`Gemini generation returned ${response.status}`);
    const data = await response.json();
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!resultText) throw new Error('No generation text returned');

    return JSON.parse(resultText);
  } catch (err) {
    console.error('Error generating markdown:', err);
    return null;
  }
}

/**
 * Calls Gemini to edit an existing Research Group file
 */
async function generateEditedGroupContent(
  emailSubject: string,
  emailBody: string,
  currentContent: string,
  imageContext: string
): Promise<{
  content: string;
  title: string;
} | null> {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY is not configured');

  const systemInstruction = `You are a website content manager. Merge the instructions in the email into the existing research group YAML markdown.

Here is the current content of the file:
\`\`\`yaml
${currentContent}
\`\`\`

Tasks can include:
1. Adding a new team member to "teamMembers" (Name, role, email, and photo path if an image was attached).
2. Adding a publication to "publications" (Title, authors, journal, year, link).
3. Modifying descriptions, whatWeDo, keywords, etc.

Rules:
- Retain all existing information that is not explicitly requested to be changed or removed.
- Keep formatting clean and consistent.
- If an image path is provided, use it exactly as the "photo" property for any new team member being added.

Output ONLY a JSON object with this exact structure:
{
  "content": "the entire updated file content with YAML frontmatter",
  "title": "A short summary of this change (e.g. 'Add John Doe to DRNA Lab team')"
}

CRITICAL: Reply with ONLY valid raw JSON. Do not wrap in markdown formatting or code blocks.`;

  const prompt = `Email Subject: ${emailSubject}\n\nEmail Body:\n${emailBody}\n\n${imageContext}`;

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

    if (!response.ok) throw new Error(`Gemini group editing returned ${response.status}`);
    const data = await response.json();
    const resultText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!resultText) throw new Error('No editing text returned');

    return JSON.parse(resultText);
  } catch (err) {
    console.error('Error generating edited group content:', err);
    return null;
  }
}

/**
 * Creates a Branch, Commits Files (including attachments), and Opens a PR on GitHub
 */
async function processGitHubUpdate(
  filename: string,
  content: string,
  prTitle: string,
  sender: string,
  attachments: { path: string; base64: string }[]
) {
  if (!GITHUB_TOKEN) {
    throw new Error('GITHUB_BOT_TOKEN is not configured');
  }

  const octokit = new Octokit({ auth: GITHUB_TOKEN });

  // 1. Get reference to the main branch
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

  // 3. Commit attachments if any
  for (const attachment of attachments) {
    const cleanBase64 = attachment.base64.replace(/^data:image\/[a-z]+;base64,/, '');
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: attachment.path,
      message: `Automated upload: ${attachment.path.split('/').pop()}`,
      content: cleanBase64,
      branch: newBranchName,
    });
  }

  // 4. Create/update the markdown content file
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
    if (err.status !== 404) throw err;
  }

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

  // 5. Create the Pull Request
  const { data: prData } = await octokit.rest.pulls.create({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    title: `Website Update: ${prTitle}`,
    head: newBranchName,
    base: BASE_BRANCH,
    body: `This PR was automatically generated from an email sent by **${sender}**. \n\nPlease review the changes.\n\n_Powered by Gemini AI_`,
  });

  return prData.html_url;
}

export async function POST(request: Request) {
  try {
    // 1. Validate Secret
    if (!validateWebhook(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse Incoming Data
    const body = await request.json();
    const { subject, body_text, sender, attachments } = body;

    if (!subject || !body_text) {
      return NextResponse.json({ error: 'Missing subject or body_text' }, { status: 400 });
    }

    // 3. Security: Check if sender is authorized
    const senderEmail = sender?.toLowerCase() || '';
    const isUvaDomain = senderEmail.endsWith('@uva.nl') || senderEmail.endsWith('@amsterdamumc.nl');
    const isApprovedSender = isUvaDomain || senderEmail === 'microbiosils@gmail.com';

    if (!isApprovedSender) {
      return NextResponse.json({
        error: 'Sender not authorized. Emails must come from a @uva.nl or @amsterdamumc.nl address.'
      }, { status: 403 });
    }

    console.log(`Received update request from: ${sender}`);

    // 4. Handle Attachments
    const processedAttachments: { path: string; base64: string }[] = [];
    let imageContext = '';

    if (attachments && Array.isArray(attachments) && attachments.length > 0) {
      const timestamp = new Date().getTime();
      attachments.forEach((att: Attachment) => {
        const safeFilename = att.filename.replace(/[^a-zA-Z0-9.-]/g, '_');
        const uniquePath = `public/images/uploads/upload_${timestamp}_${safeFilename}`;
        const webUrl = `/images/uploads/upload_${timestamp}_${safeFilename}`;
        processedAttachments.push({ path: uniquePath, base64: att.base64 });
        imageContext += `Attached Image name: "${att.filename}" has been saved. Its webpage path is exactly "${webUrl}". Use this path if you need to reference this image.\n`;
      });
    }

    // 5. Classify Request
    const classification = await classifyEmailRequest(subject, body_text);
    if (!classification) {
      return NextResponse.json({ error: 'Failed to classify email request' }, { status: 500 });
    }

    console.log(`Classification: ${JSON.stringify(classification)}`);

    let targetFilename = '';
    let finalContent = '';
    let finalTitle = '';

    if (classification.action === 'edit_group' && classification.group_slug) {
      // Fetch current group content from GitHub
      const octokit = GITHUB_TOKEN ? new Octokit({ auth: GITHUB_TOKEN }) : null;
      if (!octokit) throw new Error('GITHUB_BOT_TOKEN is not configured');

      targetFilename = `content/research-groups/${classification.group_slug}.md`;
      let currentContent = '';

      try {
        const { data: fileData }: any = await octokit.rest.repos.getContent({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: targetFilename,
          ref: BASE_BRANCH,
        });

        if (!Array.isArray(fileData) && fileData.type === 'file') {
          currentContent = Buffer.from(fileData.content, 'base64').toString('utf8');
        }
      } catch (err: any) {
        return NextResponse.json({ error: `Research group file not found: ${targetFilename}` }, { status: 404 });
      }

      // Generate updated content
      const edited = await generateEditedGroupContent(subject, body_text, currentContent, imageContext);
      if (!edited) return NextResponse.json({ error: 'Failed to merge edits into group content' }, { status: 500 });

      finalContent = edited.content;
      finalTitle = edited.title;

    } else if (classification.action === 'create_news' || classification.action === 'create_seminar') {
      const generated = await generateNewMarkdown(subject, body_text, imageContext);
      if (!generated) return NextResponse.json({ error: 'Failed to generate markdown content' }, { status: 500 });

      targetFilename = generated.filename;
      finalContent = generated.content;
      finalTitle = generated.title;
    } else {
      return NextResponse.json({ error: 'Action type is unknown or unsupported.' }, { status: 400 });
    }

    // 6. Push to GitHub
    const prUrl = await processGitHubUpdate(
      targetFilename,
      finalContent,
      finalTitle,
      sender,
      processedAttachments
    );

    return NextResponse.json({
      success: true,
      message: 'Website update initiated successfully.',
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
