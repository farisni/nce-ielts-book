import type { Metadata } from "next";
import { ThemeProvider } from "@/app/_components/theme-provider";
import { RootLayoutShell } from "@/app/_components/root-layout";
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
          <RootLayoutShell>{children}</RootLayoutShell>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
