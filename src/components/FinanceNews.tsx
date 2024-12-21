import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFinanceNews } from "@/hooks/useFinanceNews";
import { NewsArticle } from "@/components/NewsArticle";

export const FinanceNews = () => {
  const { data: news, isLoading } = useFinanceNews();

  if (isLoading) {
    return <div className="text-center">Chargement des actualités...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actualités Financières</CardTitle>
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