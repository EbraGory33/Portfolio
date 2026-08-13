"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const baseClasses =
  "block rounded-full px-4 py-1.5 text-sm font-normal transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:focus-visible:ring-white/25";

const activeClasses = "text-neutral-950 dark:text-white";

const inactiveClasses =
  "text-neutral-700 hover:text-neutral-950 dark:text-white/70 dark:hover:text-white";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // { name: "Skills", href: "/blog" },
  { name: "Work", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

type ActiveIndicator = {
  left: number;
  width: number;
};

function NavItems() {
  const pathname = usePathname();
  const navListRef = useRef<HTMLUListElement>(null);
  const [activeIndicator, setActiveIndicator] =
    useState<ActiveIndicator | null>(null);

  useEffect(() => {
    const navList = navListRef.current;

    if (!navList) {
      return;
    }

    const updateActiveIndicator = () => {
      const activeItem = navList.querySelector<HTMLElement>(
        `[data-nav-id="${pathname}"]`,
      );

      if (!activeItem) {
        setActiveIndicator(null);
        return;
      }

      setActiveIndicator({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
      });
    };

    updateActiveIndicator();

    const resizeObserver = new ResizeObserver(updateActiveIndicator);
    resizeObserver.observe(navList);

    return () => {
      resizeObserver.disconnect();
    };
  }, [pathname]);

  return (
    <div className="relative flex items-center">
      {/* fix for animation movement */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 rounded-full bg-neutral-900/8 transition-[width,transform,opacity] duration-300 ease-out dark:bg-white/10"
        style={{
          width: activeIndicator?.width ?? 0,
          opacity: activeIndicator ? 1 : 0,
          transform: `translateX(${activeIndicator?.left ?? 0}px)`,
        }}
      />
      <div
        aria-hidden="true"
        className="dark:bg-primary pointer-events-none absolute -top-2 left-0 -z-10 h-1 w-8 rounded-t-full bg-neutral-900 transition-[transform,opacity] duration-300 ease-out"
        style={{
          opacity: activeIndicator ? 1 : 0,
          transform: `translateX(${
            activeIndicator
              ? activeIndicator.left + (activeIndicator.width - 32) / 2
              : 0
          }px)`,
        }}
      >
        <div className="dark:from-primary/62 absolute -top-3 -left-2 h-7 w-12 rounded-full bg-radial-[farthest-side] from-neutral-900/60 to-transparent blur-md" />
      </div>
      <div
        aria-hidden="true"
        className="dark:bg-primary pointer-events-none absolute -top-2 left-0 -z-10 h-1 w-8 rounded-t-full bg-neutral-900 transition-[transform,opacity] duration-300 ease-out"
        style={{
          opacity: activeIndicator ? 1 : 0,
          transform: `translateX(${
            activeIndicator
              ? activeIndicator.left + (activeIndicator.width - 32) / 2
              : 0
          }px)`,
        }}
      >
        <div className="absolute -top-3 -left-2 h-7 w-12 rounded-full bg-[radial-gradient(farthest-side_at_50%_50%,rgba(23,23,23,0.6),transparent)] blur-md dark:bg-[radial-gradient(farthest-side_at_50%_50%,color-mix(in_oklab,var(--color-primary)_62%,transparent),transparent)]" />
      </div>

      <ul ref={navListRef} className="relative flex items-center">
        {navItems.map((item) => (
          <li
            key={item.href}
            className="relative list-none"
            data-nav-id={item.href}
          >
            <Link
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`${baseClasses} ${
                pathname === item.href ? activeClasses : inactiveClasses
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
        {/* Keep these outside the loop */}
        <li className="relative list-none">
          <button
            aria-expanded="false"
            aria-haspopup="true"
            className="flex cursor-pointer items-center gap-0.5 rounded-full px-4 py-1.5 text-sm font-normal text-neutral-700 transition-colors duration-150 outline-none select-none hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-white/70 dark:hover:text-white dark:focus-visible:ring-white/25"
          >
            More
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="size-3.5 transition-transform duration-200 ease-out"
            >
              <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>
          </button>
        </li>

        <li className="ml-1 list-none">
          <button
            type="button"
            tabIndex={0}
            data-slot="button"
            className="group/button focus-visible:border-ring aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [a]:hover:bg-primary/80 relative inline-block h-full shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-transparent bg-neutral-200 bg-clip-padding px-4 py-1.5 text-sm font-normal whitespace-nowrap text-neutral-800 transition-colors duration-200 outline-none select-none hover:bg-neutral-300 hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-blue-500/40 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-invalid:ring-3 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-white dark:focus-visible:ring-white/25"
          >
            Let&apos;s Connect
            <div
              aria-hidden="true"
              className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-neutral-400/40 blur-sm dark:bg-white/35"
            ></div>
          </button>
        </li>
      </ul>
    </div>
  );
}
export { NavItems };
