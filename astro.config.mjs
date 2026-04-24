// @ts-check
import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
// Tailwind v4 uses PostCSS directly, no @astrojs/tailwind needed
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import critters from 'astro-critters'
import compress from '@playform/compress'
import { legacyRedirects } from './src/data/redirects'

const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://www.pladurmenorca.com'

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  redirects: legacyRedirects,
  security: {
    checkOrigin: false,
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false, // / → español · /en/ → inglés
    },
  },
  integrations: [
    preact({ compat: true }),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Hoja de estilo XSL para que el sitemap se vea legible en el navegador
      // (no afecta a crawlers — siguen leyendo el XML plano).
      xslURL: '/sitemap.xsl',
      filter: (page) => !page.includes('/api/'),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-GB',
        },
      },
      serialize: (item) => {
        /** @type {Record<string, number>} */
        const priorities = {
          'https://www.pladurmenorca.com/': 1.0,
          'https://www.pladurmenorca.com/instalacion-pladur-menorca': 0.9,
          'https://www.pladurmenorca.com/presupuesto-pladur': 0.9,
          'https://www.pladurmenorca.com/precios-pladur-menorca': 0.9,
          'https://www.pladurmenorca.com/pladur-mao': 0.85,
          'https://www.pladurmenorca.com/pladur-ciutadella': 0.85,
          'https://www.pladurmenorca.com/falsos-techos-pladur-menorca': 0.85,
          'https://www.pladurmenorca.com/aislamiento-acustico-menorca': 0.85,
          'https://www.pladurmenorca.com/aislamiento-termico-menorca': 0.85,
          'https://www.pladurmenorca.com/tabiques-pladur-menorca': 0.85,
          'https://www.pladurmenorca.com/reformas-interiores-pladur-menorca': 0.85,
          'https://www.pladurmenorca.com/pladur-ignifugo-menorca': 0.85,
          'https://www.pladurmenorca.com/pladur-hidrofugo-menorca': 0.85,
          'https://www.pladurmenorca.com/pladur-hoteles-menorca': 0.85,
          'https://www.pladurmenorca.com/pladur-apartamentos-turisticos-menorca': 0.8,
          'https://www.pladurmenorca.com/pladur-obra-nueva-menorca': 0.8,
          'https://www.pladurmenorca.com/escayola-menorca': 0.8,
          'https://www.pladurmenorca.com/pladur-alaior': 0.8,
          'https://www.pladurmenorca.com/pladur-es-mercadal': 0.8,
          'https://www.pladurmenorca.com/pladur-ferreries': 0.8,
          'https://www.pladurmenorca.com/pladur-sant-lluis': 0.8,
          'https://www.pladurmenorca.com/pladur-es-migjorn-gran': 0.8,
          'https://www.pladurmenorca.com/pladur-es-castell': 0.8,
          'https://www.pladurmenorca.com/contacto': 0.8,
          'https://www.pladurmenorca.com/proyectos': 0.7,
          'https://www.pladurmenorca.com/blog': 0.7,
          'https://www.pladurmenorca.com/pladur-en-menorca': 0.75,
          'https://www.pladurmenorca.com/sobre-nosotros': 0.6,
          'https://www.pladurmenorca.com/en': 0.6,
          'https://www.pladurmenorca.com/en/drywall-installation': 0.6,
          'https://www.pladurmenorca.com/en/false-ceilings': 0.6,
          'https://www.pladurmenorca.com/aviso-legal': 0.3,
          'https://www.pladurmenorca.com/politica-de-privacidad': 0.3,
          'https://www.pladurmenorca.com/politica-cookies': 0.3,
        }
        const url = item.url.replace(/\/$/, '')
        item.priority = priorities[item.url] ?? priorities[url] ?? 0.7
        return item
      },
    }),
    critters({
      // pruneSource: al inlinear CSS crítico, lo elimina del stylesheet
      // externo → evita que el navegador re-parse las mismas reglas dos
      // veces y reduce el peso total de CSS procesado en el thread principal.
      pruneSource: true,
      // preload 'swap' (default) + fonts para que el CSS no crítico cargue
      // con prioridad baja sin bloquear el primer paint.
      preload: 'swap',
      // Mantener keyframes y fonts inline para evitar FOUT/FOIT.
      keyframes: 'critical',
      // Comprimir selectores repetidos.
      mergeStylesheets: true,
      // Inlinear solo fuentes usadas por encima del fold.
      fonts: true,
    }),
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
