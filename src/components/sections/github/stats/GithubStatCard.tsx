import { GithubStatCardProps } from "@/lib/types";

import { GithubStatConfig } from "..";

export function GithubStatCard({
  variant = "followers",
  value,
}: GithubStatCardProps) {
  const card = GithubStatConfig[variant];
  const Overlay = card.overLay;
  return (
    <div className="flex-1">
      <div className="group bg-surface dark:bg-card/15 dark:hover:bg-card/5 ring-border relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl p-4 ring-1 transition-colors duration-300 hover:bg-white">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-linear-to-tl from-zinc-100/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-white/5"></div>
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent 5%, black 50%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 5%, black 50%)",
          }}
        >
          <Overlay />
        </div>

        <div className="relative flex h-full flex-col">
          <h2 className="text-muted-foreground z-20 mb-1 text-xs font-medium md:text-sm">
            {card.title}
          </h2>
          <p
            className={`z-20 mt-auto text-2xl font-bold tracking-tight md:text-3xl ${card.color}`}
            style={{ transform: "none" }}
          >
            {value.value}
          </p>
        </div>
      </div>
    </div>
  );
}
