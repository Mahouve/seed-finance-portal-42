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
import {
  Calculator,
  PiggyBank,
  Calendar,
  Percent,
  MessageSquare,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SimulationResult {
  monthlyPayment: number;
  totalInterest: number;
  totalAmount: number;
  schedule: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    remainingBalance: number;
  }>;
}

export const CreditSimulator = () => {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const annualRate = parseFloat(rate) / 100;
    const months = parseInt(duration) * 12;
    const monthlyRate = annualRate / 12;

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    let remainingBalance = principal;
    const schedule = [];

    for (let month = 1; month <= months; month++) {
      const interest = remainingBalance * monthlyRate;
      const principal = monthlyPayment - interest;
      remainingBalance -= principal;

      schedule.push({
        month,
        payment: monthlyPayment,
        principal,
        interest,
        remainingBalance: Math.max(0, remainingBalance),
      });
    }

    const totalInterest = schedule.reduce((sum, { interest }) => sum + interest, 0);

    setResult({
      monthlyPayment,
      totalInterest,
      totalAmount: principal + totalInterest,
      schedule,
    });

    // Query AI assistant with the results
    queryAssistant(`Analysez ce prêt :
      - Montant: ${principal} FCFA
      - Taux annuel: ${rate}%
      - Durée: ${duration} ans
      - Mensualité: ${monthlyPayment.toFixed(2)} FCFA
      - Intérêts totaux: ${totalInterest.toFixed(2)} FCFA`);
  };

  const queryAssistant = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer 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`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "Tu es un expert en crédit et finance qui aide à analyser les simulations de prêt."
            },
            ...messages,
            { role: "user", content: query }
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!response.ok) throw new Error("Erreur de communication avec l'assistant");

      const data = await response.json();
      setMessages(prev => [...prev, 
        { role: "user", content: query },
        { role: "assistant", content: data.choices[0].message.content }
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMessage.trim()) return;
    queryAssistant(userMessage);
    setUserMessage("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Calculator className="w-4 h-4" />
          Simulateur de crédit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl font-bold">
            <Calculator className="w-6 h-6 text-primary" />
            Simulateur de crédit
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          <div className="space-y-6">
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
              onClick={calculateLoan}
              className="w-full"
              disabled={!amount || !rate || !duration}
            >
              Calculer
            </Button>

            {result && (
              <div className="space-y-4 p-4 bg-accent/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    Mensualité: {result.monthlyPayment.toFixed(2)} FCFA
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Percent className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    Total des intérêts: {result.totalInterest.toFixed(2)} FCFA
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    Coût total: {result.totalAmount.toFixed(2)} FCFA
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      message.role === "assistant"
                        ? "bg-accent/20"
                        : "bg-primary text-white"
                    }`}
                  >
                    {message.content}
                  </div>
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