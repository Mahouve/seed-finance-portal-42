import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, Calculator, Briefcase, PiggyBank, LineChart
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Consultations personnalisées",
    description: "Séances de consultation individuelle avec des conseillers financiers spécialisés dans le marché africain, offrant des conseils sur la gestion du patrimoine, la planification de la retraite, et l'investissement dans des projets locaux."
  },
  {
    icon: Briefcase,
    title: "Planification Patrimoniale",
    description: "Conseils adaptés à la réalité africaine sur la gestion des actifs, y compris les terres agricoles, les entreprises familiales, et les investissements dans l'immobilier ou les coopératives."
  },
  {
    icon: PiggyBank,
    title: "Microfinance et Crédit",
    description: "Conseils spécifiques sur l'accès aux services de microfinance et de microcrédit, pour les petites entreprises et les individus cherchant à se lancer dans des activités économiques."
  },
  {
    icon: Calculator,
    title: "Outils d'Évaluation",
    description: "Services d'évaluation de la santé financière des ménages et des petites entreprises, avec des recommandations sur l'épargne, la réduction des dettes, et l'optimisation des dépenses."
  },
  {
    icon: LineChart,
    title: "Suivi et révision de portefeuille",
    description: "Services de suivi des investissements au Cameroun, avec des suggestions de rééquilibrage pour maximiser les rendements tout en tenant compte des risques spécifiques aux marchés locaux."
  }
];

export const ParticulierServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Consultation financière
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary">
                  <service.icon size={48} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};