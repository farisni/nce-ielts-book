"use client";

import React from "react";
import { ArrowLeft, NotebookPen } from "lucide-react";
import { KnowledgePoint } from "@/app/_components/knowledge-point";
import { Sentence } from "@/app/_components/sentence";
import type { Article, SentenceData, SentenceNote } from "@/app/mock";
import { mergeArticleData } from "@/app/mock";
import nce3L41Notes from "@/app/mock/note/nce3-l41.json";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type NotebookListRow = {
  example?: string;
  desc?: string;
  hl?: string[];
  tooltip?: string;
};

type NotebookTableRow = NotebookListRow & {
  title?: string;
  titleDesc?: string;
  exampleDesc?: string;
};

type NotebookKnowledgePoint = {
  title?: string;
  desc?: string;
  view?: string[];
  data?: Record<string, NotebookListRow[] | NotebookTableRow[] | string>;
};

type NotebookBlock = {
  index: number;
  sentence: string;
  knowledgePoint?: NotebookKnowledgePoint[];
};

type Props = {
  article: Article;
  onBackToArticle: () => void;
};

const NOTEBOOK_DATA: Record<string, NotebookBlock[]> = {
  "nce3-l41": nce3L41Notes as NotebookBlock[],
};

const DOT_COLORS = ["#d4ddd9", "#C7D2CD", "#b4c1bb", "#a1b0a9", "#8e9f97", "#7b8e85"];
const PREDICATE_COLOR = "#bd491e";
const AUXILIARY_COLOR = "#d97706";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text: string, terms?: string[]) {
  const keywords = (terms ?? [])
    .map((term) => term.trim())
    .filter(Boolean)
    .filter((term) => term !== ".")
    .filter((term, index, list) => list.findIndex((item) => item.toLowerCase() === term.toLowerCase()) === index)
    .sort((a, b) => b.length - a.length);

  if (!text || keywords.length === 0) return text;

  const matcher = new RegExp(`(${keywords.map(escapeRegExp).join("|")})`, "gi");
  return text.split(matcher).map((part, index) =>
    keywords.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
      <mark key={index} className="bg-transparent px-0 font-semibold text-[#4980b1]">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function normalizeText(value: string) {
  return value
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function splitSentenceNote(sentence: string) {
  const normalized = normalizeText(sentence);
  const knownNotes = ["开篇明义", "雄狮句型（对比上下句）", "虚拟语气"];
  const note = knownNotes.find((item) => normalized.endsWith(item));

  if (!note) {
    return { text: normalized, note: "" };
  }

  return {
    text: normalized.slice(0, -note.length).trim(),
    note,
  };
}

function renderSentenceText(text: string) {
  const predicateTerms = [
    "has",
    "appealed",
    "have",
    "regarded",
    "gone",
    "was",
    "lives",
    "is",
    "talking",
    "be compared",
    "maintains",
    "fails",
    "says",
    "chose",
    "do",
    "find",
    "live",
    "are",
    "draws",
    "wonder",
    "experiences",
    "is",
    "have",
    "run",
    "stagger",
    "could be",
    "descends",
    "travel",
    "are tucked",
    "has been",
    "pretend",
  ];
  const auxiliaryTerms = ["can", "will", "could"];
  const keywords = [...predicateTerms, ...auxiliaryTerms]
    .filter((term, index, list) => list.findIndex((item) => item.toLowerCase() === term.toLowerCase()) === index)
    .sort((a, b) => b.length - a.length);
  const matcher = new RegExp(`(${keywords.map(escapeRegExp).join("|")})`, "gi");

  return text.split(matcher).map((part, index) => {
    const lower = part.toLowerCase();
    const isPredicate = predicateTerms.some((term) => term.toLowerCase() === lower);
    const isAuxiliary = auxiliaryTerms.some((term) => term.toLowerCase() === lower);

    if (!isPredicate && !isAuxiliary) return <React.Fragment key={index}>{part}</React.Fragment>;

    return (
      <span key={index} style={{ color: isAuxiliary ? AUXILIARY_COLOR : PREDICATE_COLOR, fontWeight: 600 }}>
        {part}
      </span>
    );
  });
}

function renderList(rows: NotebookListRow[]) {
  return (
    <ul className="mb-5 space-y-1.5">
      {rows.map((item, index) => (
        <li key={`${item.example}-${index}`} className="flex items-start gap-1.5 text-base text-black">
          <span
            className="mt-2 inline-block size-1.5 shrink-0 rounded-full"
            style={{ background: DOT_COLORS[index % DOT_COLORS.length] }}
          />
          <span title={item.tooltip} className="min-w-0">
            <span>{highlightText(item.example ?? "", item.hl)}</span>
            {item.desc ? (
              <>
                {" "}
                <span className="text-sm text-gray-400">{item.desc}</span>
              </>
            ) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function renderTable(rows: NotebookTableRow[]) {
  return (
    <Table className="table-fixed text-base text-black" containerClassName="overflow-visible">
      <TableHeader>
        <TableRow className="border-b border-gray-200 hover:bg-transparent">
          <TableHead className="h-auto w-[35%] px-3 py-2 text-xs font-medium text-gray-500">表达</TableHead>
          <TableHead className="h-auto w-[65%] px-3 py-2 text-xs font-medium text-gray-500">例句</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={`${row.title}-${row.example}-${index}`} className="border-b border-gray-200 hover:bg-transparent">
            <TableCell className="w-[35%] whitespace-normal px-3 py-2 align-top [&_strong]:!font-semibold [&_strong]:!text-[#4980b1]">
              {row.title ? <strong>{row.title}</strong> : <span className="text-gray-400">-</span>}
              {row.titleDesc ? (
                <>
                  <br />
                  <span className="text-sm text-gray-400">{row.titleDesc}</span>
                </>
              ) : null}
            </TableCell>
            <TableCell className="w-[65%] whitespace-normal px-3 py-2 align-top text-gray-600">
              <span title={row.tooltip}>{highlightText(row.example ?? "", row.hl)}</span>
              {row.exampleDesc ? (
                <>
                  {" "}
                  <span className="text-sm text-gray-400">{row.exampleDesc}</span>
                </>
              ) : null}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function renderPointView(point: NotebookKnowledgePoint, view: string) {
  const value = point.data?.[view];

  if (typeof value === "string") {
    return <p className="mb-5 text-base leading-relaxed text-gray-600">{value}</p>;
  }

  if (!Array.isArray(value) || value.length === 0) return null;

  if (view.startsWith("table")) {
    return renderTable(value as NotebookTableRow[]);
  }

  return renderList(value as NotebookListRow[]);
}

function BackToArticleButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-8 inline-flex h-8 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium text-gray-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
    >
      <ArrowLeft className="size-4" />
      <span>返回文章</span>
    </button>
  );
}

function StructuredNotebook({
  article,
  blocks,
  onBackToArticle,
}: {
  article: Article;
  blocks: NotebookBlock[];
  onBackToArticle: () => void;
}) {
  return (
    <main className="notebook-container mx-auto w-[880px] min-w-[880px] min-h-[600px] rounded-md border border-dashed border-zinc-300 p-8">
      <header className="mb-8">
        <BackToArticleButton onClick={onBackToArticle} />
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-400">
          {article.level} Lesson {article.lesson}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-normal text-zinc-950">{article.title}</h1>
        {article.titleCn ? <p className="mt-1 text-xl text-gray-400">{article.titleCn}</p> : null}
      </header>

      {blocks.map((block) => {
        const { text, note } = splitSentenceNote(block.sentence);

        return (
          <Sentence
            key={block.index}
            quote={
              <div>
                <span>{renderSentenceText(text)}</span>
                {note ? (
                  <>
                    <br />
                    <span className="text-[13px] font-normal text-gray-500">{note}</span>
                  </>
                ) : null}
              </div>
            }
            quoteClassName="mt-12 mb-5"
          >
            {(block.knowledgePoint ?? []).map((point, index) => (
              <KnowledgePoint
                key={`${block.index}-${point.title ?? "note"}-${index}`}
                titleEn={point.title ?? ""}
                titleCn={point.desc}
              >
                {(point.view ?? []).map((view) => (
                  <React.Fragment key={view}>{renderPointView(point, view)}</React.Fragment>
                ))}
              </KnowledgePoint>
            ))}
          </Sentence>
        );
      })}
    </main>
  );
}

function noteToTableRow(note: SentenceNote): NotebookTableRow[] {
  return (note.examples ?? []).map((example) => ({
    title: example.word || note.label,
    titleDesc: example.meaning || note.description,
    example: example.enExample,
    exampleDesc: example.zhExample,
    hl: example.highlightTerms?.length ? example.highlightTerms : [example.word || note.label],
  }));
}

function GenericNotebook({
  article,
  paragraphs,
  onBackToArticle,
}: {
  article: Article;
  paragraphs: SentenceData[][];
  onBackToArticle: () => void;
}) {
  const hasNotes = paragraphs.some((paragraph) =>
    paragraph.some((sentence) => (sentence.expansionNotes?.length ?? 0) > 0),
  );

  if (!hasNotes) {
    return (
      <div className="notebook-container relative flex min-h-[600px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-zinc-300 p-8">
        <div className="absolute left-8 top-8">
          <BackToArticleButton onClick={onBackToArticle} />
        </div>
        <NotebookPen className="mb-4 size-12 text-muted-foreground/20" />
        <p className="text-4xl font-semibold tracking-normal text-muted-foreground/60">{article.title}</p>
        {article.titleCn ? <p className="mt-1 text-xl text-muted-foreground/40">{article.titleCn}</p> : null}
        <p className="mt-6 text-sm text-muted-foreground/50">暂无结构化笔记</p>
      </div>
    );
  }

  return (
    <main className="notebook-container mx-auto w-[880px] min-w-[880px] min-h-[600px] rounded-md border border-dashed border-zinc-300 p-8">
      <header className="mb-8">
        <BackToArticleButton onClick={onBackToArticle} />
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-400">
          {article.level} Lesson {article.lesson}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-normal text-zinc-950">{article.title}</h1>
        {article.titleCn ? <p className="mt-1 text-xl text-gray-400">{article.titleCn}</p> : null}
      </header>

      {paragraphs.flat().map((sentence, index) => (
        <Sentence
          key={`${sentence.text}-${index}`}
          quote={<span>{renderSentenceText(sentence.text)}</span>}
          quoteClassName="mt-12 mb-5"
        >
          {(sentence.expansionNotes ?? []).map((note, noteIndex) => {
            const rows = noteToTableRow(note);

            return (
              <KnowledgePoint key={`${note.label}-${noteIndex}`} titleEn={note.label} titleCn={note.description}>
                {rows.length > 0 ? renderTable(rows) : null}
              </KnowledgePoint>
            );
          })}
        </Sentence>
      ))}
    </main>
  );
}

export function NotebookPlaceholder({ article, onBackToArticle }: Props) {
  const structuredBlocks = NOTEBOOK_DATA[article.originalId];

  if (structuredBlocks) {
    return <StructuredNotebook article={article} blocks={structuredBlocks} onBackToArticle={onBackToArticle} />;
  }

  return <GenericNotebook article={article} paragraphs={mergeArticleData(article)} onBackToArticle={onBackToArticle} />;
}
