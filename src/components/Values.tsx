import { Shield, Lightbulb, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    title: "Transparence",
    description: "Une communication claire et honnête à chaque étape.",
    icon: Shield,
  },
  {
    title: "Innovation",
    description: "Des outils modernes pour une gestion optimale.",
    icon: Lightbulb,
  },
  {
    title: "Accessibilité",
    description: "Des services financiers adaptés à vos besoins.",
    icon: Users,
  },
];

export const Values = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={value.title} className="card-hover border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary">
                  <value.icon size={48} />
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                {value.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};