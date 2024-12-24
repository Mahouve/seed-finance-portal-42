import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calculator, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { queryOpenAI } from "@/utils/openaiUtils";
import { calculateLoan, formatLoanQuery, type SimulationResult } from "@/utils/creditCalculator";
import { LoanResults } from "./LoanResults";
import { BudgetForm, type BudgetInfo } from "./budget/BudgetForm";
import { ExpenseChart } from "./budget/ExpenseChart";
import { AddExpenseForm } from "./budget/AddExpenseForm";

export const CreditSimulator = () => {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [showLoanForm, setShowLoanForm] = useState(false);
  const [budget, setBudget] = useState<BudgetInfo | null>(null);
  const [expenses, setExpenses] = useState<Array<{ description: string; amount: number; category: string }>>([]);

  const handleBudgetSubmit = (budgetData: BudgetInfo) => {
    setBudget(budgetData);
    setShowLoanForm(true);
  };

  const handleAddExpense = (expense: { description: string; amount: number; category: string }) => {
    setExpenses(prev => [...prev, expense]);
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
            {!budget ? (
              <BudgetForm onSubmit={handleBudgetSubmit} />
            ) : (
              <>
                <div className="space-y-4">
                  <ExpenseChart budget={budget} />
                  <AddExpenseForm onAddExpense={handleAddExpense} />
                </div>

                {showLoanForm && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="amount">Montant du prêt (FCFA)</label>
                      <input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Ex: 1000000"
                        className="w-full p-2 border rounded"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="rate">Taux d'intérêt annuel (%)</label>
                      <input
                        id="rate"
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        placeholder="Ex: 5.5"
                        step="0.1"
                        className="w-full p-2 border rounded"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="duration">Durée (années)</label>
                      <input
                        id="duration"
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Ex: 20"
                        className="w-full p-2 border rounded"
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
                  </div>
                )}
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
                <input
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Posez vos questions sur le crédit..."
                  className="flex-1 p-2 border rounded"
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