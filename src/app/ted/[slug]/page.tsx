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
  const hasTranslation = article.translationParagraphs.length > 0;

  return (
    <section className="min-w-0 flex-1 pl-16 pr-[40px] py-12">
      <div className="mx-auto flex w-[960px] min-w-[960px] flex-none gap-6">
        {/* Article — 70% */}
        <section className="w-[655px] min-w-[655px] max-w-[655px] shrink-0 flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-start gap-3 pb-2">
            <span className="mt-2"><TedIcon /></span>
            <div className="flex flex-col gap-0.5 pt-0.5">
              <h1 className="text-2xl font-semibold tracking-normal">
                {article.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {article.subtitle}
              </p>
              <p className="text-sm text-muted-foreground/60">
                {article.author}
              </p>
            </div>
          </div>

          {/* Article + Translation interleaved */}
          <div className="flex flex-col gap-5">
            {Array.from({ length: maxLen }).map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className="text-base leading-relaxed text-foreground">
                  {article.articleParagraphs[i]}
                </p>
                {article.translationParagraphs[i] && (
                  <p className="text-[0.9rem] leading-relaxed text-muted-foreground">
                    {article.translationParagraphs[i]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Translation placeholder */}
        <aside className="w-[281px] min-w-[281px] max-w-[281px] shrink-0 rounded-xl border-2 border-dashed border-border mt-24 px-4 pb-4 self-start h-[500px]">
        </aside>
      </div>
    </section>
  );
}
