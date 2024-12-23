import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Nom" />
                <Input placeholder="Email" type="email" />
              </div>
              <Input placeholder="Sujet" />
              <Textarea placeholder="Votre message" className="h-32" />
              <Button className="w-full">Envoyer</Button>
            </form>
          </div>
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Nos Coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" />
                <a href="https://www.seed-finance.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.seed-finance.org
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-primary" />
                <span>+237 6 71 25 97 25</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-primary" />
                <span>Bonanjo, Douala, Cameroun</span>
              </div>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.060149954987!2d9.68862185!3d4.0412835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061128914e2b421%3A0x99345dd3fc87acb3!2sBonanjo%2C%20Douala%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1635959997142!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};