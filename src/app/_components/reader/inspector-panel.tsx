"use client";

import React from "react";
import { Info, BookOpen, MessageCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InfoTab } from "./info-tab";
import { NotebookTab } from "./notebook-tab";
import { ChatTab } from "./chat-tab";
import type { Article } from "@/app/mock";

type Props = {
  article: Article;
  onScrollToBlock: (blockId: string) => void;
};

export function InspectorPanel({ article, onScrollToBlock }: Props) {
  return (
    <div className="flex flex-col h-full border-l border-border bg-background">
      <Tabs defaultValue="info" className="flex flex-col h-full">
        <div className="px-3 pt-3 pb-0">
          <TabsList className="w-full">
            <TabsTrigger value="info" className="flex-1 gap-1.5 text-xs">
              <Info className="size-3.5" />
              Info
            </TabsTrigger>
            <TabsTrigger value="notebook" className="flex-1 gap-1.5 text-xs">
              <BookOpen className="size-3.5" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex-1 gap-1.5 text-xs">
              <MessageCircle className="size-3.5" />
              Chat
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 min-h-0">
          <TabsContent value="info" className="h-full m-0">
            <ScrollArea className="h-full">
              <InfoTab article={article} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="notebook" className="h-full m-0">
            <ScrollArea className="h-full">
              <NotebookTab article={article} onScrollToBlock={onScrollToBlock} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="chat" className="h-full m-0">
            <ChatTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
