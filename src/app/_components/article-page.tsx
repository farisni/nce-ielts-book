"use client";

import Link from "next/link";
import React, {
  Fragment,
  type CSSProperties,
  type FormEvent,
  type MouseEvent,
  use,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Bot,
  Copy,
  Highlighter,
  MoreHorizontal,
  Send,
  Search,
  Share2,
  Trash2,
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton";
import { Button19 } from "@/components/ui/button-19";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { allArticles, getArticleList, nce2List, nce3List, nce4List, ieltsList, type Article, type ArticleListItem, type GrammarRelatedExample, type SentenceData } from "@/app/mock";
import { grammarRelatedExamples } from "@/app/mock/ielts";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputGroup, InputField } from "@/components/ui/input-group";
import { motion, AnimatePresence } from "motion/react";
import { SPRING_PANEL } from "@/lib/ease";
import { useArticleSettings } from "@/stores/article-settings";
import FlipClock from "@/components/8starlabs-ui/flip-clock";
import { ThinkingIndicator } from "@/components/ui/thinking-indicator";
import { RoughHighlight, RoughUnderline } from "@/components/rough-annotate";
import { ShineBorder } from "@/components/ui/shine-border";
import { useAudioSync } from "@/app/_components/use-audio-sync";
import { Play, Pause } from "lucide-react";

const LEVEL_ROUTES: Record<string, string> = {
  NCE2: "/nec/nce2",
  NCE3: "/nec/nce3",
  NCE4: "/nec/nce4",
  IELTS16: "/ielts",
};

const LEVEL_LABELS: Record<string, string> = {
  NCE2: "NCE2",
  NCE3: "NCE3",
  NCE4: "NCE4",
  IELTS16: "IELTS",
};

const LEVEL_LISTS: Record<string, ArticleListItem[]> = {
  NCE2: nce2List,
  NCE3: nce3List,
  NCE4: nce4List,
  IELTS16: ieltsList,
};

const LEVEL_DEFAULT_ARTICLE: Record<string, string> = {
  NCE2: "nce2-l1",
  NCE3: "nce3-l1",
  NCE4: "nce4-l1",
  IELTS16: "ielts-1",
};

type GrammarSummaryNote = {
  key: string;
  title: string;
  body: string;
  relatedExamples?: GrammarRelatedExample[];
};

type GrammarSummaryGroup = {
  key: string;
  paragraphIndex: number;
  tone: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  notes: GrammarSummaryNote[];
};

type GrammarSummaryBlockMetric = {
  top: number;
  height: number;
};

type GrammarToneStyle = CSSProperties & {
  "--grammar-mark-color": string;
  "--grammar-title-bg": string;
};

function areGrammarSummaryMetricsEqual(
  currentMetrics: Record<number, GrammarSummaryBlockMetric>,
  nextMetrics: Record<number, GrammarSummaryBlockMetric>,
) {
  const currentKeys = Object.keys(currentMetrics);
  const nextKeys = Object.keys(nextMetrics);

  if (currentKeys.length !== nextKeys.length) {
    return false;
  }

  return nextKeys.every((key) => {
    const currentMetric = currentMetrics[Number(key)];
    const nextMetric = nextMetrics[Number(key)];

    return (
      currentMetric &&
      currentMetric.top === nextMetric.top &&
      currentMetric.height === nextMetric.height
    );
  });
}

const GRAMMAR_TONE_STYLES: Record<GrammarSummaryGroup["tone"], GrammarToneStyle> = {
  1: { "--grammar-mark-color": "var(--tone-1-strong)", "--grammar-title-bg": "var(--tone-1)" },
  2: { "--grammar-mark-color": "var(--tone-2-strong)", "--grammar-title-bg": "var(--tone-2)" },
  3: { "--grammar-mark-color": "var(--tone-3-strong)", "--grammar-title-bg": "var(--tone-3)" },
  4: { "--grammar-mark-color": "var(--tone-4-strong)", "--grammar-title-bg": "var(--tone-4)" },
  5: { "--grammar-mark-color": "var(--tone-5-strong)", "--grammar-title-bg": "var(--tone-5)" },
  6: { "--grammar-mark-color": "var(--tone-6-strong)", "--grammar-title-bg": "var(--tone-6)" },
  7: { "--grammar-mark-color": "var(--tone-7-strong)", "--grammar-title-bg": "var(--tone-7)" },
};

const AI_INPUT_WIDTH = 360;
const AI_INPUT_HEIGHT = 44;
const AI_INPUT_OFFSET = 10;
const SELECTION_OFFSET_EXCLUDED_SELECTOR = "[data-selection-offset-excluded='true']";
const SIDE_TAB_TRIGGER_CLASS_NAME = "h-auto flex-none cursor-pointer rounded-none border-0 border-b-2 border-transparent !bg-transparent px-0 pb-1 shadow-none after:hidden data-[state=active]:border-primary/50 data-[state=active]:!bg-transparent data-[state=active]:shadow-none";
const SIDE_TAB_CONTENT_CLASS_NAME = "mt-0 transition-[opacity,transform] duration-200 ease-out data-[state=inactive]:pointer-events-none data-[state=inactive]:absolute data-[state=inactive]:inset-x-0 data-[state=inactive]:top-0 data-[state=inactive]:translate-y-1 data-[state=inactive]:opacity-0 data-[state=active]:translate-y-0 data-[state=active]:opacity-100";

