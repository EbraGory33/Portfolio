import { ChevronRight, ChevronDown, LinkIcon } from "lucide-react";
import Link from "next/link";

export function ProjectHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="mr-auto! flex flex-col gap-y-5 px-4 pt-56 md:px-6">
      <nav aria-label="Breadcrumb" className="">
        <ol className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
          <li className="contents">
            <Link
              className="transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="contents">
            <ChevronRight className="size-3" />
            <Link
              className="transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="contents">
            <ChevronRight className="size-3" />
            <span className="truncate text-neutral-600 dark:text-neutral-300">
              {title}
            </span>
          </li>
        </ol>
      </nav>
      <h1 className="font-bluu text-4xl">{title}</h1>
      <div className="flex flex-col items-end gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-2xl self-start text-base text-neutral-600 md:text-lg dark:text-neutral-400">
          {description}
        </p>
        {/* TODO: Make functional */}
        <button
          aria-label="Share menu"
          className="group inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-sm whitespace-nowrap text-blue-600 transition-colors hover:text-blue-700 focus:outline-none dark:text-blue-400 dark:hover:text-blue-300"
          data-cuelume-press=""
          type="button"
          tabIndex={0}
          aria-haspopup="menu"
          id="base-ui-_r_2a_"
          data-slot="dropdown-menu-trigger"
          aria-expanded="false"
        >
          <LinkIcon className="size-3.5" />
          <span>Copy URL</span>
          <ChevronDown className="size-3.5 transition-transform duration-200 group-data-popup-open:rotate-180" />
        </button>
      </div>
    </header>
  );
}
