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
import ReactMarkdown from 'react-markdown';
import {
  Wallet,
  LineChart,
  Shield,
  Users,
  BookOpen,
  Building2,
  GraduationCap,
  Send,
} from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Gestion Financière",
    description: "Solutions personnalisées pour gérer vos finances",
    query: "Expliquez-moi les services de gestion financière de SEED Finance"
  },
  {
    icon: LineChart,
    title: "Investissements",
    description: "Stratégies d'investissement adaptées",
    query: "Quels sont les services d'investissement proposés par SEED Finance?"
  },
  {
    icon: Shield,
    title: "Protection du Patrimoine",
    description: "Sécurisez votre avenir financier",
    query: "Comment SEED Finance aide à protéger le patrimoine?"
  },
  {
    icon: Users,
    title: "Services aux Particuliers",
    description: "Solutions pour les besoins individuels",
    query: "Détaillez les services pour particuliers de SEED Finance"
  },
  {
    icon: BookOpen,
    title: "Formation",
    description: "Programmes de formation financière",
    query: "Quels sont les services de formation proposés par SEED Finance?"
  },
  {
    icon: Building2,
    title: "Services aux Entreprises",
    description: "Solutions pour les professionnels",
    query: "Expliquez les services pour entreprises de SEED Finance"
  },
  {
    icon: GraduationCap,
    title: "Éducation Financière",
    description: "Apprentissage et développement",
    query: "Comment SEED Finance contribue à l'éducation financière?"
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
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/fb370886-20e3-4f2b-8bc5-5dd8b28ca800.png" 
              alt="SEED Finance Logo" 
              className="h-12 w-auto"
            />
            <div>
              <DialogTitle className="text-2xl font-bold">Services SEED Finance</DialogTitle>
              <DialogDescription>
                Découvrez nos services en détail. Cliquez sur un service pour en savoir plus.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <Button
                  key={service.title}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-center gap-3 text-center hover:bg-accent/20 transition-all duration-300"
                  onClick={() => queryAssistant(service.query)}
                >
                  <service.icon className="h-8 w-8 text-primary" />
                  <span className="font-medium">{service.title}</span>
                  <span className="text-sm text-muted-foreground">{service.description}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full bg-accent/10 rounded-lg p-4">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      message.role === "assistant"
                        ? "bg-background border border-border"
                        : "bg-primary text-white"
                    }`}
                  >
                    <ReactMarkdown>
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ))}
                {isLoading && (
                  <div className="p-3 rounded-lg bg-background border border-border animate-pulse">
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
                  placeholder="Posez vos questions sur nos services..."
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
    </Dialog>
  );
};