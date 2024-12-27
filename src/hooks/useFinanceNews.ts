import { useQuery } from "@tanstack/react-query";
import { NewsItem, NewsFilters } from "@/types/news";
import { newsSources } from "@/data/newsSources";

const fetchNews = async (filters: NewsFilters): Promise<NewsItem[]> => {
  // Simulation de l'appel API avec les filtres
  // Dans un environnement de production, remplacer par de vrais appels aux flux RSS
  const mockNews: NewsItem[] = [
    {
      title: "Les marchés financiers en hausse malgré les tensions géopolitiques",
      link: "https://example.com/article1",
      pubDate: new Date().toISOString(),
      source: "Les Échos",
      description: "Les marchés financiers continuent leur progression malgré les tensions internationales...",
      category: "global" as const,
      image: "https://example.com/image1.jpg"
    },
    {
      title: "African Development Bank announces new investment program",
      link: "https://example.com/article2",
      pubDate: new Date(Date.now() - 3600000).toISOString(),
      source: "African Business",
      description: "The African Development Bank has announced a new $1 billion investment program...",
      category: "africa" as const,
      image: "https://example.com/image2.jpg"
    },
    {
      title: "Wall Street termine en hausse, portée par les valeurs technologiques",
      link: "https://example.com/article3",
      pubDate: new Date(Date.now() - 7200000).toISOString(),
      source: "La Tribune",
      description: "Les indices américains ont terminé en hausse, soutenus par les performances des géants de la tech...",
      category: "global" as const,
    },
    // Ajout de plus d'articles mockés pour démonstration
    ...Array.from({ length: 47 }, (_, i) => ({
      title: `Article de test ${i + 4}`,
      link: `https://example.com/article${i + 4}`,
      pubDate: new Date(Date.now() - (i + 3) * 3600000).toISOString(),
      source: newsSources[i % newsSources.length].name,
      description: `Description de l'article de test ${i + 4}...`,
      category: (i % 2 === 0 ? "global" : "africa") as const,
      image: i % 3 === 0 ? `https://example.com/image${i + 4}.jpg` : undefined
    }))
  ];

  // Appliquer les filtres
  return mockNews.filter((article) => {
    const matchesSearch = filters.searchQuery
      ? article.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        article.description?.toLowerCase().includes(filters.searchQuery.toLowerCase())
      : true;

    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(article.category);

    const matchesSource = filters.sources.length === 0 || filters.sources.includes(article.source);

    return matchesSearch && matchesCategory && matchesSource;
  });
};

export const useFinanceNews = (filters: NewsFilters) => {
  return useQuery({
    queryKey: ["financeNews", filters],
    queryFn: () => fetchNews(filters),
    refetchInterval: 300000, // Actualisation toutes les 5 minutes
    refetchIntervalInBackground: true,
    staleTime: 60000, // Considère les données comme périmées après 1 minute
  });
};