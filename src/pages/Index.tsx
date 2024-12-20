import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Values } from "@/components/Values";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StockTicker />
      <Navigation />
      <Hero />
      <Values />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;