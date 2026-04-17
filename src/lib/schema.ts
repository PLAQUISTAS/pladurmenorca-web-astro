import { siteConfig } from '@/data/site'
import type { FAQ } from '@/data/faqs'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    alternateName: ['Plaquistas y Acabados SL', 'pladurmallorca.com'],
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.webp`,
    image: `${siteConfig.url}/og/home.jpg`,
    description: siteConfig.description,
    telephone: `+34${siteConfig.phoneRaw}`,
    email: siteConfig.email,
    foundingDate: String(siteConfig.foundingYear),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 100,
    },
    slogan: 'Especialistas exclusivos en pladur en Mallorca desde 2004',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '14:00',
      },
    ],
    areaServed: siteConfig.areaServed.map((municipio) => ({
      '@type': 'City',
      name: municipio,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Islas Baleares',
      },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.aggregateRating.ratingValue,
      reviewCount: siteConfig.aggregateRating.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '€€',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de pladur en Mallorca',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Instalación de pladur',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instalación de pladur' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Falsos techos de pladur' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tabiques de pladur' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trasdosados de pladur' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Escayola decorativa y funcional' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Aislamiento',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aislamiento acústico' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aislamiento térmico' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pladur ignífugo' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pladur antihumedad' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Reformas',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reformas interiores con pladur' } },
          ],
        },
      ],
    },
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  }
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.respuesta,
      },
    })),
  }
}

export function serviceSchema({
  name,
  description,
  serviceType,
  url,
  image,
}: {
  name: string
  description: string
  serviceType: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Mallorca, Islas Baleares, España',
    },
    ...(image && { image: image.startsWith('http') ? image : `${siteConfig.url}${image}` }),
  }
}

export function breadcrumbSchema(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href.startsWith('http') ? item.href : `${siteConfig.url}${item.href}`,
    })),
  }
}

export function howToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string
  description: string
  steps: { name: string; text: string; image?: string }[]
  totalTime?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image.startsWith('http') ? step.image : `${siteConfig.url}${step.image}` }),
    })),
  }
}

export function offersSchema(
  offers: {
    name: string
    price: string
    description?: string
  }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: offers.map((offer, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          ...(offer.description && { description: offer.description }),
          provider: {
            '@id': `${siteConfig.url}/#organization`,
          },
        },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: offer.price,
          priceCurrency: 'EUR',
          unitCode: 'MTK',
          unitText: 'metro cuadrado',
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Mallorca, Islas Baleares, España',
        },
      },
    })),
  }
}

export function articleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = 'Equipo Pladur Mallorca',
  wordCount,
  articleSection,
  keywords,
}: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  authorName?: string
  wordCount?: number
  articleSection?: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: siteConfig.url,
    },
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    ...(image && { image: image.startsWith('http') ? image : `${siteConfig.url}${image}` }),
    ...(wordCount && { wordCount }),
    ...(articleSection && { articleSection }),
    ...(keywords && { keywords }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    },
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    inLanguage: 'es',
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
    inLanguage: 'es',
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: ['Plaquistas y Acabados SL', 'pladurmallorca.com'],
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      '@id': `${siteConfig.url}/#logo`,
      url: `${siteConfig.url}/images/logo.webp`,
      contentUrl: `${siteConfig.url}/images/logo.webp`,
      caption: siteConfig.name,
    },
    image: { '@id': `${siteConfig.url}/#logo` },
    foundingDate: String(siteConfig.foundingYear),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 100,
    },
    slogan: 'Especialistas exclusivos en pladur en Mallorca desde 2004',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.aggregateRating.ratingValue,
      reviewCount: siteConfig.aggregateRating.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: {
      '@type': 'State',
      name: 'Mallorca, Islas Baleares',
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+34${siteConfig.phoneRaw}`,
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: ['Spanish'],
    },
  }
}

export function aggregateOfferSchema({
  name,
  description,
  lowPrice,
  highPrice,
  offerCount,
}: {
  name: string
  description: string
  lowPrice: string
  highPrice: string
  offerCount: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    offers: {
      '@type': 'AggregateOffer',
      lowPrice,
      highPrice,
      priceCurrency: 'EUR',
      offerCount,
      availability: 'https://schema.org/InStock',
    },
    brand: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
  }
}

export function personSchema({
  name,
  jobTitle,
  description,
  image,
}: {
  name: string
  jobTitle: string
  description?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    ...(description && { description }),
    ...(image && { image: image.startsWith('http') ? image : `${siteConfig.url}${image}` }),
    worksFor: {
      '@id': `${siteConfig.url}/#organization`,
    },
    knowsAbout: [
      'Instalación de pladur',
      'Falsos techos',
      'Aislamiento acústico',
      'Aislamiento térmico',
      'Reformas interiores',
      'Sistemas en seco',
    ],
  }
}
