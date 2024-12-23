import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SupportHero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-accent/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="text-xl mb-8 animate-fade-in [animation-delay:200ms]">
            Trouvez rapidement des réponses à vos questions
          </p>
          <div className="relative max-w-xl mx-auto animate-fade-in [animation-delay:400ms]">
            <Input
              type="search"
              placeholder="Rechercher une aide..."
              className="pl-12 h-14 text-gray-900 bg-white/95 backdrop-blur-sm border-0 ring-2 ring-white/20 focus-visible:ring-white"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
};