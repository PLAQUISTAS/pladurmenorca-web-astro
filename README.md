# Pladur Menorca — pladurmenorca.com

Web corporativa de **Pladur Menorca** (PLAQUISTAS Y ACABADOS SL), especialistas en sistemas de yeso laminado en Menorca. Respaldada por la SL matriz de Mallorca ([pladurmallorca.com](https://www.pladurmallorca.com) — fundada en 2004, +6.000 obras en Baleares).

## Stack

| Tecnología | Uso |
|---|---|
| **Astro v6** | Framework SSR |
| **React 19** | Componentes interactivos (islands) |
| **Tailwind CSS v4** | Estilos |
| **Docker** | Contenedor de producción (nginx + Node.js) |
| **Dokploy + Traefik** | Orquestación, SSL automático (Let's Encrypt) |
| **Bun / npm** | Package manager |

## Arquitectura de producción

```
Internet → Traefik (SSL) → Nginx (:80) → archivos estáticos (disco)
                                        → /api/* → Node.js (:4321)
                                        → fallback → Node.js (:4321)
```

Dentro del contenedor Docker corren **dos procesos** gestionados por `supervisord`:

1. **Nginx** — sirve archivos estáticos del build, gzip, cache headers (1 año inmutable para `*.webp/js/css`), security headers, rate limiting
2. **Node.js** (Astro SSR) — API de contacto (Gmail OAuth2), IndexNow, MCP endpoint

## Estructura del proyecto

```
src/
├── components/
│   ├── forms/          # FormPresupuesto, FormContactoRapido
│   ├── gallery/        # GalleryMasonry (lightbox + filtros)
│   ├── layout/         # Header, Footer, WhatsAppButton, CookieBanner, Breadcrumbs
│   ├── sections/       # HeroHome, ServiciosGrid, Testimonios, FaqAccordion, NuestrosDatos...
│   ├── seo/            # Head, SchemaLocalBusiness, SchemaBreadcrumb, SchemaFAQ
│   ├── templates/      # PaginaGeografica (plantilla de municipio)
│   └── ui/             # GoogleRatingBadge, TestimonioCard, Button, Container
├── content/
│   └── blog/           # 18 posts MDX (bilingüe: .mdx + .en.mdx)
├── data/
│   ├── faqs/           # FAQs por categoría + por municipio
│   ├── redirects.ts    # Placeholder (vacío — web nueva sin legacy)
│   ├── backlinks.ts    # Tracker de backlinks SEO (doc-as-code, no importado)
│   ├── site.ts         # Configuración global (contacto, rating, redes, GMB)
│   ├── servicios.ts    # Catálogo de servicios
│   ├── proyectos.ts    # 16 entradas de galería
│   ├── testimonios.ts  # Reseñas
│   ├── municipios.ts   # 8 municipios Menorca (Maó, Ciutadella, Alaior, Ferreries,
│   │                   #  Es Mercadal, Sant Lluís, Es Migjorn Gran, Es Castell)
│   └── navigation.tsx  # Menú (servicios, 8 zonas, links)
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── blog.ts
│   ├── schema.ts
│   ├── email-templates.ts
│   └── mcp-handlers.ts # Tools MCP (expone contactos/servicios a agentes)
├── pages/
│   ├── api/
│   │   ├── contacto.ts    # POST — envío emails (Gmail OAuth2 + reCAPTCHA v3)
│   │   ├── indexnow.ts    # POST — notificación a buscadores
│   │   ├── mcp.ts         # MCP server endpoint (JSON-RPC 2.0)
│   │   └── status.ts      # GET — healthcheck
│   ├── index.astro                       # Home ES
│   ├── instalacion-pladur-menorca.astro  # Landing servicio principal
│   ├── ... (31 páginas ES en total)
│   ├── en/                               # 27 páginas EN mirror (byte-identical con `Astro.currentLocale`)
│   └── 404.astro
└── styles/
    └── globals.css     # Tailwind v4 + tokens custom + `.prose-pladur`
```

## i18n

Sitio bilingüe **ES default + `/en/` prefijado**. Páginas con dos bloques de copy (ES y EN) en el mismo `.astro`, seleccionados vía `Astro.currentLocale`. 31 páginas ES + 27 páginas EN + 18 posts blog bilingües (`.mdx` + `.en.mdx`).

`hreflang`: `es-ES`, `en`, `x-default` configurados en [`Head.astro`](src/components/seo/Head.astro).

## Relación con la SL matriz (Mallorca)

Pladur Menorca es la expansión 2026 de **Plaquistas y Acabados SL** (2004, Mallorca). Esto se refleja transparentemente en:

- [`Footer.astro`](src/components/layout/Footer.astro) — bloque "Parte del grupo" con link a pladurmallorca.com (external, `rel="noopener"`)
- [`sobre-nosotros.astro`](src/pages/sobre-nosotros.astro) — link contextual a la web matriz en el primer párrafo de historia (ES+EN)
- [`data/testimonios.ts`](src/data/testimonios.ts) y [`data/proyectos.ts`](src/data/proyectos.ts) — entradas con flag `fromParentCompany: true` para trazabilidad
- Rating GMB en `null` hasta tener reseñas propias en Menorca (ver [`data/site.ts`](src/data/site.ts))

## Variables de entorno (Dokploy)

| Variable | Uso |
|---|---|
| `PUBLIC_SITE_URL` | URL canónica (default: https://www.pladurmenorca.com) |
| `GOOGLE_CLIENT_ID` | Gmail OAuth2 — envío de emails |
| `GOOGLE_CLIENT_SECRET` | Gmail OAuth2 |
| `GOOGLE_REFRESH_TOKEN` | Gmail OAuth2 |
| `GMAIL_SENDER_EMAIL` | Dirección remitente |
| `CONTACT_EMAIL` | Dirección destino formularios |
| `PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (GA4 Menorca) |
| `RECAPTCHA_SECRET` | reCAPTCHA v3 (server) |
| `PUBLIC_RECAPTCHA_SITE_KEY` | reCAPTCHA v3 (client) |
| `INDEXNOW_KEY` | Key IndexNow |

## Comandos

```sh
bun install          # Instalar dependencias
bun run dev          # Dev server en localhost:3000
bun run build        # Build de producción en ./dist/
bun run preview      # Preview del build local
bun run typecheck    # astro check (TS + templates)
```

El `build` además ejecuta `scripts/generate-markdown.mjs` (genera `.md` de cada página HTML para agentes vía content-negotiation) y `scripts/generate-agent-skills-index.mjs`.

## Deploy

Docker en VPS (Dokploy). El contenedor expone el puerto 80. Traefik gestiona SSL y enruta el tráfico. Ver `Dockerfile`, `nginx.conf` y `supervisord.conf`.

## SEO & GEO

- **Structured Data**: `HomeAndConstructionBusiness`, `BreadcrumbList`, `FAQPage`, `Service`, `HowTo`, `CollectionPage`, `Article`
- **Sitemap**: prioridades custom por URL (ver `astro.config.mjs`)
- **Canonical tags**: con `www`, `trailingSlash: 'never'`
- **Hreflang**: `es-ES`, `en`, `x-default`
- **Markdown-for-agents**: cada página tiene variante `.md` sirviéndose por content-negotiation (`Accept: text/markdown`) a agentes LLM
- **MCP server** en `/api/mcp` — expone catálogo de servicios, municipios y envío de contacto como JSON-RPC 2.0
- **LLMs.txt**: `/llms.txt` y `/llms-full.txt` con el mapa de contenido

## Cambios recientes

### Alineación de marca Menorca (abril 2026)

Limpieza exhaustiva de referencias residuales a Mallorca heredadas del fork:

- **Assets renombrados** en `public/images/proyectos/` — quitado sufijo `-pladur-mallorca.webp` → nombres neutros
- **26 refs 404 corregidas** en páginas que aún apuntaban a los nombres viejos: `/proyectos` (ES+EN), `/aislamiento-termico-menorca` (ES+EN), `/aislamiento-acustico-menorca` (ES+EN, incluyendo URL absoluta del JSON-LD), `/escayola-menorca` (ES+EN). Esto resolvió el síntoma "imágenes en blanco" que se veía en el sitio: el componente `GalleryMasonry.tsx` muestra fallback gris cuando `<img>` dispara `onError`, y los 404 estaban disparándolo sistemáticamente
- **Blog**: 10 posts reescritos de Mallorca-céntricos (Santa Catalina, Magaluf, Portals Nous…) a contexto Menorca (Maó, Ciutadella, Binibeca, Son Xoriguer…)
- **Galería `/proyectos`**: removido el subtítulo "Proyecto Menorca (SL matriz)" de los 16 items; se mantiene el flag `fromParentCompany: true` como data no-visible

### Enlaces a marca padre

- `Footer.astro` — sección "Parte del grupo" con link a pladurmallorca.com (external, `rel="noopener"`, `aria-label` explícito, icono SVG)
- `sobre-nosotros.astro` (ES+EN) — "Mallorca" en el primer párrafo de historia enlaza a pladurmallorca.com con el mismo tratamiento visual que el resto de enlaces inline

### Limpieza de código muerto

- Eliminada clase `.glass` sin uso en [`globals.css`](src/styles/globals.css)
- Eliminado [`TrackableLink.tsx`](src/components/layout/) (componente huérfano, 30 líneas, nunca importado)
- `src/data/redirects.ts` y `src/data/backlinks.ts` se dejan como documentación interna (no importados pero con valor: placeholder para migraciones y tracker SEO respectivamente)
- Dependencias de `shadcn`, `radix-ui`, `class-variance-authority`, `lucide-react`, `tw-animate-css`, `@fontsource-variable/geist` ya eliminadas de `package.json` en limpieza previa

### Componente `NuestrosDatos`

Widget reutilizable de cifras verificables (non-commodity, E-E-A-T). Usado en 10 páginas con métricas propias del negocio. Si en el futuro se necesita renderizar valores largos en una línea (ej. listas de marcas), considerar añadir un prop `compact?: boolean` — se intentó y se revirtió en esta sesión porque el uso actual con `break-words` sirve a todas las métricas sin overflow.

## Verificación

```sh
bun run typecheck    # astro check — 0 errores esperados (salvo warning preexistente pruneSource)
bun run build        # Build limpio + generación markdown + skills index
grep -rn "santa-catalina\|pladur-mallorca\.webp" src/  # 0 matches — de-Mallorca-ificación completa
```
