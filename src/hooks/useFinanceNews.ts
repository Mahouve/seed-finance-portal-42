import { useQuery } from "@tanstack/react-query";
import { NewsFilters, NewsItem } from "@/types/news";
import { africanNews } from "@/data/mockNews/africanNews";
import { globalNews } from "@/data/mockNews/globalNews";

export const useFinanceNews = (filters: NewsFilters) => {
  return useQuery({
    queryKey: ["news", filters],
    queryFn: async () => {
      console.log("Fetching news with filters:", filters);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let allNews = [...globalNews, ...africanNews];

      // Apply source filters
      if (filters.sources.length > 0) {
        allNews = allNews.filter((article) =>
          filters.sources.includes(article.source)
        );
      }

      // Apply category filters
      if (filters.categories.length > 0) {
        allNews = allNews.filter((article) =>
          filters.categories.includes(article.category as "global" | "africa")
        );
      }

      // Apply search query filter
      if (filters.searchQuery) {
        const searchLower = filters.searchQuery.toLowerCase();
        allNews = allNews.filter(
          (article) =>
            article.title.toLowerCase().includes(searchLower) ||
            article.description?.toLowerCase().includes(searchLower)
        );
      }

      // Map the news data to ensure correct typing
      const typedNews: NewsItem[] = allNews.map((article) => ({
        title: article.title,
        link: article.link,
        pubDate: article.pubDate,
        source: article.source,
        description: article.description,
        category: article.category as "global" | "africa",
        image: article.image,
      }));

      console.log("Filtered news:", typedNews);
      return typedNews;
    },
  });
};