import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/header/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ebrahim Gory - Developer, creator, and problem solver",
  description:
    "Ebrahim Gory is a developer, creator, and problem solver who loves to build things that make people's lives better.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // theme needs to be dynamic
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className="relative h-full bg-[#F4F4F4] antialiased selection:bg-black/10 selection:text-black dark:bg-black dark:selection:bg-white/10 dark:selection:text-white">
        <div
          className="pointer-events-none fixed top-0 left-0 z-40 h-22.5 w-full select-none lg:h-25"
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            maskImage: "linear-gradient(to bottom, black 50%, transparent)",
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}

// outfit_9edc4f9a-module__h4ISCa__className instrument_serif_a3003299-module__pcxXmG__variable coremono_1fbee0fa-module__3mUzJW__variable bluunext_b9b1799-module__banvuW__variable
