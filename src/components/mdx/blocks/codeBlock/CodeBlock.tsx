import { cn } from "@/lib/utils";
import { CodeHeader, CodeContent } from ".";
interface CodeBlockProps {
  children: string;
  lang: string;
  path?: string;
  className?: string;
}

export function CodeBlock({ children, lang, path, className }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "not-prose group relative my-6 w-full min-w-0 rounded-2xl border border-neutral-200 bg-neutral-200/50 p-1 dark:border-neutral-800 dark:bg-neutral-900/50",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-200/80 bg-[#F6F6F8] shadow-xs dark:border-neutral-800 dark:bg-transparent">
        <CodeHeader path={path} code={children} />
        <CodeContent code={children} lang={lang} />
      </div>
    </div>
  );
}
