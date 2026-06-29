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
import { Elevated } from "@/lib/elevated";

const roles = [
  { label: "Workspace owner", value: "owner" },
  { label: "Member", value: "member" },
  { label: "Restricted member", value: "restricted" },
];

function RoleItem({
  label,
  checked,
  onSelect,
}: {
  label: string;
  checked?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm text-left transition-colors hover:bg-surface-6"
    >
      <span>{label}</span>
      {checked && <Check className="size-4 text-foreground" />}
    </button>
  );
}

function RoleSelectTrigger({ value }: { value: string }) {
  const label = roles.find((r) => r.value === value)?.label ?? "选择角色";
  return (
    <button className="inline-flex w-full items-center justify-between rounded-xl border border-border bg-transparent px-3 py-2 text-sm transition-colors hover:bg-surface-2">
      <span>{label}</span>
      <ChevronDown className="size-4 text-muted-foreground" />
    </button>
  );
}

export default function ElevatedDemo() {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("member");

  return (
    <section className="mx-auto max-w-lg rounded-xl border-2 border-dashed border-border px-6 py-16">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Elevated · Surface</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          基于 <code className="rounded bg-muted px-1 py-0.5 text-xs">Elevated</code> 的分层 shadow 与背景色系统
        </p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <span className="inline-block cursor-pointer rounded-xl border border-border bg-surface-2 px-4 py-2 text-sm transition-colors hover:bg-surface-3 select-none">
            打开 Dialog
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>角色权限</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-3 pt-2">
            <RoleSelectTrigger value={role} />

            <Elevated
              offset={2}
              shadowLevel={3}
              className="rounded-2xl p-1"
            >
              {roles.map((r) => (
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
          </div>
        </DialogContent>
      </Dialog>

      <div className="mt-8 space-y-2">
        <p className="text-xs text-muted-foreground">当前角色：<span className="font-medium text-foreground">{roles.find((r) => r.value === role)?.label}</span></p>
        <div className="space-y-2 rounded-xl border border-border p-4">
          <p className="text-xs text-muted-foreground">Surface 层级预览</p>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((level) => (
              <div
                key={level}
                className={`flex size-10 items-center justify-center rounded-lg bg-surface-${level} shadow-surface-${level} text-xs text-muted-foreground`}
              >
                {level}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
