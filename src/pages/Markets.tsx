import { Navigation } from "@/components/Navigation";
import { FinanceNews } from "@/components/FinanceNews";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";
import { CurrencyTabs } from "@/components/CurrencyTabs";
import { MarketTable } from "@/components/MarketTable";

const Markets = () => {
  return (
    <div className="min-h-screen bg-background">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-center mb-4 text-foreground">
          Bourses & Cotations
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Suivez en temps réel l'évolution des marchés financiers africains et restez informé des dernières actualités économiques.
        </p>
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8 animate-fade-in">
            <CurrencyTabs />
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Indices Boursiers Mondiaux</h2>
              <p className="text-muted-foreground mb-6">
                Suivez les principaux indices boursiers mondiaux avec des mises à jour en temps réel.
              </p>
              <MarketTable />
            </div>
          </div>
          <div className="animate-fade-in [animation-delay:200ms]">
            <FinanceNews />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Markets;