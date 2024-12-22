import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ParticulierServices } from "@/components/ParticulierServices";
import { Testimonials } from "@/components/Testimonials";
import { DecorativeElements } from "@/components/DecorativeElements";

const Particulier = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-16">
      <Navigation />
      <DecorativeElements />
      
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
      <Footer />
    </div>
  );
};

export default Particulier;