# Pladur Mallorca — pladurmallorca.com

Web corporativa de **Pladur Mallorca** (PLAQUISTAS Y ACABADOS SL), empresa especializada en instalación de sistemas de yeso laminado en Mallorca desde 2004.

## Stack

| Tecnología | Uso |
|---|---|
| **Astro v6** | Framework SSG/SSR |
| **React 19** | Componentes interactivos (islands) |
| **Tailwind CSS v4** | Estilos |
| **Docker** | Contenedor de producción (nginx + Node.js) |
| **Dokploy + Traefik** | Orquestación, SSL automático (Let's Encrypt) |
| **npm** | Package manager |

## Arquitectura de producción

```
Internet → Traefik (SSL) → Nginx (:80) → archivos estáticos (disco)
                                        → /api/* → Node.js (:4321)
                                        → fallback → Node.js (:4321)
```

Dentro del contenedor Docker corren **dos procesos** gestionados por `supervisord`:

1. **Nginx** — sirve archivos estáticos del build, gzip, cache headers, security headers, rate limiting
2. **Node.js** (Astro SSR) — API de contacto (emails), IndexNow, redirects legacy

## Estructura del proyecto

```
src/
├── components/
│   ├── forms/          # FormPresupuesto, FormContactoRapido
│   ├── layout/         # Header, Footer, WhatsAppButton, CookieBanner
│   ├── sections/       # HeroHome, ServiciosGrid, Testimonios, FaqAccordion...
│   ├── seo/            # SchemaLocalBusiness, SchemaBreadcrumb, SchemaFAQ
│   ├── templates/      # PaginaGeografica (plantilla para páginas de municipio)
│   └── ui/             # GoogleRatingBadge, TestimonioCard, Container
├── content/
│   └── blog/           # 18 artículos MDX
├── data/
│   ├── faqs/           # FAQs por categoría (28 archivos)
│   ├── redirects.ts    # 112 redirects legacy WordPress
│   ├── site.ts         # Configuración global (contacto, rating, redes)
│   ├── servicios.ts    # Datos de servicios
│   ├── testimonios.ts  # Reseñas de Google
│   ├── municipios.ts   # Datos geográficos
│   └── navigation.tsx  # Menú (servicios, 10 zonas, links)
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── blog.ts         # Parser de MDX con frontmatter
│   ├── schema.ts       # Generador de JSON-LD
│   └── email-templates.ts
├── pages/
│   ├── api/
│   │   ├── contacto.ts              # POST — envío emails (Gmail OAuth2)
│   │   └── indexnow.ts              # POST — notificación a buscadores
│   ├── index.astro                  # Home
│   ├── instalacion-pladur-mallorca.astro
│   ├── ... (32 páginas)
│   └── 404.astro
└── styles/
    └── global.css       # Tailwind v4 + tokens custom
```

## Archivos Docker

| Archivo | Función |
|---|---|
| `Dockerfile` | Multi-stage build: node:20-alpine (build) + nginx + supervisor (production) |
| `nginx.conf` | Reverse proxy a Node, static files, gzip, cache, security headers, rate limiting |
| `supervisord.conf` | Gestiona nginx + Node.js con autorestart |
| `.dockerignore` | Excluye node_modules, dist, .git, .env |

## Variables de entorno

Configurar en Dokploy (Environment Variables), **NO** en el Dockerfile:

| Variable | Uso |
|---|---|
| `GOOGLE_CLIENT_ID` | Gmail OAuth2 — envío de emails |
| `GOOGLE_CLIENT_SECRET` | Gmail OAuth2 |
| `GOOGLE_REFRESH_TOKEN` | Gmail OAuth2 |
| `GMAIL_SENDER_EMAIL` | Dirección remitente (info@plaquistas.com) |
| `CONTACT_EMAIL` | Dirección destino formularios |
| `PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 |

## Comandos

```sh
npm install          # Instalar dependencias
npm run dev          # Servidor dev en localhost:3000
npm run build        # Build de producción en ./dist/
npm run preview      # Preview del build local
```

## Deploy

Docker en VPS (Dokploy). El contenedor expone el puerto 80. Traefik gestiona SSL y enruta el tráfico.

1. Push a `main` → Dokploy detecta el cambio y hace auto-deploy
2. Dokploy ejecuta el `Dockerfile` (build + producción)
3. Traefik asigna SSL (Let's Encrypt) y enruta `pladurmallorca.com` al contenedor

## Páginas (32)

- **Home** — Hero con video, servicios, testimonios, FAQ, CTA
- **11 servicios** — Instalación, falsos techos, tabiques, aislamiento acústico/térmico, reformas, apartamentos turísticos, hoteles, ignífugo, hidrófugo, precios, presupuesto
- **10 municipios** — Palma, Calvià, Inca, Manacor, Alcúdia, Llucmajor, Marratxí, Pollença, Sóller, Andratx (+ hub)
- **18 blog posts** — MDX con frontmatter, artículos sobre precios, normativa, comparativas
- **Otras** — Contacto, proyectos, sobre nosotros, aviso legal, privacidad, 404

## SEO & GEO

- **Structured Data**: SchemaLocalBusiness, SchemaBreadcrumb, SchemaFAQ en todas las páginas
- **Sitemap**: Generado automáticamente con prioridades custom por tipo de página
- **Canonical tags**: Con www, hreflang es + x-default
- **GEO**: Archivos llms.txt y llms-full.txt
- **Redirects**: 112 redirecciones 301 de URLs legacy WordPress en `src/data/redirects.ts`

## Archivos de configuración

| Archivo | Función |
|---|---|
| `astro.config.mjs` | Astro + Node adapter + sitemap + partytown + critters + compress + redirects |
| `public/robots.txt` | Allow all, disallow /api/, sitemap URL |
| `public/_redirects` | Backup de redirects (formato Cloudflare, no activo) |
