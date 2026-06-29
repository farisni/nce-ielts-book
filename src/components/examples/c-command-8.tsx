"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { StarIcon, ClockIcon, BookOpenIcon, LifeBuoyIcon, MessageSquareIcon } from "lucide-react"

export function Pattern() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Search Everything
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="**:data-[selected=true]:bg-muted **:data-selected:bg-transparent">
          <CommandInput placeholder="Search or jump to..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Favorites">
              <CommandItem>
                <StarIcon className="text-yellow-500" />
                <span>Design System</span>
              </CommandItem>
              <CommandItem>
                <StarIcon className="text-yellow-500" />
                <span>API Documentation</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Recent">
              <CommandItem>
                <ClockIcon className="text-muted-foreground" />
                <span>Dashboard Analytics</span>
                <div className="ml-auto" data-slot="command-shortcut">
                  <span>2m ago</span>
                </div>
              </CommandItem>
              <CommandItem>
                <ClockIcon className="text-muted-foreground" />
                <span>User Settings</span>
                <div className="ml-auto" data-slot="command-shortcut">
                  <span>15m ago</span>
                </div>
              </CommandItem>
              <CommandItem>
                <ClockIcon className="text-muted-foreground" />
                <div className="flex flex-1 items-center justify-between">
                  <span>Team Members</span>
                  <div className="ml-auto" data-slot="command-shortcut">
                    <span>1h ago</span>
                  </div>
                </div>
              </CommandItem>
              <CommandItem>
                <ClockIcon className="text-muted-foreground" />
                <span>Billing & Plans</span>
                <div className="ml-auto" data-slot="command-shortcut">
                  <span>2h ago</span>
                </div>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Quick Links">
              <CommandItem>
                <BookOpenIcon
                />
                <span>Documentation</span>
              </CommandItem>
              <CommandItem>
                <LifeBuoyIcon
                />
                <span>Help & Support</span>
              </CommandItem>
              <CommandItem>
                <MessageSquareIcon
                />
                <span>Contact Us</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}