"use client";

import { ArticlePage } from "@/app/_components/article-page";

interface IeltsContentProps {
  searchParams?: Promise<{ article?: string | string[] }>;
}

export default function IeltsContent({ searchParams }: IeltsContentProps) {
  const sp = searchParams ?? Promise.resolve({});
  return <ArticlePage defaultLevel="IELTS16" searchParams={sp} />;
}
