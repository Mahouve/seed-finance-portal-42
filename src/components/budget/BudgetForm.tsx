import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export interface BudgetInfo {
  monthlyIncome: number;
  rentMortgage: number;
  utilities: number;
  transportation: number;
  food: number;
  healthcare: number;
  entertainment: number;
  savings: number;
  otherExpenses: number;
}

interface BudgetFormProps {
  onSubmit: (budget: BudgetInfo) => void;
}

export const BudgetForm = ({ onSubmit }: BudgetFormProps) => {
  const [budget, setBudget] = useState<BudgetInfo>({
    monthlyIncome: 0,
    rentMortgage: 0,
    utilities: 0,
    transportation: 0,
    food: 0,
    healthcare: 0,
    entertainment: 0,
    savings: 0,
    otherExpenses: 0,
  });

  const handleBudgetChange = (field: keyof BudgetInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(prev => ({
      ...prev,
      [field]: parseFloat(e.target.value) || 0
    }));
  };

  const calculateTotalExpenses = () => {
    const { monthlyIncome, ...expenses } = budget;
    return Object.values(expenses).reduce((acc, curr) => acc + curr, 0);
  };

  const getDisposableIncome = () => {
    return budget.monthlyIncome - calculateTotalExpenses();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(budget);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Revenus mensuels</h3>
        <div className="space-y-2">
          <Label htmlFor="monthlyIncome">Revenu mensuel total (FCFA)</Label>
          <Input
            id="monthlyIncome"
            type="number"
            value={budget.monthlyIncome || ''}
            onChange={handleBudgetChange('monthlyIncome')}
            placeholder="Ex: 500000"
          />
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Dépenses mensuelles</h3>
        <div className="space-y-4">
          {[
            { id: 'rentMortgage', label: 'Loyer/Crédit immobilier' },
            { id: 'utilities', label: 'Factures (eau, électricité, etc.)' },
            { id: 'transportation', label: 'Transport' },
            { id: 'food', label: 'Alimentation' },
            { id: 'healthcare', label: 'Santé' },
            { id: 'entertainment', label: 'Loisirs' },
            { id: 'savings', label: 'Épargne' },
            { id: 'otherExpenses', label: 'Autres dépenses' },
          ].map(({ id, label }) => (
            <div key={id} className="space-y-2">
              <Label htmlFor={id}>{label} (FCFA)</Label>
              <Input
                id={id}
                type="number"
                value={budget[id as keyof BudgetInfo] || ''}
                onChange={handleBudgetChange(id as keyof BudgetInfo)}
                placeholder="Ex: 50000"
              />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <div className="space-y-2">
          <p className="font-semibold">Revenu disponible mensuel:</p>
          <p className="text-xl font-bold text-primary">
            {getDisposableIncome().toLocaleString('fr-FR')} FCFA
          </p>
        </div>
      </Card>

      <Button type="submit" className="w-full" disabled={budget.monthlyIncome <= 0}>
        Continuer vers la simulation de crédit
      </Button>
    </form>
  );
};