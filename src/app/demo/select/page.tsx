"use client";

import { useState } from "react";
import { Globe, StarIcon, ClockIcon, BookOpenIcon, LifeBuoyIcon, MessageSquareIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  CommandDialog,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const timezones: [string, string][] = [
  ["utc-8", "(UTC-8) Pacific Time"],
  ["utc-7", "(UTC-7) Mountain Time"],
  ["utc-6", "(UTC-6) Central Time"],
  ["utc-5", "(UTC-5) Eastern Time"],
  ["utc-4", "(UTC-4) Atlantic Time"],
  ["utc-3", "(UTC-3) Buenos Aires"],
  ["utc-1", "(UTC-1) Azores"],
  ["utc+0", "(UTC+0) London"],
  ["utc+1", "(UTC+1) Paris"],
  ["utc+2", "(UTC+2) Helsinki"],
  ["utc+3", "(UTC+3) Moscow"],
  ["utc+5:30", "(UTC+5:30) Mumbai"],
  ["utc+8", "(UTC+8) Singapore"],
  ["utc+9", "(UTC+9) Tokyo"],
  ["utc+10", "(UTC+10) Sydney"],
  ["utc+12", "(UTC+12) Auckland"],
];

export default function DemoSelectPage() {
  const [timezone, setTimezone] = useState("");
  const [cmdOpen, setCmdOpen] = useState(false);

  return (
    <main className="mx-auto min-h-[900px] w-[1022px] min-w-[1022px] flex-none rounded-md p-6 space-y-10">
      <div className="flex items-start gap-10">
        <div className="space-y-2">
          <p className="text-xs text-gray-400">Select 组件</p>
          <Select value={timezone} onValueChange={setTimezone}>
            <SelectTrigger icon={Globe} placeholder="Select timezone…" className="w-[240px]" />
            <SelectContent>
              {timezones.map(([value, label], i) => (
                <SelectItem key={value} index={i} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-gray-400">Command 组件</p>
          <Button onClick={() => setCmdOpen(true)} variant="outline">
            ⌘K Search Everything
          </Button>
          <CommandDialog open={cmdOpen} onOpenChange={setCmdOpen}>
            <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
              <CommandInput placeholder="Search or jump to..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Favorites">
                  <CommandItem>
                    <StarIcon className="text-yellow-500" />
                    <span>Dashboard</span>
                    <div className="ml-auto">
                      <span className="text-xs text-muted-foreground">⌘D</span>
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <StarIcon className="text-yellow-500" />
                    <span>Settings</span>
                    <div className="ml-auto">
                      <span className="text-xs text-muted-foreground">⌘S</span>
                    </div>
                  </CommandItem>
                  <CommandItem>
                    <ClockIcon className="text-muted-foreground" />
                    <span>Billing & Plans</span>
                    <div className="ml-auto">
                      <span className="text-xs text-muted-foreground">2h ago</span>
                    </div>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Quick Links">
                  <CommandItem>
                    <BookOpenIcon />
                    <span>Documentation</span>
                  </CommandItem>
                  <CommandItem>
                    <LifeBuoyIcon />
                    <span>Help & Support</span>
                  </CommandItem>
                  <CommandItem>
                    <MessageSquareIcon />
                    <span>Contact Us</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CommandDialog>
        </div>
      </div>

      {/* Separator 演示 */}
      <div className="space-y-3 max-w-sm">
        <p className="text-xs text-gray-400">Separator 组件</p>
        <div className="rounded-lg border bg-card p-6 space-y-3">
          <p className="text-sm font-medium">Account</p>
          <Separator className="bg-zinc-200 dark:bg-zinc-700" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Email</span>
            <span>hello@example.com</span>
          </div>
          <Separator className="bg-zinc-200 dark:bg-zinc-700" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Plan</span>
            <span>Pro</span>
          </div>
          <Separator className="bg-zinc-200 dark:bg-zinc-700" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Billing</span>
            <span>Monthly</span>
          </div>
        </div>
      </div>
    </main>
  );
}
