import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ResearchGroups } from './collections/ResearchGroups'
import { News } from './collections/News'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Production (Vercel) sets DATABASE_URI to a Neon serverless Postgres URL.
// Locally, with no DATABASE_URI, we fall back to a zero-setup SQLite file so
// the admin can be run and verified without provisioning anything.
const db = process.env.DATABASE_URI
  ? postgresAdapter({
      pool: { connectionString: process.env.DATABASE_URI },
      // Auto-sync the schema on connect (like SQLite does locally), so the
      // first production deploy creates the tables with no migration step.
      // Trade-off: for future schema changes, consider Payload migrations.
      push: true,
    })
  : sqliteAdapter({
      client: {
        url: process.env.SQLITE_URL || `file:${path.resolve(dirname, 'payload-dev.db')}`,
      },
    })

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Microbiology CMS',
    },
  },
  collections: [Users, Media, ResearchGroups, News],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  db,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp: undefined,
  plugins: [
    // Only active in production, where the Vercel filesystem is ephemeral.
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            enabled: true,
            collections: { media: true },
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
})
