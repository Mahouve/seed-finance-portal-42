import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFinanceNews } from "@/hooks/useFinanceNews";
import { NewsArticle } from "@/components/NewsArticle";

export const FinanceNews = () => {
  const { data: news, isLoading } = useFinanceNews();

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

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Actualités Financières</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-6">
            {news?.map((article, index) => (
              <NewsArticle key={index} article={article} />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};