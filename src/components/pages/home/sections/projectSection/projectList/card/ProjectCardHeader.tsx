import Link from "next/link";
interface ProjectCardHeaderProps {
  index: number;
  title: string;
  slug: string;
  //   category: string;
}

export function ProjectCardHeader({
  index,
  title,
  slug,
}: ProjectCardHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-wider text-neutral-600 uppercase dark:text-neutral-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-px w-8 bg-neutral-200 dark:bg-neutral-800"></div>
            <span className="font-mono text-[10px] tracking-wider text-neutral-600 uppercase dark:text-neutral-400">
              Web App
            </span>
          </div>
          <Link
            className="group flex items-center gap-2"
            href={`/projects/${slug}`}
          >
            <h2 className="font-bluu text-2xl leading-tight font-bold text-neutral-900 dark:text-white">
              {title}
            </h2>
          </Link>
        </div>
        <span
          data-slot="badge"
          data-variant="secondary"
          className="Aborder shadow-border focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;&gt;svg]:pointer-events-none border-hairline bg-secondary [a&amp;]:hover:bg-secondary/90 inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-1 font-mono text-[10px] whitespace-nowrap text-neutral-600 transition-[color,box-shadow] focus-visible:ring-[3px] dark:bg-neutral-900 dark:text-neutral-400"
        >
          Q2 2026
        </span>
      </div>
    </div>
  );
}
