export interface Servicio {
  slug: string
  nombre: string
  nombreCorto: string
  h1: string
  descripcion: string
  href: string
  icon: string
  heroImage: string
  metaTitle: string
  metaDescription: string
  introTexto: string
  tiposTexto: string
  ventajasTexto: string
  procesoTexto: string
  schema: {
    name: string
    description: string
    serviceType: string
  }
}

export const servicios: Servicio[] = [
  {
    slug: 'instalacion-pladur-mallorca',
    nombre: 'Instalación de Pladur',
    nombreCorto: 'Instalación Pladur',
    h1: 'Instalación de Pladur en Mallorca — Especialistas con +20 Años',
    descripcion: 'Instaladores profesionales de pladur en Mallorca. Falsos techos, tabiques, aislamiento y trasdosados. Presupuesto gratis.',
    href: '/instalacion-pladur-mallorca',
    icon: 'construccion',
    heroImage: '/images/proyectos/villa-obra-nueva-pladur-integral-mallorca.webp',
    metaTitle: 'Instaladores de Pladur en Mallorca | +20 Años | Presupuesto Gratis',
    metaDescription: 'Empresa especializada en instalación de pladur en Mallorca. Falsos techos, tabiques, aislamiento acústico y térmico. Más de 20 años de experiencia. ☎ 627 829 723',
    introTexto: 'El pladur —conocido también como placa de yeso laminado o cartón-yeso— es el sistema constructivo en seco más utilizado en España para interiores. Fabricado por empresas líderes como Saint-Gobain Placo, Knauf y Lafarge, consiste en un núcleo de yeso encapsulado entre dos láminas de cartón especial. Su versatilidad permite crear desde simples tabiques de distribución hasta complejos sistemas de falsos techos con aislamiento acústico y térmico integrado.',
    tiposTexto: 'Existen múltiples tipos de placa según la aplicación: estándar (A), resistente a la humedad (H), cortafuego (F), acústica y de alta dureza. En Pladur Mallorca trabajamos con todas las referencias del catálogo para adaptarnos a cada proyecto.',
    ventajasTexto: 'El pladur ofrece una instalación hasta 3 veces más rápida que la obra tradicional, genera menos escombros, permite correcciones sin demoliciones costosas y mejora notablemente el aislamiento acústico y térmico. Además, su acabado es superior al enfoscado convencional.',
    procesoTexto: 'Nuestro proceso incluye: visita técnica gratuita, medición y presupuesto detallado, preparación de la zona, montaje de la estructura metálica, instalación de la placa, tratamiento de juntas y acabado final listo para pintar.',
    schema: {
      name: 'Instalación de Pladur en Mallorca',
      description: 'Servicio profesional de instalación de pladur (yeso laminado) en Mallorca. Falsos techos, tabiques, aislamiento acústico y térmico.',
      serviceType: 'Construcción en Seco',
    },
  },
  {
    slug: 'falsos-techos-pladur-mallorca',
    nombre: 'Falsos Techos de Pladur',
    nombreCorto: 'Falsos Techos',
    h1: 'Falsos Techos de Pladur en Mallorca — Instalación Profesional',
    descripcion: 'Instalación de falsos techos de pladur en Mallorca. Continuos, decorativos, registrables y acústicos. Precios competitivos.',
    href: '/falsos-techos-pladur-mallorca',
    icon: 'techo',
    heroImage: '/images/proyectos/salon-falso-techo-pladur-villa-mallorca.webp',
    metaTitle: 'Falsos Techos Pladur Mallorca | Continuos, Decorativos, Acústicos',
    metaDescription: 'Instalación de falsos techos de pladur en Mallorca. Techos continuos, decorativos, registrables y acústicos. Desde 29€/m². Presupuesto sin compromiso. ☎ 627 829 723',
    introTexto: 'Un falso techo de pladur transforma por completo el aspecto de cualquier estancia. Permite ocultar instalaciones eléctricas, de fontanería y climatización, mejorar el aislamiento acústico entre plantas e integrar iluminación empotrada LED para crear ambientes únicos. En Mallorca, donde los edificios históricos abundan —especialmente en Palma y sus barrios antiguos— los falsos techos son la solución perfecta para modernizar interiores sin tocar la estructura original.',
    tiposTexto: 'Instalamos cinco tipos principales de falsos techos: continuos registrables (con acceso a instalaciones mediante trampillas), continuos no registrables (acabado limpio y homogéneo), decorativos con molduras y relieves, techos acústicos con placas fonoabsorbentes y techos técnicos con integración LED y sistemas de climatización.',
    ventajasTexto: 'Los falsos techos de pladur mejoran el aislamiento acústico entre 8 y 15 dB, reducen la transmisión de calor hasta un 30%, permiten integrar instalaciones sin obra y ofrecen un acabado completamente liso listo para pintar.',
    procesoTexto: 'Instalamos el perfil perimetral, la estructura de montantes, la placa de yeso, el tratamiento de juntas con banda y pasta, el lijado y el acabado final. El tiempo medio de un techo de 50m² es de 1-2 jornadas de trabajo.',
    schema: {
      name: 'Falsos Techos de Pladur en Mallorca',
      description: 'Instalación profesional de falsos techos de pladur en Mallorca. Techos continuos, decorativos, registrables y acústicos.',
      serviceType: 'Instalación de Falsos Techos',
    },
  },
  {
    slug: 'tabiques-pladur-mallorca',
    nombre: 'Tabiques de Pladur',
    nombreCorto: 'Tabiques',
    h1: 'Tabiques de Pladur en Mallorca — Distribución Rápida y Limpia',
    descripcion: 'Tabiques y particiones de pladur en Mallorca. Distribución de espacios, oficinas y viviendas. Sin obra, sin escombros.',
    href: '/tabiques-pladur-mallorca',
    icon: 'tabique',
    heroImage: '/images/proyectos/pasillo-tabiques-pladur-villa-mallorca.webp',
    metaTitle: 'Tabiques Pladur Mallorca | Distribución Espacios | Sin Obra',
    metaDescription: 'Tabiques de pladur en Mallorca para distribución de espacios en viviendas y oficinas. Sin obra sucia, instalación rápida. Desde 45€/m². ☎ 627 829 723',
    introTexto: 'Los tabiques de pladur son la alternativa más eficiente a la tabiquería tradicional de ladrillo o bloque. Permiten redistribuir espacios interiores con una obra mínima, sin necesidad de demoler ni generar toneladas de escombros. Son especialmente populares en oficinas, donde la distribución debe adaptarse a las necesidades cambiantes del negocio, y en viviendas donde se busca mejorar la distribución sin intervenir en la estructura.',
    tiposTexto: 'Trabajamos con tabiques de distribución simple (70 o 98mm), tabiques con aislamiento acústico reforzado (doble placa con lana mineral), tabiques cortafuego (EI-30, EI-60, EI-90 y EI-120), trasdosados autoportantes para mejorar el aislamiento de medianeras y muros húmedos, y mamparas de oficina desmontables.',
    ventajasTexto: 'Frente al ladrillo tradicional, el pladur es 3-4 veces más rápido de instalar, pesa un 60% menos (sin sobrecarga en forjados), permite el paso de instalaciones por el interior de los montantes y ofrece un acabado superior en planimetría.',
    procesoTexto: 'Marcamos la posición en suelo y techo, instalamos los perfiles guía, montamos los montantes, pasamos las instalaciones eléctricas si es necesario, colocamos el aislamiento interior (lana mineral o EPS), fijamos las placas, tratamos juntas y damos el acabado final.',
    schema: {
      name: 'Tabiques de Pladur en Mallorca',
      description: 'Instalación de tabiques y particiones de pladur en Mallorca para distribución de espacios en viviendas y locales comerciales.',
      serviceType: 'Tabiquería en Seco',
    },
  },
  {
    slug: 'aislamiento-acustico-mallorca',
    nombre: 'Aislamiento Acústico',
    nombreCorto: 'Aislamiento Acústico',
    h1: 'Aislamiento Acústico en Mallorca — Soluciones con Pladur',
    descripcion: 'Aislamiento acústico con pladur en Mallorca. Reducción de ruido entre viviendas, oficinas y locales. Cumplimiento CTE-HR.',
    href: '/aislamiento-acustico-mallorca',
    icon: 'acustico',
    heroImage: '/images/proyectos/aislamiento-acustico-apartamento-turistico-pladur-mallorca.webp',
    metaTitle: 'Aislamiento Acústico Mallorca | Pladur | Cumplimiento CTE-HR',
    metaDescription: 'Soluciones de aislamiento acústico con pladur en Mallorca. Reducción de ruido de impacto y aéreo. Cumplimiento normativa CTE-HR. ☎ 627 829 723',
    introTexto: 'El ruido es uno de los principales problemas de habitabilidad en Mallorca, especialmente en zonas turísticas, edificios plurifamiliares y locales comerciales. El aislamiento acústico con sistemas de pladur permite reducir significativamente la transmisión de ruido aéreo (voces, música, televisión) y de impacto (pasos, caídas de objetos) mediante sistemas constructivos certificados que cumplen la normativa CTE-HR.',
    tiposTexto: 'Distinguimos entre aislamiento acústico aéreo (ruido de voces y equipos) e impacto (pasos entre plantas). Para paredes y techos utilizamos sistemas de doble placa con lana mineral de alta densidad, montantes desvinculados con bandas resilientes y cámaras de aire. Para suelos, aplicamos sistemas flotantes con materiales amortiguadores.',
    ventajasTexto: 'Con nuestros sistemas de aislamiento acústico conseguimos reducciones de entre 40 y 55 dB según la solución elegida, cumpliendo sobradamente los mínimos del CTE-HR (47 dB para paredes entre viviendas). Ideal para hoteles, apartamentos turísticos, estudios de música y viviendas en zonas ruidosas.',
    procesoTexto: 'Realizamos una auditoría acústica previa para identificar el problema (tipo de ruido, fuente, frecuencias), dimensionamos la solución adecuada, preparamos la superficie, instalamos el sistema y verificamos el resultado con mediciones.',
    schema: {
      name: 'Aislamiento Acústico en Mallorca',
      description: 'Servicios de aislamiento acústico con sistemas de pladur en Mallorca. Cumplimiento CTE-HR para viviendas, locales y hoteles.',
      serviceType: 'Aislamiento Acústico',
    },
  },
  {
    slug: 'aislamiento-termico-mallorca',
    nombre: 'Aislamiento Térmico',
    nombreCorto: 'Aislamiento Térmico',
    h1: 'Aislamiento Térmico en Mallorca — Ahorra en Climatización con Pladur',
    descripcion: 'Aislamiento térmico con pladur en Mallorca. Trasdosados, lana mineral y EPS. Ahorra hasta un 30% en climatización.',
    href: '/aislamiento-termico-mallorca',
    icon: 'termico',
    heroImage: '/images/proyectos/detalle-perfileria-aislamiento-pladur.webp',
    metaTitle: 'Aislamiento Térmico Mallorca | Pladur | Ahorra en Climatización',
    metaDescription: 'Aislamiento térmico con sistemas de pladur en Mallorca. Trasdosados, lana mineral, EPS. Reduce hasta un 30% tu factura de climatización. ☎ 627 829 723',
    introTexto: 'El clima mediterráneo de Mallorca —veranos calurosos con temperaturas que superan los 35°C e inviernos templados pero húmedos— hace del aislamiento térmico una inversión rentable y amortizable en pocos años. Los trasdosados de pladur con aislante interior permiten mejorar notablemente la eficiencia energética de edificios sin necesidad de actuar sobre la fachada exterior, lo que resulta especialmente valioso en edificios protegidos o comunidades con limitaciones estéticas.',
    tiposTexto: 'Trabajamos con tres tipos de aislantes según la aplicación: lana mineral (lana de roca o de vidrio, ideal para combinación con aislamiento acústico), poliestireno expandido EPS (económico y eficiente para superficies regulares) y poliuretano proyectado (para cubiertas y superficies irregulares). Cada material se elige en función de la transmitancia U requerida.',
    ventajasTexto: 'Un correcto aislamiento térmico con pladur puede reducir la demanda de climatización entre un 20 y un 35%, mejorar la calificación energética del inmueble (relevante para venta o alquiler), reducir los puentes térmicos y mejorar el confort interior en todas las estaciones.',
    procesoTexto: 'Evaluamos el estado actual del cerramiento, calculamos la solución según la zona climática de Mallorca (C3), seleccionamos el material y espesor adecuados, instalamos la estructura, el aislante y la placa de pladur, y realizamos el tratamiento final de juntas.',
    schema: {
      name: 'Aislamiento Térmico en Mallorca',
      description: 'Servicios de aislamiento térmico con pladur en Mallorca. Trasdosados con lana mineral, EPS y poliuretano para mejorar la eficiencia energética.',
      serviceType: 'Aislamiento Térmico',
    },
  },
  {
    slug: 'escayola-mallorca',
    nombre: 'Escayola',
    nombreCorto: 'Escayola',
    h1: 'Escayola en Mallorca — Techos, Molduras y Restauración',
    descripcion: 'Escayola en Mallorca. Techos continuos, molduras, cornisas y restauración de edificios históricos. Acabado artesanal.',
    href: '/escayola-mallorca',
    icon: 'escayola',
    heroImage: '/images/proyectos/reforma-integral-piso-santa-catalina-pladur-mallorca.webp',
    metaTitle: 'Escayola Mallorca | Techos, Molduras, Restauración | +20 Años',
    metaDescription: 'Escayola en Mallorca. Techos de escayola, molduras, cornisas y restauración de edificios históricos. Más de 20 años. Presupuesto gratis ☎ 627 829 723',
    introTexto: 'La escayola es un material de construcción a base de yeso de alta pureza utilizado desde la antigüedad para crear techos, molduras y elementos decorativos en interiores. A diferencia del pladur (placa de yeso laminado), la escayola se aplica de forma artesanal, lo que permite obtener acabados sin juntas visibles y superficies perfectamente lisas con una calidez estética única.',
    tiposTexto: 'Instalamos techos de escayola continua (lisa y de alta dureza E-45), molduras y cornisas decorativas, escayola proyectada para grandes superficies, y realizamos restauración de elementos ornamentales en edificios históricos. También combinamos pladur con acabado de escayola.',
    ventajasTexto: 'La escayola ofrece un acabado noble y sin juntas, es un material transpirable que regula la humedad, tiene excelente comportamiento acústico y permite crear cualquier forma decorativa. Es la opción preferida para restauración de edificios históricos y proyectos de alta gama.',
    procesoTexto: 'Nuestro proceso incluye: visita técnica gratuita, evaluación del soporte, preparación de la superficie, aplicación de la escayola (manual o proyectada), tratamiento de juntas y uniones, y acabado final listo para pintar en 24-48 horas.',
    schema: {
      name: 'Escayola en Mallorca',
      description: 'Instalación de escayola en Mallorca: techos continuos, molduras decorativas, cornisas, restauración de edificios históricos y escayola proyectada.',
      serviceType: 'Instalación de Escayola',
    },
  },
  {
    slug: 'precios-pladur-mallorca',
    nombre: 'Precios del Pladur',
    nombreCorto: 'Precios',
    h1: 'Precio del Pladur en Mallorca 2025 — Tabla Completa por Servicio',
    descripcion: 'Precios actualizados de pladur en Mallorca. Falsos techos desde 29€/m², tabiques desde 45€/m². Consulta nuestra tabla de precios.',
    href: '/precios-pladur-mallorca',
    icon: 'precio',
    heroImage: '/images/proyectos/reforma-integral-piso-santa-catalina-pladur-mallorca.webp',
    metaTitle: 'Precio Pladur Mallorca 2025 | Tabla por Servicio | Desde 29€/m²',
    metaDescription: 'Precios actualizados del pladur en Mallorca 2025. Falsos techos desde 29€/m², tabiques desde 45€/m², aislamiento desde 6€/m². Consulta sin compromiso. ☎ 627 829 723',
    introTexto: 'El precio del pladur en Mallorca depende de varios factores: el tipo de sistema (falso techo, tabique, trasdosado), el tipo de placa elegida (estándar, humedad, acústica, cortafuego), la complejidad de la instalación y el estado del soporte. En esta página encontrarás una guía de precios actualizada para 2025 con los rangos habituales en Mallorca, más elevados que en la Península por los costes logísticos de la isla.',
    tiposTexto: 'Los precios varían según el servicio. Un falso techo continuo simple empieza en 29€/m² y puede llegar a 47€/m² en sistemas acústicos complejos. Los tabiques de distribución básicos parten de 45€/m², y los sistemas con aislamiento acústico reforzado pueden alcanzar los 60€/m².',
    ventajasTexto: 'Pedir presupuesto es siempre gratis y sin compromiso. Realizamos visita técnica a tu domicilio o local, medimos in situ y elaboramos un presupuesto detallado y desglosado en 24-48 horas.',
    procesoTexto: 'El precio final incluye materiales (placas, estructura metálica, aislante, pasta y cinta), mano de obra especializada y limpieza final. Los precios de esta página son orientativos; el presupuesto exacto lo obtendrás tras la visita técnica.',
    schema: {
      name: 'Precios de Pladur en Mallorca',
      description: 'Guía de precios actualizada para instalación de pladur en Mallorca. Falsos techos, tabiques, aislamiento acústico y térmico.',
      serviceType: 'Presupuestos de Pladur',
    },
  },
]

export const getServicioBySlug = (slug: string) =>
  servicios.find((s) => s.slug === slug)
