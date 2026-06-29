"use client";

import {
  useRef,
  useEffect,
  useCallback,
  useState,
  type ReactNode,
} from "react";
import { annotate } from "rough-notation";
import type { RoughAnnotation } from "rough-notation/lib/model";

/* ─── Types ─────────────────────────────────────────────────────── */

type AnnotationStyle = "underline" | "highlight" | "box";

const SIDEBAR_LAYOUT_CHANGE_EVENT = "app-sidebar-layout-change";
const SIDEBAR_REDRAW_DURATION = 320;

type SidebarLayoutChangeEvent = CustomEvent<{ phase?: "start" | "end" }>;

interface RoughAnnotateProps {
  /** 需要标注的内容 */
  children: ReactNode;
  /** 标注类型 */
  type?: AnnotationStyle;
  /** 标注颜色（需要支持 rough-notation 的颜色名或 hex） */
  color?: string;
  /** 动画时长 ms */
  duration?: number;
  /** 标注粗细（仅 underline / box） */
  strokeWidth?: number;
  /** 内边距（仅 box） */
  padding?: number;
  /** 交互模式：hover 显示 / 始终显示 / 可控 */
  trigger?: "hover" | "always" | "manual";
  /** 外部控制显隐（trigger = "manual" 时使用） */
  show?: boolean;
  /** 自定义 className */
  className?: string;
  /** 初次显示时是否播放手绘动画，默认 false（直接出现） */
  animate?: boolean;
}

/* ─── Component ─────────────────────────────────────────────────── */

export function RoughAnnotate({
  children,
  type = "underline",
  color = "#fbb150",
  duration = 500,
  strokeWidth = 2,
  padding = 4,
  trigger = "hover",
  show: showProp,
  className,
  animate = false,
}: RoughAnnotateProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);
  const initRef = useRef(false);
  const suppressRefreshUntilRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  /* browser-only mount */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ── create annotation (once) ──────────────────────────────── */
  useEffect(() => {
    if (!mounted) return;
    const el = containerRef.current;
    if (!el) return;

    /* prevent duplicate creation across StrictMode double-fire */
    if (initRef.current) return;
    initRef.current = true;

    annotationRef.current = annotate(el, {
      type,
      animate,
      color,
      strokeWidth: type !== "highlight" ? strokeWidth : undefined,
      padding: type === "box" ? padding : undefined,
      animationDuration: animate ? duration : 1, // 1 avoids rough-notation's `0 || 800` fallback
    });

    return () => {
      annotationRef.current?.remove();
      annotationRef.current = null;
      initRef.current = false;
    };
  }, [mounted, type, color, strokeWidth, padding]);

  /* ── show/hide ─────────────────────────────────────────────── */
  const showAnnotation = useCallback(() => {
    if (animate) {
      suppressRefreshUntilRef.current = window.performance.now() + duration + 120;
    }

    annotationRef.current?.show();
  }, [animate, duration]);

  const hideAnnotation = useCallback(() => {
    annotationRef.current?.hide();
  }, []);

  const refreshAnnotation = useCallback(() => {
    const annotation = annotationRef.current;

    if (!annotation?.isShowing()) return;
    if (window.performance.now() < suppressRefreshUntilRef.current) return;

    annotation.show();
  }, []);

  const redrawAnnotation = useCallback(() => {
    const annotation = annotationRef.current;

    if (!annotation?.isShowing()) return;
    if (window.performance.now() < suppressRefreshUntilRef.current) return;

    const previousAnimate = annotation.animate;
    const previousDuration = annotation.animationDuration;

    suppressRefreshUntilRef.current =
      window.performance.now() + SIDEBAR_REDRAW_DURATION + 120;
    annotation.animate = true;
    annotation.animationDuration = SIDEBAR_REDRAW_DURATION;
    annotation.hide();
    annotation.show();
    annotation.animate = previousAnimate;
    annotation.animationDuration = previousDuration;
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = containerRef.current;
    if (!el) return;

    let frame = 0;
    const timers: number[] = [];

    const refresh = () => {
      frame = 0;
      refreshAnnotation();
    };

    const redraw = () => {
      frame = 0;
      redrawAnnotation();
    };

    const scheduleRefresh = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(refresh);
    };

    const scheduleRedraw = () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      frame = window.requestAnimationFrame(redraw);
    };

    const scheduleRefreshBurst = () => {
      scheduleRefresh();
      [80, 180, 320, 520].forEach((delay) => {
        timers.push(window.setTimeout(scheduleRefresh, delay));
      });
    };

    const handleSidebarLayoutChange = (event: Event) => {
      const phase = (event as SidebarLayoutChangeEvent).detail?.phase;

      if (phase === "start") return;

      scheduleRedraw();
    };

    const resizeObserver = new ResizeObserver(scheduleRefreshBurst);
    const observedElements = [
      el,
      document.body,
      document.documentElement,
      el.closest("[data-section='app-shell']"),
      el.closest("[data-section='right-shell']"),
      el.closest("[data-section='main-content']"),
    ].filter((element): element is Element => Boolean(element));

    [...new Set(observedElements)].forEach((element) => {
      resizeObserver.observe(element);
    });

    window.addEventListener(SIDEBAR_LAYOUT_CHANGE_EVENT, handleSidebarLayoutChange);
    window.addEventListener("resize", scheduleRefreshBurst);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener(SIDEBAR_LAYOUT_CHANGE_EVENT, handleSidebarLayoutChange);
      window.removeEventListener("resize", scheduleRefreshBurst);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [mounted, redrawAnnotation, refreshAnnotation]);

  /* auto-show for "always" mode after annotation is created */
  useEffect(() => {
    if (trigger !== "always") return;
    if (!annotationRef.current) return;
    /* tiny delay ensures annotation SVG is in the DOM */
    const t = setTimeout(() => {
      showAnnotation();
    }, 60);
    return () => clearTimeout(t);
  }, [mounted, trigger, showAnnotation]);

  /* controlled mode */
  const isControlled = trigger === "manual" && showProp !== undefined;

  useEffect(() => {
    if (!isControlled) return;
    if (showProp) {
      showAnnotation();
    } else {
      hideAnnotation();
    }
  }, [isControlled, showProp, showAnnotation, hideAnnotation]);

  /* ── hover events ──────────────────────────────────────────── */
  const hoverProps =
    trigger === "hover" && !isControlled
      ? {
          onMouseEnter: showAnnotation,
          onMouseLeave: hideAnnotation,
          onFocus: showAnnotation,
          onBlur: hideAnnotation,
        }
      : {};

  /* SSR fallback — no annotation, just render content */
  if (!mounted) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span
      ref={containerRef}
      className={className}
      {...hoverProps}
      tabIndex={trigger === "hover" ? 0 : undefined}
    >
      {children}
    </span>
  );
}

/* ─── Pre-configured variants ───────────────────────────────────── */

export function RoughUnderline(props: Omit<RoughAnnotateProps, "type">) {
  return <RoughAnnotate type="underline" color="#fbb150" {...props} />;
}

export function RoughHighlight(props: Omit<RoughAnnotateProps, "type">) {
  return <RoughAnnotate type="highlight" color="#fde68a" {...props} />;
}

export function RoughBox(props: Omit<RoughAnnotateProps, "type">) {
  return <RoughAnnotate type="box" color="#94a3b8" padding={4} {...props} />;
}
