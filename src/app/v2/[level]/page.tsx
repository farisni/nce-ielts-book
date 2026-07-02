"use client";

import { ArticlePage } from "@/app/_components/article-page";
import { use } from "react";

const LEVEL_MAP: Record<string, string> = {
  nce2: "NCE2",
  nce3: "NCE3",
  nce4: "NCE4",
  ielts: "IELTS16",
};

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ level: string }>;
  searchParams: Promise<{ article?: string | string[] }>;
}) {
  const { level } = use(params);
  return <ArticlePage defaultLevel={LEVEL_MAP[level] || "NCE4"} searchParams={searchParams} />;
}
