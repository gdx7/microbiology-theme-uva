# Email-to-Website Automation Setup

This guide explains how to connect the `microbioSILS@gmail.com` email address to the website so that emails are automatically parsed and translated into pending Pull Requests for the website.

## Prerequisites

1.  **Vercel Environment Variables**
    You need to add three secrets to your Vercel project settings (`https://vercel.com/[org]/[project]/settings/environment-variables`):
    *   `EMAIL_WEBHOOK_SECRET`: Create a long, random text string (e.g., `my-super-secret-password-123`). This proves that Zapier/Make is actually allowed to trigger updates.
    *   `GITHUB_BOT_TOKEN`: A GitHub Personal Access Token. 
        1. Go to GitHub -> Settings -> Developer Settings -> Personal access tokens -> Tokens (classic).
        2. Generate a new token with the **`repo`** scope checked.
    *   `GEMINI_API_KEY`: An API key from Google AI Studio (`https://aistudio.google.com/`).

2.  **An Automation Platform**
    You need either **Zapier** or **Make.com** to watch for new emails and forward them to Vercel.

---

## Step-by-Step Setup (using Make.com - Recommended & Free Tier)

1.  **Create an Account:**
    Go to [Make.com](https://www.make.com/) and create a free account.
2.  **Create a New Scenario:**
    Click "Create a new scenario" in the top right.
3.  **Add Gmail Module (Trigger):**
    *   Click the large **`+`** button.
    *   Search for "Gmail".
    *   Select **Watch Emails**.
    *   Connect the `microbioSILS@gmail.com` account (you will need to go through the Google login process and allow Make access).
    *   Set the folder to `INBOX`.
    *   Filter: You can optionally add a filter here (e.g., only watch emails with "Update" in the subject, or only from specific email addresses).
4.  **Add HTTP Module (Action):**
    *   Click the **`+`** next to the Gmail module to add another step.
    *   Search for "HTTP".
    *   Select **Make a request**.
    *   Configure it exactly like this:
        *   **URL:** `https://microbiology-theme-uva.vercel.app/api/webhooks/email` *(Replace with your live domain if different)*
        *   **Method:** `POST`
        *   **Headers:**
            *   *Item 1 Key:* `Authorization`
            *   *Item 1 Value:* `Bearer YOUR_WEBHOOK_SECRET` *(This must exactly match the `EMAIL_WEBHOOK_SECRET` you put in Vercel)*
            *   *Item 2 Key:* `Content-Type`
            *   *Item 2 Value:* `application/json`
        *   **Body type:** `Raw`
        *   **Content type:** `JSON (application/json)`
        *   **Request content:** Copy and paste the JSON below, but map the specific Make.com Gmail variables where indicated:
            ```json
            {
              "subject": "{{1.subject}}",
              "sender": "{{1.sender.emailAddress}}",
              "body_text": "{{1.textContent}}"
            }
            ```
            *(Note: When you click into the Request Content box, a popup will appear allowing you to select the "Subject", "Sender Email", and "Text Content" from the previous Gmail step. The `{{...}}` format above is just an example of what it looks like).*
5.  **Turn it On:**
    Click the "Run once" button at the bottom left to test it, and then toggle the "Scheduling" switch at the bottom left to **ON**.

---

## How to Use It

Once set up, a workflow will be:
1.  A group leader sends an email to `microbioSILS@gmail.com`.
    *   Subject: *New Publication feature*
    *   Body: *Please add a new publication to the site. Title: "Microbiome interactions", Authors: "Smith et al", Journal: "Nature", Year: 2026, Link: "https://nature.com/..."*
2.  Make.com sees the email and forwards it to the Vercel app.
3.  The Vercel app uses Gemini AI to parse the text into a proper Markdown article.
4.  The Vercel app uses the GitHub API to create a new branch and open a Pull Request.
5.  You (or another admin) go to GitHub, see the new Pull Request, review the changes, and click **Merge**.
6.  Vercel automatically builds and deploys the update.
