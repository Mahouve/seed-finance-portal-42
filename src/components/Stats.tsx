import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Clients satisfaits", value: 10000, suffix: "+" },
  { label: "Taux de satisfaction", value: 97, suffix: "%" },
  { label: "Entreprises accompagnées", value: 500, suffix: "+" },
];

export const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-primary text-white" id="stats-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border-none bg-white/10 backdrop-blur-sm"
            >
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold mb-2">
                  {isVisible ? (
                    <span className="animate-count-up">
                      {stat.value}
                      {stat.suffix}
                    </span>
                  ) : (
                    "0"
                  )}
                </div>
                <p className="text-lg">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};