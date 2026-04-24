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
    slug: 'instalacion-pladur-menorca',
    nombre: 'Instalación de Pladur',
    nombreCorto: 'Instalación Pladur',
    h1: 'Instalación Profesional de Pladur en Menorca',
    descripcion: 'Instaladores profesionales de pladur en Menorca. Falsos techos, tabiques, aislamiento y trasdosados. Presupuesto gratis.',
    href: '/instalacion-pladur-menorca',
    icon: 'construccion',
    heroImage: '/images/proyectos/villa-obra-nueva-pladur-integral.webp',
    metaTitle: 'Instalación de Pladur en Menorca | Empresa Especializada',
    metaDescription: 'Empresa especializada en instalación de pladur en Menorca. Falsos techos, tabiques, trasdosados. Placo y Knauf. Presupuesto gratis.',
    introTexto: 'El pladur —conocido también como placa de yeso laminado o cartón-yeso— es el sistema constructivo en seco más utilizado en España para interiores. Fabricado por empresas líderes como Saint-Gobain Placo, Knauf y Lafarge, consiste en un núcleo de yeso encapsulado entre dos láminas de cartón especial. Su versatilidad permite crear desde simples tabiques de distribución hasta complejos sistemas de falsos techos con aislamiento acústico y térmico integrado. En Menorca, donde la logística de materiales tiene particularidades propias de una isla pequeña, contar con un equipo con experiencia y suministro garantizado marca la diferencia.',
    tiposTexto: 'Existen múltiples tipos de placa según la aplicación: estándar (A), resistente a la humedad (H), cortafuego (F), acústica y de alta dureza. En Pladur Menorca trabajamos con todas las referencias del catálogo Placo y Knauf, con suministro coordinado desde Distriplac Menorca como distribuidor aliado.',
    ventajasTexto: 'El pladur ofrece una instalación hasta 3 veces más rápida que la obra tradicional, genera menos escombros, permite correcciones sin demoliciones costosas y mejora notablemente el aislamiento acústico y térmico. Además, su acabado es superior al enfoscado convencional.',
    procesoTexto: 'Nuestro proceso incluye: visita técnica, medición y presupuesto detallado, preparación de la zona, montaje de la estructura metálica, instalación de la placa, tratamiento de juntas y acabado final listo para pintar.',
    schema: {
      name: 'Instalación de Pladur en Menorca',
      description: 'Servicio profesional de instalación de pladur (yeso laminado) en Menorca. Falsos techos, tabiques, aislamiento acústico y térmico.',
      serviceType: 'Construcción en Seco',
    },
  },
  {
    slug: 'falsos-techos-pladur-menorca',
    nombre: 'Falsos Techos de Pladur',
    nombreCorto: 'Falsos Techos',
    h1: 'Falsos Techos de Pladur en Menorca',
    descripcion: 'Instalación de falsos techos de pladur en Menorca. Continuos, decorativos, registrables y acústicos. Desde 30 €/m².',
    href: '/falsos-techos-pladur-menorca',
    icon: 'techo',
    heroImage: '/images/proyectos/salon-falso-techo-villa.webp',
    metaTitle: 'Falsos Techos de Pladur en Menorca | Desde 30 €/m²',
    metaDescription: 'Falsos techos de pladur en Menorca: continuos, decorativos, registrables, acústicos. +20 años. Desde 30 €/m². Presupuesto gratis.',
    introTexto: 'Un falso techo de pladur transforma por completo el aspecto de cualquier estancia. Permite ocultar instalaciones eléctricas, de fontanería y climatización, mejorar el aislamiento acústico entre plantas e integrar iluminación empotrada LED. En Menorca, donde los edificios históricos abundan —especialmente en el casco antiguo de Maó y Ciutadella— los falsos techos son la solución perfecta para modernizar interiores sin tocar la estructura original.',
    tiposTexto: 'Instalamos cinco tipos principales de falsos techos: continuos registrables (con acceso a instalaciones mediante trampillas), continuos no registrables (acabado limpio y homogéneo), decorativos con molduras y relieves, techos acústicos con placas fonoabsorbentes y techos técnicos con integración LED y sistemas de climatización.',
    ventajasTexto: 'Los falsos techos de pladur mejoran el aislamiento acústico entre 8 y 15 dB, reducen la transmisión de calor hasta un 30%, permiten integrar instalaciones sin obra y ofrecen un acabado completamente liso listo para pintar.',
    procesoTexto: 'Instalamos el perfil perimetral, la estructura de montantes, la placa de yeso, el tratamiento de juntas con banda y pasta, el lijado y el acabado final. El tiempo medio de un techo de 50 m² es de 1-2 jornadas.',
    schema: {
      name: 'Falsos Techos de Pladur en Menorca',
      description: 'Instalación profesional de falsos techos de pladur en Menorca. Techos continuos, decorativos, registrables y acústicos.',
      serviceType: 'Instalación de Falsos Techos',
    },
  },
  {
    slug: 'tabiques-pladur-menorca',
    nombre: 'Tabiques de Pladur',
    nombreCorto: 'Tabiques',
    h1: 'Tabiques y Particiones de Pladur en Menorca',
    descripcion: 'Tabiques y particiones de pladur en Menorca. Distribución sin obra, sin escombros. Desde 46 €/m².',
    href: '/tabiques-pladur-menorca',
    icon: 'tabique',
    heroImage: '/images/proyectos/pasillo-tabiques-villa.webp',
    metaTitle: 'Tabiques de Pladur en Menorca | Particiones | Desde 46 €/m²',
    metaDescription: 'Tabiques y particiones de pladur en Menorca. Distribución sin obra, sin escombros. Instalación rápida. Desde 46 €/m². 627 829 723.',
    introTexto: 'Los tabiques de pladur son la alternativa más eficiente a la tabiquería tradicional de ladrillo o bloque. Permiten redistribuir espacios interiores con una obra mínima, sin necesidad de demoler ni generar toneladas de escombros. En Menorca son especialmente útiles para reformas en fincas históricas protegidas, oficinas en Maó, apartamentos turísticos de Sant Lluís o villas en Ciutadella donde se busca mejorar la distribución sin intervenir en la estructura.',
    tiposTexto: 'Trabajamos con tabiques de distribución simple (70 o 98 mm), tabiques con aislamiento acústico reforzado (doble placa con lana mineral), tabiques cortafuego (EI-30, EI-60, EI-90 y EI-120), trasdosados autoportantes para mejorar el aislamiento de medianeras y muros húmedos, y mamparas de oficina desmontables.',
    ventajasTexto: 'Frente al ladrillo tradicional, el pladur es 3-4 veces más rápido de instalar, pesa un 60 % menos (sin sobrecarga en forjados), permite el paso de instalaciones por el interior de los montantes y ofrece un acabado superior en planimetría.',
    procesoTexto: 'Marcamos la posición en suelo y techo, instalamos los perfiles guía, montamos los montantes, pasamos las instalaciones eléctricas si es necesario, colocamos el aislamiento interior (lana mineral o EPS), fijamos las placas, tratamos juntas y damos el acabado final.',
    schema: {
      name: 'Tabiques de Pladur en Menorca',
      description: 'Instalación de tabiques y particiones de pladur en Menorca para distribución de espacios en viviendas y locales comerciales.',
      serviceType: 'Tabiquería en Seco',
    },
  },
  {
    slug: 'aislamiento-acustico-menorca',
    nombre: 'Aislamiento Acústico',
    nombreCorto: 'Aislamiento Acústico',
    h1: 'Aislamiento Acústico e Insonorización en Menorca',
    descripcion: 'Aislamiento acústico con pladur en Menorca. Reducción de ruido entre viviendas, oficinas y locales. Cumplimiento CTE-HR.',
    href: '/aislamiento-acustico-menorca',
    icon: 'acustico',
    heroImage: '/images/proyectos/aislamiento-acustico-apartamento-turistico.webp',
    metaTitle: 'Aislamiento Acústico en Menorca | Insonorización Profesional',
    metaDescription: 'Aislamiento acústico e insonorización en Menorca. Paredes, techos, suelos. Cumplimiento CTE-HR. +20 años. 627 829 723.',
    introTexto: 'El ruido es uno de los principales problemas de habitabilidad en Menorca, especialmente en apartamentos turísticos, hoteles y edificios plurifamiliares del entorno del Puerto de Maó o del Castell. El aislamiento acústico con sistemas de pladur permite reducir significativamente la transmisión de ruido aéreo y de impacto mediante sistemas certificados que cumplen la normativa CTE-HR.',
    tiposTexto: 'Distinguimos entre aislamiento acústico aéreo (ruido de voces y equipos) e impacto (pasos entre plantas). Para paredes y techos utilizamos sistemas de doble placa con lana mineral de alta densidad, montantes desvinculados con bandas resilientes y cámaras de aire. Para suelos, aplicamos sistemas flotantes con materiales amortiguadores.',
    ventajasTexto: 'Con nuestros sistemas de aislamiento acústico conseguimos reducciones de entre 40 y 55 dB según la solución elegida, cumpliendo sobradamente los mínimos del CTE-HR (47 dB para paredes entre viviendas). Ideal para hoteles, apartamentos turísticos, estudios de música y viviendas en zonas ruidosas.',
    procesoTexto: 'Realizamos un estudio acústico gratuito para identificar el problema (tipo de ruido, fuente, frecuencias), dimensionamos la solución adecuada, preparamos la superficie, instalamos el sistema y verificamos el resultado con mediciones.',
    schema: {
      name: 'Aislamiento Acústico en Menorca',
      description: 'Servicios de aislamiento acústico con sistemas de pladur en Menorca. Cumplimiento CTE-HR para viviendas, locales y hoteles.',
      serviceType: 'Aislamiento Acústico',
    },
  },
  {
    slug: 'aislamiento-termico-menorca',
    nombre: 'Aislamiento Térmico',
    nombreCorto: 'Aislamiento Térmico',
    h1: 'Aislamiento Térmico en Menorca',
    descripcion: 'Aislamiento térmico con pladur en Menorca. Trasdosados, lana mineral y EPS. Ahorra hasta un 30 % en climatización.',
    href: '/aislamiento-termico-menorca',
    icon: 'termico',
    heroImage: '/images/proyectos/detalle-perfileria-aislamiento-pladur.webp',
    metaTitle: 'Aislamiento Térmico en Menorca | Ahorra 30 % en Climatización',
    metaDescription: 'Aislamiento térmico con pladur en Menorca. Trasdosados, lana mineral, EPS. Hasta −30 % en climatización. Subvenciones disponibles.',
    introTexto: 'El clima mediterráneo de Menorca —veranos calurosos con tramontana suavizante e inviernos templados pero húmedos con fuerte viento del norte— hace del aislamiento térmico una inversión rentable y amortizable en pocos años. Los trasdosados de pladur con aislante interior permiten mejorar notablemente la eficiencia energética de edificios sin necesidad de actuar sobre la fachada exterior, especialmente valioso en edificios protegidos o villas con limitaciones estéticas.',
    tiposTexto: 'Trabajamos con tres tipos de aislantes según la aplicación: lana mineral (lana de roca o de vidrio, ideal para combinación con aislamiento acústico), poliestireno expandido EPS (económico y eficiente para superficies regulares) y poliuretano proyectado (para cubiertas y superficies irregulares). Cada material se elige en función de la transmitancia U requerida.',
    ventajasTexto: 'Un correcto aislamiento térmico con pladur puede reducir la demanda de climatización entre un 20 y un 35 %, mejorar la calificación energética del inmueble (relevante para venta o alquiler turístico), reducir los puentes térmicos y mejorar el confort interior en todas las estaciones. Consulta las subvenciones MITECO/IDAE vigentes en 2026.',
    procesoTexto: 'Evaluamos el estado actual del cerramiento, calculamos la solución según la zona climática de Menorca (B3), seleccionamos el material y espesor adecuados, instalamos la estructura, el aislante y la placa de pladur, y realizamos el tratamiento final de juntas.',
    schema: {
      name: 'Aislamiento Térmico en Menorca',
      description: 'Servicios de aislamiento térmico con pladur en Menorca. Trasdosados con lana mineral, EPS y poliuretano para mejorar la eficiencia energética.',
      serviceType: 'Aislamiento Térmico',
    },
  },
  {
    slug: 'escayola-menorca',
    nombre: 'Escayola',
    nombreCorto: 'Escayola',
    h1: 'Escayola en Menorca — Techos, Molduras y Restauración',
    descripcion: 'Escayola en Menorca. Techos continuos, molduras, cornisas y restauración de edificios históricos. Acabado artesanal.',
    href: '/escayola-menorca',
    icon: 'escayola',
    heroImage: '/images/proyectos/reforma-integral-piso.webp',
    metaTitle: 'Escayola en Menorca | Techos, Molduras y Restauración',
    metaDescription: 'Escayola en Menorca: techos continuos, molduras, cornisas y restauración de edificios históricos. Acabado artesanal. Presupuesto gratis.',
    introTexto: 'La escayola es un material de construcción a base de yeso de alta pureza utilizado desde la antigüedad para crear techos, molduras y elementos decorativos. A diferencia del pladur, la escayola se aplica de forma artesanal, lo que permite obtener acabados sin juntas visibles y superficies perfectamente lisas con una calidez estética única. En Menorca es especialmente relevante para restauración de patrimonio en los cascos antiguos de Maó y Ciutadella.',
    tiposTexto: 'Instalamos techos de escayola continua (lisa y de alta dureza E-45), molduras y cornisas decorativas, escayola proyectada para grandes superficies, y realizamos restauración de elementos ornamentales en edificios históricos. También combinamos pladur con acabado de escayola.',
    ventajasTexto: 'La escayola ofrece un acabado noble y sin juntas, es un material transpirable que regula la humedad, tiene excelente comportamiento acústico y permite crear cualquier forma decorativa. Es la opción preferida para restauración de edificios históricos y proyectos de alta gama.',
    procesoTexto: 'Nuestro proceso incluye: visita técnica, evaluación del soporte, preparación de la superficie, aplicación de la escayola (manual o proyectada), tratamiento de juntas y uniones, y acabado final listo para pintar en 24-48 horas.',
    schema: {
      name: 'Escayola en Menorca',
      description: 'Instalación de escayola en Menorca: techos continuos, molduras decorativas, cornisas, restauración de edificios históricos y escayola proyectada.',
      serviceType: 'Instalación de Escayola',
    },
  },
  {
    slug: 'precios-pladur-menorca',
    nombre: 'Precios del Pladur',
    nombreCorto: 'Precios',
    h1: 'Precio del Pladur en Menorca — Tarifas 2026',
    descripcion: 'Precios actualizados de pladur en Menorca 2026. Falsos techos desde 30 €/m², tabiques desde 46 €/m². Tabla completa por servicio.',
    href: '/precios-pladur-menorca',
    icon: 'precio',
    heroImage: '/images/proyectos/reforma-integral-piso.webp',
    metaTitle: 'Precio del Pladur en Menorca 2026 | Tabla por Servicio €/m²',
    metaDescription: 'Precios del pladur en Menorca 2026. Falsos techos 30-36 €/m², tabiques 46-54 €/m², aislamiento 7-22 €/m². Presupuesto sin sorpresas.',
    introTexto: 'El precio del pladur en Menorca depende de varios factores: el tipo de sistema (falso techo, tabique, trasdosado), el tipo de placa elegida (estándar, humedad, acústica, cortafuego), la complejidad de la instalación y el estado del soporte. Los precios en Menorca son un 3-8 % superiores a los de la Península y Menorca por los costes logísticos propios de una isla pequeña.',
    tiposTexto: 'Los precios varían según el servicio. Un falso techo continuo simple empieza en 30 €/m² y puede llegar a 52 €/m² en sistemas acústicos complejos. Los tabiques de distribución básicos parten de 46 €/m² y los sistemas con aislamiento acústico reforzado pueden alcanzar los 60 €/m².',
    ventajasTexto: 'Pedir presupuesto es siempre gratis y sin compromiso. Realizamos visita técnica a tu domicilio o local, medimos in situ y elaboramos un presupuesto detallado y desglosado en 24-48 horas.',
    procesoTexto: 'El precio final incluye materiales (placas, estructura metálica, aislante, pasta y cinta), mano de obra especializada y limpieza final. Los precios de esta página son orientativos; el presupuesto exacto lo obtendrás tras la visita técnica.',
    schema: {
      name: 'Precios de Pladur en Menorca',
      description: 'Guía de precios actualizada 2026 para instalación de pladur en Menorca. Falsos techos, tabiques, aislamiento acústico y térmico.',
      serviceType: 'Presupuestos de Pladur',
    },
  },
]

export const getServicioBySlug = (slug: string) =>
  servicios.find((s) => s.slug === slug)
