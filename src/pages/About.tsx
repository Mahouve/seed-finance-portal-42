import { Navigation } from "@/components/Navigation";
import { DecorativeElements } from "@/components/DecorativeElements";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Target, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <Navigation />
      <DecorativeElements />

      {/* Hero Section */}
      <section className="relative py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">SEED Finance</h1>
              <p className="text-lg mb-8">
                Seed Finance est dédié à fournir des solutions de conseil financier adaptées aux réalités africaines. Nous offrons des services personnalisés en gestion de patrimoine, microfinance, et investissements, pour aider particuliers et entreprises à maximiser leur potentiel économique.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Notre vision <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/photo-1519389950473-47ba0277781c" 
                alt="Équipe SEED Finance" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Notre Vision</h2>
            <p className="text-lg text-gray-600 mb-8">
              SEED Finance a pour ambition d'améliorer de manière significative le niveau de vie de la population camerounaise et africaine. Ceci passe par la bonne gestion des revenus disponibles ainsi que de la multiplication des revenus, grâce à des stratégies adaptées et des outils de bonne gestion des finances personnelles.
            </p>
            <p className="text-lg text-gray-600">
              Notre objectif est ainsi de conduire les individus vers une autonomie financière durable.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Transparence Totale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nous nous engageons à fournir des informations claires et précises sur chaque solution financière proposée.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Intégrité Professionnelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  SEED Finance place l'honnêteté au centre de ses services. Nos conseils sont impartiaux et guidés par l'intérêt des clients.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Excellence Client</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nous visons l'excellence en offrant un accompagnement personnalisé et des solutions adaptées aux besoins spécifiques.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Accessibilité Éducative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  L'éducation financière est au cœur de notre mission, permettant à tous d'améliorer leur compréhension des finances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Produits Grands Publics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Le Recueil d'Astuces</CardTitle>
                <CardDescription>Pour une Meilleure Gestion de Tes Finances Personnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ce guide pratique est conçu pour offrir des conseils simples et efficaces pour une gestion optimale de vos finances.
                </p>
                <Button variant="outline">Plus d'infos</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Sessions Lunch & Learn</CardTitle>
                <CardDescription>Sessions d'Information en Entreprise</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Des sessions courtes mais percutantes destinées aux entreprises pour éduquer leurs employés sur les principes fondamentaux.
                </p>
                <Button variant="outline">Plus d'infos</Button>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Application Mobile</CardTitle>
                <CardDescription>Gestion des Finances Personnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Une application innovante qui aide à suivre vos finances en temps réel et à planifier vos dépenses.
                </p>
                <Button variant="outline">Plus d'infos</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Développez votre vision</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            SEED Finance se positionne ainsi comme un partenaire essentiel pour vous aider à sécuriser et améliorer votre avenir financier.
          </p>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Commencer
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;