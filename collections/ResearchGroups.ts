import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

// Keep in sync with data/researchAreas.ts
const AREA_OPTIONS = [
  { label: 'Molecular Biology and Microbial Food Safety (MBMFS)', value: 'molecular-biology-microbial-food-safety' },
  { label: 'Bacterial Cell Biology and Physiology (BCBP)', value: 'bacterial-cell-biology' },
  { label: 'Microbiome Engineering (ME)', value: 'microbiome-engineering' },
  { label: 'Endowed Chairs', value: 'cross-theme-expertise' },
  { label: 'Mass Spectrometry Core Facility', value: 'core-facilities' },
]

// Revalidating outside a Next request context (e.g. the seed script) throws,
// so it is always guarded.
const revalidateGroup = (slug?: string) => {
  try {
    revalidatePath('/research-groups')
    if (slug) revalidatePath(`/research-groups/${slug}`)
    revalidatePath('/')
  } catch {
    // not running inside a request — safe to ignore (e.g. during seeding)
  }
}

export const ResearchGroups: CollectionConfig = {
  slug: 'research-groups',
  labels: { singular: 'Research Group', plural: 'Research Groups' },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'pi', 'areaSlug'],
  },
  hooks: {
    afterChange: [({ doc }) => revalidateGroup(doc?.slug)],
    afterDelete: [({ doc }) => revalidateGroup(doc?.slug)],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: { description: 'Display name of the group, e.g. "DNA & RNA Interaction Lab".' },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      admin: { description: 'One–two sentence summary shown on the research-groups overview card.' },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: { description: 'Longer intro shown at the top of the group page.' },
    },
    {
      name: 'whatWeDo',
      type: 'textarea',
      admin: { description: 'Blank lines create paragraph breaks on the page.' },
    },
    {
      name: 'howWeDoItExperimental',
      label: 'How we do it — experimental',
      type: 'textarea',
    },
    {
      name: 'howWeDoItComputational',
      label: 'How we do it — computational',
      type: 'textarea',
    },
    {
      name: 'labCulture',
      type: 'textarea',
    },
    {
      name: 'researchFocus',
      type: 'text',
      hasMany: true,
      admin: { description: 'Key focus areas (add one per entry).' },
    },
    {
      name: 'keywords',
      type: 'text',
      hasMany: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Optional hero/banner image.' },
    },
    {
      name: 'teamMembers',
      type: 'array',
      labels: { singular: 'Team member', plural: 'Team members' },
      admin: { initCollapsed: true },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'email', type: 'text' },
        { name: 'photo', type: 'upload', relationTo: 'media' },
        { name: 'bio', type: 'textarea' },
      ],
    },
    {
      name: 'publications',
      type: 'array',
      labels: { singular: 'Publication', plural: 'Publications' },
      admin: { initCollapsed: true },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'authors', type: 'text' },
        { name: 'journal', type: 'text' },
        { name: 'year', type: 'number' },
        { name: 'link', type: 'text' },
      ],
    },
    // --- sidebar meta ---
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'URL segment: /research-groups/<slug>. Avoid changing once published.',
      },
    },
    {
      name: 'areaSlug',
      label: 'Research area',
      type: 'select',
      required: true,
      options: AREA_OPTIONS,
      admin: { position: 'sidebar' },
    },
    { name: 'code', type: 'text', admin: { position: 'sidebar' } },
    { name: 'pi', label: 'Principal investigator', type: 'text', admin: { position: 'sidebar' } },
    { name: 'role', type: 'text', admin: { position: 'sidebar' } },
    { name: 'contactEmail', type: 'text', admin: { position: 'sidebar' } },
    { name: 'externalUrl', label: 'Lab website URL', type: 'text', admin: { position: 'sidebar' } },
  ],
}
