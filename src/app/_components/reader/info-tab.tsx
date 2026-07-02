"use client";

import type { Article } from "@/app/mock";

type Props = { article: Article };

export function InfoTab({ article }: Props) {
  const wordCount = article.original.paragraphs.reduce(
    (sum, p) =>
      sum + p.reduce((s, sent) => s + sent.text.split(/\s+/).length, 0),
    0
  );

  return (
    <div className="space-y-4 p-4">
      <div>
        <h2 className="text-lg font-semibold">{article.title}</h2>
        {article.titleCn && (
          <p className="text-sm text-muted-foreground mt-0.5">
            {article.titleCn}
          </p>
        )}
      </div>

      <div className="space-y-2 text-sm">
        {article.attribution && (
          <div className="flex justify-between">
            <span className="text-muted-foreground">出处</span>
            <span>{article.attribution}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-muted-foreground">级别</span>
          <span>{article.level}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">课号</span>
          <span>Lesson {article.lesson}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">字数</span>
          <span>{wordCount.toLocaleString()}</span>
        </div>
        {article.tag && (
          <div className="flex justify-between">
            <span className="text-muted-foreground">标签</span>
            <span>{article.tag}</span>
          </div>
        )}
      </div>
    </div>
  );
}
