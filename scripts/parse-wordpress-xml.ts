import { XMLParser } from 'fast-xml-parser';
import * as fs from 'fs';
import * as path from 'path';

interface WordPressItem {
  title: string;
  link: string;
  'wp:post_name': string;
  'wp:post_type': string;
  'wp:status': string;
  'content:encoded': string;
  'excerpt:encoded': string;
  'wp:post_date': string;
  'wp:postmeta'?: Array<{
    'wp:meta_key': string;
    'wp:meta_value': string;
  }>;
  category?: Array<{
    '@_domain': string;
    '@_nicename': string;
    '#text': string;
  }>;
}

interface ParsedPage {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: string;
  date: string;
  metadata: Record<string, string>;
  categories: string[];
  elementorData?: any;
}

const XML_PATH = path.join(__dirname, '../../sito attuale/wwwilmigliorpreventivoit.WordPress.2025-11-22.xml');

async function parseWordPressXML() {
  console.log('🚀 Starting WordPress XML parsing...\n');

  // Read XML file
  const xmlContent = fs.readFileSync(XML_PATH, 'utf-8');

  // Configure parser
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    textNodeName: '#text',
    parseAttributeValue: true,
    trimValues: true,
  });

  // Parse XML
  const result = parser.parse(xmlContent);
  const items = result.rss.channel.item || [];

  console.log(`📦 Total items found: ${items.length}\n`);

  // Categorize items
  const pages: ParsedPage[] = [];
  const posts: ParsedPage[] = [];
  const portfolio: ParsedPage[] = [];
  const headers: ParsedPage[] = [];
  const footers: ParsedPage[] = [];
  const mediaUrls: Array<{ url: string; title: string }> = [];

  for (const item of items) {
    const postType = item['wp:post_type'];
    const status = item['wp:status'];

    // Only process published items
    if (status !== 'publish') continue;

    // Extract metadata
    const metadata: Record<string, string> = {};
    if (item['wp:postmeta']) {
      const metas = Array.isArray(item['wp:postmeta'])
        ? item['wp:postmeta']
        : [item['wp:postmeta']];

      for (const meta of metas) {
        const key = meta['wp:meta_key'];
        const value = meta['wp:meta_value'];
        if (key && value) {
          metadata[key] = value;
        }
      }
    }

    // Extract categories
    const categories: string[] = [];
    if (item.category) {
      const cats = Array.isArray(item.category) ? item.category : [item.category];
      for (const cat of cats) {
        if (cat['@_domain'] === 'category') {
          categories.push(cat['#text']);
        }
      }
    }

    const parsedItem: ParsedPage = {
      title: item.title || '',
      slug: item['wp:post_name'] || '',
      content: item['content:encoded'] || '',
      excerpt: item['excerpt:encoded'] || '',
      status: status || '',
      date: item['wp:post_date'] || '',
      metadata,
      categories,
    };

    // Parse Elementor data if exists
    if (metadata['_elementor_data']) {
      try {
        parsedItem.elementorData = JSON.parse(metadata['_elementor_data']);
      } catch (e) {
        console.warn(`⚠️  Could not parse Elementor data for: ${parsedItem.title}`);
      }
    }

    // Categorize by post type
    switch (postType) {
      case 'page':
        pages.push(parsedItem);
        break;
      case 'post':
        posts.push(parsedItem);
        break;
      case 'ot_portfolio':
        portfolio.push(parsedItem);
        break;
      case 'ot_header_builders':
        headers.push(parsedItem);
        break;
      case 'ot_footer_builders':
        footers.push(parsedItem);
        break;
      case 'attachment':
        const url = item['wp:attachment_url'];
        if (url) {
          mediaUrls.push({
            url,
            title: item.title || '',
          });
        }
        break;
    }
  }

  console.log(`📄 Pages: ${pages.length}`);
  console.log(`📝 Posts: ${posts.length}`);
  console.log(`🎨 Portfolio items: ${portfolio.length}`);
  console.log(`📋 Headers: ${headers.length}`);
  console.log(`📋 Footers: ${footers.length}`);
  console.log(`🖼️  Media files: ${mediaUrls.length}\n`);

  // Create data directories
  const dataDir = path.join(__dirname, '../data');
  const dirs = ['pages', 'posts', 'portfolio', 'headers', 'footers', 'media'];
  for (const dir of dirs) {
    const dirPath = path.join(dataDir, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  // Save pages
  for (const page of pages) {
    const filename = `${page.slug || 'untitled'}.json`;
    fs.writeFileSync(
      path.join(dataDir, 'pages', filename),
      JSON.stringify(page, null, 2)
    );
  }

  // Save posts
  for (const post of posts) {
    const filename = `${post.slug || 'untitled'}.json`;
    fs.writeFileSync(
      path.join(dataDir, 'posts', filename),
      JSON.stringify(post, null, 2)
    );
  }

  // Save portfolio items
  for (const item of portfolio) {
    const filename = `${item.slug || 'untitled'}.json`;
    fs.writeFileSync(
      path.join(dataDir, 'portfolio', filename),
      JSON.stringify(item, null, 2)
    );
  }

  // Save headers
  for (const header of headers) {
    const filename = `${header.slug || 'untitled'}.json`;
    fs.writeFileSync(
      path.join(dataDir, 'headers', filename),
      JSON.stringify(header, null, 2)
    );
  }

  // Save footers
  for (const footer of footers) {
    const filename = `${footer.slug || 'untitled'}.json`;
    fs.writeFileSync(
      path.join(dataDir, 'footers', filename),
      JSON.stringify(footer, null, 2)
    );
  }

  // Save media URLs list
  fs.writeFileSync(
    path.join(dataDir, 'media', 'media-urls.json'),
    JSON.stringify(mediaUrls, null, 2)
  );

  // Save summary
  const summary = {
    totalPages: pages.length,
    totalPosts: posts.length,
    totalPortfolio: portfolio.length,
    totalHeaders: headers.length,
    totalFooters: footers.length,
    totalMedia: mediaUrls.length,
    pages: pages.map(p => ({ title: p.title, slug: p.slug })),
    posts: posts.map(p => ({ title: p.title, slug: p.slug })),
    portfolio: portfolio.map(p => ({ title: p.title, slug: p.slug })),
    headers: headers.map(h => ({ title: h.title, slug: h.slug })),
    footers: footers.map(f => ({ title: f.title, slug: f.slug })),
  };

  fs.writeFileSync(
    path.join(dataDir, 'summary.json'),
    JSON.stringify(summary, null, 2)
  );

  console.log('✅ Parsing complete!');
  console.log(`📁 Data saved to: ${dataDir}\n`);

  // List all pages
  console.log('📄 Pages extracted:');
  pages.forEach(p => console.log(`   - ${p.title} (/${p.slug})`));

  console.log('\n📝 Posts extracted:');
  posts.forEach(p => console.log(`   - ${p.title} (/${p.slug})`));

  console.log('\n🎨 Portfolio items extracted:');
  portfolio.forEach(p => console.log(`   - ${p.title} (/${p.slug})`));
}

parseWordPressXML().catch(console.error);
