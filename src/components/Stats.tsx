import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Clients satisfaits", value: 10000, suffix: "+" },
  { label: "Taux de satisfaction", value: 97, suffix: "%" },
  { label: "Entreprises accompagnées", value: 500, suffix: "+" },
];

const useCountAnimation = (end: number, duration: number = 2000, isVisible: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return count;
};

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

  // Créer les animations en dehors de la boucle map
  const animatedValues = stats.map(stat => useCountAnimation(stat.value, 2000, isVisible));

  return (
    <section className="py-20 bg-primary text-white" id="stats-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="border-none bg-white/10 backdrop-blur-sm"
            >
              <CardContent className="text-center p-6">
                <div className="text-4xl font-bold mb-2">
                  {animatedValues[index]}
                  {stat.suffix}
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