export interface Municipio {
  slug: string
  nombre: string
  h1: string
  descripcion: string
  href: string
  heroImage: string
  metaTitle: string
  metaDescription: string
  introLocal: string
  serviciosLocal: string
  proyectoDestacado?: string
  barrios: string[]
  tipoVivienda: string
  problemaHabitual: string
}

export const municipios: Municipio[] = [
  {
    slug: 'pladur-mao',
    nombre: 'Maó',
    h1: 'Instaladores de Pladur en Maó',
    descripcion: 'Instalación de pladur en Maó. Falsos techos, tabiques y aislamiento en pisos históricos del puerto, locales y oficinas.',
    href: '/pladur-mao',
    heroImage: '/images/proyectos/reforma-integral-piso.webp',
    metaTitle: 'Pladur en Maó | Instaladores Profesionales Menorca',
    metaDescription: 'Instaladores de pladur en Maó, Menorca. Falsos techos, tabiques, aislamiento en pisos y locales. Puerto, Sant Climent, Centro. 627 829 723.',
    introLocal: 'Maó, capital administrativa de Menorca y uno de los puertos naturales más grandes del Mediterráneo, concentra un parque inmobiliario muy diverso: desde pisos centenarios en el Centro Histórico con techos altos y forjados de madera, hasta viviendas y apartamentos modernos en las zonas nuevas y locales comerciales en el entorno del Puerto. Cada tipología presenta retos específicos que abordamos con soluciones a medida.',
    serviciosLocal: 'En Maó realizamos falsos techos para modernizar pisos antiguos respetando molduras originales, tabiques para redistribuir apartamentos con distribuciones anticuadas, trasdosados para mejorar el aislamiento de medianeras y fachadas expuestas a la tramontana, y aislamiento acústico en locales y restaurantes del entorno del Puerto.',
    proyectoDestacado: undefined,
    barrios: ['Centro Histórico', 'Port de Maó', 'Sant Climent', 'Trepucó', 'Malbúger', 'Cala Llonga', 'Es Grau'],
    tipoVivienda: 'Pisos históricos del casco antiguo, viviendas en zonas nuevas, locales del puerto y oficinas administrativas',
    problemaHabitual: 'Mala distribución heredada en viviendas históricas, humedad en plantas bajas del casco antiguo, puentes térmicos en fachadas expuestas al viento del norte y necesidad de insonorización en locales del puerto',
  },
  {
    slug: 'pladur-ciutadella',
    nombre: 'Ciutadella',
    h1: 'Instaladores de Pladur en Ciutadella',
    descripcion: 'Pladur en Ciutadella de Menorca. Especialistas en viviendas del casco histórico, villas en Cala en Bosc y Son Xoriguer.',
    href: '/pladur-ciutadella',
    heroImage: '/images/proyectos/dormitorio-vistas-mar-falso-techo.webp',
    metaTitle: 'Pladur en Ciutadella | Villas, Casco Histórico y Costa Sur',
    metaDescription: 'Instalación de pladur en Ciutadella de Menorca. Casas del casco histórico, villas en Cala en Bosc y Son Xoriguer, apartamentos turísticos. 627 829 723.',
    introLocal: 'Ciutadella, antigua capital y ciudad con mayor peso histórico de Menorca, conjuga el patrimonio arquitectónico del casco antiguo —fincas nobles, palacios y casas señoriales— con una potente oferta turística en la costa sur (Cala en Bosc, Son Xoriguer, Cala Santandria). Esta doble realidad exige soluciones que respeten el patrimonio en el centro y que den rendimiento rápido y duradero en villas y apartamentos de alquiler.',
    serviciosLocal: 'En Ciutadella trabajamos en restauración con escayola y pladur en edificios patrimoniales del casco histórico, reformas integrales de villas en urbanizaciones costeras, aislamiento acústico para apartamentos turísticos y reformas de hostelería.',
    proyectoDestacado: undefined,
    barrios: ['Casco Histórico', 'Cala en Bosc', 'Son Xoriguer', 'Cala Santandria', 'Son Oleo', 'Cala Blanca', 'Sa Caleta'],
    tipoVivienda: 'Casas nobles y palacios del casco histórico, villas costeras, apartamentos turísticos y fincas rurales',
    problemaHabitual: 'Limitaciones estéticas en rehabilitación patrimonial, aislamiento acústico insuficiente en apartamentos turísticos y humedad en edificios históricos',
  },
  {
    slug: 'pladur-alaior',
    nombre: 'Alaior',
    h1: 'Instaladores de Pladur en Alaior',
    descripcion: 'Pladur en Alaior. Instalación en casas de pueblo, pisos, urbanizaciones del sur (Son Bou, Torre Solí) y obra nueva.',
    href: '/pladur-alaior',
    heroImage: '/images/proyectos/villa-obra-nueva-pladur-integral.webp',
    metaTitle: 'Pladur en Alaior | Casas de Pueblo, Son Bou y Torre Solí',
    metaDescription: 'Instaladores de pladur en Alaior, Menorca. Casas de pueblo, urbanizaciones Son Bou y Torre Solí, campus UIB. Presupuesto gratis. 627 829 723.',
    introLocal: 'Alaior es un pueblo del interior que combina tradición con una fuerte presencia académica (campus UIB) y un desarrollo turístico significativo en la costa sur (Son Bou, Torre Solí). Las viviendas típicas son casas de pueblo con paredes gruesas y techos bajos, que conviven con apartamentos y chalets en las urbanizaciones costeras.',
    serviciosLocal: 'En Alaior instalamos falsos techos para modernizar casas de pueblo sin perder su carácter, trasdosados en urbanizaciones de la costa para mejorar el aislamiento acústico y térmico, y reformas integrales de apartamentos turísticos de cara a la temporada.',
    proyectoDestacado: undefined,
    barrios: ['Centro', 'Son Bou', 'Torre Solí', "Cala en Porter", 'Sa Plana'],
    tipoVivienda: 'Casas de pueblo tradicionales, apartamentos y chalets en urbanizaciones costeras',
    problemaHabitual: 'Techos bajos y distribuciones anticuadas en casas de pueblo; ruido entre apartamentos en urbanizaciones turísticas',
  },
  {
    slug: 'pladur-es-mercadal',
    nombre: 'Es Mercadal',
    h1: 'Instaladores de Pladur en Es Mercadal',
    descripcion: 'Pladur en Es Mercadal y Fornells. Reformas en el centro de la isla, urbanizaciones del norte y villas en Son Parc.',
    href: '/pladur-es-mercadal',
    heroImage: '/images/proyectos/salon-falso-techo-villa.webp',
    metaTitle: 'Pladur en Es Mercadal | Fornells, Son Parc, Arenal d\'en Castell',
    metaDescription: 'Instalación de pladur en Es Mercadal, Fornells, Son Parc y Arenal d\'en Castell. Villas, apartamentos y reformas. 627 829 723.',
    introLocal: 'Es Mercadal ocupa una posición estratégica en el centro de Menorca e incluye núcleos costeros muy activos como Fornells —referente gastronómico y náutico—, Arenal d\'en Castell y Son Parc, con su campo de golf y urbanizaciones residenciales. El municipio combina casas tradicionales del interior con villas modernas en la costa norte.',
    serviciosLocal: 'Trabajamos en villas de Son Parc y Arenal d\'en Castell (aislamiento térmico y acústico, falsos techos decorativos), reformas de restauración en Fornells y casas de pueblo del centro histórico con sistemas compatibles con sus particularidades constructivas.',
    proyectoDestacado: undefined,
    barrios: ['Es Mercadal Centro', 'Fornells', "Arenal d'en Castell", 'Son Parc', 'Platges de Fornells'],
    tipoVivienda: 'Casas tradicionales del interior, villas en urbanizaciones del norte y locales de hostelería (Fornells)',
    problemaHabitual: 'Exposición a la tramontana en la costa norte (puentes térmicos), aislamiento acústico en apartamentos de Son Parc y humedad en restaurantes del puerto de Fornells',
  },
  {
    slug: 'pladur-ferreries',
    nombre: 'Ferreries',
    h1: 'Instaladores de Pladur en Ferreries',
    descripcion: 'Pladur en Ferreries. Reformas en casas de pueblo, apartamentos turísticos y villas en Santa Galdana y Cala Mitjana.',
    href: '/pladur-ferreries',
    heroImage: '/images/proyectos/pasillo-tabiques-villa.webp',
    metaTitle: 'Pladur en Ferreries | Santa Galdana, Cala Mitjana',
    metaDescription: 'Instaladores de pladur en Ferreries, Menorca. Casas de pueblo y villas en Santa Galdana y Cala Mitjana. Reformas rápidas. 627 829 723.',
    introLocal: 'Ferreries es el pueblo de interior más joven de Menorca en su emplazamiento actual y un punto de acceso natural a las calas del sur (Santa Galdana, Cala Mitjana, Cala Trebalúger). Combina viviendas tradicionales en el núcleo urbano con villas y apartamentos en la costa.',
    serviciosLocal: 'Realizamos reformas en casas de pueblo con sistemas de pladur que respetan sus características constructivas, villas de costa con falsos techos decorativos y aislamiento térmico, y reformas rápidas en apartamentos turísticos entre temporadas.',
    proyectoDestacado: undefined,
    barrios: ['Centro', 'Santa Galdana', 'Cala Mitjana', 'Son Morell'],
    tipoVivienda: 'Casas de pueblo, villas y apartamentos turísticos en calas del sur',
    problemaHabitual: 'Humedad por proximidad a la costa, distribuciones poco optimizadas y plazos ajustados entre temporadas turísticas',
  },
  {
    slug: 'pladur-sant-lluis',
    nombre: 'Sant Lluís',
    h1: 'Instaladores de Pladur en Sant Lluís',
    descripcion: 'Pladur en Sant Lluís. Villas y apartamentos en Punta Prima, Binibeca y Binissafuller. Mercado expat británico.',
    href: '/pladur-sant-lluis',
    heroImage: '/images/proyectos/aislamiento-acustico-apartamento-turistico.webp',
    metaTitle: 'Pladur en Sant Lluís | Punta Prima, Binibeca, Binissafuller',
    metaDescription: 'Instalación de pladur en Sant Lluís, Menorca. Villas y apartamentos en Punta Prima, Binibeca y Binissafuller. Servicio bilingüe. 627 829 723.',
    introLocal: 'Sant Lluís concentra algunas de las zonas costeras más codiciadas de Menorca (Punta Prima, Binibeca Vell, Binissafuller) y tiene una fuerte presencia de propietarios expatriados, especialmente británicos. Está muy cerca del aeropuerto, lo que facilita reformas coordinadas con visitas del propietario. Ofrecemos atención bilingüe (ES/EN).',
    serviciosLocal: 'Reformas integrales de villas con estándares de alta gama, aislamiento acústico para apartamentos turísticos, falsos techos decorativos, pladur hidrófugo en baños y trasdosados para mejorar la eficiencia energética.',
    proyectoDestacado: undefined,
    barrios: ['Centro Sant Lluís', 'Punta Prima', 'Binibeca Vell', 'Binissafuller', "S'Algar", 'Alcaufar'],
    tipoVivienda: 'Villas unifamiliares de costa, apartamentos turísticos y casas típicas blancas de la zona',
    problemaHabitual: 'Aislamiento acústico entre viviendas pareadas, humedad en baños y necesidad de acabados de alta gama con atención bilingüe',
  },
  {
    slug: 'pladur-es-migjorn-gran',
    nombre: 'Es Migjorn Gran',
    h1: 'Instaladores de Pladur en Es Migjorn Gran',
    descripcion: 'Pladur en Es Migjorn Gran. Reformas en el pueblo interior y villas en Santo Tomás y Sant Adeodat.',
    href: '/pladur-es-migjorn-gran',
    heroImage: '/images/proyectos/detalle-perfileria-aislamiento-pladur.webp',
    metaTitle: 'Pladur en Es Migjorn Gran | Santo Tomás, Sant Adeodat',
    metaDescription: 'Instalación de pladur en Es Migjorn Gran, Menorca. Pueblo interior y villas en Santo Tomás y Sant Adeodat. 627 829 723.',
    introLocal: 'Es Migjorn Gran es el municipio más pequeño de Menorca en población, con un pueblo interior tranquilo y una franja costera al sur (Santo Tomás, Sant Adeodat) caracterizada por apartamentos y viviendas vacacionales de gama media-alta. El volumen de obra es menor pero la demanda es constante.',
    serviciosLocal: 'Reformas en casas del pueblo con sistemas en seco, falsos techos en apartamentos de Santo Tomás, aislamiento acústico entre viviendas y pladur hidrófugo para baños.',
    proyectoDestacado: undefined,
    barrios: ['Centro', 'Santo Tomás', 'Sant Adeodat'],
    tipoVivienda: 'Casas de pueblo, apartamentos y villas en primera línea de costa',
    problemaHabitual: 'Humedad salina en viviendas de primera línea, ruido entre apartamentos y acabados desgastados por el tiempo',
  },
  {
    slug: 'pladur-es-castell',
    nombre: 'Es Castell',
    h1: 'Instaladores de Pladur en Es Castell',
    descripcion: 'Pladur en Es Castell. Zona residencial histórica junto al Puerto de Maó con fuerte comunidad británica.',
    href: '/pladur-es-castell',
    heroImage: '/images/proyectos/reforma-integral-piso.webp',
    metaTitle: 'Pladur en Es Castell | Cala Sant Esteve, Sol del Este',
    metaDescription: 'Instaladores de pladur en Es Castell, Menorca. Viviendas residenciales junto al Puerto de Maó, Cala Sant Esteve y Sol del Este. Servicio bilingüe. 627 829 723.',
    introLocal: 'Es Castell conserva una arquitectura colonial británica única en Baleares, fruto de su pasado militar. Es una zona residencial de alto nivel, muy ligada al Puerto de Maó, con viviendas unifamiliares, casas coloniales restauradas y urbanizaciones como Cala Sant Esteve y Sol del Este donde abundan propietarios británicos y alemanes.',
    serviciosLocal: 'Restauración de casas coloniales con sistemas compatibles con la edificación original, aislamiento acústico y térmico en villas modernas, falsos techos decorativos y reformas de baños con placa hidrófuga. Atención bilingüe (ES/EN).',
    proyectoDestacado: undefined,
    barrios: ['Centro Es Castell', 'Cala Sant Esteve', 'Sol del Este', 'Cala Corb'],
    tipoVivienda: 'Casas coloniales británicas, viviendas unifamiliares de costa, apartamentos modernos',
    problemaHabitual: 'Rehabilitación de edificios históricos con estructuras originales, humedad salina en primera línea de costa y necesidad de atención bilingüe',
  },
]

export const getAllMunicipios = () => municipios
export const getMunicipioBySlug = (slug: string) =>
  municipios.find((m) => m.slug === slug)

// Lista de los 8 municipios Menorca para formularios y zonas de servicio
export const allMunicipiosMenorca = [
  'Alaior', 'Ciutadella', 'Es Castell', 'Es Mercadal', 'Es Migjorn Gran',
  'Ferreries', 'Maó', 'Sant Lluís',
]

