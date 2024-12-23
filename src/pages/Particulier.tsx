import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ParticulierServices } from "@/components/ParticulierServices";
import { Testimonials } from "@/components/Testimonials";
import { DecorativeElements } from "@/components/DecorativeElements";
import { StockTicker } from "@/components/StockTicker";
import { CreditSimulator } from "@/components/CreditSimulator";

const Particulier = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Services Financiers pour Particuliers
              </h1>
              <p className="text-xl text-center mx-auto text-white animate-fade-in font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Les services de SEED Finance visent à fournir une assistance personnalisée et des outils pratiques pour soutenir les particuliers dans leurs décisions financières.
              </p>
            </div>
          </div>
        </section>

        <ParticulierServices />
        <Testimonials />

        {/* Simulateur de Crédit Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Simulateur de Crédit
              </h2>
              <p className="text-lg text-center text-gray-600 mb-12">
                Calculez rapidement vos mensualités et obtenez une estimation personnalisée de votre crédit
              </p>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Particulier;