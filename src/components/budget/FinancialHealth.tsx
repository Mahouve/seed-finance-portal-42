import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity } from "lucide-react";

export const FinancialHealth = () => {
  const healthScore = 75;

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          Santé Financière
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-2xl font-bold">{healthScore}/100</span>
            <span className="text-sm text-green-500">Bon</span>
          </div>
          <Progress 
            value={healthScore} 
            className="h-3"
            style={{
              background: `linear-gradient(to right, #22c55e ${healthScore}%, #ef4444 ${healthScore}%)`,
            }}
          />
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium">Recommandations :</p>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>Augmentez votre épargne de 10%</li>
            <li>Réduisez les dépenses de loisirs</li>
            <li>Pensez à diversifier vos investissements</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};