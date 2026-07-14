import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  header: String;
  headline: String;
}

interface SectionBuilderProps {
  children: ReactNode;
  className: String;
  header: String;
  headline: String;
}
// TODO: Fix Header (headline)
function SectionHeader({ header, headline }: SectionHeaderProps) {
  return (
    <h2
      className="mb-pagebuilder relative z-2 mx-auto max-w-xl text-center text-5xl font-medium tracking-tight text-balance max-sm:px-5 sm:text-5xl md:text-6xl"
      style={{
        textShadow:
          "0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.20)",
      }}
    >
      <p className="mb-4 font-mono text-xs font-normal tracking-widest text-black/80 uppercase dark:text-white/70">
        {header}
      </p>
      <span className="font-instrument-serif inline-block">
        Curated{" "}
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
        </span>
      </span>
    </h2>
  );
}

export function SectionBuilder({
  children,
  className,
  header,
  headline,
}: SectionBuilderProps) {
  return (
    <section className={cn("py-pagebuilder relative w-full", className)}>
      <SectionHeader header={header} headline={headline} />
      {children}
    </section>
  );
}
