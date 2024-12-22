import { Navigation } from "@/components/Navigation";
import { Values } from "@/components/Values";
import { Objectifs } from "@/components/Objectifs";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { AboutHero } from "@/components/AboutHero";
import { AboutProducts } from "@/components/AboutProducts";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { DecorativeElements } from "@/components/DecorativeElements";

const About = () => {
  return (
    <div className="min-h-screen">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="pt-24">
        <AboutHero />
        <Values />
        <Objectifs />
        <AboutProducts />
        <WhyChooseUs />
      </div>
      <Footer />
    </div>
  );
};

export default About;