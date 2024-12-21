import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EntrepriseServices } from "@/components/EntrepriseServices";
import { Testimonials } from "@/components/Testimonials";

const Entreprise = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Services Financiers pour Entreprises
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
            Pour les entreprises, SEED Finance propose des services financiers, comprenant des consultations avec des experts, des ateliers de formation et des outils technologiques avancés. Nous aidons les entreprises à prendre des décisions financières éclairées, en tenant compte des réalités économiques locales, afin de garantir leur réussite et croissance durable.
          </p>
        </div>
      </section>

      <EntrepriseServices />
      
      {/* Testimonials Section */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Entreprise;