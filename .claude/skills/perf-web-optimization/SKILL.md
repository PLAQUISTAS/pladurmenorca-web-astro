---
name: perf-web-optimization
description: "Optimize web performance: bundle size, images, caching, lazy loading, and overall page speed. Use when improving general web performance, reducing bundle size, optimizing images, or configuring caching strategies. Do NOT use for running audits (use perf-lighthouse) or Astro-specific optimizations (use perf-astro)."
---

# Web Performance Optimization

## Overview

This guide provides a systematic measurement-to-verification approach for enhancing site speed and reducing resource overhead.

## Key Performance Targets

| Metric | Target | What It Measures |
| ------ | ------ | ---------------- |
| LCP | ≤2.5s | Largest Contentful Paint — when main content renders |
| INP | ≤200ms | Interaction to Next Paint — responsiveness |
| CLS | ≤0.1 | Cumulative Layout Shift — visual stability |
| TTFB | ≤800ms | Time to First Byte — server response time |

## Image Optimization

Images are typically the largest performance impact opportunity, especially for LCP.

### Modern Formats

```html
<!-- Use WebP/AVIF with fallbacks -->
<picture>
  <source srcset="hero.avif" type="image/avif" />
  <source srcset="hero.webp" type="image/webp" />
  <img src="hero.jpg" alt="Hero" width="1200" height="600" />
</picture>
```

### Dimensions & Lazy Loading

```html
<!-- Always set dimensions to prevent CLS -->
<img src="photo.webp" alt="Photo" width="800" height="450" loading="lazy" decoding="async" />

<!-- LCP image: eager load with high priority -->
<img src="hero.webp" alt="Hero" width="1200" height="600" loading="eager" fetchpriority="high" />
```

### Responsive Images

```html
<img
  src="photo-800.webp"
  srcset="photo-400.webp 400w, photo-800.webp 800w, photo-1200.webp 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
  alt="Photo"
  width="1200"
  height="600"
  loading="lazy"
/>
```

## Font Optimization

Fonts commonly degrade both LCP and CLS through blocking behavior.

### Self-Hosting (Best)

```css
@font-face {
  font-family: 'Inter';
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter-400.woff2') format('woff2');
  unicode-range: U+0000-00FF; /* Latin subset */
}
```

### Google Fonts (Non-Blocking)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
  media="print"
  onload="this.media='all'"
/>
```

## Third-Party Scripts

Third-party scripts frequently harm interactivity metrics.

### Defer Until Interaction

```javascript
let loaded = false
function loadThirdParty() {
  if (loaded) return
  loaded = true
  // Load GTM, analytics, chat widgets, etc.
  const script = document.createElement('script')
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-XXXXX'
  document.head.appendChild(script)
}

// Load on first interaction or after 5 seconds
;['scroll', 'click', 'touchstart'].forEach((e) => {
  document.addEventListener(e, loadThirdParty, { once: true, passive: true })
})
setTimeout(loadThirdParty, 5000)
```

## Bundle Size

### Analysis

```bash
# Webpack
npx webpack-bundle-analyzer stats.json

# Vite
npx vite-bundle-visualizer

# Generic
npx source-map-explorer dist/**/*.js
```

### Common Replacements

| Heavy Package | Size | Lighter Alternative | Size |
| ------------- | ---- | ------------------- | ---- |
| moment.js | 67KB | dayjs | 2KB |
| lodash | 72KB | lodash-es (tree-shake) | ~5KB |
| axios | 13KB | fetch (native) | 0KB |
| uuid | 4KB | crypto.randomUUID() | 0KB |

## Caching Strategy

### Cache-Control Headers

```
# Static assets (fonts, images, JS/CSS with hash)
Cache-Control: public, max-age=31536000, immutable

# HTML pages
Cache-Control: public, max-age=0, s-maxage=3600, stale-while-revalidate=86400

# API responses
Cache-Control: private, max-age=0, no-cache
```

### Service Worker (PWA)

```javascript
// Cache static assets, network-first for HTML
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'document') {
    event.respondWith(fetch(event.request).catch(() => caches.match('/offline.html')))
  } else {
    event.respondWith(caches.match(event.request).then((r) => r || fetch(event.request)))
  }
})
```

## Lazy Loading Patterns

### Intersection Observer

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        observer.unobserve(img)
      }
    })
  },
  { rootMargin: '200px' }
)

document.querySelectorAll('img[data-src]').forEach((img) => observer.observe(img))
```

### Dynamic Import

```javascript
// Load heavy modules on demand
button.addEventListener('click', async () => {
  const { heavyFunction } = await import('./heavy-module.js')
  heavyFunction()
})
```

## Checklist

- [ ] Images use modern formats (WebP/AVIF) with dimensions set
- [ ] LCP image preloaded with `fetchpriority="high"`
- [ ] Fonts self-hosted or loaded non-blocking with `font-display: swap`
- [ ] Third-party scripts deferred to interaction or timeout
- [ ] Bundle analyzed, heavy dependencies replaced
- [ ] Cache headers configured for static assets (immutable) and HTML (SWR)
- [ ] Below-fold content lazy-loaded

## See Also

- **core-web-vitals** — Deep dive into LCP, INP, CLS optimization
- **perf-lighthouse** — Running audits and setting budgets
- **perf-astro** — Astro-specific optimizations
