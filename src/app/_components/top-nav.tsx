"use client";

import { useMemo, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, StarIcon, PlayIcon, BookOpenIcon, FileTextIcon, TableIcon, BracesIcon, PaletteIcon, CommandIcon, LanguagesIcon } from "lucide-react";
import { ThemeToggle } from "@/components/motion/theme-toggle";
import { MagneticButton } from "@/components/motion/button/magnetic";
import { allArticles } from "@/app/mock";
import { keywordCategories } from "@/app/mock/ielts-538-vocabulary";
import { vocabChapters } from "@/app/mock/ielts-vocabulary";
import {
  CommandDialog,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NCE_NAV_GROUPS = [
  {
    label: "NCE2",
    items: [
      { label: "文章", description: "New Concept English 2", href: "/nec/nce2" },
      { label: "单词", description: "NCE2 vocabulary table", href: "/words/nce/nce2" },
    ],
  },
  {
    label: "NCE3",
    items: [
      { label: "文章", description: "New Concept English 3", href: "/nec/nce3" },
      { label: "单词", description: "NCE3 vocabulary table", href: "/words/nce/nce3" },
    ],
  },
  {
    label: "NCE4",
    items: [
      { label: "文章", description: "New Concept English 4", href: "/nec/nce4" },
      { label: "单词", description: "NCE4 vocabulary table", href: "/words/nce/nce4" },
    ],
  },
];

const IELTS_NAV_ITEMS = [
  { label: "IELTS 16 文章", description: "IELTS article reader", href: "/ielts" },
  { label: "雅思词汇真经", description: "IELTS vocabulary chapters", href: "/words/ielts-all" },
  { label: "538 考点词", description: "IELTS keyword vocabulary", href: "/words/ielts-538" },
];

type WordSearchItem = {
  id: string;
  word: string;
  pos: string;
  meaning: string;
  source: string;
  href: string;
  keywords: string;
};

type PageSearchItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  group: "Navigate" | "Demo";
  icon: ReactNode;
  keywords: string;
};

type ArticleSearchItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  keywords: string;
};

const ARTICLE_LEVEL_ROUTES: Record<string, string> = {
  IELTS16: "/ielts",
  NCE2: "/nec/nce2",
  NCE3: "/nec/nce3",
  NCE4: "/nec/nce4",
};

function toKeywords(value: string) {
  return value.toLowerCase();
}

function matchesKeywords(keywords: string, query: string) {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

  if (tokens.length === 0) {
    return false;
  }

  return tokens.every((token) => keywords.includes(token));
}

