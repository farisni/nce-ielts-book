export interface VocabItem {
  word: string
  pos: string
  meaning: string
  phonetic?: string
}

export interface SentenceNote {
  title: string
  body: string
  table?: {
    main: string
    explain: string
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
  rubyNotes: SentenceNote[]
  structureNotes?: SentenceNote[]
  panelNotes?: SentenceNote[]
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