function buildParagraphStarts(paragraphs: string[]) {
  return paragraphs.reduce<number[]>((starts) => {
    const previousStart = starts.at(-1) ?? 0;
    const previousParagraph = paragraphs[starts.length - 1];

    starts.push(previousParagraph ? previousStart + previousParagraph.length : 0);
    return starts;
  }, []);
}

function getArticleParagraphs(article: Article) {
  return article.original.paragraphs.map((paragraph) =>
    paragraph.map((sentence) => sentence.text).join(" "),
  );
}

function getArticleParagraphTranslations(article: Article) {
  return article.original.paragraphs
    .map((paragraph) =>
      paragraph
        .map((sentence) => sentence.translation)
        .filter(Boolean)
        .join(""),
    );
}

function getArticleSentences(article: Article) {
  return article.original.paragraphs;
}

function getRelatedExamplesForGrammar(noteBody: string) {
  if (noteBody.includes("as 引导原因状语")) {
    return grammarRelatedExamples.asReason;
  }

  if (noteBody.includes("as 引导伴随状语")) {
    return grammarRelatedExamples.asAccompanying;
  }

  return [];
}

function getGrammarSummaryGroups(article: Article): GrammarSummaryGroup[] {
  return article.original.paragraphs
    .map((paragraph, paragraphIndex) => ({
      key: `${article.id}-grammar-${paragraphIndex}`,
      paragraphIndex,
      tone: 1 as GrammarSummaryGroup["tone"],
      notes: paragraph.flatMap((sentence, sentenceIndex) =>
        (sentence.structureNotes ?? []).map((note, noteIndex) => ({
          key: `${article.id}-${paragraphIndex}-${sentenceIndex}-${noteIndex}`,
          title: note.title,
          body: note.body,
          relatedExamples: getRelatedExamplesForGrammar(note.body),
        })),
      ),
    }))
    .filter((group) => group.notes.length > 0)
    .map((group, index) => ({
      ...group,
      tone: ((index % 5) + 1) as GrammarSummaryGroup["tone"],
    }));
}

type HighlightRange = {
  start: number;
  end: number;
};

type StoredSelection = HighlightRange & {
  text: string;
};

type ArticleSelectionState = {
  articleId: string;
  selection: StoredSelection;
};

function isSelectionOffsetExcluded(node: Node) {
  const element = node instanceof Element ? node : node.parentElement;

  return Boolean(element?.closest(SELECTION_OFFSET_EXCLUDED_SELECTOR));
}

function getBoundaryOffset(container: HTMLElement, node: Node, nodeOffset: number) {
  let offset = 0;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(currentNode) {
      return isSelectionOffsetExcluded(currentNode)
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT;
    },
  });
  let current = walker.nextNode();

  while (current) {
    if (current === node) {
      return offset + nodeOffset;
    }

    offset += current.textContent?.length ?? 0;
    current = walker.nextNode();
  }

  return offset;
}

function readSelection(container: HTMLElement | null): StoredSelection | null {
  const selection = window.getSelection();

  if (!container || !selection || selection.rangeCount === 0) {
    return null;
  }

  const range = selection.getRangeAt(0);

  if (range.collapsed || !container.contains(range.commonAncestorContainer)) {
    return null;
  }

  if (
    isSelectionOffsetExcluded(range.startContainer) ||
    isSelectionOffsetExcluded(range.endContainer)
  ) {
    return null;
  }

  const start = getBoundaryOffset(container, range.startContainer, range.startOffset);
  const end = getBoundaryOffset(container, range.endContainer, range.endOffset);
  const text = selection.toString().replace(/\s+/g, " ").trim();

  if (!text || start === end) {
    return null;
  }

  return {
    start: Math.min(start, end),
    end: Math.max(start, end),
    text,
  };
}

function renderHighlightedText(
  text: string,
  paragraphStart: number,
  highlights: HighlightRange[],
  disableHighlights?: boolean,
  animate?: boolean,
) {
  if (disableHighlights) return text;

  const paragraphEnd = paragraphStart + text.length;
  const relevantHighlights = highlights.filter(
    (highlight) => highlight.start < paragraphEnd && highlight.end > paragraphStart,
  );

  if (relevantHighlights.length === 0) {
    return text;
  }

  const parts: React.ReactNode[] = [];
  let cursor = 0;

  relevantHighlights.forEach((highlight, index) => {
    const start = Math.max(highlight.start - paragraphStart, 0);
    const end = Math.min(highlight.end - paragraphStart, text.length);

    if (start > cursor) {
      parts.push(
        <Fragment key={`text-${paragraphStart}-${index}`}>
          {text.slice(cursor, start)}
        </Fragment>,
      );
    }

    parts.push(
      <RoughHighlight
        key={`mark-${paragraphStart}-${index}`}
        trigger="always"
        color="#fde68a"
        animate={animate}
      >
        {text.slice(start, end)}
      </RoughHighlight>,
    );

    cursor = end;
  });

  if (cursor < text.length) {
    parts.push(<Fragment key={`text-${paragraphStart}-tail`}>{text.slice(cursor)}</Fragment>);
  }

  return parts;
}