const pageSearchItems: PageSearchItem[] = [
  {
    id: "home",
    label: "首页",
    description: "Home / root atlas",
    href: "/",
    group: "Navigate",
    icon: <StarIcon className="text-muted-foreground" />,
    keywords: toKeywords("首页 home root atlas 词根 主页"),
  },
  {
    id: "ielts",
    label: "IELTS 文章",
    description: "IELTS 16 article reader",
    href: "/ielts",
    group: "Navigate",
    icon: <BookOpenIcon className="text-muted-foreground" />,
    keywords: toKeywords("ielts 雅思 文章 article reader 阅读"),
  },
  {
    id: "ted-demo",
    label: "TED · 学一门外语的秘密",
    description: "TED talk article reader",
    href: "/ted/ted-demo",
    group: "Demo",
    icon: <PlayIcon className="text-muted-foreground" />,
    keywords: toKeywords("ted 演讲 language 语言 学习 外语 lidia"),
  },

  {
    id: "demo-table",
    label: "Demo · Table",
    description: "Vocabulary table and virtual rows",
    href: "/demo/table",
    group: "Demo",
    icon: <TableIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo table 表格 vocabulary virtual rows 词汇"),
  },
  {
    id: "demo-select",
    label: "Demo · Select",
    description: "Select interaction demo",
    href: "/demo/select",
    group: "Demo",
    icon: <BracesIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo select 选择器 下拉 dropdown"),
  },
  {
    id: "demo-grammar",
    label: "Grammar 语法解析",
    description: "Grammar markdown rendering demo",
    href: "/demo/grammar",
    group: "Demo",
    icon: <PaletteIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo grammar 语法 解析 markdown mdx"),
  },
  {
    id: "demo-markdown",
    label: "Markdown 演示",
    description: "Markdown components demo",
    href: "/demo/markdown",
    group: "Demo",
    icon: <FileTextIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo markdown mdx 文档 演示"),
  },
  {
    id: "demo-nce4-l48",
    label: "NCE4 L48 · 课文",
    description: "NCE4 lesson markdown demo",
    href: "/demo/nce4-l48",
    group: "Demo",
    icon: <BookOpenIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo nce4 l48 lesson 课文 markdown"),
  },
  {
    id: "demo-button",
    label: "Demo · Button",
    description: "Button component demo",
    href: "/demo/button",
    group: "Demo",
    icon: <CommandIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo button 按钮 component"),
  },
  {
    id: "demo-syntax",
    label: "Demo · Syntax",
    description: "Dependency syntax demo",
    href: "/demo/syntax",
    group: "Demo",
    icon: <CommandIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo syntax 依存关系 dependency 句法"),
  },
  {
    id: "demo-macos-sidebar",
    label: "Demo · MacOS Sidebar",
    description: "Animated sidebar demo",
    href: "/demo/macos-sidebar",
    group: "Demo",
    icon: <CommandIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo macos sidebar 侧边栏 animation motion"),
  },
  {
    id: "demo-scroll-table",
    label: "Demo · Scroll Table",
    description: "ScrollArea with bidirectional overflow",
    href: "/demo/scroll-table",
    group: "Demo",
    icon: <TableIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo scroll table 滚动 表格 bidirectional overflow"),
  },
  {
    id: "demo-sidebar-resizable",
    label: "Demo · Sidebar Resizable",
    description: "Resizable panel sidebar",
    href: "/demo/sidebar-resizable",
    group: "Demo",
    icon: <CommandIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo sidebar resizable panel draggable"),
  },
  {
    id: "demo-elevated",
    label: "Demo · Elevated",
    description: "Surface elevation and shadow system",
    href: "/demo/elevated",
    group: "Demo",
    icon: <BracesIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo elevated surface shadow 分层 阴影"),
  },
  {
    id: "demo-elevated-role",
    label: "Demo · Elevated Role",
    description: "Dialog role select with correct elevation",
    href: "/demo/elevated-role",
    group: "Demo",
    icon: <BracesIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo elevated role dialog shadow surface select"),
  },
  {
    id: "demo-scroll-reveal",
    label: "Demo · Scroll Reveal",
    description: "Scroll-triggered reveal animation",
    href: "/demo/scroll-reveal",
    group: "Demo",
    icon: <CommandIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo scroll reveal animation motion framer"),
  },
  {
    id: "demo-sticky-scroll",
    label: "Demo · Sticky Scroll",
    description: "Sticky scroll reveal with cards",
    href: "/demo/sticky-scroll",
    group: "Demo",
    icon: <CommandIcon className="text-muted-foreground" />,
    keywords: toKeywords("demo sticky scroll reveal animation aceternity"),
  },
];

const articleSearchItems: ArticleSearchItem[] = Object.values(allArticles).map((article) => {
  const levelRoute = ARTICLE_LEVEL_ROUTES[article.level] ?? "/ielts";
  const paragraphKeywords = article.original.paragraphs
    .flatMap((paragraph) =>
      paragraph.map((sentence) =>
        `${sentence.text} ${sentence.translation ?? ""} ${(sentence.structureNotes ?? [])
          .map((note) => `${note.title} ${note.body}`)
          .join(" ")}`,
      ),
    )
    .join(" ");
  const vocabularyKeywords = article.vocabulary
    .map((item) => `${item.word} ${item.pos} ${item.meaning} ${item.phonetic ?? ""}`)
    .join(" ");

  return {
    id: article.id,
    title: article.title,
    description: `${article.level} L${article.lesson}${article.titleCn ? ` · ${article.titleCn}` : ""}`,
    href: `${levelRoute}?article=${article.id}`,
    keywords: toKeywords(
      `${article.id} ${article.level} lesson ${article.lesson} l${article.lesson} ${article.title} ${article.titleCn ?? ""} ${paragraphKeywords} ${vocabularyKeywords}`,
    ),
  };
});

