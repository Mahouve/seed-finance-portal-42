import { DollarSign, TrendingUp, Wallet } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: DollarSign,
    title: "Réduction des coûts",
    description: "En tenant compte des réalités économiques et fiscales locales, SEED Finance élabore avec vous un plan financier personnalisé pour identifier et rationaliser vos postes de dépenses afin de faire plus avec moins et ainsi soutenir la croissance de votre entreprise",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
  },
  {
    icon: TrendingUp,
    title: "Maximisation des Revenus",
    description: "Nos stratégies sur mesure vous aident à faire fructifier vos excédents et à saisir les opportunités de croissance",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    icon: Wallet,
    title: "Optimisation de la trésorerie",
    description: "Nous vous aidons à maximiser la rentabilité de vos excédents financiers tout en assurant une gestion fluide de la trésorerie quotidienne.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

export const EntrepriseServices = () => {
  return (
    <section className="py-20 bg-white mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nos Services dédiés à votre entreprise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <service.icon className="h-6 w-6 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};