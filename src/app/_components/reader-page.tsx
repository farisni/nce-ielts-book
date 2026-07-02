"use client";

import React from "react";
import { ArticleReader } from "./reader/article-reader";
import type { Article } from "@/app/mock";

type Props = {
  article: Article;
};

export function ReaderPage({ article }: Props) {
  return (
    <div className="-mx-6 -mb-6 h-full">
      <ArticleReader article={article} />
    </div>
  );
}
