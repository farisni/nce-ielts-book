"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<{
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (t: string) => void;
}>({ theme: "system", resolvedTheme: "light", setTheme: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) setThemeState(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const update = (m: MediaQueryListEvent | MediaQueryList) => {
        const isDark = m.matches;
        setResolved(isDark ? "dark" : "light");
        root.classList.toggle("dark", isDark);
      };
      update(mq);
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } else {
      setResolved(theme);
      root.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const setTheme = (t: string) => {
    localStorage.setItem("theme", t);
    setThemeState(t as Theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme: resolved, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
