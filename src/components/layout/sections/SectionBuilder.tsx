import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  header: string;
  headline: string;
  alignment: "left" | "center";
  padding?: "med" | "big" | string;
}

interface SectionBuilderProps {
  children: ReactNode;
  className: string;
  header: string;
  headline: string;
  alignment: "left" | "center";
  padding?: "med" | "big" | string;
}
// TODO: Fix Header (headline)
function SectionHeader({
  header,
  headline,
  alignment,
  padding,
}: SectionHeaderProps) {
  return (
    <h2
      className={`${padding == "med" ? "mb-8!" : padding == "big" ? "mb-pagebuilder" : padding} relative z-2 ${alignment == "center" ? "mx-auto" : alignment == "left" ? "mx-0 lg:text-left" : ""} max-w-xl text-center text-5xl font-medium tracking-tight text-balance max-sm:px-5 sm:text-5xl md:text-6xl`}
      style={{
        textShadow:
          "0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.20)",
      }}
    >
      <p className="mb-4 font-mono text-xs font-normal tracking-widest text-black/80 uppercase dark:text-white/70">
        {header}
      </p>
      <span className="font-instrument-serif inline-block">
        {/* Featured{" "}
        <span
          className="animate-gradient-x text-colorfull px-1 pb-1 italic text-shadow-none"
          style={{
            // WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
            WebkitMaskSize: "0% 100%",
            WebkitMaskPosition: "left",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          work
        </span> */}
        {headline}
      </span>
    </h2>
  );
}

export function SectionBuilder({
  children,
  className,
  header,
  headline,
  alignment,
  padding,
}: SectionBuilderProps) {
  return (
    // <section className={cn("py-pagebuilder relative w-full", className)}>
    <section className={cn("relative w-full", className)}>
      <SectionHeader
        header={header}
        headline={headline}
        alignment={alignment}
        padding={padding}
      />
      {children}
    </section>
  );
}
