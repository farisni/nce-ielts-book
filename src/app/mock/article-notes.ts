import type { ArticleOriginalContent, SentenceData } from "./types";
import nceArticleOriginals from "./data";

export const ARTICLE_ORIGINALS: Record<string, ArticleOriginalContent> = {};

export function registerOriginals(
  entries: Record<string, ArticleOriginalContent>
): Record<string, ArticleOriginalContent> {
  Object.assign(ARTICLE_ORIGINALS, entries);
  return entries;
}

// Auto-register all NCE article originals
registerOriginals(nceArticleOriginals);

export function getParagraphs(article: { originalId: string; original?: { paragraphs: { text: string; translation: string }[][] } }): ArticleOriginalContent["paragraphs"] {
  const base = article.original?.paragraphs ?? ARTICLE_ORIGINALS[article.originalId]?.paragraphs ?? [];
  const notes = ARTICLE_ORIGINALS[article.originalId]?.paragraphs ?? [];
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
