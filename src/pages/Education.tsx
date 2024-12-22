import { Navigation } from "@/components/Navigation";
import { EducationHero } from "@/components/EducationHero";
import { EducationServices } from "@/components/EducationServices";
import { Footer } from "@/components/Footer";

const Education = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      <EducationHero />
      <EducationServices />
      <Footer />
    </div>
  );
};

export default Education;