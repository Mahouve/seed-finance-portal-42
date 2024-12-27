import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { NewsArticle } from "@/components/NewsArticle";
import { useFinanceNews } from "@/hooks/useFinanceNews";
import { NewsFilters } from "@/types/news";
import { Badge } from "@/components/ui/badge";
import { newsSources } from "@/data/newsSources";

export const FinanceNews = () => {
  const [filters, setFilters] = useState<NewsFilters>({
    categories: [],
    sources: [],
    searchQuery: "",
    limit: 20, // Augmentation du nombre d'articles à afficher
  });

  const { data: news, isLoading } = useFinanceNews(filters);

  const handleSearch = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  };

  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Actualités Financières</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-[500px]">
            <div className="animate-pulse text-muted">Chargement des actualités...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const sortedNews = news?.sort((a, b) => 
    new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  return (
    <Card className="h-full">
      <CardHeader className="space-y-4">
        <CardTitle className="text-xl font-semibold">Actualités Financières</CardTitle>
        <div className="space-y-4">
          <Input
            type="search"
            placeholder="Rechercher dans les actualités..."
            className="w-full"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={filters.categories.includes("global") ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleCategory("global")}
            >
              Global
            </Badge>
            <Badge
              variant={filters.categories.includes("africa") ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleCategory("africa")}
            >
              Afrique
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="fr">Français</TabsTrigger>
            <TabsTrigger value="en">English</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-6">
                {sortedNews?.slice(0, 20).map((article, index) => (
                  <NewsArticle key={index} article={article} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="fr" className="mt-4">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-6">
                {sortedNews
                  ?.filter((article) => {
                    const source = newsSources.find((s) => s.name === article.source);
                    return source?.language === "fr";
                  })
                  .slice(0, 20)
                  .map((article, index) => (
                    <NewsArticle key={index} article={article} />
                  ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="en" className="mt-4">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-6">
                {sortedNews
                  ?.filter((article) => {
                    const source = newsSources.find((s) => s.name === article.source);
                    return source?.language === "en";
                  })
                  .slice(0, 20)
                  .map((article, index) => (
                    <NewsArticle key={index} article={article} />
                  ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};