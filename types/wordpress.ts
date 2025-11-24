export interface PageData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: string;
  date: string;
  metadata: Record<string, string>;
  categories: string[];
  elementorData?: ElementorElement[];
}

export interface PostData extends PageData {
  // Posts have the same structure as pages
}

export interface PortfolioData extends PageData {
  // Portfolio has the same structure as pages
}

export interface ElementorElement {
  id: string;
  elType: 'container' | 'widget' | 'section' | 'column';
  settings: Record<string, any>;
  elements?: ElementorElement[];
  isInner?: boolean;
  widgetType?: string;
}

export interface ImageMapping {
  [originalUrl: string]: string;
}

export interface SiteData {
  pages: PageData[];
  posts: PostData[];
  portfolio: PortfolioData[];
  imageMapping: ImageMapping;
}
