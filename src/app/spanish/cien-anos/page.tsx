"use client"

import { cn } from "@/lib/utils";

/** 《百年孤独》开篇 · Cien años de soledad — 加西亚·马尔克斯（Gabriel García Márquez） */

const ES_PARAGRAPH =
  "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo.";

const ZH_PARAGRAPH =
  "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。那时的马孔多是一个二十户人家的村落，泥巴和芦苇盖成的屋子沿河岸排开，湍急的河水清澈见底，河床里卵石洁白光滑宛如史前巨蛋。世界新生伊始，许多事物还没有名字，提到的时候尚需用手指指点点。";

/** 逐句对照：西语原句 + 范晔中译 */
const SENTENCES: { es: string; zh: string }[] = [
  {
    es: "Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.",
    zh: "多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。",
  },
  {
    es: "Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos.",
    zh: "那时的马孔多是一个二十户人家的村落，泥巴和芦苇盖成的屋子沿河岸排开，湍急的河水清澈见底，河床里卵石洁白光滑宛如史前巨蛋。",
  },
  {
    es: "El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo.",
    zh: "世界新生伊始，许多事物还没有名字，提到的时候尚需用手指指点点。",
  },
];

/** 关键词汇（供学习参考） */
const VOCAB: { es: string; zh: string }[] = [
  { es: "el pelotón de fusilamiento", zh: "行刑队" },
  { es: "recordar", zh: "回想起，记起" },
  { es: "el hielo", zh: "冰" },
  { es: "la aldea", zh: "村落，小村庄" },
  { es: "el barro", zh: "泥巴，黏土" },
  { es: "la cañabrava", zh: "芦苇（大叶芦竹）" },
  { es: "a la orilla de", zh: "在……岸边" },
  { es: "aguas diáfanas", zh: "清澈见底的水" },
  { es: "el lecho", zh: "河床；床" },
  { es: "piedras pulidas", zh: "光滑的卵石" },
  { es: "huevos prehistóricos", zh: "史前巨蛋" },
  { es: "carecer de nombre", zh: "没有名字" },
  { es: "señalar con el dedo", zh: "用手指指点点" },
];

export default function SpanishCienAnosPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 pb-20 pt-8">
      {/* 页头 */}
      <header className="mb-8 text-center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Spanish · Literatura · García Márquez
        </p>
        <h1 className="mb-2 text-2xl font-semibold tracking-wide text-foreground">
          《百年孤独》开篇 · Cien años de soledad
        </h1>
        <p className="mx-auto max-w-lg text-sm leading-7 text-muted-foreground">
          加西亚·马尔克斯（Gabriel García Márquez）· 1967。全文第一段，西语原版开篇被誉为当代西班牙语文学最著名的段落之一。
        </p>
      </header>

      {/* 西语原文 */}
      <section className="mb-8">
        <h2 className="mb-3 text-sm font-medium text-foreground">
          西语原文 <span className="ml-1 font-normal text-muted-foreground">El texto original</span>
        </h2>
        <div className="px-7 py-7">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Cien años de soledad</p>
          <p className="text-xl leading-[2.05] text-foreground [font-family:'Lyon_Text',Georgia,'LXGW_Wenkai_Screen',serif]">
            {ES_PARAGRAPH}
          </p>
        </div>
      </section>

      {/* 中文译文 */}
      <section className="mb-8">
        <h2 className="mb-3 text-sm font-medium text-foreground">
          中文译文 <span className="ml-1 font-normal text-muted-foreground">Traducción china · 范晔 译</span>
        </h2>
        <div className="px-7 py-6">
          <p className="text-base leading-[2.1] text-foreground/90">{ZH_PARAGRAPH}</p>
        </div>
      </section>

      {/* 逐句对照 */}
      <section className="mb-8">
        <h2 className="mb-1 text-sm font-medium text-foreground">
          逐句对照 <span className="ml-1 font-normal text-muted-foreground">Frase por frase</span>
        </h2>
        <p className="mb-3 text-xs leading-6 text-muted-foreground">
          原文三句，逐句与中译对照，便于拆解理解。
        </p>
        <div>
          {SENTENCES.map((s, i) => (
            <div key={i} className={cn("grid gap-2 px-6 py-5", i > 0 && "border-t border-border")}>
              <p className="flex-1 text-lg leading-[1.9] text-blue-600">
                <span className="mr-1.5 text-xs font-medium text-muted-foreground">〔{i + 1}〕</span>
                {s.es}
              </p>
              <p className="text-sm leading-[2] text-muted-foreground">{s.zh}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 关键词汇 */}
      <section>
        <h2 className="mb-1 text-sm font-medium text-foreground">
          关键词汇 <span className="ml-1 font-normal text-muted-foreground">Vocabulario clave</span>
        </h2>
        <p className="mb-3 text-xs leading-6 text-muted-foreground">
          开篇里值得留意的高频词与短语。
        </p>
        <div>
          {VOCAB.map((v, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-1 items-center gap-1 px-6 py-3 sm:grid-cols-2",
                i > 0 && "border-t border-border",
              )}
            >
              <span className="truncate text-[15px] font-medium text-foreground">{v.es}</span>
              <span className="text-sm text-muted-foreground sm:text-right">{v.zh}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
