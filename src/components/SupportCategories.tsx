import { MessageSquare, Headphones, Info, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  {
    icon: MessageSquare,
    title: "FAQ",
    description: "Trouvez rapidement des réponses aux questions les plus fréquentes",
    link: "#faq"
  },
  {
    icon: Headphones,
    title: "Support Technique",
    description: "Assistance technique pour vos problèmes spécifiques",
    link: "#technical"
  },
  {
    icon: Info,
    title: "Guides & Tutoriels",
    description: "Ressources détaillées pour vous guider pas à pas",
    link: "#guides"
  },
  {
    icon: User,
    title: "Compte & Sécurité",
    description: "Gérez votre compte et vos paramètres de sécurité",
    link: "#account"
  }
];

export const SupportCategories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choisissez une catégorie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
                <Button variant="link" className="text-primary mt-4">
                  En savoir plus →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};