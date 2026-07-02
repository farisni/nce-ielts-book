import type { Metadata } from "next";
import { ThemeProvider } from "@/app/_components/theme-provider";
import { AppShell } from "@/app/_components/app-shell";
import { FloatAction } from "@/app/_components/float-action";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "NCE",
  description: "NCE IELTS 词汇学习应用",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased min-h-svh min-w-[1440px] bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppShell>{children}</AppShell>
          <FloatAction />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
