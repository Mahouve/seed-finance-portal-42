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