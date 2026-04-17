export interface ServicioMenuItem {
  label: string
  href: string
  desc: string
  icon: React.ReactNode
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

export const serviciosMenu: ServicioMenuItem[] = [
  {
    label: 'Instalación de Pladur',
    href: '/instalacion-pladur-mallorca',
    desc: 'Instalación profesional en viviendas y locales',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
      </svg>
    ),
  },
  {
    label: 'Escayola',
    href: '/escayola-mallorca',
    desc: 'Techos, molduras, cornisas y restauración',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    label: 'Falsos Techos',
    href: '/falsos-techos-pladur-mallorca',
    desc: 'Techos continuos, registrables y decorativos',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    label: 'Tabiques de Pladur',
    href: '/tabiques-pladur-mallorca',
    desc: 'Divisiones interiores ligeras y eficientes',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    label: 'Aislamiento Acústico',
    href: '/aislamiento-acustico-mallorca',
    desc: 'Reducción de ruidos entre estancias',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    label: 'Aislamiento Térmico',
    href: '/aislamiento-termico-mallorca',
    desc: 'Eficiencia energética con lana mineral',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    label: 'Reformas Interiores',
    href: '/reformas-interiores-pladur-mallorca',
    desc: 'Reforma integral con sistemas en seco',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    label: 'Apartamentos Turísticos',
    href: '/pladur-apartamentos-turisticos-mallorca',
    desc: 'Reforma rápida entre temporadas',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
  },
  {
    label: 'Pladur Hidrófugo',
    href: '/pladur-hidrofugo-mallorca',
    desc: 'Placa verde para baños y cocinas',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c-3.6 4.5-7.5 8.25-7.5 12a7.5 7.5 0 0015 0c0-3.75-3.9-7.5-7.5-12z" />
      </svg>
    ),
  },
  {
    label: 'Pladur Ignífugo',
    href: '/pladur-ignifugo-mallorca',
    desc: 'Protección pasiva contra incendios',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    label: 'Hoteles',
    href: '/pladur-hoteles-mallorca',
    desc: 'Reformas hoteleras en temporada baja',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    label: 'Precios de Pladur',
    href: '/precios-pladur-mallorca',
    desc: 'Guía de tarifas actualizada 2026',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
      </svg>
    ),
  },
  {
    label: 'Pedir Presupuesto',
    href: '/presupuesto-pladur',
    desc: 'Presupuesto gratuito en menos de 24h',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
]

export const zonasMenu: ZonaMenuItem[] = [
  {
    label: 'Pladur en Palma',
    href: '/pladur-palma',
    desc: 'Capital de Mallorca. Pisos, apartamentos y locales.',
    barrios: ['Santa Catalina', 'Portixol', 'Centro Histórico'],
  },
  {
    label: 'Pladur en Calvià',
    href: '/pladur-calvia',
    desc: 'Chalets de lujo, villas y apartamentos turísticos.',
    barrios: ['Santa Ponça', 'Palmanova', 'Portals Nous'],
  },
  {
    label: 'Pladur en Inca',
    href: '/pladur-inca',
    desc: 'Zona interior y Raiguer. Casas y naves industriales.',
    barrios: ['Binissalem', 'Lloseta', 'Selva'],
  },
  {
    label: 'Pladur en Manacor',
    href: '/pladur-manacor',
    desc: 'Llevant de Mallorca. Viviendas y locales.',
    barrios: ['Porto Cristo', 'Cala Millor', 'Son Servera'],
  },
  {
    label: 'Pladur en Alcúdia',
    href: '/pladur-alcudia',
    desc: 'Norte de Mallorca. Apartamentos y viviendas turísticas.',
    barrios: ['Puerto Alcúdia', 'Playa de Muro', 'Can Picafort'],
  },
  {
    label: 'Pladur en Marratxí',
    href: '/pladur-marratxi',
    desc: 'Área metropolitana de Palma. Pisos y casas de pueblo.',
    barrios: ["Pont d'Inca", 'Sa Cabaneta', 'Pòrtol'],
  },
  {
    label: 'Pladur en Llucmajor',
    href: '/pladur-llucmajor',
    desc: "S'Arenal y Playa de Palma. Apartamentos turísticos.",
    barrios: ["S'Arenal", 'Playa de Palma', 'Llucmajor'],
  },
  {
    label: 'Pladur en Pollença',
    href: '/pladur-pollenca',
    desc: 'Norte. Casas históricas y apartamentos de lujo.',
    barrios: ['Port de Pollença', 'Cala Sant Vicenç'],
  },
  {
    label: 'Pladur en Sóller',
    href: '/pladur-soller',
    desc: 'Serra de Tramuntana. Reformas en casas de piedra.',
    barrios: ['Port de Sóller', 'Biniaraix'],
  },
  {
    label: "Pladur en Andratx",
    href: '/pladur-andratx',
    desc: 'Suroeste. Villas de lujo y reformas premium.',
    barrios: ["Port d'Andratx", 'Camp de Mar'],
  },
]

export const navSimple: NavLink[] = [
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Precios', href: '/precios-pladur-mallorca' },
  { label: 'Blog', href: '/blog' },
  { label: 'Nosotros', href: '/sobre-nosotros' },
]
