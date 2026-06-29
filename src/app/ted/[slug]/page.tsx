import { notFound } from "next/navigation";
import { getTedArticle } from "@/lib/parse-ted";
import { readFileSync } from "fs";
import path from "path";

function TedIcon() {
  const svg = readFileSync(
    path.join(process.cwd(), "asset/ted.svg"),
    "utf8",
  );
  return (
    <span
      className="inline-flex shrink-0 h-10 w-auto [&_svg]:h-full [&_svg]:w-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default async function TedArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getTedArticle(slug);

  if (!article) notFound();

  const maxLen = Math.max(
    article.articleParagraphs.length,
    article.translationParagraphs.length,
  );

  return (
    <section className="min-w-0 flex-1 pl-16 pr-[40px] py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
        {/* Header */}
        <div className="flex items-start gap-3 pb-2">
          <span className="mt-2"><TedIcon /></span>
          <div className="flex flex-col gap-0.5 pt-0.5">
            <h1 className="text-3xl font-semibold tracking-normal">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {article.subtitle}
            </p>
            <p className="text-sm text-muted-foreground/70">
              {article.author}
            </p>
          </div>
        </div>

        {/* Paragraphs side by side */}
        <div className="flex flex-col gap-6">
          {Array.from({ length: maxLen }).map((_, i) => (
            <div key={i} className="grid grid-cols-2 gap-8">
              <p className="text-[1.05rem] leading-[1.9] text-foreground">
                {article.articleParagraphs[i]}
              </p>
              <p className="text-[0.95rem] leading-[1.9] text-muted-foreground">
                {article.translationParagraphs[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
