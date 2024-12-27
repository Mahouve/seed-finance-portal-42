import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";
import { BookOpenCheck, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CoursFormations = () => {
  return (
    <div className="min-h-screen">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Cours et Formations Interactives
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpenCheck className="h-6 w-6 text-primary" />
                  <CardTitle>Modules et cours en Ligne</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nos cours en ligne couvrent des sujets essentiels tels que :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Gestion du budget familial</li>
                  <li>Stratégies d'épargne efficaces</li>
                  <li>Principes d'investissement</li>
                  <li>Comprendre l'assurance-vie</li>
                  <li>Planification financière à long terme</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <CardTitle>Préparation au Micro-Entrepreneuriat</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Notre programme de micro-entrepreneuriat comprend :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Fondamentaux de la création d'entreprise</li>
                  <li>Gestion financière de base</li>
                  <li>Marketing et vente</li>
                  <li>Aspects juridiques et fiscaux</li>
                  <li>Planification et stratégie d'entreprise</li>
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

export default CoursFormations;