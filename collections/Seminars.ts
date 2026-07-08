import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

const revalidateSeminars = () => {
  try {
    revalidatePath('/seminars')
    revalidatePath('/')
  } catch {
    // not running inside a request — safe to ignore (e.g. during seeding)
  }
}

export const Seminars: CollectionConfig = {
  slug: 'seminars',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'speaker', 'date'],
  },
  hooks: {
    afterChange: [() => revalidateSeminars()],
    afterDelete: [() => revalidateSeminars()],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'speaker', type: 'text', required: true },
    { name: 'affiliation', type: 'text' },
    {
      name: 'description',
      type: 'textarea',
      admin: { description: 'Optional abstract or details.' },
    },
    {
      name: 'link',
      type: 'text',
      admin: { description: 'Optional link (registration, more info).' },
    },
    // --- sidebar meta ---
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayAndTime' },
        description: 'Date and time of the seminar.',
      },
    },
    { name: 'location', type: 'text', admin: { position: 'sidebar' } },
    {
      name: 'slug',
      type: 'text',
      index: true,
      admin: { position: 'sidebar', description: 'URL segment (optional).' },
    },
  ],
}
