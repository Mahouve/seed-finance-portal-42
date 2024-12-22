import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Values } from "@/components/Values";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { VideoSection } from "@/components/VideoSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <DecorativeElements />
      <div className="pt-16">
        <StockTicker />
      </div>
      <Navigation />
      <div className="pt-16">
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
          <VideoSection />
        </div>
        <div className="scroll-animation [animation-delay:1400ms]">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;