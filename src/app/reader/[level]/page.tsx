"use client";

import { use, useEffect, useState } from "react";
import { ReaderPage } from "@/app/_components/reader-page";
import { allArticles } from "@/app/mock";
import type { Article } from "@/app/mock";

const LEVEL_PREFIXES: Record<string, string> = {
  nce2: "nce2",
  nce3: "nce3",
  nce4: "nce4",
  ielts: "ielts",
};

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ level: string }>;
  searchParams: Promise<{ article?: string | string[] }>;
}) {
  const { level } = use(params);
  const prefix = LEVEL_PREFIXES[level] || "nce4";
  const [article, setArticle] = useState<Article | null>(null);
  const [sp, setSp] = useState<{ article?: string | string[] }>({});

  useEffect(() => {
    searchParams.then(setSp);
  }, [searchParams]);

  useEffect(() => {
    if (!sp.article) return;
    const key = Array.isArray(sp.article) ? sp.article[0] : sp.article;
    const found = allArticles[key] || Object.values(allArticles).find((a) => a.id === key);
    setArticle(found || null);
  }, [sp.article]);

  if (!article) {
    return (
      <div className="flex items-center justify-center h-96 text-muted-foreground">
        Loading...
      </div>
    );
  }

  return <ReaderPage article={article} />;
}
