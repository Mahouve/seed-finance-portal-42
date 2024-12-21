import { Check } from "lucide-react";

const features = [
  "Plateforme sécurisée et fiable",
  "Solutions personnalisées",
  "Support client 24/7",
  "Technologies innovantes",
  "Expertise reconnue",
  "Réseau international",
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre engagement envers l'excellence et l'innovation nous permet de vous offrir les meilleures solutions financières.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Features"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};