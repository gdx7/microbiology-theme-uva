import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

const revalidatePeople = () => {
  try {
    revalidatePath('/people')
  } catch {
    // not running inside a request — safe to ignore (e.g. during seeding)
  }
}

// Standalone people (general/theme staff who don't belong to a single research
// group). Group members are auto-populated from each ResearchGroup's team; use
// this collection only for people not covered there.
export const People: CollectionConfig = {
  slug: 'people',
  labels: { singular: 'Person', plural: 'People (standalone)' },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'category'],
    description:
      'For people who are NOT listed on a research group page (e.g. general theme staff). Group members appear on /people automatically from their group.',
  },
  hooks: {
    afterChange: [() => revalidatePeople()],
    afterDelete: [() => revalidatePeople()],
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', admin: { description: 'e.g. "Facility manager".' } },
    { name: 'bio', type: 'textarea' },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    // --- sidebar meta ---
    {
      name: 'category',
      type: 'select',
      required: true,
      defaultValue: 'staff',
      admin: { position: 'sidebar', description: 'Which section of the People page this person appears in.' },
      options: [
        { label: 'Group leader', value: 'leaders' },
        { label: 'Postdoc', value: 'postdocs' },
        { label: 'PhD student', value: 'phd' },
        { label: 'Staff', value: 'staff' },
      ],
    },
    { name: 'email', type: 'text', admin: { position: 'sidebar' } },
    { name: 'group', type: 'text', admin: { position: 'sidebar', description: 'Affiliation (optional).' } },
    { name: 'order', type: 'number', admin: { position: 'sidebar', description: 'Lower numbers sort first (optional).' } },
  ],
}
