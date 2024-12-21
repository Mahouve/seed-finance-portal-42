import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

const mockNews: NewsItem[] = [
  {
    title: "Les marchés européens en hausse après les résultats d'entreprises",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Les Échos",
  },
  {
    title: "La Fed maintient ses taux directeurs inchangés",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Le Figaro",
  },
  {
    title: "Wall Street termine en hausse, portée par les valeurs technologiques",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Reuters",
  },
];

const fetchNews = async (): Promise<NewsItem[]> => {
  // Dans un environnement de production, remplacer par un vrai appel API RSS
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockNews), 1000);
  });
};

export const FinanceNews = () => {
  const { data: news, isLoading } = useQuery({
    queryKey: ["financeNews"],
    queryFn: fetchNews,
    refetchInterval: 300000, // Actualisation toutes les 5 minutes
  });

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
          <div className="space-y-4">
            {news?.map((item, index) => (
              <article
                key={index}
                className="border-b border-border pb-4 last:border-0"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-1 hover:opacity-80"
                >
                  <h3 className="font-medium leading-tight">{item.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{item.source}</span>
                    <span className="mx-2">•</span>
                    <time>
                      {new Date(item.pubDate).toLocaleDateString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};