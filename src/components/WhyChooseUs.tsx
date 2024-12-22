import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    title: "Expertise locale",
    description: "Une bonne connaissance du contexte économique et financier camerounais permet d'adapter les solutions aux réalités locales, de gérer les risques économiques et de respecter les réglementations. Elle aide également à valoriser des secteurs prometteurs comme l'agriculture et les technologies, renforçant ainsi l'efficacité des investissements et facilitant une intégration durable dans le marché."
  },
  {
    title: "Intégrité Professionnelle",
    description: "Des solutions sur mesure, adaptées aux situations individuelles ou aux besoins spécifiques des entreprises, optimisent l'efficacité en répondant précisément aux attentes et aux contraintes uniques de chaque cas. Contrairement aux solutions standards, elles permettent de mieux anticiper les défis particuliers et d'atteindre des objectifs spécifiques. Cette approche personnalisée favorise la flexibilité et une meilleure gestion des ressources, rendant les stratégies plus réactives et performantes."
  },
  {
    title: "Excellence Client",
    description: "Nous visons l'excellence en offrant un accompagnement personnalisé et des solutions adaptées aux besoins spécifiques de chaque client. Cette approche nous permet de maximiser la satisfaction et le succès financier de nos utilisateurs."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-float">Pourquoi Choisir SEED Finance ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason) => (
            <Card key={reason.title} className="card-hover border-none shadow-lg">
              <CardHeader>
                <CardTitle>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary animate-float">Développez votre vision</h3>
          <p className="text-gray-600">
            SEED Finance se positionne ainsi comme un partenaire essentiel pour vous aider à sécuriser 
            et améliorer votre avenir financier. Nous mettons à votre disposition un savoir-faire éprouvé 
            et des outils pratiques pour que chacun puisse atteindre ses objectifs financiers, tout en 
            épargnant intelligemment.
          </p>
          <Button className="mt-8">Commencer</Button>
        </div>
      </div>
    </section>
  );
};