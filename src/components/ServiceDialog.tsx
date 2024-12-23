import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import ReactMarkdown from "react-markdown";
import {
  Wallet,
  LineChart,
  Shield,
  Users,
  BookOpen,
  Building2,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Wallet,
    title: "Gestion Financière",
    query: "Expliquez-moi les services de gestion financière de SEED Finance"
  },
  {
    icon: LineChart,
    title: "Investissements",
    query: "Quels sont les services d'investissement proposés par SEED Finance?"
  },
  {
    icon: Shield,
    title: "Protection du Patrimoine",
    query: "Comment SEED Finance aide à protéger le patrimoine?"
  },
  {
    icon: Users,
    title: "Services aux Particuliers",
    query: "Détaillez les services pour particuliers de SEED Finance"
  },
  {
    icon: BookOpen,
    title: "Formation",
    query: "Quels sont les services de formation proposés par SEED Finance?"
  },
  {
    icon: Building2,
    title: "Services aux Entreprises",
    query: "Expliquez les services pour entreprises de SEED Finance"
  },
  {
    icon: GraduationCap,
    title: "Éducation Financière",
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
  const { toast } = useToast();

  const queryAssistant = async (query: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "Tu es un assistant financier expert qui aide les utilisateurs à comprendre les services de SEED Finance."
            },
            {
              role: "user",
              content: query
            }
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
      toast({
        title: "Erreur",
        description: "Impossible de communiquer avec l'assistant pour le moment",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Services SEED Finance</DialogTitle>
          <DialogDescription>
            Découvrez nos services en détail. Cliquez sur un service pour en savoir plus.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {services.map((service) => (
            <Button
              key={service.title}
              variant="outline"
              className="h-auto p-4 flex items-center gap-3"
              onClick={() => queryAssistant(service.query)}
              disabled={isLoading}
            >
              <service.icon className="h-6 w-6 text-primary" />
              <span className="text-left font-medium">{service.title}</span>
            </Button>
          ))}
        </div>

        <ScrollArea className="flex-1 h-[40vh] border rounded-lg p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.role === "assistant" 
                  ? "bg-accent/20 rounded-lg p-3" 
                  : "bg-primary text-white rounded-lg p-3"
              }`}
            >
              <ReactMarkdown>
                {message.content}
              </ReactMarkdown>
            </div>
          ))}
          {isLoading && (
            <div className="animate-pulse text-muted-foreground">
              En train de répondre...
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};