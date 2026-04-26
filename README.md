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

Las 6 variables que el código realmente lee (auditado contra `src/`):

| Variable | Uso | Obligatoria |
|---|---|---|
| `ORIGIN` | URL pública (`@astrojs/node` la lee para CSRF + `Astro.url` cuando va detrás de Traefik) | Sí |
| `GOOGLE_CLIENT_ID` | Gmail OAuth2 — envío de emails de formularios | Sí |
| `GOOGLE_CLIENT_SECRET` | Gmail OAuth2 | Sí |
| `GOOGLE_REFRESH_TOKEN` | Gmail OAuth2 | Sí |
| `GMAIL_SENDER_EMAIL` | Dirección remitente de los emails | Sí |
| `PUBLIC_GOOGLE_VERIFICATION` | Meta tag de Google Search Console (verificación URL prefix) | No (recomendada) |

Variables opcionales para analítica (sin configurar por defecto):

| Variable | Uso |
|---|---|
| `PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (`G-XXXXX`) — el `CookieBanner` lo carga si está |
| `PUBLIC_GTM_ID` | Google Tag Manager |
| `PUBLIC_GOOGLE_ADS_ID` | Google Ads |
| `PUBLIC_META_PIXEL_ID` | Meta Pixel |

Notas:
- `site` de Astro está hardcoded en `astro.config.mjs` (no usa env-var, mismo patrón que Pladur Mallorca)
- `INTERNAL_RECIPIENT` (destino de los formularios) está hardcoded a `info@plaquistas.com` en [`api/contacto.ts`](src/pages/api/contacto.ts) y [`lib/contact-service.ts`](src/lib/contact-service.ts) — si cambia, son 2 líneas de código

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

### Alineación de configuración con Pladur Mallorca

- `nginx.conf` — `server_name` corregido de `pladurmallorca.com` a `pladurmenorca.com` (residuo del fork)
- `astro.config.mjs` — `site` hardcoded a `https://www.pladurmenorca.com` en lugar de leer `PUBLIC_SITE_URL`. Mismo patrón que Mallorca, una variable de entorno menos que mantener
- `INTERNAL_RECIPIENT` (destino de formularios) hardcoded a `info@plaquistas.com` en `api/contacto.ts` y `lib/contact-service.ts`. Mismo patrón que Mallorca

### Componente `NuestrosDatos`

Widget reutilizable de cifras verificables (non-commodity, E-E-A-T). Usado en 10 páginas con métricas propias del negocio. Si en el futuro se necesita renderizar valores largos en una línea (ej. listas de marcas), considerar añadir un prop `compact?: boolean` — se intentó y se revirtió en esta sesión porque el uso actual con `break-words` sirve a todas las métricas sin overflow.

### Fixes de build (compresión HTML + directivas Astro)

- `aviso-legal.astro`, `politica-cookies.astro`, `politica-de-privacidad.astro` — quitadas directivas `client:visible` / `client:idle` de componentes Astro (son SSR-only, no aceptan hidratación). El build emitía warnings; ahora pasa limpio.
- `data/faqs/home.ts` y `data/faqs/precios.ts` — reemplazado el carácter `<` literal por palabras (`inferior al 5 %`, `hasta 2.000 €`). Causa raíz: cuando `SchemaFAQ.astro` serializaba el texto en JSON-LD inline dentro de `<script>`, el parser de `html-minifier-terser` interpretaba el `<` como inicio de tag y fallaba con `Cannot compress file` en home y precios. Resultado: build pasa de 92/96 a 96/96 archivos comprimidos.

### Optimización LCP en mobile

`HeroHome.astro` — el componente `<Image>` del hero pasa de `quality={82}` a `quality={72}` (sweet spot WebP) y añade un `width=480` para mobiles de baja DPR. El variant 800w (servido a la mayoría de móviles con DPR=2) baja de 30 KB a 19 KB (−37 %). Lighthouse estimaba un ahorro de 7.6 KB; el resultado lo supera.

### SEO/agentes — Markdown for Agents (RFC 8288 / RFC 7231)

- `nginx.conf` — añadida lógica de content negotiation:
  - `map $http_accept $prefers_md` con respeto a q-values (un `Accept: text/markdown;q=0.5, text/html;q=1.0` recibe HTML)
  - `location /` añade `Vary: Accept` y rewrite interno a `/__md/...` cuando el agente pide markdown
  - `location ^~ /__md/` (internal-only) sirve `dist/client/**/*.md` con `Content-Type: text/markdown; charset=utf-8`
  - `location @md_missing` cae al HTML si no existe el `.md` para esa URL
- Los `.md` ya se generaban en build (`scripts/generate-markdown.mjs` → 96 ficheros en `dist/client/`); ahora nginx los entrega cuando el cliente los pide.

Verificación tras deploy:
```sh
curl -H "Accept: text/markdown" -I https://www.pladurmenorca.com/
# → Content-Type: text/markdown; charset=utf-8
curl -I https://www.pladurmenorca.com/
# → Content-Type: text/html  (browsers, comportamiento por defecto)
```

### SEO/agentes — Content Signals en `robots.txt`

`public/robots.txt` declara preferencias de uso del contenido por agentes IA según el draft IETF [`draft-romm-aipref-contentsignals`](https://datatracker.ietf.org/doc/draft-romm-aipref-contentsignals/) y la spec de [contentsignals.org](https://contentsignals.org/):

```
Content-Signal: search=yes, ai-input=yes, ai-train=yes
```

Postura "máxima visibilidad" (coherente con el comentario de cabecera): se permite indexación en buscadores, uso como contexto/RAG por LLMs (citaciones en tiempo real) y uso del contenido en datasets de entrenamiento. Decisión deliberada — todo el contenido es información pública del servicio, sin nada que proteger.

## Verificación

```sh
bun run typecheck    # astro check — 0 errores esperados (salvo warning preexistente pruneSource)
bun run build        # Build limpio + generación markdown + skills index
grep -rn "santa-catalina\|pladur-mallorca\.webp" src/  # 0 matches — de-Mallorca-ificación completa
```
