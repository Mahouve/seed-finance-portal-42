import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EntrepriseServices } from "@/components/EntrepriseServices";
import { Testimonials } from "@/components/Testimonials";
import { DecorativeElements } from "@/components/DecorativeElements";

const Entreprise = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      <DecorativeElements />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent relative">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
            Services Financiers pour Entreprises
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 animate-fade-in">
            Pour les entreprises, SEED Finance propose des services financiers, comprenant des consultations avec des experts, des ateliers de formation et des outils technologiques avancés.
          </p>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(109.6deg,rgba(223,234,247,1)_11.2%,rgba(244,248,252,1)_91.1%)] opacity-20 pointer-events-none" />
      </section>

      <EntrepriseServices />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Entreprise;