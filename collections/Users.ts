import type { CollectionConfig } from 'payload'

// PIs + admins log in here (email / password). No GitHub accounts.
export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      admin: { description: 'Full name shown in the admin UI.' },
    },
  ],
}
