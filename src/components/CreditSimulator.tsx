import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { queryOpenAI } from "@/utils/openaiUtils";
import { calculateLoan, formatLoanQuery, type SimulationResult } from "@/utils/creditCalculator";
import { LoanResults } from "./LoanResults";
import { Card } from "./ui/card";

interface BudgetInfo {
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

export const CreditSimulator = () => {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [showLoanForm, setShowLoanForm] = useState(false);
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
    return Object.values(budget).reduce((acc, curr) => acc + curr, 0) - budget.monthlyIncome;
  };

  const getDisposableIncome = () => {
    return budget.monthlyIncome - calculateTotalExpenses();
  };

  const handleBudgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoanForm(true);
  };

  const handleCalculate = async () => {
    try {
      const simulationResult = calculateLoan(amount, rate, duration);
      setResult(simulationResult);

      const query = formatLoanQuery(
        parseFloat(amount),
        rate,
        duration,
        simulationResult.monthlyPayment,
        simulationResult.totalInterest
      );

      setIsLoading(true);
      const response = await queryOpenAI([{ role: "user", content: query }]);
      setMessages(prev => [...prev, 
        { role: "user", content: query },
        { role: "assistant", content: response }
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMessage.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await queryOpenAI([...messages, { role: "user", content: userMessage }]);
      setMessages(prev => [...prev, 
        { role: "user", content: userMessage },
        { role: "assistant", content: response }
      ]);
      setUserMessage("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Calculator className="w-4 h-4" />
          Simulateur de crédit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold">
            <Calculator className="w-6 h-6 text-primary" />
            Simulateur de crédit
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[calc(90vh-100px)]">
          <div className="space-y-6 overflow-y-auto pr-4">
            {!showLoanForm ? (
              <form onSubmit={handleBudgetSubmit} className="space-y-4">
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
                    <div className="space-y-2">
                      <Label htmlFor="rentMortgage">Loyer/Crédit immobilier (FCFA)</Label>
                      <Input
                        id="rentMortgage"
                        type="number"
                        value={budget.rentMortgage || ''}
                        onChange={handleBudgetChange('rentMortgage')}
                        placeholder="Ex: 150000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="utilities">Factures (eau, électricité, etc.) (FCFA)</Label>
                      <Input
                        id="utilities"
                        type="number"
                        value={budget.utilities || ''}
                        onChange={handleBudgetChange('utilities')}
                        placeholder="Ex: 50000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transportation">Transport (FCFA)</Label>
                      <Input
                        id="transportation"
                        type="number"
                        value={budget.transportation || ''}
                        onChange={handleBudgetChange('transportation')}
                        placeholder="Ex: 30000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="food">Alimentation (FCFA)</Label>
                      <Input
                        id="food"
                        type="number"
                        value={budget.food || ''}
                        onChange={handleBudgetChange('food')}
                        placeholder="Ex: 100000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="healthcare">Santé (FCFA)</Label>
                      <Input
                        id="healthcare"
                        type="number"
                        value={budget.healthcare || ''}
                        onChange={handleBudgetChange('healthcare')}
                        placeholder="Ex: 20000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="entertainment">Loisirs (FCFA)</Label>
                      <Input
                        id="entertainment"
                        type="number"
                        value={budget.entertainment || ''}
                        onChange={handleBudgetChange('entertainment')}
                        placeholder="Ex: 40000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="savings">Épargne (FCFA)</Label>
                      <Input
                        id="savings"
                        type="number"
                        value={budget.savings || ''}
                        onChange={handleBudgetChange('savings')}
                        placeholder="Ex: 50000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="otherExpenses">Autres dépenses (FCFA)</Label>
                      <Input
                        id="otherExpenses"
                        type="number"
                        value={budget.otherExpenses || ''}
                        onChange={handleBudgetChange('otherExpenses')}
                        placeholder="Ex: 30000"
                      />
                    </div>
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
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="amount">Montant du prêt (FCFA)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Ex: 1000000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rate">Taux d'intérêt annuel (%)</Label>
                  <Input
                    id="rate"
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Ex: 5.5"
                    step="0.1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Durée (années)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Ex: 20"
                  />
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full"
                  disabled={!amount || !rate || !duration}
                >
                  Calculer
                </Button>

                {result && <LoanResults result={result} />}
              </>
            )}
          </div>

          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1">
              <div className="space-y-4 pr-2">
                {messages.map((message, index) => (
                  <ChatMessage key={index} {...message} />
                ))}
                {isLoading && (
                  <div className="p-3 rounded-lg bg-accent/20">
                    Analyse en cours...
                  </div>
                )}
              </div>
            </ScrollArea>

            <form onSubmit={sendMessage} className="mt-4">
              <div className="flex gap-2">
                <Input
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Posez vos questions sur le crédit..."
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading}>
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};