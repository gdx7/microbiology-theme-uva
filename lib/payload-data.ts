import { getPayload } from 'payload'
import config from '@payload-config'
import type { ResearchGroupData } from './markdown'

// Shared data-access layer for the public site. Reads from Payload via the
// Local API (no HTTP), returning the same shapes the page components already
// expect from the old markdown loader — so page markup is unchanged.

export interface NewsItemData {
  slug: string
  title: string
  date: string
  tag?: string
  description?: string
  body?: string
  link?: string
  image?: string
  featured?: boolean
}

function mediaUrl(value: unknown): string | undefined {
  if (!value) return undefined
  if (typeof value === 'string') return value
  if (typeof value === 'object' && value !== null && 'url' in value) {
    return (value as { url?: string }).url || undefined
  }
  return undefined
}

async function client() {
  return getPayload({ config })
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function mapGroup(doc: any): ResearchGroupData {
  return {
    slug: doc.slug,
    name: doc.name,
    code: doc.code ?? undefined,
    areaSlug: doc.areaSlug,
    pi: doc.pi ?? undefined,
    role: doc.role ?? undefined,
    contactEmail: doc.contactEmail ?? undefined,
    externalUrl: doc.externalUrl ?? undefined,
    shortDescription: doc.shortDescription ?? undefined,
    description: doc.description ?? undefined,
    whatWeDo: doc.whatWeDo ?? undefined,
    howWeDoItExperimental: doc.howWeDoItExperimental ?? undefined,
    howWeDoItComputational: doc.howWeDoItComputational ?? undefined,
    labCulture: doc.labCulture ?? undefined,
    researchFocus: doc.researchFocus ?? [],
    keywords: doc.keywords ?? [],
    teamMembers: (doc.teamMembers ?? []).map((m: any) => ({
      name: m.name,
      role: m.role,
      email: m.email ?? undefined,
      bio: m.bio ?? undefined,
      photo: mediaUrl(m.photo),
    })),
    publications: (doc.publications ?? []).map((p: any) => ({
      title: p.title,
      authors: p.authors,
      journal: p.journal,
      year: p.year,
      link: p.link ?? undefined,
    })),
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export async function getAllResearchGroups(): Promise<ResearchGroupData[]> {
  const payload = await client()
  const res = await payload.find({
    collection: 'research-groups',
    depth: 1,
    limit: 100,
    sort: 'name',
  })
  return res.docs.map(mapGroup)
}

export async function getResearchGroupBySlug(slug: string): Promise<ResearchGroupData | null> {
  const payload = await client()
  const res = await payload.find({
    collection: 'research-groups',
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  })
  return res.docs[0] ? mapGroup(res.docs[0]) : null
}

export async function getAllNews(): Promise<NewsItemData[]> {
  const payload = await client()
  const res = await payload.find({
    collection: 'news',
    depth: 1,
    limit: 100,
    sort: '-date',
  })
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  return res.docs.map((d: any) => ({
    slug: d.slug,
    title: d.title,
    date: d.date,
    tag: d.tag ?? undefined,
    description: d.description ?? undefined,
    body: d.body ?? undefined,
    link: d.link ?? undefined,
    image: mediaUrl(d.image),
    featured: Boolean(d.featured),
  }))
}
