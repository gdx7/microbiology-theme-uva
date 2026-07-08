import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

const revalidateVacancies = () => {
  try {
    revalidatePath('/vacancies')
    revalidatePath('/')
  } catch {
    // not running inside a request — safe to ignore (e.g. during seeding)
  }
}

export const Vacancies: CollectionConfig = {
  slug: 'vacancies',
  labels: { singular: 'Vacancy', plural: 'Vacancies' },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'positionType', 'group', 'deadline'],
  },
  hooks: {
    afterChange: [() => revalidateVacancies()],
    afterDelete: [() => revalidateVacancies()],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "PhD position in bacterial RNA biology".' },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: { description: 'What the position involves, who you are looking for, etc.' },
    },
    {
      name: 'applyLink',
      type: 'text',
      admin: { description: 'Link to the application page, or leave blank and use the contact email.' },
    },
    {
      name: 'contactEmail',
      type: 'text',
    },
    // --- sidebar meta ---
    {
      name: 'positionType',
      type: 'select',
      admin: { position: 'sidebar' },
      defaultValue: 'phd',
      options: [
        { label: 'PhD', value: 'phd' },
        { label: 'Postdoc', value: 'postdoc' },
        { label: 'Technician / Analyst', value: 'technician' },
        { label: 'Master / Bachelor project', value: 'student' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'group',
      type: 'text',
      admin: { position: 'sidebar', description: 'Your lab / research group.' },
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Amsterdam',
      admin: { position: 'sidebar' },
    },
    {
      name: 'deadline',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayOnly' },
        description: 'Application deadline (optional).',
      },
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      admin: { position: 'sidebar', description: 'URL segment (optional).' },
    },
  ],
}
