import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Construisez un avenir financier solide avec Seed Finance
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in [animation-delay:200ms]">
          Des solutions sur mesure pour particuliers et entreprises
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in [animation-delay:400ms]">
          <Button
            size="lg"
            variant="default"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Découvrez nos services
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Contactez-nous
          </Button>
        </div>
      </div>
    </div>
  );
};