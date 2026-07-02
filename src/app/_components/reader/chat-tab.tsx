"use client";

import React, { useState } from "react";
import { Send, Bot } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useReaderStore } from "@/stores/reader-store";

export function ChatTab() {
  const activeBlockId = useReaderStore((s) => s.activeBlockId);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    // Placeholder: AI response not yet implemented
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "AI 对话功能即将上线。" },
      ]);
    }, 600);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {activeBlockId && (
          <p className="text-xs text-muted-foreground text-center">
            当前上下文: block {activeBlockId}
          </p>
        )}
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
            <Bot className="size-10 mb-3 opacity-30" />
            <p className="text-sm">询问 AI 关于当前文章的问题</p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-3 border-t border-border flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about this article..."
          className="text-sm h-9"
        />
        <Button size="icon" variant="ghost" className="size-9" onClick={handleSend}>
          <Send className="size-4" />
        </Button>
      </div>
    </div>
  );
}
