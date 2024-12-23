import { Button } from "@/components/ui/button";
import { StockTicker } from "@/components/StockTicker";
import { Navigation } from "@/components/Navigation";

const BookDedication = () => {
  return (
    <div className="min-h-screen bg-background">
      <StockTicker />
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="animate-fade-in">
            <img
              src="/lovable-uploads/2820c143-f552-4781-896f-1b024ce9a1b2.png"
              alt="Les clés de l'autonomie financière - Livre"
              className="w-full max-w-md mx-auto shadow-xl rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Découvrez "Les clés de l'autonomie financière"
            </h1>
            <p className="text-xl font-semibold text-secondary">
              Prenez le contrôle de votre avenir financier dès aujourd'hui !
            </p>
            <p className="text-lg">
              Êtes-vous prêt(e) à transformer votre relation avec l'argent et à bâtir une vie financièrement stable et indépendante ?
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl font-bold text-primary mb-4">Pourquoi ce livre est fait pour vous ?</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="text-2xl">📘</span>
                <span>Une méthode éprouvée : Apprenez à établir un budget clair et réaliste.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>Les secrets de l'épargne : Découvrez comment mettre de côté sans sacrifier votre qualité de vie.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">📈</span>
                <span>Investir intelligemment : Une introduction aux investissements accessibles à tous.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">🧩</span>
                <span>Astuces pratiques : Des conseils adaptés au contexte africain et aux réalités économiques d'aujourd'hui.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl font-bold text-primary mb-4">Avis des lecteurs</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "Un guide simple et pratique qui m'a aidé à changer ma vision de l'argent. Merci pour ce chef-d'œuvre !"
                <footer className="text-sm font-semibold mt-2">— Marie K.</footer>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                "Les stratégies d'investissement expliquées ici m'ont vraiment ouvert les yeux. Je recommande à 100% !"
                <footer className="text-sm font-semibold mt-2">— Jacques N.</footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Book Details and CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">Détails du livre</h2>
            <p className="text-xl font-bold mb-2">Prix : 12 000 FCFA</p>
            <p className="mb-6">Prêt(e) à commencer votre voyage vers l'autonomie financière ?</p>
            <Button size="lg" className="w-full md:w-auto">
              Commander maintenant
            </Button>
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">À propos de l'auteur</h2>
            <p className="text-lg">
              <span className="text-[#8B5CF6] font-semibold animate-pulse">Victoire DJANHAN</span>, 
              passionné(e) de finance personnelle et engagé(e) à aider les autres à atteindre leur autonomie financière, 
              partage dans ce livre des années d'expérience et des outils concrets pour changer votre vie.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDedication;