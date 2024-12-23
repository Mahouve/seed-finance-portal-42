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
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/fb370886-20e3-4f2b-8bc5-5dd8b28ca800.png" 
              alt="SEED Finance Logo" 
              className="h-12 w-auto"
            />
            <div>
              <DialogTitle className="text-2xl font-bold">Services SEED Finance</DialogTitle>
              <p className="text-muted-foreground">
                Découvrez nos services en détail. Cliquez sur un service pour en savoir plus.
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {services.map((service) => (
            <Button
              key={service.title}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-3 text-center hover:bg-accent/20 transition-all duration-300"
              onClick={() => queryAssistant(service.query)}
              disabled={isLoading}
            >
              <service.icon className="h-8 w-8 text-primary" />
              <span className="font-medium">{service.title}</span>
              <span className="text-sm text-muted-foreground">{service.description}</span>
            </Button>
          ))}
        </div>

        <ScrollArea className="flex-1 h-[40vh] border rounded-lg p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.role === "assistant" 
                  ? "bg-accent/20 rounded-lg p-3 animate-fade-in" 
                  : "bg-primary text-white rounded-lg p-3 animate-fade-in"
              }`}
            >
              <ReactMarkdown>
                {message.content}
              </ReactMarkdown>
            </div>
          ))}
          {isLoading && (
            <div className="animate-pulse text-muted-foreground p-3">
              En train de répondre...
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
