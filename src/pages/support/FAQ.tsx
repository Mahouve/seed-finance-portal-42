import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StockTicker } from "@/components/StockTicker";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <StockTicker />
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">Foire Aux Questions</h1>
        
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Comment créer un compte SEED Finance ?</AccordionTrigger>
            <AccordionContent>
              Pour créer un compte, cliquez sur le bouton "S'inscrire" en haut à droite de la page. Remplissez le formulaire avec vos informations personnelles et suivez les instructions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Quels sont les moyens de paiement acceptés ?</AccordionTrigger>
            <AccordionContent>
              Nous acceptons Orange Money, MTN Mobile Money et PayPal comme moyens de paiement principaux.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Comment accéder aux formations en ligne ?</AccordionTrigger>
            <AccordionContent>
              Après votre inscription à une formation, vous recevrez un email avec vos identifiants de connexion à notre plateforme de formation en ligne.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Quelle est la durée d'accès aux formations ?</AccordionTrigger>
            <AccordionContent>
              L'accès aux formations est illimité dans le temps une fois que vous les avez achetées.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;