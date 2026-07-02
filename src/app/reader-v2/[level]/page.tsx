"use client";

import { use, useEffect, useState } from "react";
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
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        选择一篇文章…
      </div>
    );
  }

  const sentences = article.original.paragraphs.flatMap((p, pi) =>
    p.map((s, si) => ({ ...s, blockId: `${pi}-${si}` }))
  );

  return (
    <div className="h-full overflow-y-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-1">{article.title}</h1>

      {article.original.paragraphs.map((p, pi) => (
        <div key={pi} className="mb-6">
          {p.map((s, si) => (
            <p
              key={`${pi}-${si}`}
              data-block-id={`${pi}-${si}`}
              className="text-base leading-relaxed mb-2"
            >
              {s.text}
            </p>
          ))}
        </div>
      ))}

      <hr className="my-8 border-border" />

      <h2 className="text-lg font-semibold mb-4">参考译文</h2>
      {article.original.paragraphs.map((p, pi) => (
        <div key={pi} className="mb-4">
          {p.map((s, si) => (
            <p key={`${pi}-${si}`} className="text-sm text-muted-foreground leading-relaxed mb-1">
              {s.translation}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
