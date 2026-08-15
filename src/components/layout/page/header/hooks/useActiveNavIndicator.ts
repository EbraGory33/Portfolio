"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useDesktopBreakpoint() {
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
}
