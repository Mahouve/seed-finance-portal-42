import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { queryOpenAI } from "@/utils/openaiUtils";
import { ServiceContent } from "./dialogs/ServiceContent";
import { CreditSimulator } from "./CreditSimulator";

interface ServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialQuery?: string;
}

export const ServiceDialog = ({ open, onOpenChange, initialQuery }: ServiceDialogProps) => {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [showSimulator, setShowSimulator] = useState(false);

  useEffect(() => {
    if (open && initialQuery) {
      handleServiceClick(initialQuery);
    } else if (!open) {
      setMessages([]);
    }
  }, [open, initialQuery]);

  const handleServiceClick = async (query: string) => {
    setIsLoading(true);
    try {
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

  const handleSendMessage = async (e: React.FormEvent) => {
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
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
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
                  Comment pouvons-nous vous aider ?
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <ServiceContent 
            messages={messages}
            isLoading={isLoading}
            userMessage={userMessage}
            onMessageChange={setUserMessage}
            onSendMessage={handleSendMessage}
            onServiceClick={handleServiceClick}
            onSimulatorClick={() => setShowSimulator(true)}
          />
        </DialogContent>
      </Dialog>

      {showSimulator && (
        <CreditSimulator />
      )}
    </>
  );
};