export type GalleryCategory = 'falsos-techos' | 'tabiques' | 'aislamiento' | 'reformas'

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  title: string
  location?: string
}

export const galleryCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'falsos-techos', label: 'Falsos Techos' },
  { id: 'tabiques', label: 'Tabiques' },
  { id: 'aislamiento', label: 'Aislamiento' },
  { id: 'reformas', label: 'Reformas' },
] as const

export const galleryItems: GalleryItem[] = [
  {
    id: 'p1',
    src: '/images/blog/precio-pladur-mallorca.webp',
    alt: 'Instalación de pladur en vivienda de Mallorca — presupuesto y ejecución profesional',
    category: 'falsos-techos',
    title: 'Instalación profesional de pladur',
    location: 'Palma de Mallorca',
  },
  {
    id: 'p2',
    src: '/images/proyectos/oficina-open-space-tabiques-pladur-mallorca.webp',
    alt: 'Distribución de oficina open space con tabiques de pladur en Manacor',
    category: 'tabiques',
    title: 'Oficina distribución open space',
    location: 'Manacor',
  },
  {
    id: 'p3',
    src: '/images/proyectos/aislamiento-acustico-apartamento-turistico-pladur-mallorca.webp',
    alt: 'Aislamiento acústico con pladur en apartamento turístico de Calvià',
    category: 'aislamiento',
    title: 'Aislamiento acústico apartamento turístico',
    location: 'Calvià',
  },
  {
    id: 'p13',
    src: '/images/proyectos/vestidor-falso-techo-led-vistas-mar-mallorca.webp',
    alt: 'Vestidor con falso techo LED perimetral y vistas al mar en Calvià',
    category: 'falsos-techos',
    title: 'Vestidor con techo LED perimetral',
    location: 'Calvià',
  },
  {
    id: 'p4',
    src: '/images/proyectos/reforma-integral-piso-santa-catalina-pladur-mallorca.webp',
    alt: 'Reforma integral de piso con pladur en Santa Catalina, Palma de Mallorca',
    category: 'reformas',
    title: 'Reforma integral piso Santa Catalina',
    location: 'Palma de Mallorca',
  },
  {
    id: 'p9',
    src: '/images/proyectos/dormitorio-vistas-mar-falso-techo-calvia.webp',
    alt: 'Dormitorio con falso techo continuo y ventanales panorámicos al mar en Calvià',
    category: 'falsos-techos',
    title: 'Dormitorio con techo continuo vistas al mar',
    location: 'Calvià',
  },
  {
    id: 'p5',
    src: '/images/blog/reformas-pladur-calvia.webp',
    alt: 'Reforma con pladur en chalet de Calvià — falso techo y tabiquería',
    category: 'reformas',
    title: 'Reforma chalet en Calvià',
    location: 'Calvià',
  },
  {
    id: 'p6',
    src: '/images/blog/pladur-vs-ladrillo.webp',
    alt: 'Instalación de tabiques de pladur frente a obra tradicional en Mallorca',
    category: 'tabiques',
    title: 'Tabiquería de pladur profesional',
    location: 'Palma de Mallorca',
  },
  {
    id: 'p10',
    src: '/images/proyectos/pasillo-tabiques-pladur-villa-mallorca.webp',
    alt: 'Pasillo con tabiques divisorios de pladur en villa de nueva construcción en Mallorca',
    category: 'tabiques',
    title: 'Tabiques divisorios en villa',
    location: 'Mallorca',
  },
  {
    id: 'p14',
    src: '/images/proyectos/habitacion-armario-empotrado-pladur-mallorca.webp',
    alt: 'Habitación con armario empotrado de pladur y falso techo en vivienda de Mallorca',
    category: 'tabiques',
    title: 'Armario empotrado en pladur',
    location: 'Mallorca',
  },
  {
    id: 'p7',
    src: '/images/blog/reformas-pladur-mallorca.webp',
    alt: 'Reforma interior con pladur en vivienda de Mallorca — ventajas del sistema en seco',
    category: 'reformas',
    title: 'Reforma interior vivienda',
    location: 'Mallorca',
  },
  {
    id: 'p11',
    src: '/images/proyectos/detalle-perfileria-aislamiento-pladur.webp',
    alt: 'Detalle de perfilería metálica y lana mineral en tabique de pladur para aislamiento acústico',
    category: 'aislamiento',
    title: 'Detalle perfilería con aislamiento',
    location: 'Mallorca',
  },
  {
    id: 'p12',
    src: '/images/proyectos/salon-falso-techo-pladur-villa-mallorca.webp',
    alt: 'Salón de villa con falso techo de pladur y grandes ventanales al jardín en Mallorca',
    category: 'reformas',
    title: 'Salón villa con falso techo',
    location: 'Mallorca',
  },
  {
    id: 'p15',
    src: '/images/proyectos/acabados-pladur-madera-cocina-mallorca.webp',
    alt: 'Acabados interiores con pladur y revestimiento de madera en cocina de villa en Mallorca',
    category: 'reformas',
    title: 'Acabados pladur y madera natural',
    location: 'Mallorca',
  },
  {
    id: 'p16',
    src: '/images/proyectos/falso-techo-led-exterior-villa-mallorca.webp',
    alt: 'Detalle exterior de falso techo con iluminación LED integrada en villa de Mallorca',
    category: 'falsos-techos',
    title: 'Falso techo LED vista exterior',
    location: 'Mallorca',
  },
  {
    id: 'p17',
    src: '/images/proyectos/villa-obra-nueva-pladur-integral-mallorca.webp',
    alt: 'Fachada de villa de obra nueva con instalación integral de pladur en Mallorca',
    category: 'reformas',
    title: 'Villa obra nueva integral',
    location: 'Mallorca',
  },
]
