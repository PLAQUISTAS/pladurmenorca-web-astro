export type Lang = 'es' | 'en'

export const DEFAULT_LANG: Lang = 'es'

export type I18nString = { es: string; en: string }

export type I18nArray = { es: string[]; en: string[] }

export const pick = <T>(value: { es: T; en: T }, lang: Lang): T => value[lang]

export function detectLangFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}

/**
 * Prefija un path interno con `/en` cuando el idioma es inglés.
 * - Deja paths externos (http..., tel:, mailto:) sin tocar.
 * - No duplica `/en` si el path ya empieza por `/en` o `/en/`.
 * - Para el home `/`, devuelve `/en` (sin barra final, porque `trailingSlash: 'never'`).
 */
export function localizedHref(href: string, lang: Lang = 'es'): string {
  if (lang !== 'en') return href
  if (!href.startsWith('/')) return href
  if (href === '/en' || href.startsWith('/en/')) return href
  if (href === '/') return '/en'
  return `/en${href}`
}

export const ui = {
  es: {
    nav: {
      servicios: 'Servicios',
      zonas: 'Zonas',
      servicePanel: {
        badge: 'Servicios',
        title: 'Instalación profesional de pladur en Menorca',
        subtitle: '+20 años de experiencia. Presupuesto gratuito en 24h.',
      },
      zonePanel: {
        badge: 'Cobertura total',
        subtitle: 'Trabajamos en toda Menorca con presupuesto cerrado y desplazamiento incluido',
        allZones: 'Ver todas las zonas',
        municipalities: '8 municipios cubiertos',
      },
      ctaPrimary: 'Presupuesto gratis',
      callAria: (phone: string) => `Llamar al ${phone}`,
      toggleLangAria: 'Cambiar a español',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      mobileLangLabel: '🇬🇧 ENGLISH',
      switchLangAria: 'Switch to English',
      mainNavAria: 'Navegación principal',
      mobileNavAria: 'Menú móvil',
    },
  },
  en: {
    nav: {
      servicios: 'Services',
      zonas: 'Areas',
      servicePanel: {
        badge: 'Services',
        title: 'Professional drywall installation in Menorca',
        subtitle: '20+ years of experience. Free quote in 24h.',
      },
      zonePanel: {
        badge: 'Full coverage',
        subtitle: 'We cover all of Menorca with a fixed quote, travel already included',
        allZones: 'See all areas',
        municipalities: '8 municipalities covered',
      },
      ctaPrimary: 'Free quote',
      callAria: (phone: string) => `Call ${phone}`,
      toggleLangAria: 'Switch to English',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      mobileLangLabel: '🇪🇸 ESPAÑOL',
      switchLangAria: 'Cambiar a español',
      mainNavAria: 'Main navigation',
      mobileNavAria: 'Mobile menu',
    },
  },
} as const

export const t = (lang: Lang) => ui[lang]
