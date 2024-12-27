import { Button } from "@/components/ui/button";
import { StockTicker } from "@/components/StockTicker";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Wallet2, BookOpen, GraduationCap, PiggyBank, TrendingUp, DollarSign, Calendar } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const BookDedication = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Ici, vous devrez implémenter l'envoi réel du courriel
      // Pour l'instant, nous simulons juste une réussite
      console.log("Sending registration to: Femmeetfinance@gmail.com", formData);
      
      toast({
        title: "Inscription envoyée !",
        description: "Nous vous contacterons bientôt pour confirmer votre inscription.",
      });
      
      setShowForm(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du formulaire.",
        variant: "destructive"
      });
    }
  };

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

        {/* Author Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/lovable-uploads/2820c143-f552-4781-896f-1b024ce9a1b2.png"
                alt="Victoire DJANHAN"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-secondary">Victoire DJANHAN</h2>
              <p className="text-gray-600">
                Experte en finance et gestion de patrimoine, Victoire DJANHAN met son expertise au service des particuliers et des entreprises pour une meilleure gestion financière.
              </p>
              <p className="text-gray-600">
                Forte d'une expérience significative dans le secteur financier, elle partage sa vision et ses connaissances à travers son livre "Les Clés de l'Autonomie Financière" et ses formations en optimisation budgétaire.
              </p>
            </div>
          </div>
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
                <p className="text-xl font-semibold mb-2">Prix de la formation (5h) : 99.000 FCFA</p>
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
                <Button 
                  size="lg"
                  onClick={() => setShowForm(true)}
                >
                  S'inscrire à la formation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-6">Conférence - Les Clés de l'Autonomie Financière</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <Calendar className="text-primary h-6 w-6" />
                <span>Lieu : To be defined</span>
              </div>
              <p className="text-gray-600">
                Rejoignez-nous pour une conférence exclusive autour du livre "Les Clés de l'Autonomie Financière". 
                Une opportunité unique d'échanger avec l'auteure Victoire DJANHAN et d'approfondir les concepts clés 
                pour atteindre votre autonomie financière.
              </p>
              <div className="mt-4">
                <Button variant="outline" className="w-full md:w-auto">
                  Plus d'informations à venir
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Inscription à la formation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nom complet</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Téléphone</label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message (optionnel)</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Envoyer
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    Annuler
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BookDedication;