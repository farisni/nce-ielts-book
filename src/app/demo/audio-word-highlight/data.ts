export interface WordTiming {
  text: string;
  start: number;
  end: number;
}

export interface Sentence {
  words: WordTiming[];
  start: number;
  end: number;
}

export const transcript: Sentence[] = [
  {
    start: 0.0,
    end: 4.2,
    words: [
      { text: "I", start: 0.0, end: 0.12 },
      { text: "love", start: 0.15, end: 0.45 },
      { text: "the", start: 0.48, end: 0.6 },
      { text: "way", start: 0.65, end: 0.9 },
      { text: "you", start: 0.92, end: 1.15 },
      { text: "make", start: 1.18, end: 1.45 },
      { text: "me", start: 1.48, end: 1.65 },
      { text: "feel", start: 1.68, end: 2.05 },
      { text: "when", start: 2.1, end: 2.35 },
      { text: "the", start: 2.38, end: 2.5 },
      { text: "morning", start: 2.55, end: 3.1 },
      { text: "light", start: 3.15, end: 3.5 },
      { text: "comes", start: 3.55, end: 3.9 },
      { text: "through", start: 3.95, end: 4.2 },
    ],
  },
  {
    start: 4.5,
    end: 8.8,
    words: [
      { text: "Every", start: 4.5, end: 4.85 },
      { text: "little", start: 4.88, end: 5.15 },
      { text: "moment", start: 5.2, end: 5.65 },
      { text: "feels", start: 5.7, end: 6.0 },
      { text: "like", start: 6.05, end: 6.25 },
      { text: "a", start: 6.28, end: 6.38 },
      { text: "brand", start: 6.42, end: 6.75 },
      { text: "new", start: 6.78, end: 7.0 },
      { text: "story", start: 7.05, end: 7.55 },
      { text: "waiting", start: 7.6, end: 8.05 },
      { text: "to", start: 8.08, end: 8.22 },
      { text: "unfold", start: 8.25, end: 8.8 },
    ],
  },
  {
    start: 9.1,
    end: 13.5,
    words: [
      { text: "And", start: 9.1, end: 9.3 },
      { text: "in", start: 9.33, end: 9.45 },
      { text: "the", start: 9.48, end: 9.6 },
      { text: "silence", start: 9.65, end: 10.2 },
      { text: "of", start: 10.22, end: 10.35 },
      { text: "the", start: 10.38, end: 10.5 },
      { text: "night", start: 10.55, end: 10.9 },
      { text: "I", start: 10.95, end: 11.1 },
      { text: "hear", start: 11.15, end: 11.45 },
      { text: "your", start: 11.5, end: 11.7 },
      { text: "voice", start: 11.75, end: 12.15 },
      { text: "calling", start: 12.2, end: 12.65 },
      { text: "out", start: 12.7, end: 12.9 },
      { text: "my", start: 12.95, end: 13.12 },
      { text: "name", start: 13.15, end: 13.5 },
    ],
  },
  {
    start: 13.8,
    end: 18.2,
    words: [
      { text: "We", start: 13.8, end: 14.0 },
      { text: "are", start: 14.05, end: 14.25 },
      { text: "just", start: 14.3, end: 14.55 },
      { text: "two", start: 14.6, end: 14.8 },
      { text: "hearts", start: 14.85, end: 15.25 },
      { text: "beating", start: 15.3, end: 15.75 },
      { text: "in", start: 15.78, end: 15.92 },
      { text: "perfect", start: 15.95, end: 16.45 },
      { text: "rhythm", start: 16.5, end: 16.95 },
      { text: "under", start: 17.0, end: 17.25 },
      { text: "the", start: 17.3, end: 17.45 },
      { text: "stars", start: 17.5, end: 17.85 },
      { text: "tonight", start: 17.9, end: 18.2 },
    ],
  },
  {
    start: 18.5,
    end: 22.8,
    words: [
      { text: "So", start: 18.5, end: 18.7 },
      { text: "take", start: 18.75, end: 19.0 },
      { text: "my", start: 19.05, end: 19.2 },
      { text: "hand", start: 19.25, end: 19.55 },
      { text: "and", start: 19.6, end: 19.75 },
      { text: "never", start: 19.8, end: 20.15 },
      { text: "let", start: 20.2, end: 20.38 },
      { text: "it", start: 20.4, end: 20.5 },
      { text: "go", start: 20.55, end: 20.85 },
      { text: "we'll", start: 20.9, end: 21.1 },
      { text: "dance", start: 21.15, end: 21.55 },
      { text: "until", start: 21.6, end: 21.85 },
      { text: "the", start: 21.9, end: 22.05 },
      { text: "world", start: 22.1, end: 22.4 },
      { text: "goes", start: 22.45, end: 22.65 },
      { text: "slow", start: 22.7, end: 22.8 },
    ],
  },
  {
    start: 23.0,
    end: 27.5,
    words: [
      { text: "This", start: 23.0, end: 23.2 },
      { text: "is", start: 23.25, end: 23.38 },
      { text: "the", start: 23.42, end: 23.55 },
      { text: "sound", start: 23.6, end: 23.95 },
      { text: "of", start: 23.98, end: 24.1 },
      { text: "our", start: 24.15, end: 24.35 },
      { text: "hearts", start: 24.4, end: 24.8 },
      { text: "colliding", start: 24.85, end: 25.45 },
      { text: "like", start: 25.5, end: 25.7 },
      { text: "waves", start: 25.75, end: 26.1 },
      { text: "upon", start: 26.15, end: 26.35 },
      { text: "the", start: 26.4, end: 26.55 },
      { text: "shore", start: 26.6, end: 26.95 },
      { text: "forevermore", start: 27.0, end: 27.5 },
    ],
  },
];

export const totalDuration = 28.0;
