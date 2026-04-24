import type { APIRoute } from 'astro'
export const prerender = false

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      status: 'ok',
      service: 'Pladur Menorca',
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    }
  )
}
