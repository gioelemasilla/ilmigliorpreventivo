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

  // Calcolatori - very high priority for SEO
  const calcolatoriEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/calcolatori`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/calcolatori/bonus-bollette`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/calcolatori/fotovoltaico-azzeramento-bolletta`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/conto-termico-incentivi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/potenza-contatore`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/costo-ricarica-auto-elettrica`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/ripartizione-spese-condominiali`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/incentivi-energia-condominio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/stipendio-netto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/mutuo-casa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/codice-fiscale`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/calcolatori/verifica-partita-iva`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/calcolatori/bollo-auto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/codice-catastale`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/coordinate-bancarie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/calcolatori/revisione-auto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // Blog articles - high SEO value
  const blogArticlesEntries: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/blog/bonus-bollette-2025-requisiti-domanda`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/blog/guida-modulo-dsu-isee-2025`,
      lastModified: new Date('2025-11-27'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/blog/cambio-fornitore-luce-senza-interruzione`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/blog/cambio-gestore-luce-gas`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/blog/come-ridurre-bolletta-gas-30-percento-2025`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/blog/come-scegliere-potenza-contatore-2025`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/blog/comunita-energetiche-come-funzionano-2025`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/blog/fibra-ftth-vs-fttc-differenze-velocita-2025`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/blog/pratiche-gse-guida-passo-passo-2025`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/blog/quanto-costa-impianto-fotovoltaico`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${siteConfig.url}/blog/tariffe-luce-monorarie-o-biorarie-quale-conviene`,
      lastModified: new Date('2025-11-26'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
  ];

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
    // Calcolatori - high priority
    ...calcolatoriEntries,
    // Blog articles - high SEO value
    ...blogArticlesEntries,
    ...pageEntries,
    ...postEntries,
    ...portfolioEntries,
  ];
}
