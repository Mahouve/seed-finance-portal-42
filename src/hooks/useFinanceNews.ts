import { useQuery } from "@tanstack/react-query";
import { NewsItem } from "@/types/news";
import { mockNews } from "@/data/mockNews";

const fetchNews = async (): Promise<NewsItem[]> => {
  // Dans un environnement de production, remplacer par un vrai appel API RSS
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockNews), 1000);
  });
};

export const useFinanceNews = () => {
  return useQuery({
    queryKey: ["financeNews"],
    queryFn: fetchNews,
    refetchInterval: 300000, // Actualisation toutes les 5 minutes
    refetchIntervalInBackground: true, // Continue de s'actualiser en arrière-plan
    staleTime: 60000, // Considère les données comme périmées après 1 minute
  });
};