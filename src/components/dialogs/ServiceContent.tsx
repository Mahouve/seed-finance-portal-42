import { ServiceCard } from "../ServiceCard";
import {
  Wallet,
  LineChart,
  Shield,
  Users,
  BookOpen,
  Building2,
  GraduationCap,
  Calculator,
  Send,
} from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Input } from "../ui/input";
import { ChatMessage } from "../ChatMessage";
import { Separator } from "../ui/separator";

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

interface ServiceContentProps {
  messages: Array<{ role: string; content: string }>;
  isLoading: boolean;
  userMessage: string;
  onMessageChange: (message: string) => void;
  onSendMessage: (e: React.FormEvent) => void;
  onServiceClick: (query: string) => void;
  onSimulatorClick: () => void;
}

export const ServiceContent = ({
  messages,
  isLoading,
  userMessage,
  onMessageChange,
  onSendMessage,
  onServiceClick,
  onSimulatorClick
}: ServiceContentProps) => {
  return (
    <div className="flex flex-col h-[calc(90vh-100px)]">
      <ScrollArea className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  onClick={() => onServiceClick(service.query)}
                />
              ))}
            </div>
            
            <Button 
              variant="default"
              className="w-full flex items-center gap-2 text-sm font-medium rounded-lg shadow-sm hover:shadow-md bg-primary text-white hover:bg-primary/90 transition-all"
              onClick={onSimulatorClick}
            >
              <Calculator className="h-4 w-4" />
              Simulateur de crédit
            </Button>
          </div>

          <div className="bg-accent/10 rounded-lg p-3">
            <ScrollArea className="h-[400px] pr-3">
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <ChatMessage key={index} {...message} />
                ))}
                {isLoading && (
                  <div className="p-2 rounded-lg bg-background border border-border animate-pulse text-sm">
                    Analyse...
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </ScrollArea>

      <div className="p-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form onSubmit={onSendMessage} className="flex gap-2">
          <Input
            value={userMessage}
            onChange={(e) => onMessageChange(e.target.value)}
            placeholder="Posez vos questions..."
            className="flex-1"
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={isLoading}
            className="bg-primary text-white hover:bg-primary/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};