import { create } from "zustand";

interface ReaderState {
  activeBlockId: string | null;
  setActiveBlockId: (id: string | null) => void;
  notesByBlockId: Record<string, string>;
  addNote: (blockId: string, note: string) => void;
  removeNote: (blockId: string) => void;
  scrollToBlock: (blockId: string) => void;
}

export const useReaderStore = create<ReaderState>()((set) => ({
  activeBlockId: null,
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
    const el = document.querySelector(`[data-block-id="${blockId}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      set({ activeBlockId: blockId });
    }
  },
}));
