import { Shield, Lightbulb, Users, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    title: "Transparence Totale",
    description: "Nous nous engageons à fournir des informations claires et précises sur chaque solution financière proposée. Grâce à une communication ouverte, nos clients comprennent mieux les choix financiers et prennent des décisions éclairées.",
    icon: Shield,
  },
  {
    title: "Intégrité Professionnelle",
    description: "SEED Finance place l'honnêteté au centre de ses services. Nos conseils sont impartiaux et guidés par l'intérêt des clients, garantissant une relation de confiance durable tout au long du processus d'accompagnement financier.",
    icon: Lightbulb,
  },
  {
    title: "Excellence Client",
    description: "Nous visons l'excellence en offrant un accompagnement personnalisé et des solutions adaptées aux besoins spécifiques de chaque client. Cette approche nous permet de maximiser la satisfaction et le succès financier de nos utilisateurs.",
    icon: Users,
  },
  {
    title: "Accessibilité Éducative",
    description: "L'éducation financière est au cœur de notre mission. Nous simplifions l'accès aux outils et aux connaissances, permettant à tous, y compris les non-initiés, d'améliorer leur compréhension des finances et d'atteindre l'autonomie économique.",
    icon: GraduationCap,
  },
];

export const Values = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary animate-float">Nos Valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={value.title} className="card-hover border-none shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 mb-4 text-primary group">
                  <value.icon 
                    size={48} 
                    className="transform transition-all duration-500 group-hover:scale-125 animate-pulse"
                    style={{ animationDelay: `${index * 200}ms`, animationDuration: '3s' }}
                  />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
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