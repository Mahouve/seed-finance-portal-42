import { Navigation } from "@/components/Navigation";
import { FinanceNews } from "@/components/FinanceNews";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";
import { CurrencyTabs } from "@/components/CurrencyTabs";
import { TradingViewWidget } from "@/components/TradingViewWidget";
import { MarketTable } from "@/components/MarketTable";
import { CryptoConverter } from "@/components/CryptoConverter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Markets = () => {
  return (
    <div className="min-h-screen bg-background">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold text-center mb-4 text-foreground">
            Bourses & Cotations
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Explorez les tendances du marché financier, les indices boursiers, et les cotations des principales actions en temps réel.
          </p>
          <p className="text-lg font-medium text-primary">
            Mettez à jour vos investissements avec des données fiables et précises.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid gap-8">
          {/* Market Overview Section */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Aperçu des Marchés</h2>
              <Button variant="outline" asChild>
                <Link to="/education/cours-formations" className="flex items-center gap-2">
                  Guide du débutant
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-8 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Indices Boursiers Majeurs</CardTitle>
                    <CardDescription>
                      Suivez les principaux indices en temps réel
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MarketTable />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Taux de Change</CardTitle>
                    <CardDescription>
                      Convertisseur de devises et suivi des taux
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CurrencyTabs />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Crypto-monnaies</CardTitle>
                    <CardDescription>
                      Convertisseur et suivi des principales crypto-monnaies
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CryptoConverter />
                  </CardContent>
                </Card>

                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">Graphiques Avancés</h2>
                  <p className="text-muted-foreground mb-6">
                    Analysez les tendances avec nos outils de visualisation interactifs
                  </p>
                  <TradingViewWidget />
                </div>
              </div>

              {/* News and Analysis Section */}
              <div className="space-y-8 animate-fade-in [animation-delay:200ms]">
                <Card>
                  <CardHeader>
                    <CardTitle>Actualités des Marchés</CardTitle>
                    <CardDescription>
                      Restez informé des dernières actualités financières
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FinanceNews />
                  </CardContent>
                </Card>

                {/* Educational Resources */}
                <Card>
                  <CardHeader>
                    <CardTitle>Ressources Éducatives</CardTitle>
                    <CardDescription>
                      Apprenez à investir intelligemment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link 
                      to="/education/cours-formations"
                      className="block p-4 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h3 className="font-medium mb-2">Guides pour Débutants</h3>
                      <p className="text-sm text-muted-foreground">
                        Découvrez les bases de l'investissement en bourse
                      </p>
                    </Link>
                    <Link 
                      to="/education/webinaires"
                      className="block p-4 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h3 className="font-medium mb-2">Webinaires</h3>
                      <p className="text-sm text-muted-foreground">
                        Participez à nos sessions de formation en direct
                      </p>
                    </Link>
                    <Link 
                      to="/education/blogs-articles"
                      className="block p-4 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h3 className="font-medium mb-2">Analyses & Stratégies</h3>
                      <p className="text-sm text-muted-foreground">
                        Approfondissez vos connaissances avec nos experts
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Markets;