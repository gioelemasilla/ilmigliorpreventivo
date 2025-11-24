import { Metadata } from 'next';
import { PageData } from '@/types/wordpress';

export const siteConfig = {
  name: 'Il Miglior Preventivo',
  description: 'Confronta e risparmia su luce, gas, fibra, fotovoltaico e servizi energetici. Consulenza personalizzata per famiglie e imprese.',
  url: 'https://www.ilmigliorpreventivo.it',
  ogImage: '/images/og-image.jpg',
  locale: 'it_IT',
  type: 'website',
};

export function generatePageMetadata(page: PageData): Metadata {
  const title = page.title || siteConfig.name;
  const description = page.excerpt || extractTextFromHtml(page.content).substring(0, 160);

  // Extract first image from content for OG image
  const imageMatch = page.content.match(/src="([^"]+)"/);
  const ogImage = imageMatch ? imageMatch[1] : siteConfig.ogImage;

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: extractKeywords(page),
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: `${siteConfig.url}/${page.slug}`,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

function extractTextFromHtml(html: string): string {
  // Remove HTML tags and decode entities
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractKeywords(page: PageData): string[] {
  const keywords = new Set<string>();

  // Add common service-related keywords
  const serviceKeywords = [
    'preventivo',
    'risparmio',
    'energia',
    'consulenza',
  ];

  serviceKeywords.forEach((kw) => keywords.add(kw));

  // Extract keywords from title
  const titleWords = page.title
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 3);
  titleWords.forEach((word) => keywords.add(word));

  // Add category-specific keywords
  if (page.slug.includes('luce') || page.slug.includes('gas')) {
    keywords.add('luce');
    keywords.add('gas');
    keywords.add('bolletta');
    keywords.add('fornitore');
  }

  if (page.slug.includes('fibra') || page.slug.includes('telefonia')) {
    keywords.add('fibra');
    keywords.add('internet');
    keywords.add('telefonia');
  }

  if (page.slug.includes('fotovoltaico')) {
    keywords.add('fotovoltaico');
    keywords.add('pannelli solari');
    keywords.add('energia rinnovabile');
  }

  return Array.from(keywords);
}

export function generateStructuredData(page: PageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: '+39-XXX-XXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
    },
    priceRange: '€€',
    openingHours: 'Mo-Fr 09:00-18:00',
  };
}
