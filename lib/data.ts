import fs from 'fs';
import path from 'path';
import { PageData, PostData, PortfolioData, ImageMapping } from '@/types/wordpress';

const DATA_DIR = path.join(process.cwd(), 'data');

export function getAllPages(): PageData[] {
  const pagesDir = path.join(DATA_DIR, 'pages');
  const files = fs.readdirSync(pagesDir);

  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(pagesDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content) as PageData;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPageBySlug(slug: string): PageData | null {
  const pages = getAllPages();
  return pages.find((page) => page.slug === slug) || null;
}

export function getAllPosts(): PostData[] {
  const postsDir = path.join(DATA_DIR, 'posts');

  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs.readdirSync(postsDir);

  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content) as PostData;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): PostData | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getAllPortfolio(): PortfolioData[] {
  const portfolioDir = path.join(DATA_DIR, 'portfolio');

  if (!fs.existsSync(portfolioDir)) {
    return [];
  }

  const files = fs.readdirSync(portfolioDir);

  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => {
      const filePath = path.join(portfolioDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content) as PortfolioData;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPortfolioBySlug(slug: string): PortfolioData | null {
  const portfolio = getAllPortfolio();
  return portfolio.find((item) => item.slug === slug) || null;
}

export function getImageMapping(): ImageMapping {
  const mappingPath = path.join(DATA_DIR, 'image-url-mapping.json');

  if (!fs.existsSync(mappingPath)) {
    return {};
  }

  const content = fs.readFileSync(mappingPath, 'utf-8');
  return JSON.parse(content) as ImageMapping;
}

export function replaceImageUrls(content: string): string {
  const mapping = getImageMapping();
  let result = content;

  for (const [originalUrl, newUrl] of Object.entries(mapping)) {
    result = result.split(originalUrl).join(newUrl);
  }

  return result;
}

export function getHeaderBySlug(slug: string): PageData | null {
  const headersDir = path.join(DATA_DIR, 'headers');

  if (!fs.existsSync(headersDir)) {
    return null;
  }

  const filePath = path.join(headersDir, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as PageData;
}

export function getFooterBySlug(slug: string): PageData | null {
  const footersDir = path.join(DATA_DIR, 'footers');

  if (!fs.existsSync(footersDir)) {
    return null;
  }

  const filePath = path.join(footersDir, `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as PageData;
}
