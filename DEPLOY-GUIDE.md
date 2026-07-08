# Production deploy guide (Payload CMS)

Your setup, for reference:
- **Repo:** `github.com/gdx7/microbiology-theme-uva` → Vercel auto-deploys on push.
- **DB:** none provisioned yet. Locally the app uses a SQLite file; production needs Postgres.
- **Media:** locally saved to disk; production needs Vercel Blob (Vercel's disk is wiped between requests).
- The Payload build is on branch **`feat/payload-cms`** (not yet committed/pushed).

Do the four steps below **before** pushing, so the first deploy already has what it needs.

> **Order matters.** Set every env var in Vercel *first*, then deploy, then seed.
> If you deploy before seeding, `/research-groups` and `/news` are empty for the few
> minutes until you run the seed (Step 3). The optional "zero-downtime" note at the end
> avoids even that.

---

## Step 1 — Neon Postgres → `DATABASE_URI` (+ generate `PAYLOAD_SECRET`)

**1a. Create the database (free):**
1. Go to https://neon.tech → sign up (GitHub/Google login is fine) → **Create project**.
2. Name it e.g. `microbiology-sils`, pick a region near the EU (e.g. *AWS eu-central-1 / Frankfurt*).
3. After it's created, open **Connect** (or **Connection Details**) and copy the
   **Pooled** connection string. It looks like:
   ```
   postgresql://USER:PASSWORD@ep-xxxx-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require
   ```
   Use the **pooled** one (host contains `-pooler`) — it's the right choice for serverless.

**1b. Generate a Payload secret** (run locally, any long random string works):
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Copy the 64-character output.

**1c. Add both to Vercel:**
1. https://vercel.com → your project → **Settings → Environment Variables**.
2. Add, ticking **Production, Preview, and Development** for each:
   - `DATABASE_URI` = the Neon pooled string from 1a
   - `PAYLOAD_SECRET` = the string from 1b

---

## Step 2 — Vercel Blob → `BLOB_READ_WRITE_TOKEN`

This is where uploaded photos are stored in production.

1. Vercel → your project → **Storage** tab → **Create Database** → **Blob**.
2. Name it (e.g. `microbiology-media`) → **Create**, then **Connect** it to this project.
3. Connecting **automatically adds `BLOB_READ_WRITE_TOKEN`** to your project's env vars —
   you don't have to paste it manually. (Confirm it appears under Settings → Environment Variables.)

*(The code already switches to Blob automatically whenever `BLOB_READ_WRITE_TOKEN` is present.)*

---

## Step 3 — Deploy, then seed the database once

**3a. Add a temporary flag** in Vercel → Settings → Environment Variables:
- `ALLOW_SEED` = `true`  (Production + Preview)

**3b. Push the branch and deploy.** From the repo:
```bash
git add -A
git commit -m "feat: Payload 3 CMS for group-leader editing"
git push -u origin feat/payload-cms
```
Then either **merge `feat/payload-cms` into `main`** (Vercel deploys `main` to production),
or open the branch's **Preview deployment** from the Vercel dashboard.

Wait for the deployment to finish (green).

**3c. Seed the content** — visit this URL once (replace the host and the token):
```
https://microbiology-sils.nl/api/seed?token=YOUR_PAYLOAD_SECRET
```
You should get a JSON response listing `created research-group: …` for all 11 groups + news.
Refresh `/research-groups` — the pages are now populated (photos included).

**3d. Turn the flag back off (important):**
- In Vercel, **delete the `ALLOW_SEED`** env var, then **Redeploy** (Deployments → ⋯ → Redeploy)
  so the seed endpoint is disabled again.

---

## Step 4 — Change the admin password & create the 11 PI accounts

1. Go to **https://microbiology-sils.nl/admin** and log in with the seeded admin:
   - email `admin@microbiology-sils.nl` · password `ChangeMe123!`
2. **Change the password immediately:** top-right menu → **Account** → set a new password → Save.
3. **Create each PI account:** left sidebar → **Users** → **Create New**:
   - Enter the PI's **email**, a **name**, and an initial **password**.
   - Save, and send the PI their email + password (they can change it under Account).
   - Repeat for all 11. Then hand them `GROUP-LEADER-GUIDE.md`.

*(All users have equal editing rights — this is the agreed "trusted editing" model. Per-group
restrictions can be added later via Payload access control if ever needed.)*

---

## Done ✅

Edits in `/admin` now go live within seconds. Media is on Vercel Blob; content is in Neon.

### Good to know
- **Schema auto-creates** on first connect (`push: true` on the Postgres adapter), so no
  migration step was needed. If you later change collection fields, the schema updates on
  the next deploy; for anything destructive, back up Neon first (Neon has branching/restore).
- **Password resets email PIs?** Not yet — no email service is configured, so for now you reset
  passwords for them in the admin. Ask me to wire up email (e.g. Resend) if you want self-service resets.
- **Leftover Decap bits** (`public/admin/*`, `app/api/auth/github/*`, `app/api/.netlify/*`,
  and the Netlify rewrites in `vercel.json`) are harmless but can be removed now that Payload is live.
- **Zero-downtime variant:** if you don't want the brief empty-pages window, seed on the *Preview*
  deployment first (Steps 3a–3c against the preview URL), verify it, then merge to `main` — production
  comes up already populated because it shares the same Neon database.
