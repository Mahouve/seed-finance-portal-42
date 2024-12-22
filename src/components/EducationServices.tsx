import { BookOpen, GraduationCap, Users, ScrollText, Gamepad, BookOpenCheck, Video, Building2, Users2, BookText, Coins, UserSquare2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const sections = [
  {
    title: "Cours et Formations Interactives",
    icon: BookOpen,
    description: "Programmes éducatifs pour améliorer les compétences en investissement et gestion financière.",
    items: [
      {
        icon: BookOpenCheck,
        title: "Modules et cours en Ligne",
        description: "Cours en ligne abordant des sujets tels que la gestion du budget familial, l'épargne, l'investissement, ainsi que l'assurance-vie."
      },
      {
        icon: GraduationCap,
        title: "Préparation au Micro-Entrepreneuriat",
        description: "Modules spécifiquement dédiés à l'entrepreneuriat, pour enseigner les bases de la création et de la gestion d'une petite entreprise."
      }
    ]
  },
  {
    title: "Webinaires et Séminaires en Direct",
    icon: Video,
    description: "Séances en ligne interactives avec des experts financiers pour discuter des tendances du marché et des stratégies d'investissement.",
    items: [
      {
        icon: Users,
        title: "Sessions en Direct",
        description: "Organisation de webinaires avec des experts financiers africains, abordant des sujets comme l'économie locale."
      },
      {
        icon: Building2,
        title: "Séminaires Physiques/Master Classes",
        description: "Formation en présentiel dans les grandes villes camerounaises et/ou africaines."
      },
      {
        icon: Users2,
        title: "Partenariats avec les Institutions",
        description: "Collaboration avec des institutions éducatives et financières locales."
      }
    ]
  },
  {
    title: "Blogs et Articles",
    icon: ScrollText,
    description: "Ressources Educatives telles que Guides, articles, et vidéos sur les concepts financiers.",
    items: [
      {
        icon: BookText,
        title: "Séries Thématiques",
        description: "Articles couvrant des thèmes financiers spécifiques adaptés au contexte africain."
      },
      {
        icon: Coins,
        title: "Conseils Pratiques",
        description: "Articles pratiques offrant des astuces pour gérer les défis financiers quotidiens."
      },
      {
        icon: UserSquare2,
        title: "Focus sur les Femmes et les Jeunes",
        description: "Articles dédiés à l'autonomisation financière des femmes et des jeunes."
      }
    ]
  },
  {
    title: "Jeux et Simulateurs",
    icon: Gamepad,
    description: "Outils interactifs pour tester et améliorer vos connaissances financières.",
    items: [
      {
        icon: Coins,
        title: "Simulations de Portefeuille",
        description: "Jeux interactifs permettant aux utilisateurs de simuler des investissements dans des secteurs locaux."
      },
      {
        icon: GraduationCap,
        title: "Quiz et Défis Financiers",
        description: "Quiz éducatifs permettant aux utilisateurs de tester leurs connaissances financières."
      }
    ]
  }
];

export const EducationServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12">
          {sections.map((section, index) => (
            <div 
              key={section.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center gap-4 mb-8 text-center">
                <section.icon className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-primary animate-float">{section.title}</h2>
              </div>
              <p className="text-gray-600 mb-8 hover:scale-95 transition-transform duration-300 text-center max-w-3xl mx-auto">{section.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <Card 
                    key={item.title}
                    className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-primary/10 rounded-lg mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary animate-float">{item.title}</h3>
                      <p className="text-gray-600 text-sm hover:scale-95 transition-transform duration-300">{item.description}</p>
                      <Button variant="link" className="text-primary mt-4 p-0">
                        En savoir plus →
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};