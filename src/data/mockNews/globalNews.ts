import { NewsItem } from "@/types/news";

export const globalNews: NewsItem[] = [
  {
    title: "Wall Street : Les tech leaders portent le S&P 500",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Les Échos",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Les géants de la tech continuent leur progression à Wall Street.",
    category: "global"
  },
  {
    title: "La Bourse de Londres réagit aux chiffres de l'inflation",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Financial Times",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Le FTSE 100 sous pression après les dernières données économiques.",
    category: "global"
  },
  {
    title: "Le CAC 40 porté par les résultats d'entreprises",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Le Figaro",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Les sociétés françaises publient des résultats supérieurs aux attentes.",
    category: "global"
  }
];