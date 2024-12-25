import { NewsItem } from "@/types/news";

export const africanNews: NewsItem[] = [
  {
    title: "La Bourse de Casablanca termine en hausse",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Financial Afrik",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Le MASI a progressé de 0,5% cette semaine, porté par les valeurs bancaires.",
    category: "africa"
  },
  {
    title: "Le Nigeria Stock Exchange atteint un nouveau record",
    link: "#",
    pubDate: new Date().toISOString(),
    source: "Africa News",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "L'indice NGX dépasse les 70 000 points pour la première fois de son histoire.",
    category: "africa"
  },
  // ... Add other African news items
];