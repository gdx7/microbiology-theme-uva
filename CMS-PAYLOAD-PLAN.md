# CMS plan — Payload 3 (supersedes the Decap approach)

## ✅ Progress (updated 2026-07-07) — build done & verified locally

Payload 3.85.2 is installed and working end to end on a local SQLite database.
Verified: `/admin` login, all 11 research groups + 3 news items seeded from the
markdown (with team photos imported into Media), the public pages re-pointed to
Payload, and a live edit in `/admin` appearing on the public site immediately.

**Done**
- **Step 0 (compat):** Payload needs Next **≥16.2.6**; bumped Next 16.1.1 → **16.2.10**. No beta needed.
- **Step 1–2:** Payload wired in. `payload.config.ts` (root); collections in `collections/`
  (Users, Media, ResearchGroups, News); admin + REST/GraphQL routes under `app/(payload)/`.
  DB adapter is conditional: **SQLite locally** (zero-setup `payload-dev.db`), **Postgres when
  `DATABASE_URI` is set** (production). Fields are plain `textarea` (frontend renders text, not HTML).
- **App restructure:** the public site now lives under `app/(frontend)/` with its own root layout;
  Payload's admin has its own root layout under `app/(payload)/`. The old single `app/layout.tsx`
  was removed (two root layouts — required so the admin isn't wrapped in the site chrome).
- **Decap:** removed the conflicting `app/admin/page.tsx` (it collided with Payload's `/admin`).
  The rest of Decap (`public/admin/*`, `app/api/auth/github/*`, `app/api/.netlify/*`) is left for step 9.
- **Step 4 (migration):** `lib/seed.ts` parses `content/**` + imports images → Payload Local API.
  Run once via the guarded dev route `GET /api/seed?token=$PAYLOAD_SECRET`.
- **Step 5:** `lib/payload-data.ts` feeds `app/(frontend)/research-groups` (list + `[slug]`) and
  `/news`. Pages are `force-dynamic` so edits show instantly (media objects normalised to URL strings).
- **Step 6:** `afterChange` / `afterDelete` hooks call `revalidatePath` (belt-and-suspenders vs. force-dynamic).

**Remaining — needs the site owner / account access**
- **Provision Neon Postgres** (free) → get `DATABASE_URI`. Set it + a generated `PAYLOAD_SECRET`
  in Vercel env (all environments). Generate secret:
  `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.
- **Vercel Blob** (step 3): create a Blob store → set `BLOB_READ_WRITE_TOKEN` in Vercel env.
- **Seed production once** (step 8): after first deploy, set `ALLOW_SEED=true` temporarily and hit
  `/api/seed?token=<PAYLOAD_SECRET>`, then unset `ALLOW_SEED`. Change the admin password immediately.
- **Create the 11 PI accounts** (step 7) in `/admin` → Users (email login; Google OAuth optional later).
- **Retire Decap** (step 9) and write the PI guide (step 10).
- **Not yet built:** People / Publications / Seminars collections (those `content/` folders are empty
  today; pages read from `data/*.ts`). Homepage news rotator still reads `data/news.ts`, not the CMS.
- **Housekeeping:** delete the temporary `app/api/seed` route after production is seeded;
  `payload-types.ts` not generated yet (the standalone Payload CLI hits a Node-24 ESM/TLA bug — not
  needed at runtime; the data layer maps loosely).

**Local dev:** `npm run dev` (port set by preview), open `/admin`
(admin@microbiology-sils.nl / ChangeMe123!). Env keys documented in `.env.local.example`.

---


> **Session handoff.** This decision was made in a chat that was accidentally started in the
> MEMseq.nl session. Continue in a **new Claude Code session opened inside**
> `C:\Users\gdugar1\websites\microbiology-dept`, and point it at this file. (A new session in
> this folder gets its own memory namespace, so this in-repo doc is the reliable context carrier.)

## Goal
Let **~11 non-technical PIs** edit their research group pages **and** general site content
(news, people, publications, seminars) with minimum friction.

## Decisions (locked with the site owner)
- **Login:** email / Google — **no GitHub accounts** for editors.
- **Permissions:** shared / trusted editing — **no per-group isolation required** (any PI may edit
  any page; we trust them). This simplifies the build (no roles/access rules needed).
- **Chosen CMS:** **Payload 3**, embedded in the existing Next.js app on the same Vercel deploy.

### Why Payload (and not the alternatives)
- **Decap CMS (currently half-built here):** logs editors in *as GitHub users*; the only classic
  email-login path was Netlify Identity, which is deprecated. Adding Google login = custom auth
  gateway = fragile. ✗ fails the "no GitHub" requirement cheaply.
- **TinaCMS / Sanity / Storyblok:** great UX, but free tiers cap editor **seats** (~1–3). With
  **11 editors** these would cost money. ✗
- **Payload 3:** **unlimited editors, $0 ongoing** (self-hosted inside the Next.js app + free
  serverless Postgres), email **or** Google login, polished admin UI at `/admin`. ✓

## Current stack (verified)
- **Next.js 16.1.1**, **React 19.2**, App Router. Deployed on Vercel. Repo `gdx7/microbiology-theme-uva`.
- Content today: markdown files under `content/` read by **`lib/markdown.ts`** (used by
  `app/news`, `app/publications`, `app/seminars`, research-group pages).
- Collections present: `research-groups` (11), `news` (3), `people`, `publications`, `seminars`.

> ⚠️ **Compatibility check first.** Payload officially targets **Next 15**; this repo is on **Next
> 16.1.1**. Before committing, verify the current Payload version supports Next 16 (check Payload
> release notes / try a scaffold). If not yet supported, options: (a) pin the latest Payload
> beta that supports Next 16, or (b) temporarily hold Next at 15 for the app. Resolve this in
> step 0 — do not assume.

## Architecture
- Payload 3 runs **inside** the Next app (admin at `/admin`, auto REST/GraphQL + Local API).
- **DB:** Neon serverless Postgres (free) or Vercel Postgres → `DATABASE_URI` env var.
- **Auth:** Payload built-in email/password on the `Users` collection; optionally add Google via
  an OAuth plugin. Admin creates the 11 PI accounts (or email invites).
- **Media:** uploads MUST go to **Vercel Blob** (or S3) — Vercel's filesystem is ephemeral, so a
  local uploads dir will lose images. Use the `@payloadcms/storage-vercel-blob` adapter.
- **Freshness:** Payload `afterChange` hook → `revalidatePath()` so edits appear in seconds
  without a full redeploy (ISR).

## Collections (mirror the existing content model)
Confirm exact fields by reading the frontmatter in `content/**/*.md` and the shapes in
`lib/markdown.ts`. Starting point from the current research-group frontmatter:

- **Users** — auth-enabled (email login), for PIs + admins.
- **ResearchGroups** — `slug, name, code, areaSlug, pi, role, contactEmail, externalUrl,
  shortDescription, description (richtext), whatWeDo, howWeDoItExperimental,
  howWeDoItComputational, labCulture, researchFocus[], keywords[]`, plus team members
  (array: name/role/email/photo/bio), publications, hero image.
- **News** — `title, date, tag, description, body (richtext), link, featuredImage, showInRotator`.
- **People / Publications / Seminars** — per the existing folders.

## Rollout steps
0. **Verify Payload ↔ Next 16 compatibility** (see warning above). Provision Neon Postgres; set
   `DATABASE_URI` + `PAYLOAD_SECRET` in Vercel env (all environments).
1. Add Payload to the app (`payload`, `@payloadcms/next`, `@payloadcms/db-postgres`, a richtext
   editor, `@payloadcms/storage-vercel-blob`). Wire the admin route + config.
2. Define the collections above; run locally; confirm `/admin` loads and login works.
3. Configure Vercel Blob media storage.
4. **Migration script:** parse `content/**/*.md` (gray-matter, already a dep pattern in
   `lib/markdown.ts`) → create Payload docs via the Local API. One-time seed of all 11 groups + news etc.
5. Repoint the frontend data fetching from `lib/markdown.ts` to Payload (Local API in server
   components). **Keep the existing page layouts/styling — only swap the data source.**
6. Add `afterChange` → `revalidatePath` hooks for instant updates.
7. Create the 11 PI accounts (email); optionally enable Google OAuth.
8. Deploy to Vercel; smoke-test each collection end to end.
9. **Retire Decap** once Payload is verified: remove `public/admin/config.yml`,
   `public/admin/index.html`, `app/admin` (Decap), and `app/api/auth/github/*`. Update/replace
   `CMS-SETUP.md`, `CMS-STATUS.md`, `GROUP-LEADER-GUIDE.md`.
10. Give PIs a one-page "how to edit your group page" guide (rewrite of `GROUP-LEADER-GUIDE.md`).

## Editor experience (what a PI does)
1. Go to `microbiology-sils.nl/admin` → log in with email (or Google). No GitHub.
2. Open **Research Groups** → their group → edit text, team, photos.
3. Click **Save** → change is live within seconds.

## Non-goals / notes
- No per-group permission enforcement (owner accepted shared editing). Easy to add later via
  Payload access control if that changes.
- Don't delete the Decap files until Payload is live and verified.
