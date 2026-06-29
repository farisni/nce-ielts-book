"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import rough from "roughjs";

interface TextHighlightProps {
    children: React.ReactNode;
    color?: string;
    duration?: number;
    iterations?: number;
}

type RoughOp = {
    op?: string;
    data?: number[];
};

type RoughSet = {
    type?: string;
    ops?: RoughOp[];
};

type RoughDrawing = {
    sets?: RoughSet[];
};

function hashText(value: string) {
    return value.split("").reduce((hash, char) => {
        return (hash * 31 + char.charCodeAt(0)) >>> 0;
    }, 17);
}

function getRoughOptions(seed: number) {
    return {
        maxRandomnessOffset: 2.6,
        roughness: 1.2,
        bowing: 1.2,
        strokeWidth: 1.5,
        seed,
        disableMultiStroke: true,
    };
}

function opsToPath(drawing: RoughDrawing): string | null {
    const sets = drawing.sets || [];
    return sets.map((s) => {
        if (s.type === "path") {
            return (s.ops || []).map((op) => {
                const d = op.data ?? [];
                if (op.op === "move") return `M${d[0]} ${d[1]}`;
                if (op.op === "bcurveTo") return `C${d[0]} ${d[1]},${d[2]} ${d[3]},${d[4]} ${d[5]}`;
                if (op.op === "lineTo") return `L${d[0]} ${d[1]}`;
                return "";
            }).join(" ");
        }
        return "";
    }).join(" ") || null;
}

export function TextHighlight({
    children,
    color = "#fde047",
    duration = 800,
    iterations = 2,
}: TextHighlightProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const seed = useMemo(() => hashText(String(children)), [children]);
    const [svgData, setSvgData] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const measure = () => {
            const rect = el.getBoundingClientRect();
            setSvgData({ width: rect.width + 6, height: rect.height + 8 });
        };
        measure();

        const ro = new ResizeObserver(measure);
        ro.observe(el);
        ro.observe(document.body);
        return () => ro.disconnect();
    }, [children]);

    const { width, height } = svgData;
    const paths = useMemo(() => {
        if (width <= 0) {
            return [];
        }

        const lineY = height - 5;
        const nextPaths: { d: string; len: number }[] = [];
        const gen = rough.generator(undefined);

        for (let i = 0; i < iterations; i++) {
            const opts = getRoughOptions(seed + i * 100);
            const x1 = i % 2 === 0 ? 2 : width - 2;
            const x2 = i % 2 === 0 ? width - 2 : 2;
            const drawing = gen.line(x1, lineY, x2, lineY, opts) as RoughDrawing;
            const d = opsToPath(drawing);
            if (d) {
                nextPaths.push({ d, len: width * 0.8 });
            }
        }

        return nextPaths;
    }, [height, iterations, seed, width]);

    const keyframesStyle = `@keyframes rough-dash { to { stroke-dashoffset: 0; } }`;

    return (
        <span ref={containerRef} className="relative inline-block">
            {children}
            {width > 0 && (
                <svg
                    className="absolute pointer-events-none overflow-visible"
                    width={width}
                    height={height}
                    style={{ top: -2, left: -3 }}
                >
                    <style>{keyframesStyle}</style>
                    {paths.map((p, i) => (
                        <path
                            key={i}
                            d={p.d}
                            fill="none"
                            stroke={color}
                            strokeWidth={1.8}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{
                                strokeDasharray: p.len,
                                strokeDashoffset: p.len,
                                animation: `rough-dash ${duration}ms ease-out ${i * (duration / iterations / 2)}ms forwards`,
                            }}
                        />
                    ))}
                </svg>
            )}
        </span>
    );
}
