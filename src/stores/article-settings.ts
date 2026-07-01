import { create } from "zustand";
import { persist } from "zustand/middleware";

type HighlightRange = {
  start: number;
  end: number;
};



interface ArticleSettingsState {
  highlightsByArticleId: Record<string, HighlightRange[]>;
  showNotes: boolean;
  showGrammarHighlights: boolean;  citationStyle: string;

  addHighlight: (articleId: string, range: HighlightRange) => void;
  removeHighlight: (articleId: string, range: HighlightRange) => void;
  clearHighlights: (articleId: string) => void;
  setShowNotes: (show: boolean) => void;
  setCitationStyle: (style: string) => void;
  toggleGrammarHighlights: () => void;}

function mergeHighlights(highlights: HighlightRange[]) {
  return highlights
    .slice()
    .sort((a, b) => a.start - b.start)
    .reduce<HighlightRange[]>((merged, range) => {
      const last = merged[merged.length - 1];
      if (last && last.end >= range.start) {
        last.end = Math.max(last.end, range.end);
      } else {
        merged.push({ ...range });
      }
      return merged;
    }, []);
}

export const useArticleSettings = create<ArticleSettingsState>()(
  persist(
    (set) => ({
      highlightsByArticleId: {},
      showNotes: true,
      showGrammarHighlights: true,      citationStyle: "mla",

      addHighlight: (articleId, range) =>
        set((state) => ({
          highlightsByArticleId: {
            ...state.highlightsByArticleId,
            [articleId]: mergeHighlights([
              ...(state.highlightsByArticleId[articleId] ?? []),
              range,
            ]),
          },
        })),

      removeHighlight: (articleId, range) =>
        set((state) => ({
          highlightsByArticleId: {
            ...state.highlightsByArticleId,
            [articleId]: (state.highlightsByArticleId[articleId] ?? []).filter(
              (h) => h.end <= range.start || h.start >= range.end,
            ),
          },
        })),

      clearHighlights: (articleId) =>
        set((state) => ({
          highlightsByArticleId: {
            ...state.highlightsByArticleId,
            [articleId]: [],
          },
        })),

      setShowNotes: (show) => set({ showNotes: show }),
      setCitationStyle: (style) => set({ citationStyle: style }),

      toggleGrammarHighlights: () => set((state) => ({ showGrammarHighlights: !state.showGrammarHighlights })),    }),
    {
      name: "nce-article-settings",
    }
  )
);
