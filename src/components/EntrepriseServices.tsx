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
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" // Image montrant des graphiques financiers en baisse
  },
  {
    icon: TrendingUp,
    title: "Maximisation des Revenus",
    description: "Nos stratégies sur mesure vous aident à faire fructifier vos excédents et à saisir les opportunités de croissance",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4" // Image montrant un graphique avec une courbe ascendante
  },
  {
    icon: Wallet,
    title: "Optimisation de la trésorerie",
    description: "Nous vous aidons à maximiser la rentabilité de vos excédents financiers tout en assurant une gestion fluide de la trésorerie quotidienne.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0" // Image montrant des pièces et billets bien organisés
  }
];

export const EntrepriseServices = () => {
  return (
    <section className="py-20 bg-white mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Nos Services dédiés à votre entreprise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards',
                opacity: 0
              }}
            >
              <CardHeader>
                <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 animate-slide-in" style={{ animationDelay: `${(index * 200) + 300}ms` }}>
                  <service.icon className="h-6 w-6 text-primary animate-bounce" />
                  <CardTitle className="animate-fade-in" style={{ animationDelay: `${(index * 200) + 400}ms` }}>
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription 
                  className="text-gray-600 animate-fade-in"
                  style={{ animationDelay: `${(index * 200) + 500}ms` }}
                >
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