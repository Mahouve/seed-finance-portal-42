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

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Values />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;