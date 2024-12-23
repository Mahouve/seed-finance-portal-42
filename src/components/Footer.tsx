import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Seed Finance</h3>
            <p className="text-gray-300">
              Votre partenaire de confiance pour un avenir financier solide.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="text-gray-300 not-italic">
              <p>Bonanjo</p>
              <p>Douala, Cameroun</p>
              <p>+237 6 71 25 97 25</p>
              <p>www.seed-finance.org</p>
            </address>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Restez informé de nos dernières actualités
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button variant="default" className="bg-white text-secondary hover:bg-gray-100">
                <Mail className="w-4 h-4 mr-2" />
                S'abonner
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Seed Finance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};