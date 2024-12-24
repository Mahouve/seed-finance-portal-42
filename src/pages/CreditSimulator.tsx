import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BudgetOverview } from "@/components/budget/BudgetOverview";
import { ExpenseTracker } from "@/components/budget/ExpenseTracker";
import { FinancialHealth } from "@/components/budget/FinancialHealth";
import { Recommendations } from "@/components/budget/Recommendations";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const CreditSimulator = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Gestion Budgétaire</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <BudgetOverview />
          <FinancialHealth />
        </div>

        <ExpenseTracker />
        <Recommendations />
      </main>

      <Footer />
    </div>
  );
};

export default CreditSimulator;