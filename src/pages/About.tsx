import { Navigation } from "@/components/Navigation";
import { Values } from "@/components/Values";
import { Objectifs } from "@/components/Objectifs";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { AboutHero } from "@/components/AboutHero";
import { AboutProducts } from "@/components/AboutProducts";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const About = () => {
  return (
    <div className="min-h-screen">
      <StockTicker />
      <Navigation />
      <main className="pt-32">
        <AboutHero />
        <Values />
        <Objectifs />
        <AboutProducts />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default About;