import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { StockTicker } from "@/components/StockTicker";
import { Shield, Key, UserCog, Bell } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen">
      <StockTicker />
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Compte & Sécurité</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center mb-4">Sécurité du compte</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Activation de la double authentification</li>
              <li>• Historique des connexions</li>
              <li>• Appareils connectés</li>
            </ul>
          </Card>

          <Card className="p-6">
            <Key className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center mb-4">Gestion des mots de passe</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Changement de mot de passe</li>
              <li>• Récupération de compte</li>
              <li>• Questions de sécurité</li>
            </ul>
          </Card>

          <Card className="p-6">
            <UserCog className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center mb-4">Paramètres du profil</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Informations personnelles</li>
              <li>• Préférences de compte</li>
              <li>• Langue et région</li>
            </ul>
          </Card>

          <Card className="p-6">
            <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center mb-4">Notifications</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Paramètres des alertes</li>
              <li>• Préférences d'email</li>
              <li>• Notifications push</li>
            </ul>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;