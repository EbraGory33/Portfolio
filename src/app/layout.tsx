import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header, Footer } from "@/components/layout";
import "./globals.css";
// localstorage : theme light/dark
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
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
      <body
        // ${coreMono.variable} ${bluuNext.variable}
        className={`dark ${outfit.variable} ${instrumentSerif.variable} relative h-full bg-[#F4F4F4] antialiased selection:bg-black/10 selection:text-black dark:bg-black dark:selection:bg-white/10 dark:selection:text-white`}
      >
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
        <Footer />
      </body>
    </html>
  );
}

// outfit_9edc4f9a-module__h4ISCa__className instrument_serif_a3003299-module__pcxXmG__variable coremono_1fbee0fa-module__3mUzJW__variable bluunext_b9b1799-module__banvuW__variable
