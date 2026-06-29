"use client";

import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { ArrowRight, ArrowLeft, Search, Plus, Loader2 } from "lucide-react";

export default function DemoButtonPage() {
  return (
    <main className="mx-auto w-[1022px] min-w-[1022px] flex-none rounded-md p-8">
      <h1 className="text-xl font-semibold mb-8">🧪 Demo · Button</h1>

      <div className="space-y-10">
        {/* Variants */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">Variants</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Icon Only */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">Icon Only</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip content="Go back">
              <span><Button variant="ghost" size="icon" className="rounded-full hover:bg-[#f0f0f0]"><ArrowLeft /></Button></span>
            </Tooltip>
            <Tooltip content="Go forward">
              <span><Button variant="ghost" size="icon" className="rounded-full hover:bg-[#f0f0f0]"><ArrowRight /></Button></span>
            </Tooltip>
            <Tooltip content="Search">
              <span><Button variant="ghost" size="icon" className="rounded-full hover:bg-[#f0f0f0]"><Search /></Button></span>
            </Tooltip>
            <Tooltip content="Add">
              <span><Button variant="primary" size="icon" className="rounded-full hover:bg-[#f0f0f0]"><Plus /></Button></span>
            </Tooltip>
          </div>
        </section>

        {/* With Icons */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">leadingIcon / trailingIcon</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" leadingIcon={ArrowLeft}>Back</Button>
            <Button variant="primary" trailingIcon={ArrowRight}>Next</Button>
            <Button variant="secondary" leadingIcon={Search}>Search</Button>
            <Button variant="tertiary" trailingIcon={ArrowRight}>Continue</Button>
            <Button variant="ghost" leadingIcon={ArrowLeft} trailingIcon={ArrowRight}>Both</Button>
          </div>
        </section>

        {/* Loading */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">Loading</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" loading>Loading</Button>
            <Button variant="secondary" loading>Please wait</Button>
            <Button variant="ghost" size="icon" loading><Search /></Button>
          </div>
        </section>

        {/* Disabled */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">Disabled</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="tertiary" disabled>Tertiary</Button>
            <Button variant="ghost" disabled>Ghost</Button>
          </div>
        </section>

        {/* Tooltip */}
        <section>
          <h2 className="text-sm font-medium text-muted-foreground mb-4">Tooltip</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip content="Go back to previous page">
              <span><Button variant="ghost" size="icon" leadingIcon={ArrowLeft}><span className="sr-only">Back</span></Button></span>
            </Tooltip>
            <Tooltip content="Search something" side="bottom">
              <span><Button variant="secondary" size="icon"><Search /></Button></span>
            </Tooltip>
            <Tooltip content="Add new item" side="right">
              <span><Button variant="primary" size="icon" className="hover:bg-[#f0f0f0]"><Plus /></Button></span>
            </Tooltip>
          </div>
        </section>
      </div>
    </main>
  );
}
