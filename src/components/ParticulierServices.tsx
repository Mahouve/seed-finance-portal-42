import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, Calculator, Briefcase, PiggyBank, LineChart, 
  Wallet, Building, Shield, Home, PieChart, 
  TrendingUp, HeartPulse, BarChart4, ScrollText, Calculator as CalcIcon
} from "lucide-react";

const diagnosticServices = [
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
  }
];

const evaluationServices = [
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

const intermediationServices = [
  {
    icon: Wallet,
    title: "Placements et financier",
    description: "Informations et accompagnement sur le choix des actions, obligations, fonds d'investissement, et autres produits financiers disponibles."
  },
  {
    icon: Calculator,
    title: "Planificateur Budgétaire",
    description: "Outils de gestion de budget spécialement conçu pour les revenus irréguliers et les flux de trésorerie propres aux petites entreprises africaines, avec des alertes pour les dépenses et les opportunités de réduction des coûts."
  },
  {
    icon: Shield,
    title: "Assurance-Vie, assurances santé et autres",
    description: "Informations et accompagnement sur les contrats d'assurance-vie, leurs avantages fiscaux et leurs options de placement."
  },
  {
    icon: Home,
    title: "Immobilier",
    description: "Informations et accompagnement sur les investissements immobiliers"
  },
  {
    icon: PieChart,
    title: "Analyses Produits d'Épargne",
    description: "Analyses détaillées des différents produits d'épargne disponibles sur le marché."
  },
  {
    icon: TrendingUp,
    title: "Optimisation du Patrimoine",
    description: "Informations et accompagnement pour maximiser la gestion et la performance du patrimoine."
  },
  {
    icon: HeartPulse,
    title: "Retraite",
    description: "Informations et accompagnement dans la planification de votre retraite."
  },
  {
    icon: BarChart4,
    title: "Analyse des Fonds comme produits d'investissement",
    description: "Études approfondies des SICAV, FCP, et autres fonds d'investissement. Outils de sélection et de comparaison des fonds basés sur la performance, les frais et les objectifs d'investissement."
  },
  {
    icon: ScrollText,
    title: "Mise à Jour Fiscale",
    description: "Informations sur les évolutions fiscales et les impacts potentiels sur vos placements ainsi que votre patrimoine."
  },
  {
    icon: CalcIcon,
    title: "Calculatrices Financières",
    description: "Calculatrices de rendement d'investissement, convertisseurs de devises et outils pour évaluer la rentabilité des entreprises ou projets agricoles."
  }
];

export const ParticulierServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {/* Section Diagnostic Financier */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-fade-in">
              Diagnostic Financier
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {diagnosticServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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

          {/* Section Outils d'Évaluation */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {evaluationServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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

          {/* Section Intermédiation financière */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-fade-in">
              Intermédiation financière, Placements et fiscalité
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {intermediationServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
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
        </div>
      </div>
    </section>
  );
};