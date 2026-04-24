export type GalleryCategory = 'falsos-techos' | 'tabiques' | 'aislamiento' | 'reformas'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  title: string
  location?: string
  /** Marca proyectos ejecutados por la SL matriz en Menorca (transparencia mercado Menorca 2026) */
  fromParentCompany?: boolean
}

export const galleryCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'falsos-techos', label: 'Falsos Techos' },
  { id: 'tabiques', label: 'Tabiques' },
  { id: 'aislamiento', label: 'Aislamiento' },
  { id: 'reformas', label: 'Reformas' },
] as const

// Portfolio inicial: proyectos ejecutados por Plaquistas y Acabados SL en Menorca.
// Etiquetados como "Proyecto Menorca (SL matriz)" hasta contar con obras propias en Menorca (FASE 3 §15).
export const galleryItems: GalleryItem[] = [
  {
    id: 'p1',
    src: '/images/blog/precio-pladur-menorca.webp',
    alt: 'Instalación de pladur en vivienda de Baleares — presupuesto y ejecución profesional',
    category: 'falsos-techos',
    title: 'Instalación profesional de pladur',
    fromParentCompany: true,
  },
  {
    id: 'p2',
    src: '/images/proyectos/oficina-open-space-tabiques.webp',
    alt: 'Distribución de oficina open space con tabiques de pladur',
    category: 'tabiques',
    title: 'Oficina distribución open space',
    fromParentCompany: true,
  },
  {
    id: 'p3',
    src: '/images/proyectos/aislamiento-acustico-apartamento-turistico.webp',
    alt: 'Aislamiento acústico con pladur en apartamento turístico',
    category: 'aislamiento',
    title: 'Aislamiento acústico apartamento turístico',
    fromParentCompany: true,
  },
  {
    id: 'p13',
    src: '/images/proyectos/vestidor-falso-techo-led-vistas-mar.webp',
    alt: 'Vestidor con falso techo LED perimetral y vistas al mar',
    category: 'falsos-techos',
    title: 'Vestidor con techo LED perimetral',
    fromParentCompany: true,
  },
  {
    id: 'p4',
    src: '/images/proyectos/reforma-integral-piso.webp',
    alt: 'Reforma integral de piso con pladur',
    category: 'reformas',
    title: 'Reforma integral de piso',
    fromParentCompany: true,
  },
  {
    id: 'p9',
    src: '/images/proyectos/dormitorio-vistas-mar-falso-techo.webp',
    alt: 'Dormitorio con falso techo continuo y ventanales panorámicos al mar',
    category: 'falsos-techos',
    title: 'Dormitorio con techo continuo vistas al mar',
    fromParentCompany: true,
  },
  {
    id: 'p5',
    src: '/images/blog/reformas-pladur-ciutadella.webp',
    alt: 'Reforma con pladur en chalet — falso techo y tabiquería',
    category: 'reformas',
    title: 'Reforma chalet',
    fromParentCompany: true,
  },
  {
    id: 'p6',
    src: '/images/blog/pladur-vs-ladrillo.webp',
    alt: 'Instalación de tabiques de pladur frente a obra tradicional',
    category: 'tabiques',
    title: 'Tabiquería de pladur profesional',
    fromParentCompany: true,
  },
  {
    id: 'p10',
    src: '/images/proyectos/pasillo-tabiques-villa.webp',
    alt: 'Pasillo con tabiques divisorios de pladur en villa de nueva construcción',
    category: 'tabiques',
    title: 'Tabiques divisorios en villa',
    fromParentCompany: true,
  },
  {
    id: 'p14',
    src: '/images/proyectos/habitacion-armario-empotrado.webp',
    alt: 'Habitación con armario empotrado de pladur y falso techo',
    category: 'tabiques',
    title: 'Armario empotrado en pladur',
    fromParentCompany: true,
  },
  {
    id: 'p7',
    src: '/images/blog/reformas-pladur-menorca.webp',
    alt: 'Reforma interior con pladur — ventajas del sistema en seco',
    category: 'reformas',
    title: 'Reforma interior vivienda',
    fromParentCompany: true,
  },
  {
    id: 'p11',
    src: '/images/proyectos/detalle-perfileria-aislamiento-pladur.webp',
    alt: 'Detalle de perfilería metálica y lana mineral en tabique de pladur para aislamiento acústico',
    category: 'aislamiento',
    title: 'Detalle perfilería con aislamiento',
    fromParentCompany: true,
  },
  {
    id: 'p12',
    src: '/images/proyectos/salon-falso-techo-villa.webp',
    alt: 'Salón de villa con falso techo de pladur y grandes ventanales al jardín',
    category: 'reformas',
    title: 'Salón villa con falso techo',
    fromParentCompany: true,
  },
  {
    id: 'p15',
    src: '/images/proyectos/acabados-pladur-madera-cocina.webp',
    alt: 'Acabados interiores con pladur y revestimiento de madera en cocina de villa',
    category: 'reformas',
    title: 'Acabados pladur y madera natural',
    fromParentCompany: true,
  },
  {
    id: 'p16',
    src: '/images/proyectos/falso-techo-led-exterior-villa.webp',
    alt: 'Detalle exterior de falso techo con iluminación LED integrada en villa',
    category: 'falsos-techos',
    title: 'Falso techo LED vista exterior',
    fromParentCompany: true,
  },
  {
    id: 'p17',
    src: '/images/proyectos/villa-obra-nueva-pladur-integral.webp',
    alt: 'Fachada de villa de obra nueva con instalación integral de pladur',
    category: 'reformas',
    title: 'Villa obra nueva integral',
    fromParentCompany: true,
  },
]
