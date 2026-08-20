// TODO:
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative container flex flex-col max-sm:px-1">
      <div className="grid flex-1 grid-cols-[12px_1fr_12px] lg:grid-cols-[32px_1fr_32px]">
        <div
          aria-hidden="true"
          className="w-full border-x bg-[linear-gradient(45deg,var(--color-neutral-300)_12.50%,transparent_12.50%,transparent_50%,var(--color-neutral-300)_50%,var(--color-neutral-300)_62.50%,transparent_62.50%,transparent_100%)] bg-size-[5px_5px] dark:bg-[linear-gradient(45deg,var(--color-neutral-800)_12.50%,transparent_12.50%,transparent_50%,var(--color-neutral-800)_50%,var(--color-neutral-800)_62.50%,transparent_62.50%,transparent_100%)]"
        ></div>
        <div className="relative col-span-1 min-w-0">
          <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-12 sm:py-24">
            <div className="relative z-10 w-full px-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 flex items-center overflow-hidden rounded-full border bg-white/70 p-1 pr-3 font-mono text-[10px] font-bold tracking-widest text-neutral-500 uppercase backdrop-blur-md dark:bg-neutral-900/70 dark:text-neutral-400">
                  <div className="mr-2 flex items-center justify-center rounded-full bg-neutral-100 px-2.5 py-0.5 dark:bg-neutral-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="size-3"
                    >
                      <path
                        d="M216,80V192H40V64H200A16,16,0,0,1,216,80Z"
                        opacity="0.2"
                      ></path>
                      <path d="M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path>
                    </svg>
                  </div>
                  <span>System // 404</span>
                </div>
                <h1 className="text-4xl leading-[1.1] tracking-tight text-balance text-neutral-900 md:text-6xl dark:text-white">
                  Sometimes you need to <br className="hidden sm:block" />
                  <span className="font-instrument-serif italic">
                    get lost
                  </span>{" "}
                  to find your way.
                </h1>
                <p className="mt-8 max-w-sm text-sm leading-relaxed text-balance text-neutral-500 sm:text-base dark:text-neutral-400">
                  The page you are looking for has been moved, deleted, or
                  perhaps never existed in this timeline.
                </p>
                <div className="mt-10">
                  <Link
                    role="button"
                    tabIndex={0}
                    data-cuelume-press=""
                    data-slot="button"
                    className="group/button focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [a]:hover:bg-primary/80 group relative inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-neutral-900 bg-clip-padding px-2.5 text-sm font-medium whitespace-nowrap text-white shadow-xl transition-all outline-none select-none hover:bg-black focus-visible:ring-3 active:scale-95 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-invalid:ring-3 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                    href="/"
                  >
                    <span>Go Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div
          aria-hidden="true"
          className="w-full border-x bg-[linear-gradient(45deg,var(--color-neutral-300)_12.50%,transparent_12.50%,transparent_50%,var(--color-neutral-300)_50%,var(--color-neutral-300)_62.50%,transparent_62.50%,transparent_100%)] bg-size-[5px_5px] dark:bg-[linear-gradient(45deg,var(--color-neutral-800)_12.50%,transparent_12.50%,transparent_50%,var(--color-neutral-800)_50%,var(--color-neutral-800)_62.50%,transparent_62.50%,transparent_100%)]"
        ></div>
      </div>
    </main>
  );
}
