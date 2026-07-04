import type { ArticleOriginalContent, SentenceData } from "./types";
import nceArticleAnnotations from "./data";

export const ARTICLE_BASES: Record<string, ArticleOriginalContent> = {};
export const ARTICLE_ANNOTATIONS: Record<string, ArticleOriginalContent> = {};

export function registerOriginals(
  entries: Record<string, ArticleOriginalContent>
): Record<string, ArticleOriginalContent> {
  Object.assign(ARTICLE_BASES, entries);
  return entries;
}

// Annotations-only registration — only stores predicates, inlineAnnotations, expansionNotes etc.
export function registerAnnotations(
  entries: Record<string, ArticleOriginalContent>
): Record<string, ArticleOriginalContent> {
  Object.assign(ARTICLE_ANNOTATIONS, entries);
  return entries;
}

// Auto-register all NCE article annotations from JSON
registerAnnotations(nceArticleAnnotations);

export function getParagraphs(article: { originalId: string; original?: { paragraphs: { text: string; translation: string }[][] } }): ArticleOriginalContent["paragraphs"] {
  const base = article.original?.paragraphs ?? ARTICLE_BASES[article.originalId]?.paragraphs ?? ARTICLE_ANNOTATIONS[article.originalId]?.paragraphs ?? [];
  const notes = ARTICLE_ANNOTATIONS[article.originalId]?.paragraphs ?? [];
  return base.map((para, pi) =>
    para.map((sent, si) => {
      const note = notes[pi]?.[si] as unknown as Record<string, unknown> | undefined;
      return {
        text: sent.text,
        translation: sent.translation,
        predicates: (note?.predicates as string[]) ?? [],
        clauseIntroducers: (note?.clauseIntroducers as string[]) ?? [],
        auxiliaries: (note?.auxiliaries as string[]) ?? [],
        inlineAnnotations: (note?.inlineAnnotations as SentenceData["inlineAnnotations"]) ?? [],
        grammarNotes: note?.grammarNotes as SentenceData["grammarNotes"],
        expansionNotes: (note?.expansionNotes as SentenceData["expansionNotes"]) ?? [],
      };
    })
  );
}
