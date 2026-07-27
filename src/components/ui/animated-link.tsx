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
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-[14px]"
          >
            <path
              d="M18.5 12L4.99997 12"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
            <path
              d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        </span>
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-full">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="size-3.5"
          >
            <path
              d="M18.5 12L4.99997 12"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
            <path
              d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            ></path>
          </svg>
        </span>
      </div>
    </Link>
  );
}
