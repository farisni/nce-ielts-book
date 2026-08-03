"use client";

import Link from "next/link";
import { ieltsList, nce3List, nce4List, type ArticleListItem } from "@/app/mock";

type ArticleGroup = {
  id: string;
  label: string;
  description: string;
  route: string;
  articles: ArticleListItem[];
};

const articleGroups: ArticleGroup[] = [
  {
    id: "nce3",
    label: "NCE3",
    description: "新概念英语第三册 · 经典课文与进阶表达",
    route: "/v2/nce3",
    articles: nce3List,
  },
  {
    id: "nce4",
    label: "NCE4",
    description: "新概念英语第四册 · 高阶阅读与写作素材",
    route: "/v2/nce4",
    articles: nce4List,
  },
  {
    id: "ielts",
    label: "IELTS",
    description: "雅思阅读 · 真题文章与学术词汇",
    route: "/v2/ielts",
    articles: ieltsList,
  },
];

function ArticleTitleLink({ article, route }: { article: ArticleListItem; route: string }) {
  return (
    <Link
      href={`${route}?article=${article.id}`}
      className="relative z-0 inline-flex max-w-full isolate before:pointer-events-none before:absolute before:inset-x-[-0.55rem] before:inset-y-[-0.2rem] before:-z-10 before:rounded-md before:bg-slate-100 before:opacity-0 before:scale-[0.85] before:transition-[opacity,transform] before:duration-150 before:ease-out hover:before:scale-100 hover:before:opacity-100 focus-visible:outline-none focus-visible:before:scale-100 focus-visible:before:opacity-100 dark:before:bg-slate-800"
    >
      <span className="min-w-0 font-medium leading-[1.45] tracking-wide text-foreground/85 transition-colors hover:text-[#337ea9] dark:hover:text-[#9cd8fc]">
        {article.title}
        {article.titleCn && (
          <span className="ms-2 font-normal text-muted-foreground">
            {article.titleCn}
          </span>
        )}
      </span>
    </Link>
  );
}

function ArticleRow({ article, route }: { article: ArticleListItem; route: string }) {
  return (
    <li className="grid gap-1 sm:grid-cols-[5rem_minmax(0,1fr)]">
      <span className="pt-0.5 text-xs font-medium tracking-wide text-muted-foreground/75 tabular-nums">
        Lesson {String(article.lesson).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <ArticleTitleLink article={article} route={route} />
      </div>
    </li>
  );
}

function ArticleGroupSection({ group }: { group: ArticleGroup }) {
  return (
    <section className="mt-10" aria-labelledby={`${group.id}-heading`}>
      <header className="mb-3 flex items-baseline gap-3">
        <h2 id={`${group.id}-heading`} className="text-xl font-semibold tracking-wide text-[#337ea9] dark:text-[#9cd8fc]">
          <Link href={group.route} className="hover:underline underline-offset-4">
            {group.label}
          </Link>
        </h2>
        <span className="text-xs tracking-wide text-muted-foreground/70">
          {group.articles.length} articles
        </span>
      </header>
      <p className="mb-4 text-sm leading-7 tracking-wide text-muted-foreground">
        {group.description}
      </p>
      <ul className="space-y-3" role="list">
        {group.articles.slice(0, 5).map((article) => (
          <ArticleRow key={article.id} article={article} route={group.route} />
        ))}
        <li className="pt-2">
          <Link
            href={group.route}
            className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
          >
            查看全部 {group.articles.length} 篇文章 →
          </Link>
        </li>
      </ul>
    </section>
  );
}

export function HomeClient() {
  return (
    <div className="mx-auto w-full max-w-[43.25rem] pb-16">
      <section>
        <h1 className="mb-6 text-xl font-semibold tracking-wide text-foreground">
          NCE IELTS
        </h1>
        <p className="mb-6 max-w-2xl leading-7 tracking-wide text-muted-foreground">
          新概念英语与雅思阅读文章索引。选择一篇课文，开始阅读、听力、词汇和语法学习。
        </p>
      </section>

      {articleGroups.map((group) => (
        <ArticleGroupSection key={group.id} group={group} />
      ))}
    </div>
  );
}
