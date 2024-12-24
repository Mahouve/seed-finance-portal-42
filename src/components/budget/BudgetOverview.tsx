import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PiggyBank, TrendingUp, CreditCard } from "lucide-react";

export const BudgetOverview = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PiggyBank className="h-5 w-5 text-primary" />
          Vue d'ensemble du budget
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Budget total</span>
            <span className="font-medium">200 000 XAF</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm">Revenus</span>
            </div>
            <p className="text-lg font-bold">250 000 XAF</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-red-500" />
              <span className="text-sm">Dépenses</span>
            </div>
            <p className="text-lg font-bold">130 000 XAF</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};