import { GraduationCap, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const objectives = [
  {
    title: "Education Financière",
    icon: GraduationCap,
    paragraphs: [
      "Notre formation en gestion budgétaire offre des outils pratiques pour gérer efficacement revenus et dépenses, en tenant compte des réalités économiques locales. La planification financière personnalisée aide chaque individu à concevoir des stratégies réalistes, tout en améliorant leur autonomie financière et en atteignant leurs objectifs à court et long terme.",
      "Nous proposons des conseils d'épargne et d'investissement adaptés au contexte camerounais, garantissant un développement patrimonial progressif et durable. En intégrant des stratégies de gestion des dettes et des programmes d'éducation financière pour les jeunes, nous aidons à construire une base solide pour un avenir financier sain et responsable"
    ]
  },
  {
    title: "Intermédiation Financière",
    icon: LineChart,
    paragraphs: [
      "Nous identifions les meilleures opportunités de placement pour optimiser les rendements de nos clients. Grâce à notre expertise, nous offrons une évaluation rigoureuse du marché, garantissant des décisions éclairées pour une croissance patrimoniale stable et diversifiée, incluant produits d'épargne, assurances-vie et santé pour plus de sécurité.",
      "L'accompagnement en investissement immobilier, secteur dynamique au Cameroun, est l'une de nos priorités. Nos conseils de retraite permettent de planifier un avenir paisible, tandis que nos solutions d'optimisation patrimoniale garantissent une fructification des actifs. Nous fournissons des outils pratiques pour maximiser chaque investissement."
    ]
  }
];

export const Objectifs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Objectifs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {objectives.map((objective) => (
            <Card key={objective.title} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary">
                  <objective.icon size={48} className="animate-pulse" />
                </div>
                <CardTitle className="text-xl text-primary">{objective.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {objective.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};