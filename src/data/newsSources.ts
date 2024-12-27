import { NewsSource } from '@/types/news';

export const newsSources: NewsSource[] = [
  // Sources Globales Internationales
  { id: 'bloomberg', name: 'Bloomberg', url: 'https://www.bloomberg.com/feeds/news.rss', category: 'global', language: 'en' },
  { id: 'reuters', name: 'Reuters', url: 'https://www.reuters.com/rssfeed/business', category: 'global', language: 'en' },
  { id: 'ft', name: 'Financial Times', url: 'https://www.ft.com/rss/home', category: 'global', language: 'en' },
  { id: 'yahoo', name: 'Yahoo Finance', url: 'https://finance.yahoo.com/news/rssindex', category: 'global', language: 'en' },
  { id: 'investopedia', name: 'Investopedia', url: 'https://www.investopedia.com/feedbuilder/feed/getfeed', category: 'global', language: 'en' },
  { id: 'marketwatch', name: 'MarketWatch', url: 'http://feeds.marketwatch.com/marketwatch/topstories/', category: 'global', language: 'en' },
  { id: 'cnbc', name: 'CNBC', url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', category: 'global', language: 'en' },
  { id: 'economist', name: 'The Economist', url: 'https://www.economist.com/finance-and-economics/rss.xml', category: 'global', language: 'en' },
  { id: 'wsj', name: 'Wall Street Journal', url: 'https://feeds.a.dj.com/rss/RSSWorldNews.xml', category: 'global', language: 'en' },
  { id: 'forbes', name: 'Forbes', url: 'https://www.forbes.com/business/feed/', category: 'global', language: 'en' },
  { id: 'businessinsider', name: 'Business Insider', url: 'https://www.businessinsider.com/rss', category: 'global', language: 'en' },
  { id: 'seekingalpha', name: 'Seeking Alpha', url: 'https://seekingalpha.com/feed.xml', category: 'global', language: 'en' },
  { id: 'morningstar', name: 'Morningstar', url: 'https://www.morningstar.com/rss/articles', category: 'global', language: 'en' },
  { id: 'tradingeconomics', name: 'Trading Economics', url: 'https://tradingeconomics.com/rss/news.aspx', category: 'global', language: 'en' },
  { id: 'zacks', name: 'Zacks Investment', url: 'https://www.zacks.com/rss/news', category: 'global', language: 'en' },
  { id: 'stockcharts', name: 'StockCharts', url: 'https://stockcharts.com/rss/news', category: 'global', language: 'en' },
  { id: 'ftserussell', name: 'FTSE Russell', url: 'https://www.ftserussell.com/rss.xml', category: 'global', language: 'en' },
  
  // Sources Françaises
  { id: 'lesechos', name: 'Les Échos', url: 'https://services.lesechos.fr/rss/les-echos-finance.xml', category: 'global', language: 'fr' },
  { id: 'latribune', name: 'La Tribune', url: 'https://www.latribune.fr/rss/finance-marches-17.html', category: 'global', language: 'fr' },
  { id: 'challenges', name: 'Challenges', url: 'https://www.challenges.fr/rss.xml', category: 'global', language: 'fr' },
  
  // Sources Africaines
  { id: 'africanbusiness', name: 'African Business', url: 'https://african.business/feed/', category: 'africa', language: 'en' },
  { id: 'africareport', name: 'The Africa Report', url: 'https://www.theafricareport.com/feed/', category: 'africa', language: 'en' },
  { id: 'jeuneafrique', name: 'Jeune Afrique', url: 'https://www.jeuneafrique.com/rss/economie/', category: 'africa', language: 'fr' },
  { id: 'agenceecofin', name: 'Agence Ecofin', url: 'https://www.agenceecofin.com/rss', category: 'africa', language: 'fr' },
  { id: 'financialafrik', name: 'Financial Afrik', url: 'https://www.financialafrik.com/feed/', category: 'africa', language: 'fr' },
  { id: 'commodafrica', name: 'CommodAfrica', url: 'https://www.commodafrica.com/rss.xml', category: 'africa', language: 'fr' },
  { id: 'cemac', name: 'CEMAC Zone', url: 'https://www.cemac.int/rss.xml', category: 'africa', language: 'fr' },
  { id: 'businessdayafrica', name: 'Business Day Africa', url: 'https://businessday.ng/feed/', category: 'africa', language: 'en' },
  { id: 'latribuneafrique', name: 'La Tribune Afrique', url: 'https://afrique.latribune.fr/rss.xml', category: 'africa', language: 'fr' },
  { id: 'forbesafrique', name: 'Forbes Afrique', url: 'https://forbesafrique.com/feed/', category: 'africa', language: 'fr' },
  { id: 'afdb', name: 'Banque Africaine de Développement', url: 'https://www.afdb.org/fr/rss.xml', category: 'africa', language: 'fr' },
  { id: 'africaintelligence', name: 'Africa Intelligence', url: 'https://www.africaintelligence.com/rss', category: 'africa', language: 'fr' },
  { id: 'africanmarkets', name: 'African Markets', url: 'https://www.african-markets.com/en/news/feed', category: 'africa', language: 'en' },
  { id: 'nairametrics', name: 'Nairametrics', url: 'https://nairametrics.com/feed/', category: 'africa', language: 'en' },
  { id: 'afristat', name: 'AFRISTAT', url: 'https://afristat.org/feed/', category: 'africa', language: 'fr' },
  { id: 'eabw', name: 'East African Business Week', url: 'https://www.busiweek.com/feed/', category: 'africa', language: 'en' },
  { id: 'monitor', name: 'Daily Monitor Uganda', url: 'https://www.monitor.co.ug/business/rss', category: 'africa', language: 'en' },
  { id: 'enca', name: 'ENCA Business', url: 'https://www.enca.com/business/rss', category: 'africa', language: 'en' },
  { id: 'afriquerenouveau', name: 'Afrique Renouveau', url: 'https://www.un.org/africarenewal/fr/rss.xml', category: 'africa', language: 'fr' },
  { id: 'thecitizen', name: 'The Citizen Tanzania', url: 'https://www.thecitizen.co.tz/tanzania/rss', category: 'africa', language: 'en' }
];