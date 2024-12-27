import { Button } from "@/components/ui/button";
import { StockTicker } from "@/components/StockTicker";
import { Navigation } from "@/components/Navigation";
import { Wallet2, BookOpen, GraduationCap, PiggyBank, TrendingUp, DollarSign } from "lucide-react";

const BookDedication = () => {
  return (
    <div className="min-h-screen bg-background">
      <StockTicker />
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Votre Partenaire en Excellence Financière
          </h1>
          <p className="text-xl text-gray-600">
            Conseil et formation pour les entreprises et particuliers au Cameroun et en Afrique
          </p>
        </div>

        {/* Book Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary">Les Clés de l'Autonomie Financière</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <BookOpen className="text-primary" />
                <span>Maîtrisez les fondamentaux de la gestion financière</span>
              </li>
              <li className="flex items-center gap-3">
                <PiggyBank className="text-primary" />
                <span>Apprenez à réduire et maîtriser vos dépenses</span>
              </li>
              <li className="flex items-center gap-3">
                <TrendingUp className="text-primary" />
                <span>Apprenez comment construire une sécurité financière solide</span>
              </li>
            </ul>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl font-semibold mb-4">Prix : 12.500 FCFA ou 20€</p>
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Wallet2 className="text-primary" />
                  Moyens de paiement :
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Orange Money : +237 671 25 97 25</li>
                  <li>MTN MoMo : +237 671 25 97 25</li>
                  <li>PayPal : anvicfr@yahoo.fr</li>
                </ul>
              </div>
              <Button className="w-full mt-4">
                Découvrir le livre
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/lovable-uploads/2820c143-f552-4781-896f-1b024ce9a1b2.png"
              alt="Les clés de l'autonomie financière - Livre"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            />
            <p className="text-center mt-4 text-gray-600 italic">
              Les Clés de l'Autonomie Financière par Victoire DJANHAN
            </p>
          </div>
        </div>

        {/* Formation Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-6">Formation en Optimisation Budgétaire</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <DollarSign className="text-primary" />
                  <span>Réduction des coûts et optimisation des dépenses</span>
                </li>
                <li className="flex items-center gap-3">
                  <TrendingUp className="text-primary" />
                  <span>Génération de revenus supplémentaires</span>
                </li>
                <li className="flex items-center gap-3">
                  <PiggyBank className="text-primary" />
                  <span>Stratégies d'épargne et d'investissement</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-xl font-semibold mb-2">Prix de la formation (5h) : 79.000 FCFA</p>
                <p className="text-green-600 font-medium mb-4">
                  Livre offert avec la formation !
                </p>
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Wallet2 className="text-primary" />
                    Moyens de paiement :
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Orange Money : +237 671 25 97 25</li>
                    <li>MTN MoMo : +237 671 25 97 25</li>
                    <li>PayPal : anvicfr@yahoo.fr</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-6 bg-gray-50 p-6 rounded-lg">
              <GraduationCap size={64} className="text-primary" />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Formation complète</h3>
                <p className="text-gray-600 mb-4">
                  Une formation intensive de 5 heures pour maîtriser votre budget
                </p>
                <Button size="lg">
                  S'inscrire à la formation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDedication;