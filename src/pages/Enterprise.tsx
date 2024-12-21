import { ArrowDownCircle, TrendingUp, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Testimonials } from "@/components/Testimonials";

const Enterprise = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/90 to-accent/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Services Financiers pour Entreprises</h1>
            <p className="text-lg leading-relaxed">
              Pour les entreprises, SEED Finance propose des services financiers, comprenant des consultations avec des experts, 
              des ateliers de formation et des outils technologiques avancés. Nous aidons les entreprises à prendre des décisions 
              financières éclairées, en tenant compte des réalités économiques locales, afin de garantir leur réussite et croissance durable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services dédiés à votre entreprise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary">
                  <ArrowDownCircle size={48} />
                </div>
                <CardTitle>Réduction des coûts</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                En tenant compte des réalités économiques et fiscales locales, SEED Finance élabore avec vous un plan financier 
                personnalisé pour identifier et rationaliser vos postes de dépenses afin de faire plus avec moins et ainsi 
                soutenir la croissance de votre entreprise.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-100">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary">
                  <TrendingUp size={48} />
                </div>
                <CardTitle>Maximisation des Revenus</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Nos stratégies sur mesure vous aident à faire fructifier vos excédents et à saisir les opportunités de croissance.
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-200">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary">
                  <Wallet size={48} />
                </div>
                <CardTitle>Optimisation de la trésorerie</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Nous vous aidons à maximiser la rentabilité de vos excédents financiers tout en assurant une gestion fluide 
                de la trésorerie quotidienne.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos clients entreprises</h2>
          <Testimonials testimonials={[
            {
              quote: "SEED Finance nous a permis d'optimiser significativement notre trésorerie.",
              author: "Jean Dupont",
              title: "PDG, TechCorp Cameroun"
            },
            {
              quote: "Une expertise financière qui a transformé notre approche de la gestion des coûts.",
              author: "Marie Kouam",
              title: "Directrice Financière, AgroInvest SA"
            },
            {
              quote: "Un partenaire de confiance pour notre développement financier.",
              author: "Paul Mbarga",
              title: "Fondateur, InnoServ SARL"
            }
          ]} />
        </div>
      </section>
    </div>
  );
};

export default Enterprise;