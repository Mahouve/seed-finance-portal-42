import { Navigation } from "@/components/Navigation";
import { Values } from "@/components/Values";
import { Objectifs } from "@/components/Objectifs";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";

const About = () => {
  return (
    <div className="min-h-screen">
      <StockTicker />
      <Navigation />
      <main className="pt-32">
        <Values />
        <Objectifs />
      </main>
      <Footer />
    </div>
  );
};

export default About;