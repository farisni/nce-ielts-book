"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Elevated } from "@/lib/elevated";

const ROLES = [
  { label: "Workspace owner", value: "owner" },
  { label: "Member", value: "member" },
  { label: "Restricted member", value: "restricted" },
];

function RoleItem({ label, checked, onSelect }: { label: string; checked?: boolean; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-left text-foreground transition-colors hover:bg-white/5"
    >
      <span>{label}</span>
      {checked && <Check className="size-4" />}
    </button>
  );
}

function RoleSelectTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex w-full items-center justify-between rounded-xl border border-border bg-transparent px-3 py-2 text-sm transition-colors hover:bg-surface-2"
    >
      <span>选择角色</span>
      <ChevronDown className="size-4 text-muted-foreground" />
    </button>
  );
}

export default function ElevatedRoleDemo() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("member");

  const currentRole = ROLES.find((r) => r.value === role)!;

  return (
    <section className="mx-auto max-w-lg px-6 py-8">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Elevated · Role Select</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          在 Dialog 内使用 <code className="rounded bg-muted px-1 py-0.5 text-xs">Elevated</code> 实现正确的分层阴影
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button variant="outline">打开 Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>角色权限</DialogTitle>
            </DialogHeader>

            <RoleSelectTrigger onClick={() => {}} />

            <Elevated offset={2} shadowLevel={3} className="rounded-2xl p-1">
              {ROLES.map((r) => (
                <RoleItem
                  key={r.value}
                  label={r.label}
                  checked={role === r.value}
                  onSelect={() => {
                    setRole(r.value);
                    setOpen(false);
                  }}
                />
              ))}
            </Elevated>
          </DialogContent>
        </Dialog>

        <span className="text-sm text-muted-foreground">
          当前：<span className="font-medium text-foreground">{currentRole.label}</span>
        </span>
      </div>

      <div className="mt-8 rounded-xl border border-border/60 p-4">
        <p className="mb-3 text-xs font-medium text-muted-foreground">工作原理</p>
        <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
          <p>
            Dialog 内容处于 <code className="rounded bg-muted px-1 py-0.5">surface-5</code>（substrate = 5）。
          </p>
          <p>
            <code className="rounded bg-muted px-1 py-0.5">Elevated offset={2}</code> 将背景自动抬升至{" "}
            <code className="rounded bg-muted px-1 py-0.5">surface-7</code>（5 + 2）。
          </p>
          <p>
            <code className="rounded bg-muted px-1 py-0.5">shadowLevel={3}</code> 固定阴影层级，避免嵌套加深。
          </p>
          <p className="text-muted-foreground/60">
            ❌ 错误做法：直接写 <code className="rounded bg-muted px-1 py-0.5">bg-surface-5</code>，背景色不会跟随 Dialog 层级变化。
          </p>
        </div>
      </div>
    </section>
  );
}
