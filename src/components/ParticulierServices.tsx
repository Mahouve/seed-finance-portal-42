import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, Calculator, Briefcase, PiggyBank, 
  Building, Heart, LineChart, Scale,
  Landmark, Home, BadgeDollarSign, Brain,
  BarChart4, ScrollText, Target
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Consultation financière",
    description: "Séances de consultation individuelle avec des conseillers financiers spécialisés dans le marché africain."
  },
  {
    icon: Briefcase,
    title: "Planification Patrimoniale",
    description: "Conseils adaptés à la réalité africaine sur la gestion des actifs et investissements."
  },
  {
    icon: PiggyBank,
    title: "Microfinance et Crédit",
    description: "Conseils spécifiques sur l'accès aux services de microfinance et de microcrédit."
  },
  {
    icon: Calculator,
    title: "Diagnostic Financier",
    description: "Services d'évaluation de la santé financière des ménages avec recommandations."
  },
  {
    icon: LineChart,
    title: "Suivi de portefeuille",
    description: "Services de suivi des investissements avec suggestions de rééquilibrage."
  },
  {
    icon: Scale,
    title: "Placement Financier",
    description: "Accompagnement sur le choix des actions, obligations et fonds d'investissement."
  },
  {
    icon: Heart,
    title: "Assurance-Vie et santé",
    description: "Informations sur les contrats d'assurance-vie et leurs avantages fiscaux."
  },
  {
    icon: Building,
    title: "Immobilier",
    description: "Informations et accompagnement sur les investissements immobiliers."
  },
  {
    icon: PiggyBank,
    title: "Analyses Produits d'Épargne",
    description: "Analyses détaillées des différents produits d'épargne disponibles."
  },
  {
    icon: Target,
    title: "Optimisation du Patrimoine",
    description: "Accompagnement pour maximiser la gestion et performance du patrimoine."
  },
  {
    icon: Landmark,
    title: "Retraite",
    description: "Accompagnement dans la planification de votre retraite."
  },
  {
    icon: BarChart4,
    title: "Analyse des Fonds",
    description: "Études approfondies des SICAV, FCP, et autres fonds d'investissement."
  },
  {
    icon: ScrollText,
    title: "Mise à Jour Fiscale",
    description: "Informations sur les évolutions fiscales et leurs impacts."
  },
  {
    icon: Brain,
    title: "Calculatrices Financières",
    description: "Outils pour évaluer la rentabilité des investissements et projets."
  },
  {
    icon: BadgeDollarSign,
    title: "Satisfaction garantie",
    description: "Services financiers sur mesure adaptés aux réalités locales."
  }
];

export const ParticulierServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
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