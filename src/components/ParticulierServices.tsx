import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, Calculator, Briefcase, PiggyBank, 
  Building, Heart, LineChart, Scale,
  Landmark, BadgeDollarSign, Brain
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Consultation financière",
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
    title: "Diagnostic Financier",
    description: "Services d'évaluation de la santé financière des ménages et des petites entreprises, avec des recommandations sur l'épargne, la réduction des dettes, et l'optimisation des dépenses."
  },
  {
    icon: LineChart,
    title: "Suivi et révision de portefeuille",
    description: "Services de suivi des investissements au Cameroun, avec des suggestions de rééquilibrage pour maximiser les rendements tout en tenant compte des risques spécifiques aux marchés locaux."
  },
  {
    icon: Scale,
    title: "Placement Financier",
    description: "Informations et accompagnement sur le choix des actions, obligations, fonds d'investissement, et autres produits financiers disponibles."
  },
  {
    icon: Heart,
    title: "Assurance-Vie, assurances santé et autres",
    description: "Informations et accompagnement sur les contrats d'assurance-vie, leurs avantages fiscaux et leurs options de placement."
  },
  {
    icon: Building,
    title: "Immobilier",
    description: "Informations et accompagnement sur les investissements immobiliers."
  },
  {
    icon: PiggyBank,
    title: "Analyses Produits d'Épargne",
    description: "Analyses détaillées des différents produits d'épargne disponibles sur le marché."
  },
  {
    icon: Briefcase,
    title: "Optimisation du Patrimoine",
    description: "Informations et accompagnement pour maximiser la gestion et la performance du patrimoine."
  },
  {
    icon: Landmark,
    title: "Retraite",
    description: "Informations et accompagnement dans la planification de votre retraite."
  },
  {
    icon: LineChart,
    title: "Analyse des Fonds",
    description: "Études approfondies des SICAV, FCP, et autres fonds d'investissement avec des données de performance et des évaluations."
  },
  {
    icon: BadgeDollarSign,
    title: "Mise à Jour Fiscale",
    description: "Informations sur les évolutions fiscales et les impacts potentiels sur vos placements ainsi que votre patrimoine."
  },
  {
    icon: Brain,
    title: "Calculatrices Financières",
    description: "Calculatrices de rendement d'investissement, convertisseurs de devises et outils pour évaluer la rentabilité des entreprises ou projets agricoles."
  },
  {
    icon: Users,
    title: "Satisfaction garantie",
    description: "Chez Seedfinance, la satisfaction des particuliers est primordiale. Nous offrons des services financiers sur mesure, incluant des consultations individuelles, des ateliers éducatifs et des outils technologiques avancés."
  }
];

export const ParticulierServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Les services de SEED Finance visent à fournir une assistance personnalisée et des outils pratiques pour soutenir les particuliers dans leurs décisions financières.
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