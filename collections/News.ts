import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

const revalidateNews = () => {
  try {
    revalidatePath('/news')
    revalidatePath('/')
  } catch {
    // not running inside a request — safe to ignore (e.g. during seeding)
  }
}

export const News: CollectionConfig = {
  slug: 'news',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'tag', 'featured'],
  },
  hooks: {
    afterChange: [() => revalidateNews()],
    afterDelete: [() => revalidateNews()],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'description',
      type: 'textarea',
      admin: { description: 'Short summary shown in news listings.' },
    },
    {
      name: 'body',
      type: 'textarea',
      admin: { description: 'Optional longer text for the full news item.' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'link',
      type: 'text',
      admin: { description: 'Optional external URL this item links to.' },
    },
    // --- sidebar meta ---
    {
      name: 'date',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } },
    },
    { name: 'tag', type: 'text', admin: { position: 'sidebar' } },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Highlight this item at the top of the News page.' },
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      admin: { position: 'sidebar', description: 'URL segment (auto from title if left blank).' },
    },
  ],
}
