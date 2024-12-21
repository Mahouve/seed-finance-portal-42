import { Wallet, LineChart, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Wallet,
    title: "Services Financiers",
    description: "Solutions financières personnalisées pour répondre à vos besoins",
  },
  {
    icon: LineChart,
    title: "Investissements",
    description: "Stratégies d'investissement optimisées pour votre croissance",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Protection maximale de vos actifs et transactions",
  },
  {
    icon: Users,
    title: "Accompagnement",
    description: "Support personnalisé pour atteindre vos objectifs",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary">
                  <service.icon size={48} />
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