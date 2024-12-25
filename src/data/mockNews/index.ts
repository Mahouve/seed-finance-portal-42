import { NewsItem } from "@/types/news";
import { globalNews } from "./globalNews";
import { africanNews } from "./africanNews";

export const mockNews: NewsItem[] = [...globalNews, ...africanNews];