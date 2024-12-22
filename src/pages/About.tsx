import { Navigation } from "@/components/Navigation";
import { Values } from "@/components/Values";
import { Objectifs } from "@/components/Objectifs";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <Values />
        <Objectifs />
      </main>
      <Footer />
    </div>
  );
};

export default About;