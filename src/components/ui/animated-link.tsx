import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}
// TODO: FIX
export function AnimatedLink({ href, children }: AnimatedLinkProps) {
  return (
    <Link
      href={href}
      className="group mt-pagebuilder mx-auto flex w-fit items-center justify-center gap-2 font-mono text-xs text-neutral-800 uppercase transition-colors hover:text-black dark:text-white/80"
    >
      {children}

      <div className="bg-overlay-soft relative size-6.25 overflow-hidden rounded-lg border border-dashed border-neutral-300 transition-colors duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:group-hover:bg-white/10">
        <span className="absolute inset-0 flex -translate-x-full items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0">
          <ArrowRight className="size-3.5" />
        </span>
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full">
          <ArrowRight className="size-3.5" />
        </span>
      </div>
    </Link>
  );
}
