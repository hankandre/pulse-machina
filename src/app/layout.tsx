import type { Metadata } from "next";
import { Fira_Code, Jost } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { HeaderNav } from "@/components/header-nav";
import "./globals.css";

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PulseMachina",
  description: "Vehicle History Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-svh antialiased font-sans ${jostSans.variable} ${firaCode.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-svh flex-col bg-background">
            <div className="border-grid flex flex-1 flex-col">
              <HeaderNav />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
