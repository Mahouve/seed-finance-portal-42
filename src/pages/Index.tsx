import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Values } from "@/components/Values";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { DecorativeElements } from "@/components/DecorativeElements";
import { useEffect, useRef } from "react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in", "opacity-100");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    document.querySelectorAll(".scroll-animation").forEach((element) => {
      element.classList.add("opacity-0");
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="scroll-animation">
        <Hero />
      </div>
      
      {/* Nouvelle section avec l'image de conférence */}
      <div className="scroll-animation relative w-full h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative container mx-auto h-full flex items-center justify-center text-center px-4">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expertise et Formation en Gestion Financière
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Nos conférences et formations vous donnent les clés pour une meilleure maîtrise de vos finances
            </p>
          </div>
        </div>
      </div>

      <div className="scroll-animation [animation-delay:200ms]">
        <Services />
      </div>
      <div className="scroll-animation [animation-delay:400ms]">
        <Features />
      </div>
      <div className="scroll-animation [animation-delay:600ms]">
        <Values />
      </div>
      <div className="scroll-animation [animation-delay:800ms]">
        <Stats />
      </div>
      <div className="scroll-animation [animation-delay:1000ms]">
        <Testimonials />
      </div>
      <div className="scroll-animation [animation-delay:1200ms]">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;