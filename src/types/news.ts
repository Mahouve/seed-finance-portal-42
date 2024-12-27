export interface NewsSource {
  id: string;
  name: string;
  url: string;
  category: 'global' | 'africa';
  language: 'en' | 'fr';
}

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  image?: string;
  description?: string;
  category: 'global' | 'africa';
}

export interface NewsFilters {
  categories: string[];
  sources: string[];
  searchQuery: string;
  limit?: number;
}