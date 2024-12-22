import { Navigation } from "@/components/Navigation";
import { EducationHero } from "@/components/EducationHero";
import { EducationServices } from "@/components/EducationServices";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";

const Education = () => {
  return (
    <div className="min-h-screen">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="pt-24">
        <EducationHero />
        <EducationServices />
        <Footer />
      </div>
    </div>
  );
};

export default Education;