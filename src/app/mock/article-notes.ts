import type { ArticleOriginalContent } from "./types";

export const ARTICLE_ORIGINALS: Record<string, ArticleOriginalContent> = {};

export function registerOriginals(
  entries: Record<string, ArticleOriginalContent>
): Record<string, ArticleOriginalContent> {
  Object.assign(ARTICLE_ORIGINALS, entries);
  return entries;
}

export function getParagraphs(article: { originalId: string }): ArticleOriginalContent["paragraphs"] {
  return ARTICLE_ORIGINALS[article.originalId]?.paragraphs ?? [];
}
