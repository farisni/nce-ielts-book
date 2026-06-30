import type { Metadata } from "next";
import { ThemeProvider } from "@/app/_components/theme-provider";
import TopNav from "@/app/_components/top-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { AppSidebar } from "@/app/_components/app-sidebar";
import { FloatAction } from "@/app/_components/float-action";
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
          <div data-section="app-shell" className="flex min-h-svh w-full">
            <AppSidebar />

            <div data-section="right-shell" className="flex min-w-[1022px] flex-1 flex-col gap-6 pb-6">
              <TopNav />
              <ScrollProgress inline className="top-14 -mt-6 mb-0" />

              <main data-section="main-content" className="min-w-0 flex-1 px-6">
                {children}
              </main>
            </div>
          </div>

          <FloatAction />
        </ThemeProvider>
      </body>
    </html>
  );
}
