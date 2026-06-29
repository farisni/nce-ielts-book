"use client";

import { FloatingDisclosure, items } from "@/components/ui/floating-disclosure";

export function FloatAction() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <FloatingDisclosure items={items} />
    </div>
  );
}
