import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ParticulierServices } from "@/components/ParticulierServices";
import { Testimonials } from "@/components/Testimonials";
import { DecorativeElements } from "@/components/DecorativeElements";

const Particulier = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      <DecorativeElements />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-transparent relative">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
            Services Financiers pour Particuliers
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600 animate-fade-in">
            Les services de SEED Finance visent à fournir une assistance personnalisée et des outils pratiques pour soutenir les particuliers dans leurs décisions financières.
          </p>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsla(277,75%,84%,1)_0%,hsla(297,50%,51%,1)_100%)] opacity-10 pointer-events-none" />
      </section>

      <ParticulierServices />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Particulier;