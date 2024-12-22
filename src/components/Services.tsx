import { Wallet, LineChart, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Wallet,
    title: "Gestion de budget",
    description: "Maîtrisez vos dépenses et atteignez vos objectifs financiers",
  },
  {
    icon: LineChart,
    title: "Planification financière",
    description: "Construisez un avenir financier solide avec nos outils de planification",
  },
  {
    icon: Shield,
    title: "Investissements intelligents",
    description: "Optimisez vos investissements avec nos solutions innovantes",
  },
  {
    icon: Users,
    title: "Prêts et épargnes",
    description: "Des solutions adaptées à vos besoins d'épargne et de financement",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos services pour transformer vos finances</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary group">
                  <service.icon 
                    size={48} 
                    className="transform transition-all duration-500 group-hover:scale-110 animate-float" 
                    style={{ 
                      animationDelay: `${index * 400}ms`,
                      animationDuration: '4s'
                    }}
                  />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};