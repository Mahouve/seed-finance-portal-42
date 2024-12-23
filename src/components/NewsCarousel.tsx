import { useFinanceNews } from "@/hooks/useFinanceNews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, ExternalLink } from "lucide-react";

export const NewsCarousel = () => {
  const { data: news, isLoading } = useFinanceNews();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-4">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-[300px] w-full" />
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Actualités Financières
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {news?.map((article, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <CardContent className="p-6">
                      {article.image && (
                        <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="space-y-3">
                        <h3 className="font-medium leading-tight text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <time>
                              {new Date(article.pubDate).toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "short",
                              })}
                            </time>
                          </div>
                          <div className="flex items-center gap-1 text-primary">
                            <span className="text-sm">Lire plus</span>
                            <ExternalLink className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-none bg-white/90 hover:bg-white" />
          <CarouselNext className="hidden md:flex -right-12 border-none bg-white/90 hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
};