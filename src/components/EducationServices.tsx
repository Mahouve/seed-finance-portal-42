import { BookOpen, GraduationCap, Users, ScrollText, Gamepad } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BookOpen,
    title: "Cours et Formations Interactives",
    description: "Modules en ligne sur la gestion du budget, l'épargne et l'investissement",
  },
  {
    icon: GraduationCap,
    title: "Préparation au Micro-Entrepreneuriat",
    description: "Formation à la création et gestion d'entreprise, accès au microcrédit",
  },
  {
    icon: Users,
    title: "Webinaires et Séminaires",
    description: "Sessions en direct avec des experts financiers africains",
  },
  {
    icon: ScrollText,
    title: "Blogs et Articles",
    description: "Contenus sur l'autonomisation financière et conseils pratiques",
  },
  {
    icon: Gamepad,
    title: "Jeux et Simulateurs",
    description: "Outils interactifs pour tester vos connaissances financières",
  },
];

export const EducationServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="link" className="text-primary">
                  En savoir plus →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};