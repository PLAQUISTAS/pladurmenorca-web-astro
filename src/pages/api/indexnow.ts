import type { APIRoute } from 'astro'
export const prerender = false
import { siteConfig } from '@/data/site'

export const POST: APIRoute = async ({ request }) => {
  try {
    const { urls } = await request.json() as { urls: string[] }

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(JSON.stringify({ error: 'Se requiere un array de URLs' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const host = new URL(siteConfig.url).host

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host,
        key: siteConfig.indexNowKey,
        keyLocation: `${siteConfig.url}/${siteConfig.indexNowKey}.txt`,
        urlList: urls,
      }),
    })

    return new Response(JSON.stringify({
      status: response.status,
      message: response.status === 200 || response.status === 202 ? 'URLs enviadas correctamente' : 'Error al enviar URLs',
    }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
