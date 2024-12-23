import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EntrepriseServices } from "@/components/EntrepriseServices";
import { Testimonials } from "@/components/Testimonials";
import { DecorativeElements } from "@/components/DecorativeElements";
import { StockTicker } from "@/components/StockTicker";
import { AIAssistantDrawer } from "@/components/AIAssistantDrawer";

const Entreprise = () => {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1554469384-e58fac16e23a')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/95" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in text-white">
              Services Financiers pour Entreprises
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto animate-fade-in text-white/90">
              Pour les entreprises, SEED Finance propose des services financiers, comprenant des consultations avec des experts, des ateliers de formation et des outils technologiques avancés.
            </p>
          </div>
        </section>

        <EntrepriseServices />
        <Testimonials />
        <Footer />
      </div>
      <AIAssistantDrawer />
    </div>
  );
};

export default Entreprise;