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
      category: "global",
    },
    {
      title: "African Development Bank announces new investment program",
      link: "https://example.com/article2",
      pubDate: new Date().toISOString(),
      source: "African Business",
      description: "The African Development Bank has announced a new $1 billion investment program...",
      category: "africa",
    },
    // Ajoutez d'autres articles mockés ici
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