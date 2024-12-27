import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StockTicker } from "@/components/StockTicker";
import { DecorativeElements } from "@/components/DecorativeElements";
import { Users, Building2, Users2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Webinaires = () => {
  return (
    <div className="min-h-screen">
      <DecorativeElements />
      <StockTicker />
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Webinaires et Séminaires en Direct
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Sessions en Direct</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participez à nos webinaires animés par des experts financiers africains qui abordent :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Tendances économiques locales</li>
                  <li>Opportunités d'investissement</li>
                  <li>Analyses de marchés</li>
                  <li>Sessions Q&R interactives</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  <CardTitle>Séminaires Physiques</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nos formations en présentiel comprennent :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Master classes spécialisées</li>
                  <li>Ateliers pratiques</li>
                  <li>Networking professionnel</li>
                  <li>Études de cas locaux</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users2 className="h-6 w-6 text-primary" />
                  <CardTitle>Partenariats Institutionnels</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nos collaborations incluent :
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                  <li>Universités locales</li>
                  <li>Institutions financières</li>
                  <li>Organismes de formation</li>
                  <li>Associations professionnelles</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Webinaires;