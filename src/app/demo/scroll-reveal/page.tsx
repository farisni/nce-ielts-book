"use client";

import { ScrollRevealBaseui } from "@/components/uitripled/scroll-reveal-baseui";

export default function ScrollRevealDemo() {
  return (
    <section className="mx-auto max-w-6xl rounded-xl border-2 border-dashed border-border px-6 py-16">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Scroll Reveal · BaseUI</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          基于 Framer Motion 的滚动触发入场动画组件
        </p>
      </div>

      <ScrollRevealBaseui motionPreset="smooth" />
    </section>
  );
}
