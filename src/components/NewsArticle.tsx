import { NewsItem } from "@/types/news";

interface NewsArticleProps {
  article: NewsItem;
}

export const NewsArticle = ({ article }: NewsArticleProps) => {
  return (
    <article className="border-b border-border pb-6 last:border-0">
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block space-y-3 hover:opacity-80"
      >
        {article.image && (
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <img
              src={article.image}
              alt={article.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="space-y-2">
          <h3 className="font-medium leading-tight text-lg">{article.title}</h3>
          {article.description && (
            <p className="text-muted-foreground text-sm line-clamp-2">
              {article.description}
            </p>
          )}
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="font-medium">{article.source}</span>
            <span className="mx-2">•</span>
            <time>
              {new Date(article.pubDate).toLocaleDateString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </time>
          </div>
        </div>
      </a>
    </article>
  );
};