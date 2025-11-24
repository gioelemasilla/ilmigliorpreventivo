import { MetadataRoute } from 'next';
import { getAllPages, getAllPosts, getAllPortfolio } from '@/lib/data';
import { siteConfig } from '@/lib/metadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getAllPages();
  const posts = getAllPosts();
  const portfolio = getAllPortfolio();

  // Service pages priority (very high importance for SEO)
  const servicePages = [
    'luce-gas',
    'fibra-telefonia',
    'fotovoltaico',
    'pratiche-gse',
    'pratiche-enea',
    'comunita-energetiche',
    'servizi-condominiali',
    'marketing-aziendale',
  ];

  const pageEntries: MetadataRoute.Sitemap = pages.map((page) => {
    // Determine priority based on page importance
    let priority = 0.7; // Default for other pages
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'monthly';

    if (page.slug === 'home-1') {
      priority = 1;
      changeFrequency = 'daily';
    } else if (servicePages.includes(page.slug)) {
      priority = 0.9; // Service pages are critical for SEO
      changeFrequency = 'weekly';
    } else if (page.slug.includes('contact')) {
      priority = 0.8; // Contact pages are important
      changeFrequency = 'monthly';
    }

    return {
      url: `${siteConfig.url}/${page.slug}`,
      lastModified: new Date(page.date),
      changeFrequency,
      priority,
    };
  });

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7, // Blog posts important for content SEO
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolio.map((item) => ({
    url: `${siteConfig.url}/portfolio/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [
    // Homepage - highest priority
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Services overview - very high priority
    {
      url: `${siteConfig.url}/servizi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    // Blog index - high priority for content
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...pageEntries,
    ...postEntries,
    ...portfolioEntries,
  ];
}
