// TEMPORARY dev-only migration endpoint. Delete after the one-time seed.
// Guarded by PAYLOAD_SECRET and blocked in production.
import { getPayload } from 'payload'
import config from '@payload-config'
import { runSeed } from '@/lib/seed'

export const dynamic = 'force-dynamic'
export const maxDuration = 300

export async function GET(req: Request) {
  // In production this stays off unless ALLOW_SEED=true is explicitly set
  // (for the one-time seed of the Neon database), and always requires the token.
  if (process.env.NODE_ENV === 'production' && process.env.ALLOW_SEED !== 'true') {
    return new Response('disabled in production', { status: 403 })
  }
  const token = new URL(req.url).searchParams.get('token')
  if (!token || token !== process.env.PAYLOAD_SECRET) {
    return new Response('unauthorized', { status: 401 })
  }
  const log: string[] = []
  try {
    const payload = await getPayload({ config })

    // In production the Postgres adapter disables schema "push" (it expects
    // migrations), so a fresh Neon DB has no tables. Create the schema at
    // runtime once, before seeding. On an empty DB this runs non-interactively
    // (drizzle-kit reports no data-loss warnings), and it's idempotent on reruns.
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const db = payload.db as any
    if (typeof db?.requireDrizzleKit === 'function') {
      const { pushDevSchema } = await import('@payloadcms/drizzle')
      await pushDevSchema(db)
      log.push('schema push: ok')
    } else {
      log.push('schema push: skipped (no drizzle adapter)')
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */

    log.push(...(await runSeed(payload)))
    return Response.json({ ok: true, log })
  } catch (err) {
    return Response.json({ ok: false, error: String(err), log }, { status: 500 })
  }
}