type ArticlePageProps = {
  defaultLevel: string;
  searchParams: Promise<{ article?: string | string[] }>;
};

export function ArticlePage({ defaultLevel, searchParams }: ArticlePageProps) {
  const query = use(searchParams);
  const articleParam = Array.isArray(query.article) ? query.article[0] : query.article;
  const searchQuery = (query as any).search || "";
  const defaultArticleId = LEVEL_DEFAULT_ARTICLE[defaultLevel] ?? Object.keys(LEVEL_LISTS[defaultLevel] ?? {})[0] ?? "nce3-l1";

  if (!articleParam) {
    return <IeltsArticleList defaultLevel={defaultLevel} initialSearch={searchQuery} />;
  }

  const selectedArticleId = articleParam;
  const article = allArticles[selectedArticleId] ?? allArticles[defaultArticleId];

  return <ArticleReader article={article} />;
}

function IeltsArticleList({ defaultLevel, initialSearch = "" }: { defaultLevel: string; initialSearch?: string }) {
  const [articleSearch, setArticleSearch] = useState(initialSearch);
  const allArticlesList = LEVEL_LISTS[defaultLevel] ?? getArticleList(allArticles);
  const articles = articleSearch.trim()
    ? allArticlesList.filter((a) => {
        const q = articleSearch.toLowerCase();
        return a.title.toLowerCase().includes(q) || (a.titleCn ?? "").includes(q);
      })
    : allArticlesList;
  const levelLabel = LEVEL_LABELS[defaultLevel] ?? "IELTS";

  return (
      <section className="min-w-0 flex-1 rounded-md min-w-[500px] pl-16 pr-[40px] py-12">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
          <div className="flex items-center gap-3 pb-2">
            <h1 className="text-2xl font-semibold tracking-normal">{levelLabel}</h1>

          </div>

          <div>
            {articles.map((article, index) => (
              <Fragment key={article.id}>
                {index > 0 && (
                  <Separator className="my-0 bg-zinc-200 dark:bg-zinc-700" />
                )}
                <Link
                  href={`${LEVEL_ROUTES[article.level] ?? "/ielts"}?article=${article.id}`}
                  className="group flex items-center gap-5 py-5 transition-colors"
                >
                  {/* cover thumbnail */}
                  {defaultLevel === "IELTS16" ? (
                    <img src={`${["/stock-exchange-tokyo-japan.jpg", "/the-padaung.jpg"][index % 2]}`} alt="" className="h-20 w-28 shrink-0 rounded-lg object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  ) : (
                    <div className="h-20 w-28 shrink-0 rounded-lg bg-muted flex items-center justify-center">
                      <svg className="h-8 w-8 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                    </div>
                  )}
                  <div className="min-w-0 flex flex-col gap-2.5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h2 className="text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                        {article.title}
                      </h2>
                      <span className="text-xs text-muted-foreground">
                        {article.level} / Lesson {article.lesson}
                      </span>
                    </div>
                    <p className="text-sm/relaxed text-muted-foreground">{article.titleCn}</p>
                    <p className="text-xs text-muted-foreground">
                      {article.paragraphCount} paragraphs / {article.vocabularyCount} words
                    </p>
                  </div>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
  );
}

function ArticleReader({ article }: { article: Article }) {
  const isIelts = article.level === "IELTS16";
  const levelRoute = LEVEL_ROUTES[article.level] ?? "/ielts";
  const articleList = LEVEL_LISTS[article.level] ?? [];
  const currentArticleIndex = articleList.findIndex((item) => item.id === article.id);
  const previousArticle = currentArticleIndex > 0
    ? articleList[currentArticleIndex - 1]
    : undefined;
  const nextArticle = currentArticleIndex >= 0 && currentArticleIndex < articleList.length - 1
    ? articleList[currentArticleIndex + 1]
    : undefined;
  const articleParagraphs = useMemo(() => getArticleParagraphs(article), [article]);
  const paragraphStarts = useMemo(
    () => buildParagraphStarts(articleParagraphs),
    [articleParagraphs],
  );
  const articleParagraphTranslations = useMemo(
    () => getArticleParagraphTranslations(article),
    [article],
  );
  const grammarSummaryGroups = useMemo(
    () => getGrammarSummaryGroups(article),
    [article],
  );
  const articleBodyRef = useRef<HTMLDivElement>(null);
  const paragraphRefs = useRef<Array<HTMLDivElement | null>>([]);
  const grammarSummaryRef = useRef<HTMLDivElement>(null);
  const [selectionState, setSelectionState] = useState<ArticleSelectionState | null>(null);
  const highlightsByArticleId = useArticleSettings((s) => s.highlightsByArticleId);
  const addHighlight = useArticleSettings((s) => s.addHighlight);
  const clearHighlights = useArticleSettings((s) => s.clearHighlights);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatPosition, setChatPosition] = useState({ x: 24, y: 24 });
  const [chatContext, setChatContext] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [activeSideTab, setActiveSideTab] = useState<"grammar" | "vocabulary">("grammar");
  const [activeGrammarMoreKey, setActiveGrammarMoreKey] = useState("");
  const [grammarSummaryBlockMetrics, setGrammarSummaryBlockMetrics] = useState<
    Record<number, GrammarSummaryBlockMetric>
  >({});
  const [lastAction, setLastAction] = useState("No selection action yet.");
  const [activePanelKey, setActivePanelKey] = useState("");
  const [highlightsHidden, setHighlightsHidden] = useState(false);
/* ---- audio sync for NCE4 ---- */
  const isNce4 = article.level === "NCE4";
  const {
    audioRef,
    playing,
    togglePlay,
    currentMs,
    duration,
    activeSentenceIndex,
    lrcLines,
    seek,
    hasLrc,
    audioHandlers,
  } = useAudioSync(isNce4 ? article.lesson : 0);

  const allSentenceKeys = useMemo(() => {
    const keys: string[] = [];
    for (let pi = 0; pi < articleParagraphs.length; pi++) {
      const sentences = article.original.paragraphs[pi] ?? [];
      for (let si = 0; si < sentences.length; si++) {
        keys.push(`${article.id}-p${pi}-s${si}`);
      }
    }
    return keys;
  }, [article.id, article.original.paragraphs, articleParagraphs]);

  /* match LRC line text → article sentence */
  const audioActiveKey = useMemo(() => {
    if (!isNce4 || activeSentenceIndex < 0 || !lrcLines[activeSentenceIndex]) return null;
    const lrcText = lrcLines[activeSentenceIndex].text.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (lrcText.length < 15) return null;
    for (const key of allSentenceKeys) {
      const parts = key.split('-p').pop()?.split('-s');
      if (!parts) continue;
      const pi = parseInt(parts[0]);
      const si = parseInt(parts[1]);
      const sentence = article.original.paragraphs[pi]?.[si];
      if (!sentence) continue;
      const sText = sentence.text.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (sText.includes(lrcText) || lrcText.includes(sText)) return key;
    }
    return null;
  }, [isNce4, activeSentenceIndex, lrcLines, allSentenceKeys, article.original.paragraphs]);

  /* auto-scroll to audio-active sentence */
  const prevAudioKeyRef = useRef<string | null>(null);
  useEffect(() => {
    if (!audioActiveKey || audioActiveKey === prevAudioKeyRef.current) return;
    prevAudioKeyRef.current = audioActiveKey;
    const el = document.querySelector(`[data-sentence-key="${audioActiveKey}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [audioActiveKey]);

  /* animate highlights on route jump or right-click highlight only */
  const prevArticleIdRef = useRef("");
  const isRouteChange = !!prevArticleIdRef.current && prevArticleIdRef.current !== article.id;
  useEffect(() => {
    prevArticleIdRef.current = article.id;
  });
  const highlightAnimateRef = useRef(false);
  useEffect(() => {
    highlightAnimateRef.current = false;
  });

  /* hide highlights immediately when panel opens; delay re-show until
     AnimatePresence exit animation finishes so text is back in place */
  const activePanelKeyRef = useRef(activePanelKey);
  useEffect(() => {
    const prev = activePanelKeyRef.current;
    activePanelKeyRef.current = activePanelKey;
    if (prev === activePanelKey) return; // skip initial mount
    if (activePanelKey) {
      setHighlightsHidden(true);
    } else {
      const t = setTimeout(() => setHighlightsHidden(false), 300);
      return () => clearTimeout(t);
    }
  }, [activePanelKey]);

  const togglePanel = useCallback((key: string) => {
    setActivePanelKey((prev) => prev === key ? "" : key);
  }, []);

  const articleSentences = useMemo(() => getArticleSentences(article), [article]);
  const sentenceOffsets = useMemo(() => {
    let offset = 0;
    return articleSentences.map((paragraph) =>
      paragraph.map((sentence) => {
        const start = offset;
        offset += sentence.text.length + 1; // +1 for trailing space
        return start;
      }),
    );
  }, [articleSentences]);

  const hasGrammarSummary = grammarSummaryGroups.length > 0;
  const visibleActiveSideTab = hasGrammarSummary ? activeSideTab : "vocabulary";
  const visibleActiveGrammarMoreKey = grammarSummaryGroups.some((group) =>
    group.notes.some((note) => note.key === activeGrammarMoreKey),
  )
    ? activeGrammarMoreKey
    : "";
  const selection = selectionState?.articleId === article.id ? selectionState.selection : null;
  const highlights = highlightsByArticleId[article.id] ?? [];
  const hasSelection = selection !== null;
  const selectionPreview = hasSelection
    ? selection.text.length > 72
      ? `${selection.text.slice(0, 72)}...`
      : selection.text
    : "No text selected";

  const syncGrammarSummaryLayout = useCallback(() => {
    const summaryElement = grammarSummaryRef.current;

    if (!summaryElement) {
      return;
    }

    const summaryTop = summaryElement.getBoundingClientRect().top;
    const nextMetrics: Record<number, GrammarSummaryBlockMetric> = {};

    for (const group of grammarSummaryGroups) {
      const paragraphElement = paragraphRefs.current[group.paragraphIndex];

      if (!paragraphElement) {
        continue;
      }

      const paragraphRect = paragraphElement.getBoundingClientRect();
      const naturalTop = Math.max(0, Math.round(paragraphRect.top - summaryTop));
      const naturalHeight = Math.max(1, Math.ceil(paragraphRect.height));

      nextMetrics[group.paragraphIndex] = { top: naturalTop, height: naturalHeight };
    }

    setGrammarSummaryBlockMetrics((currentMetrics) =>
      areGrammarSummaryMetricsEqual(currentMetrics, nextMetrics)
        ? currentMetrics
        : nextMetrics,
    );
  }, [grammarSummaryGroups]);

  useLayoutEffect(() => {
    syncGrammarSummaryLayout();
  }, [visibleActiveSideTab, syncGrammarSummaryLayout]);

  useEffect(() => {
    let frame = 0;

    function scheduleSync() {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          frame = 0;
          syncGrammarSummaryLayout();
        });
      });
    }

    const resizeObserver = new ResizeObserver(scheduleSync);

    paragraphRefs.current.forEach((element) => {
      if (element) {
        resizeObserver.observe(element);
      }
    });

    window.addEventListener("resize", scheduleSync);
    scheduleSync();
    void document.fonts?.ready.then(scheduleSync);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleSync);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [visibleActiveSideTab, syncGrammarSummaryLayout]);

  function syncSelection() {
    const nextSelection = readSelection(articleBodyRef.current);

    setSelectionState(
      nextSelection ? { articleId: article.id, selection: nextSelection } : null,
    );
  }

  function syncContextMenu(event: MouseEvent<HTMLElement>) {
    const nextSelection = readSelection(articleBodyRef.current);
    const pos = {
      x: Math.max(16, Math.min(event.clientX + AI_INPUT_OFFSET, window.innerWidth - AI_INPUT_WIDTH - 16)),
      y: Math.max(16, Math.min(event.clientY + AI_INPUT_OFFSET, window.innerHeight - AI_INPUT_HEIGHT - 16)),
    };
    setSelectionState(
      nextSelection ? { articleId: article.id, selection: nextSelection } : null,
    );
    setChatPosition(pos);
  }

  function copySelection() {
    if (!selection) {
      return;
    }

    void navigator.clipboard.writeText(selection.text);
    setLastAction(`Copied: "${selectionPreview}"`);
  }

  function highlightSelection() {
    if (!selection) {
      return;
    }

    highlightAnimateRef.current = true;
    addHighlight(article.id, { start: selection.start, end: selection.end });
    setLastAction(`Highlighted: "${selectionPreview}"`);
    window.getSelection()?.removeAllRanges();
  }

  function openAiChat() {
    const context = selection?.text ?? "";

    setChatContext(context);
    setIsChatOpen(true);
    setLastAction(
      context
        ? `Opened AI chat for: "${selectionPreview}"`
        : "Opened AI chat without a selected passage.",
    );

  }

  function sendChatMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = chatInput.trim();

    if (!message) {
      return;
    }

    setLastAction(
      chatContext
        ? `AI prompt sent for selected text: "${message}"`
        : `AI prompt sent for article: "${message}"`,
    );
    setChatInput("");
  }

  const formatAudioTime = useCallback((s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }, []);

  return (
    <div className="mx-auto flex w-[1022px] min-w-[1022px] flex-none gap-6">
      
          <section className="w-[728px] min-w-[728px] max-w-[728px] shrink-0 rounded-md px-6 pb-6 pt-1">
            <header className="mx-auto mb-4 mt-1 flex w-full max-w-[680px] flex-col gap-3">
              <div className="flex items-center gap-2">
                <h1 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-3xl font-semibold tracking-normal text-balance">
                  <RoughUnderline trigger="always" color="#fbb150">
                    {article.title}
                  </RoughUnderline>
                  <span className="text-xl font-normal text-muted-foreground">
                    {article.titleCn}
                  </span>
                </h1>
                                {/* audio player for NCE4 */}
                {isNce4 && (
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={togglePlay}
                      className="flex size-8 items-center justify-center rounded-full border border-border bg-surface-2 text-foreground transition-colors hover:bg-surface-3"
                      aria-label={playing ? "Pause" : "Play"}
                    >
                      {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5 ml-0.5" />}
                    </button>
                    <span className="text-xs tabular-nums text-muted-foreground w-16 text-right">
                      {formatAudioTime(currentMs)} / {formatAudioTime(duration)}
                    </span>
                    <input
                      type="range"
                      min={0}
                      max={duration || 1}
                      step={0.1}
                      value={currentMs}
                      onChange={(e) => seek(parseFloat(e.target.value))}
                      className="w-24 accent-foreground"
                    />
                    <audio
                      ref={audioRef}
                      src={`/audio/nce4/${article.lesson}.mp3`}
                      {...audioHandlers}
                    />
                  </div>
                )}
                <div className="flex items-center ml-auto">
                  {previousArticle ? (
                    <Tooltip content="上一课">
                      <Link href={`${levelRoute}?article=${previousArticle.id}`}>
                        <span><Button variant="ghost" size="icon-lg" className="rounded-full hover:bg-[#f0f0f0]"><ArrowLeft /></Button></span>
                      </Link>
                    </Tooltip>
                  ) : (
                    <Tooltip content="已经是第一课">
                      <span><Button variant="ghost" size="icon-lg" disabled><ArrowLeft /></Button></span>
                    </Tooltip>
                  )}
                  {nextArticle ? (
                    <Tooltip content="下一课">
                      <Link href={`${levelRoute}?article=${nextArticle.id}`}>
                        <span><Button variant="ghost" size="icon-lg" className="rounded-full hover:bg-[#f0f0f0]"><ArrowRight /></Button></span>
                      </Link>
                    </Tooltip>
                  ) : (
                    <Tooltip content="已经是最后一课">
                      <span><Button variant="ghost" size="icon-lg" disabled><ArrowRight /></Button></span>
                    </Tooltip>
                  )}
                </div>
              </div>
            </header>

            {/* Spotlight overlay — outside article to avoid re-render issues */}
            <AnimatePresence>
              {activePanelKey && (
                <motion.div
                  className="fixed inset-0 z-20 bg-black/35"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActivePanelKey("")}
                />
              )}
            </AnimatePresence>

            {/* audio focus overlay */}
            <AnimatePresence>
              {isNce4 && playing && audioActiveKey && (
                <motion.div
                  className="fixed inset-0 z-20 bg-black/[0.12] pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            <ContextMenu>
              <ContextMenuTrigger
              className="select-auto"
              render={
                <article
                  className="mx-auto w-full max-w-[680px] selection:bg-primary selection:text-primary-foreground"
                  onContextMenu={syncContextMenu}
                  onMouseUp={(e) => {
                    if (e.button !== 0) return; // only track left-click selections
                    syncSelection();
                  }}
                >
                  <div ref={articleBodyRef} className="flex flex-col gap-7">
                    {articleParagraphs.map((paragraph, index) => {
                      const sentences = articleSentences[index] ?? [];

                      return (
                      <React.Fragment key={paragraphStarts[index]}>
                      <div className="flex flex-col gap-2">
                        <div
                          ref={(element) => {
                            paragraphRefs.current[index] = element;
                          }}
                          className="text-lg leading-loose text-foreground [text-indent:2em] article-text"
                          style={{ fontFamily: '"Lyon Text", "IBM Plex Serif", "Georgia", "Times New Roman", serif' }}
                        >
                          {index === 0 && isIelts && (
                            <img
                              src={`/${article.id === 'ielts-1' ? 'stock-exchange-tokyo-japan' : 'the-padaung'}.jpg`}
                              alt=""
                              className="float-right ml-6 mb-4 mt-1 w-56 h-36 rounded-lg object-cover"
                            />
                          )}
                          {sentences.map((sentence, sIdx) => {
                            const key = `${article.id}-p${index}-s${sIdx}`;
                            const hasPanelNotes = (sentence.panelNotes?.length ?? 0) > 0;
                            const isActive = activePanelKey === key || audioActiveKey === key;
                            return (
                              <React.Fragment key={key}>
                                <span data-sentence-key={key} className={`sentence-inline ${isActive ? "relative z-[21] bg-white/90 rounded-md px-1.5 py-0.5 -mx-1.5" : ""}`}>
                                  {renderHighlightedText(sentence.text, sentenceOffsets[index]?.[sIdx] ?? 0, highlights, highlightsHidden, isRouteChange || highlightAnimateRef.current)}
                                  {hasPanelNotes && (
                                    <button
                                      type="button"
                                      onClick={() => togglePanel(key)}
                                      disabled={playing}
                                      className={`inline-flex size-5 items-center justify-center rounded transition-colors align-middle mx-0.5 ${playing ? "text-muted-foreground/25 cursor-not-allowed" : "text-muted-foreground/50 hover:bg-muted hover:text-foreground"}`}
                                    >
                                      <MoreHorizontal className="size-3.5" />
                                    </button>
                                  )}
                                  {" "}
                                </span>
                                <AnimatePresence>
                                  {activePanelKey === key && sentence.panelNotes && sentence.panelNotes.length > 0 && (
                                    <motion.div
                                      key={key}
                                      data-selection-offset-excluded="true"
                                      className="rounded-lg px-4 py-3 relative z-[21]"
                                      style={{ background: "#f2f7f2", minHeight: 200 }}
                                      initial={{ opacity: 0, y: -6 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -6 }}
                                      transition={SPRING_PANEL}
                                    >
                                      <div className="flex flex-col gap-2">
                                        {(sentence.panelNotes!).map((note, ni) => (
                                          <div key={ni} className="flex items-start gap-3">
                                            <span className="shrink-0 rounded px-2 py-0.5 text-sm font-semibold text-foreground/80"
                                              style={{ background: ["#ede8e3", "#e3e8ed", "#e8ede3", "#ede3e8", "#e8e3ed"][ni % 5] }}
                                            >
                                              {note.title}
                                            </span>
                                            <span className="text-sm text-muted-foreground leading-relaxed">{note.body}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </React.Fragment>
                            );
                          })}
                        </div>
                        {isIelts && articleParagraphTranslations[index] ? (
                          <p
                            data-selection-offset-excluded="true"
                            className="text-[0.95rem] leading-8 text-muted-foreground [text-indent:2em] font-normal article-text"
                          >
                            {articleParagraphTranslations[index]}
                          </p>
                        ) : null}
                      </div>
                      </React.Fragment>
                      );
                    })}
                    {!isIelts && article.notesOnText?.length ? (
                      <div className="article-notes">
                        <h2 className="section-title">课文注释</h2>
                        {article.notesOnText.map((note, i) => (
                          <div key={i} className="note-item">
                            <span className="note-index">{i + 1}.</span>
                            <span className="note-label">{note.title}</span>
                            <span className="note-body">{note.body}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    {!isIelts && articleParagraphTranslations.some(Boolean) && (
                      <div className="pt-6">
                        <h2 className="mb-4 text-lg font-semibold text-foreground">参考译文</h2>
                        {articleParagraphTranslations.filter(Boolean).map((trans, i) => (
                          <p
                            key={i}
                            className="text-[0.95rem] leading-8 text-muted-foreground [text-indent:2em] font-normal article-text"
                          >
                            {trans}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              }
            />
              <ContextMenuContent className="w-44">
                <ContextMenuItem disabled={!hasSelection} onClick={copySelection}>
                  <Copy />
                  Copy text
                  <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled={!hasSelection} onClick={highlightSelection}>
                  <Highlighter />
                  Highlight
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem onClick={openAiChat}>
                  <Bot />
                  Ask AI
                </ContextMenuItem>
                <ContextMenuItem
                  variant="destructive"
                  disabled={highlights.length === 0}
                  onClick={() => {
                    clearHighlights(article.id);
                    setLastAction("Cleared all highlights.");
                  }}
                >
                  <Trash2 />
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </section>

          <aside className="article-outline w-[270px] min-w-[270px] max-w-[270px] shrink-0 overflow-hidden flex flex-col gap-6 rounded-md px-4 pb-4 pt-[10px]">
            <div className="flex min-w-0 max-w-full gap-5 overflow-hidden text-sm font-medium border-b border-transparent pb-1 mt-4">
              <button
                type="button"
                onClick={() => setActiveSideTab("grammar")}
                className={
                  "cursor-pointer border-b-2 pb-1 transition-colors " +
                  (visibleActiveSideTab === "grammar"
                    ? "border-primary/50 text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground")
                }
              >
                语法摘要
              </button>
              <button
                type="button"
                onClick={() => setActiveSideTab("vocabulary")}
                className={
                  "cursor-pointer border-b-2 pb-1 transition-colors " +
                  (visibleActiveSideTab === "vocabulary"
                    ? "border-primary/50 text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground")
                }
              >
                词汇
              </button>
            </div>

            <div className="min-h-0 min-w-0 max-w-full overflow-hidden">
              {visibleActiveSideTab === "grammar" ? (
                <div
                  ref={grammarSummaryRef}
                  style={{ fontFamily: '"Lyon Text", "IBM Plex Serif", "Georgia", "Times New Roman", serif' }}
                  className="flex min-h-40 min-w-0 max-w-full flex-col overflow-hidden"
                >
                  {grammarSummaryGroups.length > 0 ? (
                    grammarSummaryGroups.map((group, groupIndex) => {
                      const metric = grammarSummaryBlockMetrics[group.paragraphIndex];
                      const previousGroup = grammarSummaryGroups[groupIndex - 1];
                      const previousMetric = previousGroup
                        ? grammarSummaryBlockMetrics[previousGroup.paragraphIndex]
                        : null;
                      const spacerHeight = metric
                        ? groupIndex === 0
                          ? metric.top
                          : Math.max(
                              0,
                              metric.top - ((previousMetric?.top ?? 0) + (previousMetric?.height ?? 0)),
                            )
                        : 0;
                      const isExpanded = group.notes.some((note) => note.key === visibleActiveGrammarMoreKey);

                      return (
                        <div
                          key={group.key}
                          className="box-border min-w-0 max-w-full overflow-hidden"
                          style={{
                            marginTop: spacerHeight,
                            minHeight: metric?.height,
                          }}
                        >
                          <div
                            className={
                              "relative box-border min-w-0 max-w-full overflow-hidden pl-[13px] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[3px] before:rounded-full before:bg-[var(--grammar-mark-color)] before:content-[''] " +
                              (isExpanded ? "bg-background" : "")
                            }
                            style={GRAMMAR_TONE_STYLES[group.tone]}
                          >
                            {group.notes.map((note) => {
                              const hasRelatedExamples = Boolean(note.relatedExamples?.length);
                              const isMoreActive = visibleActiveGrammarMoreKey === note.key;

                              return (
                                <Collapsible
                                  key={note.key}
                                  open={isMoreActive}
                                  onOpenChange={(open) => {
                                    if (hasRelatedExamples) {
                                      setActiveGrammarMoreKey(open ? note.key : "");
                                    }
                                  }}
                                  className="flex min-w-0 flex-col gap-1 border-b border-border/60 py-[7px] last:border-b-0"
                                >
                                  <span
                                    className="max-w-full overflow-hidden rounded-md bg-[var(--grammar-title-bg)] px-1.5 py-px text-[0.95rem] font-normal leading-[1.45] text-muted-foreground [display:-webkit-box] [overflow-wrap:anywhere] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
                                    title={note.title}
                                  >
                                    {note.title}
                                  </span>
                                  <p className="max-w-full whitespace-normal text-[0.82rem] leading-[1.65] text-muted-foreground [overflow-wrap:anywhere]">
                                    {note.body}
                                    {hasRelatedExamples ? (
                                      <CollapsibleTrigger asChild>
                                        <button
                                          type="button"
                                          className={
                                            "ml-1 inline-flex size-4 translate-y-0.5 cursor-pointer items-center justify-center rounded text-muted-foreground transition-colors hover:bg-accent hover:text-foreground " +
                                            (isMoreActive ? "bg-accent text-foreground" : "")
                                          }
                                          aria-label={isMoreActive ? "Hide related examples" : "Show related examples"}
                                        >
                                          <MoreHorizontal className="size-3.5" />
                                        </button>
                                      </CollapsibleTrigger>
                                    ) : null}
                                  </p>
                                  <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                                    <div className="mt-2 flex max-h-[520px] min-w-0 max-w-full flex-col gap-2 overflow-hidden rounded-md bg-muted/50 px-2.5 py-1">
                                      {note.relatedExamples?.map((example, exampleIndex) => (
                                        <div key={`${example.source}-${exampleIndex}`} className="flex min-w-0 max-w-full flex-col gap-1 overflow-hidden">
                                          <span className="inline-block max-w-full whitespace-normal rounded-sm bg-[var(--grammar-title-bg)] px-1.5 py-px text-xs font-normal text-foreground [overflow-wrap:anywhere]">
                                            {example.source}
                                          </span>
                                          <span className="whitespace-normal text-[0.78rem] leading-[1.55] text-foreground [overflow-wrap:anywhere]">
                                            {example.sentence}
                                          </span>
                                          <span className="whitespace-normal text-[0.76rem] leading-[1.55] text-muted-foreground [overflow-wrap:anywhere]">
                                            {example.note}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </CollapsibleContent>
                                </Collapsible>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-xs text-muted-foreground py-8 text-center">暂无语法摘要</p>
                  )}
                </div>
              ) : (
                <div className="min-w-0 max-w-full divide-y divide-border overflow-hidden">
                  {article.vocabulary.map((item, itemIndex) => (
                    <div key={`${item.word}-${item.pos}-${item.meaning}-${itemIndex}`} className="flex min-w-0 max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 overflow-hidden py-1">
                      <span className="max-w-full text-[0.95rem] text-foreground [overflow-wrap:anywhere]">{item.word}</span>
                      {item.phonetic && item.phonetic !== "//" ? (
                        <span className="max-w-full text-[0.75rem] text-muted-foreground/60 [overflow-wrap:anywhere]">{item.phonetic}</span>
                      ) : null}
                      <span className="max-w-full text-xs text-muted-foreground [overflow-wrap:anywhere]">{item.pos}</span>
                      <span className="max-w-full text-[0.82rem] leading-6 text-muted-foreground [overflow-wrap:anywhere]">
                        {item.meaning}
                      </span>
                    </div>
                  ))}
                </div>
              )} 
            </div>

            <section className="space-y-2 pt-4 text-sm text-muted-foreground">
              <p>{lastAction}</p>
              <p>
                {highlights.length} highlight{highlights.length === 1 ? "" : "s"}
              </p>
            </section>
          </aside>

        {isChatOpen ? (
          <form
            className="fixed flex h-11 w-[min(360px,calc(100vw-2rem))] items-center rounded-full bg-popover text-popover-foreground shadow-lg"
            style={{ left: chatPosition.x, top: chatPosition.y }}
            onSubmit={sendChatMessage}
          >
            <ShineBorder shineColor={["var(--tone-1-strong)", "var(--tone-3-strong)", "var(--tone-4-strong)"]} borderWidth={2} />
            <div className="relative flex h-full w-full items-center gap-1.5 rounded-full bg-popover px-2.5">
            <Bot className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <div className="relative h-full min-w-0 flex-1">
              {!chatInput ? (
                <ThinkingIndicator
                  showIcon={false}
                  role="presentation"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 justify-center gap-1 px-0 py-0 text-muted-foreground [&>span]:text-sm"
                />
              ) : null}
              <input
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                className="h-full w-full bg-transparent text-sm outline-none"
                aria-label={chatContext ? "Ask AI about selection" : "Ask AI"}
              />
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-6 rounded-full"
              onClick={() => setIsChatOpen(false)}
              aria-label="Close AI input"
            >
              <X className="size-3.5" />
            </Button>
            <Button type="submit" size="icon" className="size-6 rounded-full p-0" aria-label="Send AI prompt">
              <Send className="size-3.5 -translate-x-px translate-y-px" />
            </Button>
            </div>
          </form>
        ) : null}
      </div>
  );
}
