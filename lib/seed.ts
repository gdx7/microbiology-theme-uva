import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import type { Payload } from 'payload'

// One-time migration of the markdown under content/ (+ existing images under
// public/) into Payload. Idempotent — upserts by slug, re-imports images only
// if not already present. Returns log lines for the caller to surface.
export async function runSeed(payload: Payload): Promise<string[]> {
  const log: string[] = []
  const say = (line: string) => {
    log.push(line)
    // eslint-disable-next-line no-console
    console.log(line)
  }

  const ROOT = process.cwd()
  const CONTENT = path.join(ROOT, 'content')
  const PUBLIC = path.join(ROOT, 'public')

  const ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@microbiology-sils.nl'
  const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD || 'ChangeMe123!'

  // --- 1. first admin user --------------------------------------------------
  const users = await payload.count({ collection: 'users' })
  if (users.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { email: ADMIN_EMAIL, password: ADMIN_PASSWORD, name: 'Site Admin' },
    })
    say(`created admin user: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD} (change after first login)`)
  } else {
    say(`users already exist (${users.totalDocs}), skipping admin creation`)
  }

  // --- image helper: import a /public path into the media collection --------
  const mediaCache = new Map<string, string | number>()
  async function importImage(publicPath?: unknown): Promise<string | number | undefined> {
    if (!publicPath || typeof publicPath !== 'string') return undefined
    const abs = path.join(PUBLIC, publicPath.replace(/^\//, ''))
    if (!fs.existsSync(abs)) {
      say(`  ! missing image, skipping: ${publicPath}`)
      return undefined
    }
    if (mediaCache.has(abs)) return mediaCache.get(abs)
    const filename = path.basename(abs)
    const existing = await payload.find({
      collection: 'media',
      where: { filename: { equals: filename } },
      limit: 1,
    })
    let id: string | number
    if (existing.docs[0]) {
      id = existing.docs[0].id
    } else {
      const doc = await payload.create({
        collection: 'media',
        data: { alt: filename },
        filePath: abs,
      })
      id = doc.id
    }
    mediaCache.set(abs, id)
    return id
  }

  async function upsert(collection: 'research-groups' | 'news', slug: string, data: Record<string, unknown>) {
    const existing = await payload.find({
      collection,
      where: { slug: { equals: slug } },
      limit: 1,
    })
    if (existing.docs[0]) {
      await payload.update({ collection, id: existing.docs[0].id, data: data as never })
      return 'updated'
    }
    await payload.create({ collection, data: data as never })
    return 'created'
  }

  // --- 2. research groups ---------------------------------------------------
  const rgDir = path.join(CONTENT, 'research-groups')
  for (const file of fs.readdirSync(rgDir).filter((f) => f.endsWith('.md'))) {
    const slug = file.replace(/\.md$/, '')
    const { data } = matter(fs.readFileSync(path.join(rgDir, file), 'utf8'))

    const teamMembers = []
    for (const m of (data.teamMembers as Record<string, unknown>[]) || []) {
      teamMembers.push({
        name: m.name,
        role: m.role,
        email: m.email,
        bio: m.bio,
        photo: await importImage(m.photo),
      })
    }

    const publications = ((data.publications as Record<string, unknown>[]) || []).map((p) => ({
      title: p.title,
      authors: p.authors,
      journal: p.journal,
      year: typeof p.year === 'number' ? p.year : parseInt(String(p.year), 10) || undefined,
      link: p.link,
    }))

    const result = await upsert('research-groups', slug, {
      slug,
      name: data.name,
      code: data.code,
      areaSlug: data.areaSlug,
      pi: data.pi,
      role: data.role,
      contactEmail: data.contactEmail,
      externalUrl: data.externalUrl,
      shortDescription: data.shortDescription,
      description: data.description,
      whatWeDo: data.whatWeDo,
      howWeDoItExperimental: data.howWeDoItExperimental,
      howWeDoItComputational: data.howWeDoItComputational,
      labCulture: data.labCulture,
      researchFocus: data.researchFocus || [],
      keywords: data.keywords || [],
      heroImage: await importImage(data.heroImage),
      teamMembers,
      publications,
    })
    say(`  ${result} research-group: ${slug}`)
  }

  // --- 3. news --------------------------------------------------------------
  const newsDir = path.join(CONTENT, 'news')
  if (fs.existsSync(newsDir)) {
    for (const file of fs.readdirSync(newsDir).filter((f) => f.endsWith('.md'))) {
      const slug = file.replace(/\.md$/, '')
      const { data, content } = matter(fs.readFileSync(path.join(newsDir, file), 'utf8'))
      const result = await upsert('news', slug, {
        slug,
        title: data.title,
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        tag: data.tag,
        description: data.description,
        body: content?.trim() || undefined,
        featured: Boolean(data.featured),
        image: await importImage(data.image),
      })
      say(`  ${result} news: ${slug}`)
    }
  }

  say('Seed complete.')
  return log
}
