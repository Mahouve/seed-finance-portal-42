import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Grâce à Seed Finance, j'ai réalisé mes projets financiers !",
    author: "Marie Dubois",
    title: "Entrepreneure",
  },
  {
    quote: "Un service impeccable, rapide et fiable.",
    author: "Thomas Martin",
    title: "Directeur Commercial",
  },
  {
    quote: "L'équipe la plus professionnelle que j'ai rencontrée.",
    author: "Sophie Bernard",
    title: "Investisseure",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Ce que disent nos clients
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-12">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
              <div className="text-center">
                <p className="text-xl mb-6">{testimonials[currentIndex].quote}</p>
                <p className="font-semibold">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].title}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};