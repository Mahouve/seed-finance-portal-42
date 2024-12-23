import { PiggyBank, Percent, Calendar } from "lucide-react";
import { SimulationResult } from "@/utils/creditCalculator";

interface LoanResultsProps {
  result: SimulationResult;
}

export const LoanResults = ({ result }: LoanResultsProps) => {
  return (
    <div className="space-y-4 p-4 bg-accent/20 rounded-lg">
      <div className="flex items-center gap-2">
        <PiggyBank className="w-5 h-5 text-primary" />
        <span className="font-medium">
          Mensualité: {result.monthlyPayment.toLocaleString('fr-FR')} FCFA
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Percent className="w-5 h-5 text-primary" />
        <span className="font-medium">
          Total des intérêts: {result.totalInterest.toLocaleString('fr-FR')} FCFA
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-primary" />
        <span className="font-medium">
          Coût total: {result.totalAmount.toLocaleString('fr-FR')} FCFA
        </span>
      </div>
    </div>
  );
};