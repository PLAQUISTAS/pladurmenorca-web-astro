import { localizedHref, type Lang } from '@/i18n'

export interface ServicioMenuItem {
  label: string
  href: string
  desc: string
  iconName: string
}

export interface ZonaMenuItem {
  label: string
  href: string
  desc: string
  barrios: string[]
}

export interface NavLink {
  label: string
  href: string
}

interface ServicioMenuBase {
  label: { es: string; en: string }
  href: string
  desc: { es: string; en: string }
  iconName: string
}

const serviciosMenuBase: ServicioMenuBase[] = [
  {
    label: { es: 'Instalación de Pladur', en: 'Drywall Installation' },
    href: '/instalacion-pladur-menorca',
    desc: { es: 'Instalación profesional en viviendas y locales', en: 'Professional install in homes and premises' },
    iconName: 'home',
  },
  {
    label: { es: 'Escayola', en: 'Plastering' },
    href: '/escayola-menorca',
    desc: { es: 'Techos, molduras, cornisas y restauración', en: 'Ceilings, mouldings, cornices and restoration' },
    iconName: 'sparkles',
  },
  {
    label: { es: 'Falsos Techos', en: 'False Ceilings' },
    href: '/falsos-techos-pladur-menorca',
    desc: { es: 'Techos continuos, registrables y decorativos', en: 'Seamless, accessible and decorative ceilings' },
    iconName: 'squares',
  },
  {
    label: { es: 'Tabiques de Pladur', en: 'Drywall Partitions' },
    href: '/tabiques-pladur-menorca',
    desc: { es: 'Divisiones interiores ligeras y eficientes', en: 'Light and efficient interior partitions' },
    iconName: 'walls',
  },
  {
    label: { es: 'Aislamiento Acústico', en: 'Acoustic Insulation' },
    href: '/aislamiento-acustico-menorca',
    desc: { es: 'Reducción de ruidos entre estancias', en: 'Noise reduction between rooms' },
    iconName: 'speaker',
  },
  {
    label: { es: 'Aislamiento Térmico', en: 'Thermal Insulation' },
    href: '/aislamiento-termico-menorca',
    desc: { es: 'Eficiencia energética con lana mineral', en: 'Energy efficiency with mineral wool' },
    iconName: 'sun',
  },
  {
    label: { es: 'Reformas Interiores', en: 'Interior Renovations' },
    href: '/reformas-interiores-pladur-menorca',
    desc: { es: 'Reforma integral con sistemas en seco', en: 'Full renovation with dry-build systems' },
    iconName: 'wrench',
  },
  {
    label: { es: 'Apartamentos Turísticos', en: 'Holiday Apartments' },
    href: '/pladur-apartamentos-turisticos-menorca',
    desc: { es: 'Reforma rápida entre temporadas', en: 'Fast renovations between seasons' },
    iconName: 'building',
  },
  {
    label: { es: 'Pladur Hidrófugo', en: 'Moisture-Resistant Drywall' },
    href: '/pladur-hidrofugo-menorca',
    desc: { es: 'Placa verde para baños y cocinas', en: 'Green board for bathrooms and kitchens' },
    iconName: 'droplet',
  },
  {
    label: { es: 'Pladur Ignífugo', en: 'Fire-Rated Drywall' },
    href: '/pladur-ignifugo-menorca',
    desc: { es: 'Protección pasiva contra incendios', en: 'Passive fire protection' },
    iconName: 'flame',
  },
  {
    label: { es: 'Hoteles', en: 'Hotels' },
    href: '/pladur-hoteles-menorca',
    desc: { es: 'Reformas hoteleras en temporada baja', en: 'Hotel renovations in low season' },
    iconName: 'hotel',
  },
  {
    label: { es: 'Obra Nueva (B2B)', en: 'New Build (B2B)' },
    href: '/pladur-obra-nueva-menorca',
    desc: { es: 'Promotoras, constructoras y estudios', en: 'Developers, contractors and studios' },
    iconName: 'building',
  },
  {
    label: { es: 'Precios de Pladur', en: 'Drywall Prices' },
    href: '/precios-pladur-menorca',
    desc: { es: 'Guía de tarifas actualizada 2026', en: 'Updated 2026 pricing guide' },
    iconName: 'tag',
  },
  {
    label: { es: 'Pedir Presupuesto', en: 'Request a Quote' },
    href: '/presupuesto-pladur',
    desc: { es: 'Presupuesto gratuito en menos de 24h', en: 'Free quote within 24 hours' },
    iconName: 'clipboard',
  },
]

