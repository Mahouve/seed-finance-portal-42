import { NewsSource } from '@/types/news';

export const newsSources: NewsSource[] = [
  // Sources Globales Internationales
  { id: 'bloomberg', name: 'Bloomberg', url: 'https://www.bloomberg.com/feeds/news.rss', category: 'global', language: 'en' },
  { id: 'reuters', name: 'Reuters', url: 'https://www.reuters.com/rssfeed/business', category: 'global', language: 'en' },
  { id: 'ft', name: 'Financial Times', url: 'https://www.ft.com/rss/home', category: 'global', language: 'en' },
  { id: 'wsj', name: 'Wall Street Journal', url: 'https://feeds.a.dj.com/rss/RSSWorldNews.xml', category: 'global', language: 'en' },
  { id: 'cnbc', name: 'CNBC', url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html', category: 'global', language: 'en' },
  { id: 'marketwatch', name: 'MarketWatch', url: 'http://feeds.marketwatch.com/marketwatch/topstories/', category: 'global', language: 'en' },
  { id: 'businessinsider', name: 'Business Insider', url: 'https://www.businessinsider.com/rss', category: 'global', language: 'en' },
  { id: 'forbes', name: 'Forbes', url: 'https://www.forbes.com/business/feed/', category: 'global', language: 'en' },
  { id: 'economist', name: 'The Economist', url: 'https://www.economist.com/finance-and-economics/rss.xml', category: 'global', language: 'en' },
  
  // Sources Françaises
  { id: 'lesechos', name: 'Les Échos', url: 'https://services.lesechos.fr/rss/les-echos-finance.xml', category: 'global', language: 'fr' },
  { id: 'latribune', name: 'La Tribune', url: 'https://www.latribune.fr/rss/finance-marches-17.html', category: 'global', language: 'fr' },
  { id: 'capital', name: 'Capital', url: 'https://www.capital.fr/rss', category: 'global', language: 'fr' },
  { id: 'challenges', name: 'Challenges', url: 'https://www.challenges.fr/rss.xml', category: 'global', language: 'fr' },
  { id: 'bfmbusiness', name: 'BFM Business', url: 'https://www.bfmtv.com/rss/economie/', category: 'global', language: 'fr' },
  { id: 'investir', name: 'Investir', url: 'https://investir.lesechos.fr/rss/', category: 'global', language: 'fr' },
  { id: 'boursier', name: 'Boursier.com', url: 'https://www.boursier.com/rss/news.xml', category: 'global', language: 'fr' },
  { id: 'boursorama', name: 'Boursorama', url: 'https://www.boursorama.com/rss/actualites.rss', category: 'global', language: 'fr' },
  { id: 'zonebourse', name: 'Zone Bourse', url: 'https://www.zonebourse.com/rss/actualites.xml', category: 'global', language: 'fr' },
  
  // Sources Africaines Francophones
  { id: 'financialafrik', name: 'Financial Afrik', url: 'https://www.financialafrik.com/feed/', category: 'africa', language: 'fr' },
  { id: 'jeuneafrique', name: 'Jeune Afrique Économie', url: 'https://www.jeuneafrique.com/rss/economie/', category: 'africa', language: 'fr' },
  { id: 'agenceecofin', name: 'Agence Ecofin', url: 'https://www.agenceecofin.com/rss', category: 'africa', language: 'fr' },
  { id: 'africanmanager', name: 'African Manager', url: 'https://africanmanager.com/feed/', category: 'africa', language: 'fr' },
  { id: 'afriqueitnews', name: 'Afrique IT News', url: 'https://afriqueitnews.com/feed/', category: 'africa', language: 'fr' },
  { id: 'lebureauafrique', name: 'Le Bureau Afrique', url: 'https://lebureauafrique.com/feed/', category: 'africa', language: 'fr' },
  { id: 'africanews', name: 'Africanews FR', url: 'https://fr.africanews.com/rss', category: 'africa', language: 'fr' },
  
  // Sources Africaines Anglophones
  { id: 'africanbusiness', name: 'African Business', url: 'https://african.business/feed/', category: 'africa', language: 'en' },
  { id: 'africareport', name: 'The Africa Report', url: 'https://www.theafricareport.com/feed/', category: 'africa', language: 'en' },
  { id: 'businessdayng', name: 'BusinessDay NG', url: 'https://businessday.ng/feed/', category: 'africa', language: 'en' },
  { id: 'venturesafrica', name: 'Ventures Africa', url: 'https://venturesafrica.com/feed/', category: 'africa', language: 'en' },
  { id: 'cnbcafrica', name: 'CNBC Africa', url: 'https://www.cnbcafrica.com/feed/', category: 'africa', language: 'en' },
  
  // Sources Marchés Émergents
  { id: 'emergingmarkets', name: 'Emerging Markets', url: 'https://www.emergingmarkets.org/rss/rss.xml', category: 'global', language: 'en' },
  { id: 'asiafinancial', name: 'Asia Financial', url: 'https://www.asiafinancial.com/feed', category: 'global', language: 'en' },
  { id: 'gulfbusiness', name: 'Gulf Business', url: 'https://gulfbusiness.com/feed/', category: 'global', language: 'en' },
  
  // Sources Crypto & Fintech
  { id: 'cointelegraph', name: 'Cointelegraph', url: 'https://cointelegraph.com/rss', category: 'global', language: 'en' },
  { id: 'coindesk', name: 'CoinDesk', url: 'https://www.coindesk.com/arc/outboundfeeds/rss/', category: 'global', language: 'en' },
  { id: 'cryptonaute', name: 'Cryptonaute', url: 'https://cryptonaute.fr/feed/', category: 'global', language: 'fr' },
  { id: 'journaldunet', name: 'JDN Économie', url: 'https://www.journaldunet.com/rss/economie.xml', category: 'global', language: 'fr' },
  
  // Sources ESG & Finance Durable
  { id: 'esgtoday', name: 'ESG Today', url: 'https://www.esgtoday.com/feed/', category: 'global', language: 'en' },
  { id: 'novethic', name: 'Novethic', url: 'https://www.novethic.fr/rss/actualite.rss', category: 'global', language: 'fr' },
  
  // Sources Banques Centrales
  { id: 'ecb', name: 'European Central Bank', url: 'https://www.ecb.europa.eu/rss/press.html', category: 'global', language: 'en' },
  { id: 'fed', name: 'Federal Reserve', url: 'https://www.federalreserve.gov/feeds/press_all.xml', category: 'global', language: 'en' },
  { id: 'bceao', name: 'BCEAO', url: 'https://www.bceao.int/fr/rss.xml', category: 'africa', language: 'fr' },
  { id: 'beac', name: 'BEAC', url: 'https://www.beac.int/feed/', category: 'africa', language: 'fr' },
  
  // Sources Finance Islamique
  { id: 'islamicfinance', name: 'Islamic Finance News', url: 'https://www.islamicfinancenews.com/feed', category: 'global', language: 'en' },
  { id: 'islamicmarkets', name: 'Islamic Markets', url: 'https://islamicmarkets.com/feed', category: 'global', language: 'en' },
  
  // Sources Finance Personnelle
  { id: 'moneyvox', name: 'MoneyVox', url: 'https://www.moneyvox.fr/rss/actu.xml', category: 'global', language: 'fr' },
  { id: 'cbanque', name: 'cBanque', url: 'https://www.cbanque.com/rss/actualites.xml', category: 'global', language: 'fr' },
  { id: 'investopedia', name: 'Investopedia', url: 'https://www.investopedia.com/feedbuilder/feed/getfeed?feedName=rss_articles', category: 'global', language: 'en' },
  
  // Sources Trading & Analyse Technique
  { id: 'tradingsat', name: 'TradingSat', url: 'https://www.tradingsat.com/rss/actualites.xml', category: 'global', language: 'fr' },
  { id: 'dailyfx', name: 'DailyFX', url: 'https://www.dailyfx.com/feeds/market-news', category: 'global', language: 'en' },
  { id: 'investing', name: 'Investing.com', url: 'https://fr.investing.com/rss/news.rss', category: 'global', language: 'fr' },
];