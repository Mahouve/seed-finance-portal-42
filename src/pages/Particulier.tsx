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
      <section className="py-20 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1591339494368-63e43b7d8626')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in text-white">
              Services Financiers pour Particuliers
            </h1>
            <p className="text-lg text-center mx-auto text-white animate-fade-in">
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