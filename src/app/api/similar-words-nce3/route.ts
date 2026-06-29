import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

interface SimilarWord {
  word: string;
  meaning?: string;
  reason?: string;
  file?: string;
  line?: number;
  pronunciation?: string;
  phrase?: string;
}

interface RootEntry {
  word: string;
  meaning: string;
  file: string;
  line: number;
  root_form: string;
}

interface SimilarData {
  spelling: SimilarWord[];
  pronunciation: SimilarWord[];
  root_affix: { roots: Record<string, RootEntry[]> };
  semantic: SimilarWord[];
  collocations: SimilarWord[];
}

interface WordEntry {
  word: string;
  target_info: {
    pos: string;
    meaning: string;
    pronunciation: string;
    source: string;
  };
  similar: SimilarData;
}

let cache: Record<string, WordEntry> | null = null;

function loadData(): Record<string, WordEntry> {
  if (cache) return cache;
  const filePath = join(process.cwd(), "src/app/mock/similar-words-nce3.json");
  const raw = readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);
  cache = {};
  for (const entry of data.words as WordEntry[]) {
    const key = entry.word.replace(/\(.*\)/, "").trim().toLowerCase();
    if (!cache[key]) {
      cache[key] = entry;
    }
  }
  return cache;
}

export async function GET(request: NextRequest) {
  const word = request.nextUrl.searchParams.get("word");
  if (!word) {
    return NextResponse.json({ error: "Missing word param" }, { status: 400 });
  }

  const data = loadData();
  const key = word.toLowerCase().trim();
  const entry = data[key];

  if (!entry) {
    return NextResponse.json(null);
  }

  return NextResponse.json(entry);
}
