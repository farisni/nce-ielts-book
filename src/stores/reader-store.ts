import { create } from "zustand";
import type { Article } from "@/app/mock";

interface ReaderState {
  activeBlockId: string | null;
  selectedBlockId: string | null;
  setSelectedBlockId: (id: string | null) => void;
  isPanelOpen: boolean;
  togglePanel: () => void;
  setActiveBlockId: (id: string | null) => void;
  notesByBlockId: Record<string, string>;
  addNote: (blockId: string, note: string) => void;
  removeNote: (blockId: string) => void;
  scrollToBlock: (blockId: string) => void;
  article: Article | null;
  setArticle: (article: Article | null) => void;
}

export const useReaderStore = create<ReaderState>()((set) => ({
  activeBlockId: null,
  selectedBlockId: null,
  setSelectedBlockId: (id) => set({ selectedBlockId: id }),
  isPanelOpen: true,
  togglePanel: () => set((s) => ({ isPanelOpen: !s.isPanelOpen })),
  setActiveBlockId: (id) => set({ activeBlockId: id }),

  notesByBlockId: {},
  addNote: (blockId, note) =>
    set((state) => ({
      notesByBlockId: { ...state.notesByBlockId, [blockId]: note },
    })),
  removeNote: (blockId) =>
    set((state) => {
      const next = { ...state.notesByBlockId };
      delete next[blockId];
      return { notesByBlockId: next };
    }),

  scrollToBlock: (blockId: string) => {
    const block = document.querySelector(`[data-block-id="${blockId}"]`);
    if (!block) return;

    const viewport = block.closest("[data-slot=\"scroll-area-viewport\"]");
    if (!(viewport instanceof HTMLElement)) return;

    const blockRect = block.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    const contentTop = viewport.scrollTop + (blockRect.top - viewportRect.top);

    viewport.scrollTo({
      top: contentTop - viewport.clientHeight / 2,
      behavior: "smooth",
    });

    set({ activeBlockId: blockId });
  },

  article: null,
  setArticle: (article) => set({ article }),
}));
