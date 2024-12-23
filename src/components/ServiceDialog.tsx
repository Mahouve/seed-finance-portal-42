import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  Wallet,
  LineChart,
  Shield,
  Users,
  BookOpen,
  Building2,
  GraduationCap,
  Send,
  Calculator,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { ChatMessage } from "./ChatMessage";
import { CreditSimulator } from "./CreditSimulator";

const services = [
  {
    icon: Wallet,
    title: "Gestion",
    description: "Solutions personnalisées",
    query: "Détaillez les services de gestion financière"
  },
  {
    icon: LineChart,
    title: "Investir",
    description: "Stratégies adaptées",
    query: "Expliquez les stratégies d'investissement"
  },
  {
    icon: Shield,
    title: "Protection",
    description: "Sécurité patrimoniale",
    query: "Comment protéger son patrimoine?"
  },
  {
    icon: Users,
    title: "Particuliers",
    description: "Services individuels",
    query: "Services pour particuliers"
  },
  {
    icon: BookOpen,
    title: "Formation",
    description: "Programmes financiers",
    query: "Programmes de formation disponibles"
  },
  {
    icon: Building2,
    title: "Entreprises",
    description: "Solutions pro",
    query: "Services aux entreprises"
  },
  {
    icon: GraduationCap,
    title: "Éducation",
    description: "Apprentissage",
    query: "Programme d'éducation financière"
  }
];

interface ServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ServiceDialog = ({ open, onOpenChange }: ServiceDialogProps) => {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [showSimulator, setShowSimulator] = useState(false);

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
              content: "Tu es un assistant financier expert qui aide les utilisateurs à comprendre les services de SEED Finance."
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] overflow-hidden">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <img 
              src="/lovable-uploads/fb370886-20e3-4f2b-8bc5-5dd8b28ca800.png" 
              alt="SEED Finance Logo" 
              className="h-8 w-auto"
            />
            <div>
              <DialogTitle className="text-xl font-semibold">Services SEED Finance</DialogTitle>
              <DialogDescription className="text-sm">
                Cliquez pour plus d'infos
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  onClick={() => queryAssistant(service.query)}
                />
              ))}
            </div>
            
            <Button 
              variant="default"
              className="w-full flex items-center gap-2"
              onClick={() => setShowSimulator(true)}
            >
              <Calculator className="h-4 w-4" />
              Simulateur de crédit
            </Button>
          </div>

          <div className="flex flex-col h-full bg-accent/10 rounded-lg p-4">
            <ScrollArea className="flex-1 pr-4 h-[calc(100%-80px)] overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <ChatMessage key={index} {...message} />
                ))}
                {isLoading && (
                  <div className="p-3 rounded-lg bg-background border border-border animate-pulse">
                    Analyse...
                  </div>
                )}
              </div>
            </ScrollArea>

            <form onSubmit={sendMessage} className="mt-4">
              <div className="flex gap-2">
                <Input
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Vos questions..."
                  className="flex-1"
                />
                <Button type="submit" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>

      {showSimulator && (
        <CreditSimulator />
      )}
    </Dialog>
  );
};