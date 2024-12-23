import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, PiggyBank, TrendingUp, Users } from "lucide-react";
import { CreditSimulator } from "./CreditSimulator";
import { useState } from "react";

export const Services = () => {
  const [showSimulator, setShowSimulator] = useState(false);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Nos Services</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Des solutions financières adaptées à vos besoins
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 mb-4 text-primary">
                <Users size={48} />
              </div>
              <CardTitle className="text-xl">Conseil Personnalisé</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              <p>Bénéficiez d'un accompagnement sur mesure pour atteindre vos objectifs financiers.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 mb-4 text-primary">
                <PiggyBank size={48} />
              </div>
              <CardTitle className="text-xl">Épargne et Investissement</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              <p>Optimisez votre épargne et découvrez les meilleures opportunités d'investissement.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 mb-4 text-primary">
                <TrendingUp size={48} />
              </div>
              <CardTitle className="text-xl">Gestion de Patrimoine</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              <p>Développez et protégez votre patrimoine avec nos stratégies personnalisées.</p>
            </CardContent>
          </Card>
        </div>

        {/* Simulateur de Crédit Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Simulateur de Crédit
              </h3>
              <p className="text-gray-600">
                Calculez rapidement vos mensualités et obtenez une estimation personnalisée de votre crédit.
              </p>
            </div>
            <Button 
              variant="default"
              className="flex items-center gap-2"
              onClick={() => setShowSimulator(true)}
            >
              <Calculator className="h-4 w-4" />
              Simulateur de crédit
            </Button>
          </div>
        </div>
      </div>

      {showSimulator && <CreditSimulator />}
    </section>
  );
};