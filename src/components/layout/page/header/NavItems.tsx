"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NavActiveIndicator } from "./components";
import { baseClasses, activeClasses, inactiveClasses } from "./constant";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // { name: "Skills", href: "/blog" },
  { name: "Work", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export function NavItems() {
  const pathname = usePathname();
  const navListRef = useRef<HTMLUListElement>(null);

  return (
    <div className="relative flex items-center">
      {navListRef && <NavActiveIndicator navListRef={navListRef} />}

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
