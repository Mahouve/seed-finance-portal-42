import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ServiceDialog } from "./ServiceDialog";
import { CreditSimulator } from "./CreditSimulator";

export const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0 transform transition-transform duration-500"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.5 : 0}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Prenez le contrôle de vos finances dès aujourd'hui
        </h1>
        <p className="text-xl md:text-2xl mb-12 animate-fade-in [animation-delay:200ms]">
          Solutions innovantes pour mieux gérer, épargner et investir votre argent
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in [animation-delay:400ms]">
          <Button
            size="lg"
            variant="default"
            className="bg-white text-primary hover:bg-white/90 text-lg font-medium px-10 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={() => setDialogOpen(true)}
          >
            En savoir plus
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg font-medium px-10 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeJthD93yMjD6BCGl2QCh3_OJJP-vulvYfy2aESzo0L-qfWcA/viewform', '_blank')}
          >
            S'inscrire
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg font-medium px-10 py-6 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <CreditSimulator />
          </Button>
        </div>
      </div>

      <ServiceDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};