const wordSearchItems: WordSearchItem[] = [
  ...vocabChapters.flatMap((chapter, chapterIndex) =>
    chapter.groups.flatMap((group) =>
      group.map((item) => ({
        id: `ielts-all-${chapterIndex}-${item.id}`,
        word: item.word,
        pos: item.partOfSpeech,
        meaning: item.chinese,
        source: `雅思词汇真经 · ${chapter.title}`,
        href: "/words/ielts-all",
        keywords: `${item.word} ${item.partOfSpeech} ${item.chinese} ${item.example} ${chapter.title}`.toLowerCase(),
      })),
    ),
  ),
  ...keywordCategories.flatMap((category, categoryIndex) =>
    category.words.map((item, wordIndex) => ({
      id: `ielts-538-${categoryIndex}-${wordIndex}`,
      word: item.word,
      pos: item.pos,
      meaning: item.meaning,
      source: `538 考点词 · ${category.title}`,
      href: "/words/ielts-538",
      keywords: `${item.word} ${item.pos} ${item.meaning} ${item.synonyms} ${item.notes} ${category.title}`.toLowerCase(),
    })),
  ),
  ...Object.values(allArticles).flatMap((article) =>
    article.vocabulary.map((item, wordIndex) => {
      const levelRoute = ARTICLE_LEVEL_ROUTES[article.level] ?? "/ielts";

      return {
        id: `article-${article.id}-${wordIndex}`,
        word: item.word,
        pos: item.pos,
        meaning: item.meaning,
        source: `${article.level} L${article.lesson} · ${article.title}`,
        href: `${levelRoute}?article=${article.id}`,
        keywords: `${item.word} ${item.pos} ${item.meaning} ${item.phonetic ?? ""} ${article.level} ${article.title} ${article.titleCn ?? ""}`.toLowerCase(),
      };
    }),
  ),
];

