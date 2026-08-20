import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function CardOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-linear-to-br from-transparent via-transparent to-indigo-400/20 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 dark:to-white/5"></div>
  );
}

type BentoCardProps = {
  link?: string;
  children?: ReactNode;
  className?: string;
};

export function BentoCard({
  link,
  children,
  className,
  ...props
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group bg-surface dark:bg-card/15 dark:hover:bg-card/5 ring-border relative flex size-full min-h-72 flex-col justify-between overflow-hidden rounded-xl ring-1 transition-colors duration-300 hover:bg-white",
        className,
      )}
      {...props}
    >
      <CardOverlay />
      {children}
      {link && (
        <Link
          className="absolute right-4 bottom-4 z-20 hidden size-9 -translate-y-2 cursor-pointer items-center justify-center rounded-2xl border border-dashed bg-black/10 transition-all duration-300 ease-out group-hover:flex dark:bg-white/10"
          href={link}
        >
          <ArrowRight className="size-4.5 text-neutral-700 dark:text-neutral-200" />
        </Link>
      )}
    </div>
  );
}
