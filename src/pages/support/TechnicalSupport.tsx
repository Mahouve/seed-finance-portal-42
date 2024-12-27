import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StockTicker } from "@/components/StockTicker";
import { MessageSquare, Phone, Mail } from "lucide-react";

const TechnicalSupport = () => {
  return (
    <div className="min-h-screen">
      <StockTicker />
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Support Technique</h1>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center mb-4">Chat en direct</h2>
            <p className="text-gray-600 text-center mb-4">
              Discutez en temps réel avec notre équipe de support
            </p>
            <Button className="w-full">Démarrer le chat</Button>
          </Card>

          <Card className="p-6">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center mb-4">Assistance téléphonique</h2>
            <p className="text-gray-600 text-center mb-4">
              +237 671 25 97 25<br />
              Lun-Ven: 9h-18h
            </p>
            <Button className="w-full">Appelez-nous</Button>
          </Card>

          <Card className="p-6">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center mb-4">Email</h2>
            <p className="text-gray-600 text-center mb-4">
              Envoyez-nous un email pour toute question
            </p>
            <Button className="w-full">Contactez-nous</Button>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalSupport;