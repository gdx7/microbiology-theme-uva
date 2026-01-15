# Decap CMS Setup Guide

This guide explains how to set up and use the Content Management System (CMS) for the Microbiology Theme website.

## Overview

The website now includes **Decap CMS** (formerly Netlify CMS), which provides a user-friendly interface for:
- Editing research group pages
- Managing team members and their photos
- Adding and updating news items
- Managing people/PI information

All content is stored as files in your Git repository, providing full version control and backup.

## Accessing the CMS

Once deployed, group leaders can access the CMS at:
```
https://your-domain.com/admin
```

## Initial Setup (One-Time Admin Task)

To enable GitHub authentication, you need to create a GitHub OAuth App:

### Step 1: Create GitHub OAuth App

1. Go to GitHub.com and sign in
2. Navigate to **Settings** → **Developer settings** → **OAuth Apps**
3. Click **"New OAuth App"**
4. Fill in the details:
   - **Application name**: `Microbiology Theme CMS`
   - **Homepage URL**: `https://your-vercel-domain.vercel.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
5. Click **"Register application"**
6. Copy the **Client ID** and **Client Secret**

### Step 2: Set Up Netlify OAuth Gateway

Decap CMS uses Netlify's OAuth service (free for GitHub auth):

1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up or sign in
3. Go to **User Settings** → **Applications** → **OAuth**
4. Click **"Install provider"**
5. Select **GitHub**
6. Paste your **Client ID** and **Client Secret** from Step 1
7. Click **"Install"**

### Alternative: Use Vercel with GitHub OAuth (Simpler)

If you're deploying on Vercel, you can use a simpler approach:

1. Update `public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: gdx7/microbiology-theme-uva
     branch: main
     # Use GitHub's built-in auth (requires repo collaborator access)
   ```

2. Add collaborators to your GitHub repository:
   - Go to your repository settings
   - Navigate to **Collaborators**
   - Add the GitHub usernames of all group leaders who need CMS access

## Granting Access to Group Leaders

### Method 1: GitHub Collaborators (Recommended for small teams)
1. Go to your repository: https://github.com/gdx7/microbiology-theme-uva
2. Click **Settings** → **Collaborators**
3. Click **"Add people"**
4. Enter the GitHub username or email of each group leader
5. They will receive an invitation email

### Method 2: GitHub Teams (Better for larger organizations)
1. Create a GitHub Organization (if not already done)
2. Transfer your repository to the organization
3. Create teams (e.g., "Principal Investigators")
4. Assign team members repository write access

## How Group Leaders Use the CMS

### First-Time Login
1. Visit `https://your-domain.com/admin`
2. Click **"Login with GitHub"**
3. Authorize the application
4. You'll see the CMS dashboard

### Editing Your Research Group Page

1. Click **"Research Groups"** in the sidebar
2. Find and click on your group
3. Edit the fields:
   - Group description
   - Research focus areas
   - Add/remove team members (with photos!)
   - Update publications
4. Click **"Save"** (creates a draft)
5. Click **"Publish"** (commits to GitHub)
6. Vercel automatically rebuilds the site (takes ~2 minutes)

### Adding Team Members

1. Open your research group in the CMS
2. Scroll to **"Team Members"** section
3. Click **"Add Team Members"**
4. Fill in:
   - Name
   - Role (e.g., PhD Student, Postdoc)
   - Email
   - Upload photo (automatically resized)
   - Short bio
5. Click **"Save"** and **"Publish"**

### Adding News Items

1. Click **"News"** in the sidebar
2. Click **"New News"**
3. Fill in:
   - Title
   - Tag (e.g., "Publication", "Award")
   - Description
   - Optional: Full content (markdown supported)
   - Optional: External link
   - Optional: Featured image
4. Toggle **"Show in Rotator"** to feature on homepage
5. Click **"Publish"**

## Content Storage

All content is stored in the repository:
```
content/
├── research-groups/
│   ├── zhang.md
│   ├── wortel.md
│   └── ...
├── news/
│   ├── 2024-01-15-new-publication.md
│   └── ...
└── people/
    └── ...

public/images/uploads/
└── [uploaded photos and images]
```

## Editorial Workflow (Optional)

For editorial review before publishing:

1. Update `public/admin/config.yml`:
   ```yaml
   publish_mode: editorial_workflow
   ```

2. This enables:
   - **Drafts**: Work in progress
   - **In Review**: Ready for review
   - **Ready**: Approved for publishing

3. Only repository admins can publish to the main branch

## Troubleshooting

### "Error: Failed to load config"
- Check that `public/admin/config.yml` exists
- Verify the YAML syntax is correct

### "Error: Authentication failed"
- Verify you're a repository collaborator
- Check OAuth app is configured correctly
- Try logging out and logging back in

### "Cannot find collection"
- Ensure content folders exist: `content/research-groups`, etc.
- Check folder permissions

### Changes don't appear on website
- Wait 2-3 minutes for Vercel to rebuild
- Check build logs at vercel.com
- Verify the commit appears on GitHub

## Local Development

To test CMS locally:

1. Install Decap CMS server:
   ```bash
   npx decap-server
   ```

2. Update `public/admin/config.yml`:
   ```yaml
   local_backend: true
   ```

3. Run your Next.js dev server:
   ```bash
   npm run dev
   ```

4. Access CMS at `http://localhost:3000/admin`

## Support

For issues or questions:
- Check Decap CMS docs: https://decapcms.org/docs/
- Contact the web administrator
- Open an issue on the GitHub repository

## Security Notes

- All changes are tracked via Git commits
- Each edit shows who made it and when
- You can revert changes through GitHub
- Only invited collaborators can edit content
- Images are automatically optimized
