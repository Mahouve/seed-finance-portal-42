import { Button } from "@/components/ui/button";

export const AboutHero = () => {
  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/1411410526/fr/photo/femme-daffaires-parlant-devant-un-groupe.webp?a=1&b=1&s=612x612&w=0&k=20&c=4838UsTrylj53f68lkGJoDovnmSjcK-dGbwRKDsa_CU=')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000"
          }}
        >
          {/* Overlay gradient - Changed to a darker, less blue overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-white">SEED Finance</h1>
            <p className="text-lg mb-8 text-gray-100 leading-relaxed">
              Seed Finance est dédié à fournir des solutions de conseil financier adaptées aux réalités africaines. 
              Nous offrons des services personnalisés en gestion de patrimoine, microfinance, et investissements, 
              pour aider particuliers et entreprises à maximiser leur potentiel économique.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary mb-6">Notre vision</h2>
            <p className="text-gray-700 leading-relaxed">
              SEED Finance a pour ambition d'améliorer de manière significative le niveau de vie de la population 
              camerounaise et africaine. Ceci passe par la bonne gestion des revenus disponibles ainsi que de la 
              multiplication des revenus, grâce à des stratégies adaptées et des outils de bonne gestion des 
              finances personnelles. Notre objectif est ainsi de conduire les individus vers une autonomie 
              financière durable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};