"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useSurface } from "@/lib/surface-context"
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  useScrollEdges                                                      */
/* ------------------------------------------------------------------ */

type ScrollEdges = {
  top: boolean
  bottom: boolean
  left: boolean
  right: boolean
}

function useScrollEdges(
  ref: React.RefObject<HTMLElement | null>,
  options?: {
    enabled?: boolean
    axis?: "vertical" | "horizontal" | "both"
  }
): ScrollEdges {
  const { enabled = true, axis = "vertical" } = options ?? {}

  const [edges, setEdges] = React.useState<ScrollEdges>({
    top: false,
    bottom: false,
    left: false,
    right: false,
  })

  React.useEffect(() => {
    const el = ref.current
    if (!el || !enabled) {
      setEdges({ top: false, bottom: false, left: false, right: false })
      return
    }

    const compute = () => {
      const v = axis === "vertical" || axis === "both"
      const h = axis === "horizontal" || axis === "both"

      setEdges({
        top: v ? el.scrollTop > 1 : false,
        bottom: v ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : false,
        left: h ? el.scrollLeft > 1 : false,
        right: h ? el.scrollLeft + el.clientWidth < el.scrollWidth - 1 : false,
      })
    }

    compute()
    el.addEventListener("scroll", compute, { passive: true })

    const ro = new ResizeObserver(compute)
    ro.observe(el)

    return () => {
      el.removeEventListener("scroll", compute)
      ro.disconnect()
    }
  }, [ref, enabled, axis])

  return edges
}

/* ------------------------------------------------------------------ */
/*  ScrollEdgeCue                                                       */
/* ------------------------------------------------------------------ */

type ScrollEdgeCueProps = {
  edge: "top" | "bottom" | "left" | "right"
  visible: boolean
  mode?: "sticky" | "absolute"
  surfaceLevel?: number
  size?: "tight" | "comfortable"
  inset?: number
  chevron?: boolean
}

function ScrollEdgeCue({
  edge,
  visible,
  mode = "sticky",
  surfaceLevel,
  size = "comfortable",
  inset = 4,
  chevron = true,
}: ScrollEdgeCueProps) {
  const ctxSurface = useSurface()
  const sLevel = surfaceLevel ?? ctxSurface

  const isVertical = edge === "top" || edge === "bottom"

  const bandPx = size === "tight" ? 32 : 60

  const gradientFrom = `var(--surface-${sLevel})`
  const gradientTo = "transparent"

  const gradientDir =
    edge === "top" ? "to top" :
    edge === "bottom" ? "to bottom" :
    edge === "left" ? "to left" : "to right"

  const Chevron =
    edge === "top" ? ChevronUp :
    edge === "bottom" ? ChevronDown :
    edge === "left" ? ChevronLeft : ChevronRight

  if (!visible) return null

  return (
    <div
      data-slot="scroll-edge-cue"
      data-edge={edge}
      className={cn(
        "pointer-events-none z-10",
        mode === "sticky" && "sticky shrink-0",
        mode === "absolute" && "absolute"
      )}
      style={{
        ...(isVertical
          ? {
              [edge]: 0,
              height: bandPx,
              marginTop: mode === "sticky" && edge === "top" ? -bandPx : undefined,
              marginBottom: mode === "sticky" && edge === "bottom" ? -bandPx : undefined,
              insetInline: mode === "absolute" ? inset : undefined,
            }
          : {
              [edge]: 0,
              width: bandPx,
              marginLeft: mode === "sticky" && edge === "left" ? -bandPx : undefined,
              marginRight: mode === "sticky" && edge === "right" ? -bandPx : undefined,
              insetBlock: mode === "absolute" ? inset : undefined,
            }),
        background: `linear-gradient(${gradientDir}, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      {chevron && (
        <Chevron
          className={cn(
            "absolute size-4 text-muted-foreground/30",
            isVertical && "left-1/2 -translate-x-1/2",
            !isVertical && "top-1/2 -translate-y-1/2",
            edge === "top" && "bottom-2",
            edge === "bottom" && "top-2",
            edge === "left" && "right-2",
            edge === "right" && "left-2",
          )}
        />
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  ScrollArea                                                          */
/* ------------------------------------------------------------------ */

type ScrollAreaProps = React.ComponentPropsWithoutRef<"div"> & {
  orientation?: "vertical" | "horizontal" | "both"
  scrollFade?: boolean
  chevron?: boolean
  cueSize?: "tight" | "comfortable"
  viewportClassName?: string
}

function ScrollArea({
  className,
  children,
  orientation = "vertical",
  scrollFade = true,
  chevron = true,
  cueSize = "comfortable",
  viewportClassName,
  ...props
}: ScrollAreaProps) {
  const viewportRef = React.useRef<HTMLDivElement | null>(null)

  const edges = useScrollEdges(viewportRef, {
    axis: orientation,
    enabled: scrollFade,
  })

  return (
    <div
      data-slot="scroll-area"
      className={cn("relative isolate flex flex-col", className)}
      {...props}
    >
      {/* Top cue */}
      {orientation !== "horizontal" && (
        <ScrollEdgeCue
          edge="top"
          visible={edges.top}
          size={cueSize}
          chevron={chevron}
        />
      )}

      <div className="flex min-h-0 flex-1">
        {/* Left cue */}
        {orientation !== "vertical" && (
          <ScrollEdgeCue
            edge="left"
            visible={edges.left}
            size={cueSize}
            chevron={chevron}
          />
        )}

        <div
          ref={viewportRef}
          data-slot="scroll-area-viewport"
          className={cn(
            "min-h-0 flex-1",
            orientation === "both" && "overflow-scroll",
            orientation === "vertical" && "overflow-y-auto overflow-x-hidden",
            orientation === "horizontal" && "overflow-x-auto overflow-y-hidden",
            viewportClassName
          )}
        >
          {children}
        </div>

        {/* Right cue */}
        {orientation !== "vertical" && (
          <ScrollEdgeCue
            edge="right"
            visible={edges.right}
            size={cueSize}
            chevron={chevron}
          />
        )}
      </div>

      {/* Bottom cue */}
      {orientation !== "horizontal" && (
        <ScrollEdgeCue
          edge="bottom"
          visible={edges.bottom}
          size={cueSize}
          chevron={chevron}
        />
      )}
    </div>
  )
}

export { ScrollArea, useScrollEdges, ScrollEdgeCue }
