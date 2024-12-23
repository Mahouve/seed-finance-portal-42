import { useState } from "react";
import { MessageSquare, X, Trash2, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import ReactMarkdown from 'react-markdown';

interface Message {
  role: "assistant" | "user";
  content: string;
}

// Note: This is a default API key for testing purposes only
const DEFAULT_API_KEY = "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";

export const AIAssistantDrawer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fontSize, setFontSize] = useState("text-base"); // text-sm, text-base, text-lg
  const { toast } = useToast();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${DEFAULT_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "Tu es un assistant financier expert qui aide les utilisateurs à comprendre les marchés financiers et la gestion de patrimoine."
            },
            ...messages,
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });

      if (!response.ok) throw new Error("Erreur de communication avec l'assistant");

      const data = await response.json();
      setMessages((prev) => [...prev, { 
        role: "assistant", 
        content: data.choices[0].message.content 
      }]);
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

  const clearChat = () => {
    setMessages([]);
    toast({
      title: "Chat effacé",
      description: "L'historique de conversation a été réinitialisé",
    });
  };

  const toggleFontSize = () => {
    const sizes = ["text-sm", "text-base", "text-lg"];
    const currentIndex = sizes.indexOf(fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    setFontSize(sizes[nextIndex]);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-secondary transition-colors"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:w-[440px] h-full bg-background">
        <SheetHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/fb370886-20e3-4f2b-8bc5-5dd8b28ca800.png" 
                alt="Seed Finance Logo" 
                className="h-8 w-auto"
              />
              <SheetTitle className="text-foreground">Assistant IA</SheetTitle>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={toggleFontSize}
                title="Changer la taille du texte"
              >
                <Type className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={clearChat}
                title="Effacer la conversation"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </SheetTrigger>
            </div>
          </div>
        </SheetHeader>
        
        <div className="flex flex-col h-[calc(100vh-8rem)]">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4 mt-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "assistant" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${fontSize} ${
                      message.role === "assistant"
                        ? "bg-accent/20 text-foreground"
                        : "bg-primary text-white"
                    }`}
                  >
                    <ReactMarkdown
                      components={{
                        p: ({node, ...props}) => <p className="mb-2" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-500 hover:underline" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-2" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                        code: ({node, inline, ...props}) => 
                          inline ? 
                            <code className="bg-gray-100 px-1 rounded" {...props} /> :
                            <code className="block bg-gray-100 p-2 rounded my-2" {...props} />
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-accent/20 text-foreground">
                    En train d'écrire...
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSendMessage} className="mt-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message..."
                disabled={isLoading}
                className="flex-1 bg-white border-gray-200"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-primary hover:bg-secondary text-white"
              >
                Envoyer
              </Button>
            </div>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};