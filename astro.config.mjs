// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
// Tailwind v4 uses PostCSS directly, no @astrojs/tailwind needed
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import critters from 'astro-critters'
import compress from '@playform/compress'
import { legacyRedirects } from './src/data/redirects'

export default defineConfig({
  site: 'https://www.pladurmallorca.com',
  trailingSlash: 'never',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  redirects: legacyRedirects,
  security: {
    checkOrigin: false,
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/api/'),
      serialize: (item) => {
        /** @type {Record<string, number>} */
        const priorities = {
          'https://www.pladurmallorca.com/': 1.0,
          'https://www.pladurmallorca.com/instalacion-pladur-mallorca': 0.9,
          'https://www.pladurmallorca.com/presupuesto-pladur': 0.9,
          'https://www.pladurmallorca.com/precios-pladur-mallorca': 0.9,
          'https://www.pladurmallorca.com/pladur-palma': 0.85,
          'https://www.pladurmallorca.com/pladur-calvia': 0.85,
          'https://www.pladurmallorca.com/falsos-techos-pladur-mallorca': 0.85,
          'https://www.pladurmallorca.com/aislamiento-acustico-mallorca': 0.85,
          'https://www.pladurmallorca.com/aislamiento-termico-mallorca': 0.85,
          'https://www.pladurmallorca.com/tabiques-pladur-mallorca': 0.85,
          'https://www.pladurmallorca.com/reformas-interiores-pladur-mallorca': 0.85,
          'https://www.pladurmallorca.com/pladur-apartamentos-turisticos-mallorca': 0.8,
          'https://www.pladurmallorca.com/pladur-hoteles-mallorca': 0.85,
          'https://www.pladurmallorca.com/pladur-ignifugo-mallorca': 0.85,
          'https://www.pladurmallorca.com/pladur-hidrofugo-mallorca': 0.85,
          'https://www.pladurmallorca.com/pladur-inca': 0.8,
          'https://www.pladurmallorca.com/pladur-manacor': 0.8,
          'https://www.pladurmallorca.com/pladur-alcudia': 0.8,
          'https://www.pladurmallorca.com/pladur-llucmajor': 0.8,
          'https://www.pladurmallorca.com/pladur-marratxi': 0.8,
          'https://www.pladurmallorca.com/pladur-pollenca': 0.8,
          'https://www.pladurmallorca.com/pladur-soller': 0.8,
          'https://www.pladurmallorca.com/pladur-andratx': 0.8,
          'https://www.pladurmallorca.com/pladur-en-mallorca': 0.8,
          'https://www.pladurmallorca.com/contacto': 0.8,
          'https://www.pladurmallorca.com/proyectos': 0.7,
          'https://www.pladurmallorca.com/blog': 0.7,
          'https://www.pladurmallorca.com/sobre-nosotros': 0.6,
          'https://www.pladurmallorca.com/aviso-legal': 0.3,
          'https://www.pladurmallorca.com/politica-de-privacidad': 0.3,
        }
        const url = item.url.replace(/\/$/, '')
        item.priority = priorities[item.url] ?? priorities[url] ?? 0.7
        return item
      },
    }),
    critters(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: false,
    }),
  ],
  vite: {},
  server: {
    port: 3000,
  },
})
