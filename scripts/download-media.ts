import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

interface MediaFile {
  url: string;
  title: string;
}

const DATA_DIR = path.join(__dirname, '../data');
const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

async function downloadFile(url: string, destination: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    // Create directory if it doesn't exist
    const dir = path.dirname(destination);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(destination);

    protocol
      .get(url, (response) => {
        // Follow redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            downloadFile(redirectUrl, destination).then(resolve).catch(reject);
            return;
          }
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download: ${url} (${response.statusCode})`));
          return;
        }

        response.pipe(file);

        file.on('finish', () => {
          file.close();
          resolve();
        });
      })
      .on('error', (err) => {
        fs.unlink(destination, () => {}); // Delete partial file
        reject(err);
      });
  });
}

function extractImagesFromContent(content: string): string[] {
  const images: string[] = [];
  const srcRegex = /src="([^"]+)"/g;
  const urlRegex = /url\("([^"]+)"\)/g;

  let match;

  // Extract from src attributes
  while ((match = srcRegex.exec(content)) !== null) {
    images.push(match[1]);
  }

  // Extract from url() in styles
  while ((match = urlRegex.exec(content)) !== null) {
    images.push(match[1]);
  }

  return images;
}

function extractImagesFromElementorData(elementorData: any): string[] {
  const images: string[] = [];

  function traverse(obj: any) {
    if (!obj) return;

    if (Array.isArray(obj)) {
      for (const item of obj) {
        traverse(item);
      }
      return;
    }

    if (typeof obj === 'object') {
      // Check for image URLs in various fields
      if (obj.url && typeof obj.url === 'string' && obj.url.includes('ilmigliorpreventivo.it')) {
        images.push(obj.url);
      }

      if (obj.image && obj.image.url) {
        images.push(obj.image.url);
      }

      if (obj.background_image && obj.background_image.url) {
        images.push(obj.background_image.url);
      }

      // Recurse through all properties
      for (const key in obj) {
        traverse(obj[key]);
      }
    }
  }

  traverse(elementorData);
  return images;
}

async function downloadMedia() {
  console.log('🖼️  Starting media download...\n');

  // Create images directory
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  const allImageUrls = new Set<string>();

  // Collect images from pages
  const pagesDir = path.join(DATA_DIR, 'pages');
  if (fs.existsSync(pagesDir)) {
    const pageFiles = fs.readdirSync(pagesDir);
    for (const file of pageFiles) {
      const pageData = JSON.parse(fs.readFileSync(path.join(pagesDir, file), 'utf-8'));

      // Extract from content
      const contentImages = extractImagesFromContent(pageData.content);
      contentImages.forEach((url) => allImageUrls.add(url));

      // Extract from Elementor data
      if (pageData.elementorData) {
        const elementorImages = extractImagesFromElementorData(pageData.elementorData);
        elementorImages.forEach((url) => allImageUrls.add(url));
      }
    }
  }

  // Collect images from posts
  const postsDir = path.join(DATA_DIR, 'posts');
  if (fs.existsSync(postsDir)) {
    const postFiles = fs.readdirSync(postsDir);
    for (const file of postFiles) {
      const postData = JSON.parse(fs.readFileSync(path.join(postsDir, file), 'utf-8'));

      const contentImages = extractImagesFromContent(postData.content);
      contentImages.forEach((url) => allImageUrls.add(url));

      if (postData.elementorData) {
        const elementorImages = extractImagesFromElementorData(postData.elementorData);
        elementorImages.forEach((url) => allImageUrls.add(url));
      }
    }
  }

  // Collect images from portfolio
  const portfolioDir = path.join(DATA_DIR, 'portfolio');
  if (fs.existsSync(portfolioDir)) {
    const portfolioFiles = fs.readdirSync(portfolioDir);
    for (const file of portfolioFiles) {
      const portfolioData = JSON.parse(fs.readFileSync(path.join(portfolioDir, file), 'utf-8'));

      const contentImages = extractImagesFromContent(portfolioData.content);
      contentImages.forEach((url) => allImageUrls.add(url));

      if (portfolioData.elementorData) {
        const elementorImages = extractImagesFromElementorData(portfolioData.elementorData);
        elementorImages.forEach((url) => allImageUrls.add(url));
      }
    }
  }

  console.log(`📦 Found ${allImageUrls.size} unique images\n`);

  // Download images
  let downloaded = 0;
  let failed = 0;

  for (const imageUrl of allImageUrls) {
    try {
      // Parse URL to get filename and path
      const urlObj = new URL(imageUrl);
      const pathParts = urlObj.pathname.split('/').filter(Boolean);

      // Get relative path (everything after wp-content/uploads/)
      const uploadsIndex = pathParts.indexOf('uploads');
      const relativePath = uploadsIndex >= 0 ? pathParts.slice(uploadsIndex + 1).join('/') : pathParts.join('/');

      const destination = path.join(IMAGES_DIR, relativePath);

      // Skip if already exists
      if (fs.existsSync(destination)) {
        console.log(`⏭️  Skipped (exists): ${relativePath}`);
        downloaded++;
        continue;
      }

      await downloadFile(imageUrl, destination);
      console.log(`✅ Downloaded: ${relativePath}`);
      downloaded++;

      // Small delay to avoid overwhelming the server
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`❌ Failed: ${imageUrl}`);
      console.error(`   Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      failed++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Downloaded: ${downloaded}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📁 Location: ${IMAGES_DIR}`);

  // Create a mapping file for URL replacement
  const urlMapping: Record<string, string> = {};
  for (const imageUrl of allImageUrls) {
    try {
      const urlObj = new URL(imageUrl);
      const pathParts = urlObj.pathname.split('/').filter(Boolean);
      const uploadsIndex = pathParts.indexOf('uploads');
      const relativePath = uploadsIndex >= 0 ? pathParts.slice(uploadsIndex + 1).join('/') : pathParts.join('/');
      urlMapping[imageUrl] = `/images/${relativePath}`;
    } catch (e) {
      // Skip invalid URLs
    }
  }

  fs.writeFileSync(
    path.join(DATA_DIR, 'image-url-mapping.json'),
    JSON.stringify(urlMapping, null, 2)
  );

  console.log(`\n✅ Image URL mapping saved!`);
}

downloadMedia().catch(console.error);
