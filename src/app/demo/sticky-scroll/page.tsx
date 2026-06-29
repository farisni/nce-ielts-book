"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Tokyo Stock Exchange",
    description:
      "東京証券取引所 — 日本最大的证券交易所，位于东京都中央区日本桥兜町。作为亚洲最重要的金融中心之一，东京证券交易所见证了日本经济的崛起与全球化进程。",
    content: (
      <img
        src="/tokyo.jpg"
        alt="Tokyo Stock Exchange"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "Kayan Lahwi",
    description:
      "缅甸克扬族长颈族（Padaung / Kayan Lahwi）是克耶族的一支，生活在缅甸东部山区。女性自幼佩戴铜环，以长颈为美的传统延续数百年，成为独特的文化符号。",
    content: (
      <img
        src="/karen.jpg"
        alt="Kayan Lahwi"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "全球金融市场",
    description:
      "从纽约到东京，从伦敦到上海，全球金融市场通过高速网络紧密相连。每一笔交易都在毫秒间跨越时区，推动着世界经济的脉搏跳动。",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white text-sm font-semibold">
        Global Markets
      </div>
    ),
  },
  {
    title: "文化多样性",
    description:
      "世界各地的民族以独特的方式传承着自己的文化。从亚洲山地到非洲平原，每一种文化都是人类文明的瑰宝，值得被记录、尊重和传承。",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white text-sm font-semibold">
        Cultural Diversity
      </div>
    ),
  },
];

export default function StickyScrollDemo() {
  return (
    <div className="mx-auto max-w-5xl">
      <StickyScroll content={content} />
    </div>
  );
}
