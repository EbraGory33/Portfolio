"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";

type ActiveIndicator = {
  left: number;
  width: number;
};
type NavActiveIndicatorProps = {
  navListRef: RefObject<HTMLUListElement | null>;
};

export function NavActiveIndicator({ navListRef }: NavActiveIndicatorProps) {
  const pathname = usePathname();

  const [activeIndicator, setActiveIndicator] =
    useState<ActiveIndicator | null>(null);

  useEffect(() => {
    const navList = navListRef.current;

    if (!navList) return;

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
  }, [pathname, navListRef]);
  return (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 rounded-full bg-neutral-900/8 transition-[width,transform,opacity] duration-300 ease-out dark:bg-white/10"
        style={{
          width: activeIndicator?.width ?? 0,
          opacity: activeIndicator ? 1 : 0,
          transform: `translateX(${activeIndicator?.left ?? 0}px)`,
        }}
      />
      <motion.div
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
      </motion.div>
    </>
  );
}
