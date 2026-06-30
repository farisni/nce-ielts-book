import { notFound } from "next/navigation";
import { getNgArticle } from "@/lib/parse-ng";
import { readFileSync } from "fs";
import path from "path";

function NgIcon() {
  const svg = readFileSync(
    path.join(process.cwd(), "asset/national-geographic-logo.svg"),
    "utf8",
  );
  return (
    <span
      className="inline-flex shrink-0 h-12 w-auto [&_svg]:h-full [&_svg]:w-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export default async function NgArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNgArticle(slug);

  if (!article) notFound();

  const maxLen = Math.max(
    article.articleParagraphs.length,
    article.translationParagraphs.length,
  );

  return (
    <section className="min-w-0 flex-1 pl-16 pr-[40px] py-12">
      <div className="mx-auto flex w-[960px] min-w-[960px] flex-none gap-6">
        {/* Article — 70% */}
        <section className="w-[655px] min-w-[655px] max-w-[655px] shrink-0 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-start gap-6 pb-4">
            <span className="mt-1"><NgIcon /></span>
            <div className="flex flex-col pt-0.5">
              {/* English title — Inter / SF Pro Display */}
              <h1
                className="text-3xl font-semibold tracking-normal text-foreground"
                style={{ fontFamily: '"Inter", "SF Pro Display", system-ui, -apple-system, sans-serif' }}
              >
                {article.subtitle}
              </h1>
              {/* Chinese subtitle */}
              <p
                className="mt-1.5 text-base tracking-wide text-muted-foreground/80"
                style={{ fontFamily: '"PingFang SC", "Source Han Sans SC", "Noto Sans SC", sans-serif' }}
              >
                {article.title}
              </p>
              <p className="mt-1 text-xs tracking-widest uppercase text-muted-foreground/50">
                {article.author}
              </p>
            </div>
          </div>

          {/* Article body */}
          <div className="flex flex-col gap-8">
            {Array.from({ length: maxLen }).map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                {/* English body */}
                <p
                  className="text-lg leading-loose text-foreground"
                  style={{ fontFamily: '"Lyon Text", "IBM Plex Serif", "Georgia", "Times New Roman", serif' }}
                >
                  {article.articleParagraphs[i]}
                </p>
                {/* Chinese translation */}
                {article.translationParagraphs[i] && (
                  <p className="border-l-2 border-border/40 pl-4 text-[0.9rem] leading-loose text-muted-foreground/80">
                    {article.translationParagraphs[i]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Translation placeholder */}
        <aside className="w-[281px] min-w-[281px] max-w-[281px] shrink-0 rounded-xl border-2 border-dashed border-border mt-24 px-4 pb-4 self-start h-[500px]" />
      </div>
    </section>
  );
}
