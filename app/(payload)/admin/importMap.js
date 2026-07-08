import { CollectionCards as CollectionCards_f9c02e79a4aed9a3924487c0cd4cafb1 } from '@payloadcms/next/rsc'
// Manually added: Payload's importMap generator omits this, but the Vercel Blob
// storage plugin needs it at runtime (prod), else /admin renders blank.
// Do NOT let `payload generate:importmap` / the dev server strip this line.
import { VercelBlobClientUploadHandler as VercelBlobClientUploadHandler_16f4bf74e2c2e9f4 } from '@payloadcms/storage-vercel-blob/client'

/** @type import('payload').ImportMap */
export const importMap = {
  "@payloadcms/next/rsc#CollectionCards": CollectionCards_f9c02e79a4aed9a3924487c0cd4cafb1,
  "@payloadcms/storage-vercel-blob/client#VercelBlobClientUploadHandler": VercelBlobClientUploadHandler_16f4bf74e2c2e9f4,
}
