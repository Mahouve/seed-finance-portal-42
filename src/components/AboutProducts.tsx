import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Le Recueil d'Astuces pour une Meilleure Gestion de Tes Finances Personnelles",
    description: "Ce guide pratique est conçu pour offrir des conseils simples et efficaces pour une gestion optimale de vos finances. Vous y trouverez des stratégies pour épargner, investir et planifier vos dépenses de manière plus intelligente."
  },
  {
    id: 2,
    title: "Les Sessions d'Information Lunch & Learn en Entreprise",
    description: "Des sessions courtes mais percutantes destinées aux entreprises pour éduquer leurs employés sur les principes fondamentaux de la gestion financière, de l'épargne et de l'investissement. Ces sessions permettent d'améliorer la productivité et la satisfaction des employés."
  },
  {
    id: 3,
    title: "Application de Gestion des Finances Personnelles",
    description: "Une application innovante qui aide à suivre vos finances en temps réel, à planifier vos dépenses et à optimiser vos objectifs financiers. Simple à utiliser, cette application est conçue pour responsabiliser chaque utilisateur dans la gestion de son budget et de ses objectifs d'épargne."
  }
];

export const AboutProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Produits Grands Publics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="card-hover border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Button variant="link" className="text-primary">
                  Plus d'infos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};