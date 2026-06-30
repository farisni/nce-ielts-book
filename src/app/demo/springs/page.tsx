"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { spring } from "@/lib/springs"

const presets = [
  { label: "fast · 0.08s · bounce 0", preset: spring.fast, color: "bg-blue-500" },
  { label: "moderate · 0.16s · bounce 0.08", preset: spring.moderate, color: "bg-amber-500" },
  { label: "slow · 0.24s · bounce 0.12", preset: spring.slow, color: "bg-emerald-500" },
]

export default function DemoSpringsPage() {
  const [key, setKey] = useState(0)
  const trigger = () => setKey(k => k + 1)

  return (
    <main className="mx-auto w-full max-w-2xl px-8 py-12">
      <h1 className="text-xl font-semibold mb-1">🧪 Springs</h1>
      <p className="text-sm text-muted-foreground mb-8">
        framer-motion spring 预设对比
      </p>

      <button
        onClick={trigger}
        className="mb-10 rounded-lg border border-border bg-background px-5 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
      >
        触发动画
      </button>

      {presets.map(({ label, preset, color }) => (
        <div key={label} className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${color}`} />
            <span className="text-xs font-medium text-muted-foreground">{label}</span>
          </div>
          <div className="h-8 rounded-md bg-muted/60 overflow-hidden">
            <motion.div
              key={key}
              initial={{ width: 16 }}
              animate={{ width: "100%" }}
              transition={preset}
              className={`h-full rounded-md ${color}`}
            />
          </div>
        </div>
      ))}

      <div className="mt-10 space-y-1 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-xs text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500 mr-1.5 align-middle" />
          <code className="text-[11px] bg-muted px-1 rounded">spring.fast</code> — buttons, micro-interactions
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500 mr-1.5 align-middle" />
          <code className="text-[11px] bg-muted px-1 rounded">spring.moderate</code> — dialogs, panels
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 mr-1.5 align-middle" />
          <code className="text-[11px] bg-muted px-1 rounded">spring.slow</code> — page transitions, hero moves
        </p>
      </div>
    </main>
  )
}
