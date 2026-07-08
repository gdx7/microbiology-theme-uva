import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

const revalidateTechniques = () => {
  try {
    revalidatePath('/techniques')
    revalidatePath('/')
  } catch {
    // not running inside a request — safe to ignore (e.g. during seeding)
  }
}

export const Techniques: CollectionConfig = {
  slug: 'techniques',
  labels: { singular: 'Technique', plural: 'Techniques' },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'group'],
  },
  hooks: {
    afterChange: [() => revalidateTechniques()],
    afterDelete: [() => revalidateTechniques()],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "Ribo-seq".' },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: { description: 'What the technique/method is and what it enables.' },
    },
    {
      name: 'link',
      type: 'text',
      admin: { description: 'Optional link (paper, protocol, lab page).' },
    },
    // --- sidebar meta ---
    {
      name: 'category',
      type: 'text',
      admin: { position: 'sidebar', description: 'e.g. "Sequencing", "Imaging", "Mass spectrometry".' },
    },
    {
      name: 'group',
      type: 'text',
      admin: { position: 'sidebar', description: 'Lab / group offering this technique.' },
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      admin: { position: 'sidebar', description: 'URL segment (optional).' },
    },
  ],
}
