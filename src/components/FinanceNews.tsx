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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

export const FinanceNews = () => {
  const [filters, setFilters] = useState<NewsFilters>({
    categories: [],
    sources: [],
    searchQuery: "",
    limit: 50, // Augmentation du nombre d'articles à afficher
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

  const toggleSource = (sourceId: string) => {
    setFilters((prev) => ({
      ...prev,
      sources: prev.sources.includes(sourceId)
        ? prev.sources.filter((s) => s !== sourceId)
        : [...prev.sources, sourceId],
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
          <div className="flex gap-2">
            <Input
              type="search"
              placeholder="Rechercher dans les actualités..."
              className="w-full"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <div className="p-2">
                  <div className="font-medium mb-2">Sources</div>
                  <div className="space-y-2">
                    {newsSources.map((source) => (
                      <div key={source.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={source.id}
                          checked={filters.sources.includes(source.id)}
                          onCheckedChange={() => toggleSource(source.id)}
                        />
                        <label
                          htmlFor={source.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {source.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
                {sortedNews?.slice(0, filters.limit).map((article, index) => (
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
                  .slice(0, filters.limit)
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
                  .slice(0, filters.limit)
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