export default function TopNav() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const shadowOpacity = useTransform(scrollY, [0, 40], [0, 0.05]);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const trimmedSearchQuery = searchQuery.trim();
  const hasSearchQuery = trimmedSearchQuery.length > 0;
  const pageResults = useMemo(() => {
    if (!hasSearchQuery) {
      return [];
    }

    return pageSearchItems
      .filter((item) => matchesKeywords(item.keywords, trimmedSearchQuery))
      .slice(0, 8);
  }, [hasSearchQuery, trimmedSearchQuery]);
  const articleResults = useMemo(() => {
    if (!hasSearchQuery) {
      return [];
    }

    return articleSearchItems
      .filter((item) => matchesKeywords(item.keywords, trimmedSearchQuery))
      .slice(0, 8);
  }, [hasSearchQuery, trimmedSearchQuery]);
  const wordResults = useMemo(() => {
    const query = trimmedSearchQuery.toLowerCase();

    if (query.length < 2) {
      return [];
    }

    return wordSearchItems
      .filter((item) => item.keywords.includes(query))
      .slice(0, 12);
  }, [trimmedSearchQuery]);
  const hasSearchResults = pageResults.length > 0 || articleResults.length > 0 || wordResults.length > 0;
  const navigateItems = pageSearchItems.filter((item) => item.group === "Navigate");
  const demoItems = pageSearchItems.filter((item) => item.group === "Demo");

  const navigateTo = (href: string) => {
    setCmdOpen(false);
    setSearchQuery("");
    router.push(href);
  };

  const boxShadow = useTransform(
    shadowOpacity,
    (v) => `0 1px 10px rgba(0,0,0,${v})`
  );

  return (
    <motion.header
      style={{ boxShadow }}
      className="sticky top-0 z-50 h-14 border-b border-border bg-background"
    >
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex items-center gap-6 pl-3">
          <NavigationMenu style={{ fontFamily: '"PingFang SC", "Source Han Sans SC", "Noto Sans SC", sans-serif' }}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="/" />}
                  className={navigationMenuTriggerStyle({ className: "py-0 leading-none font-semibold text-sm" })}
                >
                  首页
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>NCE</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[420px] grid-cols-3 gap-2">
                    {NCE_NAV_GROUPS.map((group) => (
                      <div key={group.label} className="flex flex-col gap-1">
                        <div className="px-3 py-1 text-xs font-medium text-muted-foreground">
                          {group.label}
                        </div>
                        <ul className="flex list-none flex-col gap-1 p-0">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <NavigationMenuLink render={<Link href={item.href} />}>
                                <div className="flex flex-col gap-1 px-1">
                                  <div className="font-medium text-foreground">{item.label}</div>
                                  <div className="line-clamp-2 text-sm text-muted-foreground">
                                    {item.description}
                                  </div>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>IELTS</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-72 list-none grid-cols-1 gap-1 p-0">
                    {IELTS_NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink render={<Link href={item.href} />}>
                          <div className="flex flex-col gap-1 px-1">
                            <div className="font-medium text-foreground">{item.label}</div>
                            <div className="line-clamp-2 text-sm text-muted-foreground">
                              {item.description}
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Demo</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-72 list-none grid-cols-1 gap-1 p-0">
                    {pageSearchItems.filter((item) => item.group === "Demo").map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink render={<Link href={item.href} />}>
                          <div className="flex flex-col gap-1 px-1">
                            <div className="font-medium text-foreground">{item.label}</div>
                            <div className="line-clamp-2 text-sm text-muted-foreground">
                              {item.description}
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* 右侧——搜索 + 深浅色切换 */}
        <div className="flex items-center gap-3 rounded-md py-1">
          <MagneticButton
            variant="secondary"
            size="sm"
            strength={0.15}
            onClick={() => setCmdOpen(true)}
            className="gap-2 bg-[#eeeeee] dark:bg-zinc-800 h-9 px-4"
          >
            <Search className="size-3.5" />
            <span>Search...</span>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <CommandIcon className="size-2.5" />K
            </kbd>
          </MagneticButton>

          <div className="flex items-center justify-center rounded-md px-2.5 py-1.5">
            <ThemeToggle
              variant="rectangle"
              start="bottom-up"
              className="size-[18px]"
              iconClassName="size-[18px]"
            />
          </div>
        </div>
      </div>

      <CommandDialog open={cmdOpen} onOpenChange={(open) => { setCmdOpen(open); if (!open) setSearchQuery(""); }}>
        <Command shouldFilter={false} className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput
            value={searchQuery}
            onValueChange={setSearchQuery}
            placeholder="Search pages or words..."
          />
          <CommandList className="max-h-[420px]">
            {hasSearchQuery && !hasSearchResults ? <CommandEmpty>No results found.</CommandEmpty> : null}
            {pageResults.length > 0 && (
              <>
                <CommandGroup heading="Pages">
                  {pageResults.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={item.label}
                      onSelect={() => navigateTo(item.href)}
                      className="items-start py-2"
                    >
                      {item.icon}
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <span className="truncate font-medium text-foreground">{item.label}</span>
                        <span className="line-clamp-1 text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </>
            )}
            {articleResults.length > 0 && (
              <>
                <CommandGroup heading="Articles">
                  {articleResults.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={item.title}
                      onSelect={() => navigateTo(item.href)}
                      className="items-start py-2"
                    >
                      <BookOpenIcon className="mt-0.5 text-muted-foreground" />
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <span className="truncate font-medium text-foreground">{item.title}</span>
                        <span className="line-clamp-1 text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </>
            )}
            {wordResults.length > 0 && (
              <>
                <CommandGroup heading="Words">
                  {wordResults.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={`${item.word}-${item.source}`}
                      onSelect={() => navigateTo(item.href)}
                      className="items-start py-2"
                    >
                      <LanguagesIcon className="mt-0.5 text-muted-foreground" />
                      <div className="flex min-w-0 flex-1 flex-col gap-1">
                        <div className="flex min-w-0 items-baseline gap-2">
                          <span className="truncate font-medium text-foreground">{item.word}</span>
                          {item.pos ? <span className="shrink-0 text-xs text-muted-foreground">{item.pos}</span> : null}
                        </div>
                        <div className="line-clamp-1 text-xs text-muted-foreground">{item.meaning}</div>
                        <div className="truncate text-[11px] text-muted-foreground/70">{item.source}</div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </>
            )}
            {!hasSearchQuery && (
              <>
                <CommandGroup heading="Navigate">
                  {navigateItems.map((item) => (
                    <CommandItem key={item.id} onSelect={() => navigateTo(item.href)}>
                      {item.icon}
                      <span>{item.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Demo">
                  {demoItems.map((item) => (
                    <CommandItem key={item.id} onSelect={() => navigateTo(item.href)}>
                      {item.icon}
                      <span>{item.label}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </motion.header>
  );
}
