"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  { src: "/tokyo.jpg", title: "Tokyo Stock Exchange", desc: "東京証券取引所" },
  { src: "/karen.jpg", title: "Kayan Lahwi", desc: "缅甸克扬族长颈族" },
];

export default function ScrollRevealDemo() {
  return (
    <section className="mx-auto max-w-6xl rounded-xl border-2 border-dashed border-border px-6 py-16">
      <div className="mb-8">
        <h1 className="text-xl font-semibold tracking-tight">Scroll Reveal · Images</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          滚动时图片从下方淡入 + 上移，交替左右布局
        </p>
      </div>

      <div className="space-y-24 py-8">
        {images.map((img, i) => (
          <RevealImage
            key={img.src}
            src={img.src}
            title={img.title}
            desc={img.desc}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function RevealImage({
  src,
  title,
  desc,
  reverse,
}: {
  src: string;
  title: string;
  desc: string;
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`flex flex-col items-center gap-8 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex-1 overflow-hidden rounded-xl shadow-surface-3"
      >
        <img
          src={src}
          alt={title}
          className="h-72 w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -30 : 30 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-1 space-y-3"
      >
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground">{desc}</p>
      </motion.div>
    </motion.div>
  );
}
