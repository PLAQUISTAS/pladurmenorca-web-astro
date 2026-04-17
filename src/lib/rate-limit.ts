interface RateLimitEntry {
  count: number
  resetAt: number
}

const store = new Map<string, RateLimitEntry>()

const MAX_REQUESTS = 5
const WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const MAX_ENTRIES = 10000

// Cleanup stale entries every 5 minutes
let lastCleanup = Date.now()
function cleanup() {
  const now = Date.now()
  if (now - lastCleanup < 5 * 60 * 1000) return
  lastCleanup = now
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key)
  }
  if (store.size > MAX_ENTRIES) store.clear()
}

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  cleanup()

  const now = Date.now()
  const entry = store.get(ip)

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, remaining: MAX_REQUESTS - 1 }
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 }
  }

  entry.count++
  return { allowed: true, remaining: MAX_REQUESTS - entry.count }
}
