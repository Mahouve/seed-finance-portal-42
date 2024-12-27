import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { StockTicker } from "@/components/StockTicker";
import { BookOpen, Video, FileText } from "lucide-react";

const Guides = () => {
  return (
    <div className="min-h-screen">
      <StockTicker />
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Guides & Tutoriels</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-4">Guide du débutant</h2>
            <p className="text-gray-600 mb-4">
              Découvrez les bases de la gestion financière et comment débuter avec SEED Finance.
            </p>
            <a href="#" className="text-primary hover:underline">Lire le guide →</a>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Video className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-4">Tutoriels vidéo</h2>
            <p className="text-gray-600 mb-4">
              Apprenez visuellement avec nos tutoriels vidéo détaillés.
            </p>
            <a href="#" className="text-primary hover:underline">Voir les vidéos →</a>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-4">Documentation</h2>
            <p className="text-gray-600 mb-4">
              Consultez notre documentation complète pour des informations détaillées.
            </p>
            <a href="#" className="text-primary hover:underline">Accéder →</a>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guides;