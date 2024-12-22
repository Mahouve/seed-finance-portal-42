import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ParticulierServices } from "@/components/ParticulierServices";
import { Testimonials } from "@/components/Testimonials";

const Particulier = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Services Financiers pour Particuliers
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
            Les services de SEED Finance visent à fournir une assistance personnalisée et des outils pratiques pour soutenir les particuliers dans leurs décisions financières.
          </p>
        </div>
      </section>

      <ParticulierServices />
      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Particulier;