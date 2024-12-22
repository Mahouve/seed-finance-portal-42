import { Activity, BarChart2, UserCheck, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "Suivi en temps réel",
    description: "Visualisez vos finances en temps réel pour une meilleure gestion",
  },
  {
    icon: BarChart2,
    title: "Analyse détaillée",
    description: "Comprenez vos habitudes de dépenses grâce à des analyses approfondies",
  },
  {
    icon: UserCheck,
    title: "Conseils personnalisés",
    description: "Recevez des recommandations adaptées à votre profil financier",
  },
  {
    icon: Lock,
    title: "Sécurité maximale",
    description: "Vos données financières sont protégées par un cryptage de pointe",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre solution ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary group">
                  <feature.icon 
                    size={48} 
                    className="transform transition-all duration-300 group-hover:rotate-12 animate-bounce"
                    style={{ animationDelay: `${index * 200}ms`, animationDuration: '2s' }}
                  />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};