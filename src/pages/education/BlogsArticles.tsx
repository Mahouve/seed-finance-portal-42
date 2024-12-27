import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";
import { BookText, Coins, UserSquare2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogsArticles = () => {
  return (
    <div className="min-h-screen">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Blogs et Articles
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookText className="h-6 w-6 text-primary" />
                  <CardTitle>Séries Thématiques</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explorez nos séries d'articles sur :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Marchés financiers africains</li>
                  <li>Investissement local</li>
                  <li>Développement économique</li>
                  <li>Innovations financières</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Coins className="h-6 w-6 text-primary" />
                  <CardTitle>Conseils Pratiques</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Découvrez nos guides pratiques sur :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Gestion budgétaire quotidienne</li>
                  <li>Réduction des dépenses</li>
                  <li>Optimisation fiscale</li>
                  <li>Planification financière</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <UserSquare2 className="h-6 w-6 text-primary" />
                  <CardTitle>Focus Démographique</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contenu spécialisé pour :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Entrepreneuriat féminin</li>
                  <li>Finance pour les jeunes</li>
                  <li>Projets communautaires</li>
                  <li>Inclusion financière</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogsArticles;