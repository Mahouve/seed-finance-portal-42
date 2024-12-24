import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CreditSimulator } from "@/components/CreditSimulator";

const CreditSimulatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Navigation />
      </div>
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Simulateur de Crédit</h1>
        </div>

        <CreditSimulator />
      </main>

      <Footer />
    </div>
  );
};

export default CreditSimulatorPage;