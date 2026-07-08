import type { CollectionConfig } from 'payload'

// Uploaded images (team photos, hero images, news images).
// Locally these land in public/media; in production the Vercel Blob
// storage adapter (see payload.config.ts) takes over transparently.
export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'public/media',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: { description: 'Describe the image for screen readers / accessibility.' },
    },
  ],
}