export const getServiciosMenu = (lang: Lang = 'es'): ServicioMenuItem[] =>
  serviciosMenuBase.map((s) => ({
    label: s.label[lang],
    href: localizedHref(s.href, lang),
    desc: s.desc[lang],
    iconName: s.iconName,
  }))

export const serviciosMenu: ServicioMenuItem[] = getServiciosMenu('es')

interface ZonaMenuBase {
  label: { es: string; en: string }
  href: string
  desc: { es: string; en: string }
  barrios: string[]
}

const zonasMenuBase: ZonaMenuBase[] = [
  {
    label: { es: 'Pladur en Maó', en: 'Drywall in Maó' },
    href: '/pladur-mao',
    desc: { es: 'Capital administrativa. Pisos históricos, puerto y Sant Climent.', en: 'Administrative capital. Historic flats, port and Sant Climent.' },
    barrios: ['Puerto de Maó', 'Sant Climent', 'Centro Histórico'],
  },
  {
    label: { es: 'Pladur en Ciutadella', en: 'Drywall in Ciutadella' },
    href: '/pladur-ciutadella',
    desc: { es: 'Patrimonio, casco antiguo y villas en la costa sur.', en: 'Heritage, old town and villas on the south coast.' },
    barrios: ['Cala en Bosc', 'Son Xoriguer', 'Casco Histórico'],
  },
  {
    label: { es: 'Pladur en Alaior', en: 'Drywall in Alaior' },
    href: '/pladur-alaior',
    desc: { es: 'Pueblo interior con campus UIB y calas del sur.', en: 'Inland town with UIB campus and southern coves.' },
    barrios: ['Son Bou', 'Torre Solí', 'Centro'],
  },
  {
    label: { es: 'Pladur en Es Mercadal', en: 'Drywall in Es Mercadal' },
    href: '/pladur-es-mercadal',
    desc: { es: 'Centro de la isla y zona norte (Fornells).', en: 'Island centre and northern area (Fornells).' },
    barrios: ['Fornells', "Arenal d'en Castell", 'Son Parc'],
  },
  {
    label: { es: 'Pladur en Ferreries', en: 'Drywall in Ferreries' },
    href: '/pladur-ferreries',
    desc: { es: 'Pueblo interior y calas del sur.', en: 'Inland village and southern coves.' },
    barrios: ['Santa Galdana', 'Cala Mitjana', 'Centro'],
  },
  {
    label: { es: 'Pladur en Sant Lluís', en: 'Drywall in Sant Lluís' },
    href: '/pladur-sant-lluis',
    desc: { es: 'Zona sur, aeropuerto, núcleo expat.', en: 'Southern area, airport, expat hub.' },
    barrios: ['Punta Prima', 'Binibeca', 'Binissafuller'],
  },
  {
    label: { es: 'Pladur en Es Migjorn Gran', en: 'Drywall in Es Migjorn Gran' },
    href: '/pladur-es-migjorn-gran',
    desc: { es: 'Pueblo pequeño y calas del sur.', en: 'Small village and southern coves.' },
    barrios: ['Santo Tomás', 'Sant Adeodat'],
  },
  {
    label: { es: 'Pladur en Es Castell', en: 'Drywall in Es Castell' },
    href: '/pladur-es-castell',
    desc: { es: 'Zona residencial histórica con comunidad británica.', en: 'Historic residential area with British community.' },
    barrios: ['Cala Sant Esteve', 'Sol del Este'],
  },
]

export const getZonasMenu = (lang: Lang = 'es'): ZonaMenuItem[] =>
  zonasMenuBase.map((z) => ({
    label: z.label[lang],
    href: localizedHref(z.href, lang),
    desc: z.desc[lang],
    barrios: z.barrios,
  }))

export const zonasMenu: ZonaMenuItem[] = getZonasMenu('es')

interface NavLinkBase {
  label: { es: string; en: string }
  href: string
}

const navSimpleBase: NavLinkBase[] = [
  { label: { es: 'Proyectos', en: 'Projects' }, href: '/proyectos' },
  { label: { es: 'Precios', en: 'Prices' }, href: '/precios-pladur-menorca' },
  { label: { es: 'Blog', en: 'Blog' }, href: '/blog' },
  { label: { es: 'Nosotros', en: 'About' }, href: '/sobre-nosotros' },
]

export const getNavSimple = (lang: Lang = 'es'): NavLink[] =>
  navSimpleBase.map((l) => ({ label: l.label[lang], href: localizedHref(l.href, lang) }))

export const navSimple: NavLink[] = getNavSimple('es')
