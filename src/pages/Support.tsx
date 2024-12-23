import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SupportHero } from "@/components/SupportHero";
import { SupportCategories } from "@/components/SupportCategories";
import { Contact } from "@/components/Contact";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";

const Support = () => {
  return (
    <div className="min-h-screen relative">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="pt-24">
        <SupportHero />
        <SupportCategories />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Support;