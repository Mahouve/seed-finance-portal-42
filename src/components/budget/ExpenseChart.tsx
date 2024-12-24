import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BudgetInfo } from './BudgetForm';

interface ExpenseChartProps {
  budget: BudgetInfo;
  expenses?: Array<{ description: string; amount: number; category: string }>;
}

export const ExpenseChart = ({ budget, expenses = [] }: ExpenseChartProps) => {
  const budgetData = [
    { name: 'Loyer', amount: budget.rentMortgage },
    { name: 'Factures', amount: budget.utilities },
    { name: 'Transport', amount: budget.transportation },
    { name: 'Alimentation', amount: budget.food },
    { name: 'Santé', amount: budget.healthcare },
    { name: 'Loisirs', amount: budget.entertainment },
    { name: 'Épargne', amount: budget.savings },
    { name: 'Autres', amount: budget.otherExpenses },
    ...expenses.map(expense => ({
      name: expense.description,
      amount: expense.amount
    }))
  ];

  return (
    <Card className="w-full h-[400px]">
      <CardHeader>
        <CardTitle>Répartition des dépenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={budgetData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip 
              formatter={(value: number) => `${value.toLocaleString('fr-FR')} FCFA`}
            />
            <Bar dataKey="amount" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};