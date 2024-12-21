import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  image?: string;
  description?: string;
}

const mockNews: NewsItem[] = [
  {
    title: "La Bourse de Casablanca termine en hausse",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Financial Afrik",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Le MASI a progressé de 0,5% cette semaine, porté par les valeurs bancaires."
  },
  {
    title: "Le Nigeria Stock Exchange atteint un nouveau record",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Africa News",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "L'indice NGX dépasse les 70 000 points pour la première fois de son histoire."
  },
  {
    title: "Johannesburg Stock Exchange : Le secteur minier en forte hausse",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "CNBC Africa",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Les valeurs minières sud-africaines portées par la hausse des matières premières."
  },
  {
    title: "La BRVM franchit un nouveau palier historique",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Agence Ecofin",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "La Bourse Régionale des Valeurs Mobilières établit un nouveau record."
  },
  {
    title: "Égypte : La bourse du Caire attire les investisseurs étrangers",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Reuters Afrique",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "Les réformes économiques égyptiennes séduisent les investisseurs internationaux."
  },
  {
    title: "Le Nairobi Securities Exchange lance de nouveaux produits dérivés",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Business Daily Africa",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "La bourse kényane diversifie son offre de produits financiers."
  },
  {
    title: "Wall Street : Les tech leaders portent le S&P 500",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Les Échos",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Les géants de la tech continuent leur progression à Wall Street."
  },
  {
    title: "La Bourse de Londres réagit aux chiffres de l'inflation",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Financial Times",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Le FTSE 100 sous pression après les dernières données économiques."
  },
  {
    title: "Le CAC 40 porté par les résultats d'entreprises",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Le Figaro",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Les sociétés françaises publient des résultats supérieurs aux attentes."
  },
  {
    title: "Bourse de Shanghai : Les mesures de relance font effet",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Bloomberg",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Le marché chinois rebondit après les annonces gouvernementales."
  },
  {
    title: "Le Nikkei au plus haut depuis 34 ans",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Reuters",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "La bourse de Tokyo poursuit sa progression historique."
  },
  {
    title: "Le DAX allemand établit un nouveau record",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Deutsche Welle",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "L'indice phare allemand dépasse les 17 000 points."
  },
  {
    title: "Bourse de Toronto : Le secteur énergétique brille",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Globe and Mail",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Les valeurs pétrolières canadiennes en forte hausse."
  },
  {
    title: "La Bourse de Mumbai établit de nouveaux records",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Economic Times",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Le Sensex indien continue sa progression historique."
  },
  {
    title: "Le marché boursier saoudien attire les investisseurs",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Arab News",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "La Bourse de Riyad en pleine expansion."
  }
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
          <div className="space-y-6">
            {news?.map((item, index) => (
              <article
                key={index}
                className="border-b border-border pb-6 last:border-0"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-3 hover:opacity-80"
                >
                  {item.image && (
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <h3 className="font-medium leading-tight text-lg">{item.title}</h3>
                    {item.description && (
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">{item.source}</span>
                      <span className="mx-2">•</span>
                      <time>
                        {new Date(item.pubDate).toLocaleDateString("fr-FR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </time>
                    </div>
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