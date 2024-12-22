import { Button } from "@/components/ui/button";

export const AboutHero = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">SEED Finance</h1>
          <p className="text-lg text-gray-600 mb-8">
            Seed Finance est dédié à fournir des solutions de conseil financier adaptées aux réalités africaines. 
            Nous offrons des services personnalisés en gestion de patrimoine, microfinance, et investissements, 
            pour aider particuliers et entreprises à maximiser leur potentiel économique.
          </p>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Notre vision</h2>
            <Button variant="link" className="text-primary">
              Lire plus
            </Button>
            <p className="text-gray-600">
              SEED Finance a pour ambition d'améliorer de manière significative le niveau de vie de la population 
              camerounaise et africaine. Ceci passe par la bonne gestion des revenus disponibles ainsi que de la 
              multiplication des revenus, grâce à des stratégies adaptées et des outils de bonne gestion des 
              finances personnelles. Notre objectif est ainsi de conduire les individus vers une autonomie 
              financière durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};