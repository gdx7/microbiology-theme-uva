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

export interface SeminarData {
  title: string
  speaker: string
  affiliation?: string
  date: string
  location?: string
  description?: string
  link?: string
}

export interface PublicationData {
  title: string
  authors?: string
  journal?: string
  year?: number
  link?: string
  group?: string
}

export interface VacancyData {
  title: string
  description: string
  positionType?: string
  group?: string
  location?: string
  deadline?: string
  applyLink?: string
  contactEmail?: string
}

export interface TechniqueData {
  name: string
  description: string
  category?: string
  group?: string
  link?: string
}

export const POSITION_TYPE_LABELS: Record<string, string> = {
  phd: 'PhD',
  postdoc: 'Postdoc',
  technician: 'Technician / Analyst',
  student: 'Master / Bachelor project',
  other: 'Other',
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

export async function getAllSeminars(): Promise<SeminarData[]> {
  const payload = await client()
  const res = await payload.find({
    collection: 'seminars',
    depth: 0,
    limit: 200,
    sort: 'date',
  })
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  return res.docs.map((s: any) => ({
    title: s.title,
    speaker: s.speaker,
    affiliation: s.affiliation ?? undefined,
    date: s.date,
    location: s.location ?? undefined,
    description: s.description ?? undefined,
    link: s.link ?? undefined,
  }))
}

export async function getAllVacancies(): Promise<VacancyData[]> {
  const payload = await client()
  const res = await payload.find({
    collection: 'vacancies',
    depth: 0,
    limit: 200,
    sort: '-createdAt',
  })
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  return res.docs.map((v: any) => ({
    title: v.title,
    description: v.description,
    positionType: v.positionType ?? undefined,
    group: v.group ?? undefined,
    location: v.location ?? undefined,
    deadline: v.deadline ?? undefined,
    applyLink: v.applyLink ?? undefined,
    contactEmail: v.contactEmail ?? undefined,
  }))
}

export async function getAllTechniques(): Promise<TechniqueData[]> {
  const payload = await client()
  const res = await payload.find({
    collection: 'techniques',
    depth: 0,
    limit: 200,
    sort: 'name',
  })
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  return res.docs.map((t: any) => ({
    name: t.name,
    description: t.description,
    category: t.category ?? undefined,
    group: t.group ?? undefined,
    link: t.link ?? undefined,
  }))
}

// Aggregate every research group's publications into one list (newest first).
export async function getAllPublications(): Promise<PublicationData[]> {
  const groups = await getAllResearchGroups()
  const pubs: PublicationData[] = []
  for (const g of groups) {
    for (const p of g.publications ?? []) {
      pubs.push({
        title: p.title,
        authors: p.authors,
        journal: p.journal,
        year: p.year,
        link: p.link,
        group: g.name,
      })
    }
  }
  return pubs.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
}
