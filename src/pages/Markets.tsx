import { Navigation } from "@/components/Navigation";
import { MarketTable } from "@/components/MarketTable";
import { FinanceNews } from "@/components/FinanceNews";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";

const Markets = () => {
  return (
    <div className="min-h-screen bg-background">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-12">Bourses & Cotations</h1>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <MarketTable />
          <FinanceNews />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Markets;