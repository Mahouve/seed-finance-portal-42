import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard } from "lucide-react";

const recentExpenses = [
  { date: "2024-03-15", description: "Loyer", amount: 75000, category: "Logement" },
  { date: "2024-03-14", description: "Courses", amount: 25000, category: "Alimentation" },
  { date: "2024-03-13", description: "Transport", amount: 15000, category: "Transport" },
  { date: "2024-03-12", description: "Internet", amount: 20000, category: "Services" },
];

export const ExpenseTracker = () => {
  return (
    <Card className="shadow-lg mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          Suivi des Dépenses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead className="text-right">Montant</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentExpenses.map((expense, index) => (
              <TableRow key={index}>
                <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell className="text-right">{expense.amount.toLocaleString()} XAF</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};