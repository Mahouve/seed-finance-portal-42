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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Prenez le contrôle de vos finances dès aujourd'hui
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in [animation-delay:200ms]">
          Solutions innovantes pour mieux gérer, épargner et investir votre argent
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in [animation-delay:400ms]">
          <Button
            size="lg"
            variant="default"
            className="bg-white text-primary hover:bg-gray-100 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            En savoir plus
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-4 border-white text-white hover:bg-white/20 transition-all font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl"
          >
            S'inscrire
          </Button>
        </div>
      </div>
    </div>
  );
};