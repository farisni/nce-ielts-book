import React from "react";

const CALLOUT_ICONS: Record<string, string> = {
  note: "💡", tip: "✨", warning: "⚠️", info: "ℹ️",
  important: "❗", example: "📄", question: "❓", success: "✅", danger: "🚫",
};

const CALLOUT_COLORS: Record<string, string> = {
  note:      "bg-blue-50/50",
  tip:       "bg-cyan-50/50",
  warning:   "bg-amber-50/50",
  info:      "bg-sky-50/50",
  important: "bg-orange-50/50",
  example:   "bg-teal-50/50",
  question:  "bg-yellow-50/50",
  success:   "bg-green-50/50",
  danger:    "bg-red-50/50",
};

interface CalloutProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  "data-callout"?: string;
  "data-title"?: string;
}

export function CalloutBlock({ "data-callout": type, "data-title": title, children }: CalloutProps) {
  if (!type) {
    return (
      <blockquote className="border-l-2 border-zinc-300 pl-4 my-4 text-gray-500">
        {children}
      </blockquote>
    );
  }

  const icon = CALLOUT_ICONS[type] || "💡";
  const colorClass = CALLOUT_COLORS[type] || "bg-zinc-50/50";

  return (
    <div className={`rounded-lg px-5 py-3 my-4 ${colorClass}`}>
      <div className="flex items-start gap-3">
        <span className="text-sm leading-6 shrink-0">{icon}</span>
        <div className="min-w-0 flex-1">
          {title && <div className="font-medium text-sm text-gray-600 mb-1">{title}</div>}
          <div className="text-sm text-gray-500">{children}</div>
        </div>
      </div>
    </div>
  );
}
