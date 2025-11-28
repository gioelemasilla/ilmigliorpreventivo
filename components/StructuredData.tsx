import Script from 'next/script';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${Math.random()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization Schema
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Il Miglior Preventivo',
    url: 'https://www.ilmigliorpreventivo.it',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.ilmigliorpreventivo.it/logo-512x512.png',
      width: 512,
      height: 512,
    },
    description: 'Confronta e risparmia su luce, gas, fibra, fotovoltaico e servizi energetici. Consulenza personalizzata per famiglie e imprese.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Italian'],
    },
    sameAs: [
      // Aggiungi social media se disponibili
      // 'https://www.facebook.com/ilmigliorpreventivo',
      // 'https://www.linkedin.com/company/ilmigliorpreventivo',
    ],
  };

  return <StructuredData data={data} />;
}

// Local Business Schema
export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Il Miglior Preventivo',
    image: 'https://www.ilmigliorpreventivo.it/images/logo.png',
    '@id': 'https://www.ilmigliorpreventivo.it',
    url: 'https://www.ilmigliorpreventivo.it',
    telephone: '+39-XXX-XXXXXXX',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'IT',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
  };

  return <StructuredData data={data} />;
}

// Service Schema
interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url: string;
}

export function ServiceSchema({ serviceName, description, url }: ServiceSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Il Miglior Preventivo',
      url: 'https://www.ilmigliorpreventivo.it',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Italy',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Servizi ${serviceName}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: serviceName,
            description,
          },
        },
      ],
    },
    url,
  };

  return <StructuredData data={data} />;
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData data={data} />;
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={data} />;
}

// Website Schema
export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Il Miglior Preventivo',
    url: 'https://www.ilmigliorpreventivo.it',
    description: 'Confronta e risparmia su luce, gas, fibra, fotovoltaico e servizi energetici',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.ilmigliorpreventivo.it/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <StructuredData data={data} />;
}
