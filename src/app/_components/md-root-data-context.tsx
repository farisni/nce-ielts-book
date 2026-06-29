"use client";

import { createContext, useContext, type ReactNode } from "react";

export interface RootRef {
  word: string;
  meaning: string;
  file?: string;
  line?: number;
  root_form?: string;
}

export interface RootData {
  roots?: Record<string, RootRef[]>;
  prefixes?: Record<string, RootRef[]>;
  suffixes?: Record<string, RootRef[]>;
}

type RootDataMap = Record<string, RootData>;

const RootDataCtx = createContext<RootDataMap>({});
const RootClickCtx = createContext<(() => void) | undefined>(undefined);

export function RootDataProvider({
  data,
  onRootClick,
  children,
}: {
  data: RootDataMap;
  onRootClick?: () => void;
  children: ReactNode;
}) {
  return (
    <RootDataCtx.Provider value={data}>
      <RootClickCtx.Provider value={onRootClick}>
        {children}
      </RootClickCtx.Provider>
    </RootDataCtx.Provider>
  );
}

export function useRootData(): RootDataMap {
  return useContext(RootDataCtx);
}

export function useRootClick(): (() => void) | undefined {
  return useContext(RootClickCtx);
}
