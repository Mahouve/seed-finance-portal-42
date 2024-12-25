import { NewsSource } from '@/types/news';

export const newsSources: NewsSource[] = [
  // Sources Globales
  { id: 'bloomberg', name: 'Bloomberg', url: 'https://www.bloomberg.com/feeds/news.rss', category: 'global', language: 'en' },
  { id: 'reuters', name: 'Reuters', url: 'https://www.reutersagency.com/feed/', category: 'global', language: 'en' },
  { id: 'lesechos', name: 'Les Échos', url: 'https://services.lesechos.fr/rss/les-echos-finance.xml', category: 'global', language: 'fr' },
  { id: 'latribune', name: 'La Tribune', url: 'https://www.latribune.fr/rss/finance-marches-17.html', category: 'global', language: 'fr' },
  
  // Sources Africaines
  { id: 'africanbus', name: 'African Business', url: 'https://african.business/feed/', category: 'africa', language: 'en' },
  { id: 'africareport', name: 'The Africa Report', url: 'https://www.theafricareport.com/feed/', category: 'africa', language: 'en' },
  { id: 'jeuneafrique', name: 'Jeune Afrique', url: 'https://www.jeuneafrique.com/feed/', category: 'africa', language: 'fr' },
  { id: 'financialafrik', name: 'Financial Afrik', url: 'https://www.financialafrik.com/feed/', category: 'africa', language: 'fr' },
];