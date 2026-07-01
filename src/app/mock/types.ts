export interface VocabItem {
  word: string
  pos: string
  meaning: string
  phonetic?: string
}

export interface SentenceNote {
  label: string
  description: string
  examples?: {
    word: string
    meaning: string
    enExample: string
    zhExample: string
  }[]
}

export interface SentenceData {
  text: string
  translation: string
  predicates: string[]
  clauseIntroducers: string[]
  auxiliaries: string[]
  inlineAnnotations: SentenceNote[]
  grammarNotes?: SentenceNote[]
  expansionNotes?: SentenceNote[]
}

export interface Article {
  id: string
  title: string
  titleCn?: string
  level: string
  lesson: number
  heatmap?: number[][]
  attribution?: string
  keyArticle?: boolean
  original: {
    paragraphs: SentenceData[][]
  }
  tag?: string
  vocabulary: VocabItem[]
  notesOnText?: SentenceNote[]
}

export interface GrammarRelatedExample {
  source: string
  sentence: string
  note: string
}
