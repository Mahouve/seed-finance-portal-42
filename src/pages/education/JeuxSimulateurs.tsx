import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";
import { Coins, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const JeuxSimulateurs = () => {
  return (
    <div className="min-h-screen">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Jeux et Simulateurs
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Coins className="h-6 w-6 text-primary" />
                  <CardTitle>Simulations de Portefeuille</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expérimentez avec nos simulateurs :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Gestion de portefeuille virtuel</li>
                  <li>Investissement dans les secteurs locaux</li>
                  <li>Analyse de risques</li>
                  <li>Stratégies d'investissement</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <CardTitle>Quiz et Défis Financiers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Testez vos connaissances avec :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Quiz interactifs</li>
                  <li>Défis hebdomadaires</li>
                  <li>Tests de connaissances</li>
                  <li>Exercices pratiques</li>
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

export default JeuxSimulateurs;