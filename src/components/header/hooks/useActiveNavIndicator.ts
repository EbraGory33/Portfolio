"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, RefObject } from "react";

type ActiveIndicator = {
  left: number;
  width: number;
};

export function useActiveIndicator(
  navListRef: RefObject<HTMLUListElement | null>,
) {
  const pathname = usePathname();

  const [activeIndicator, setActiveIndicator] = useState<ActiveIndicator>({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const navList = navListRef.current;

    if (!navList) return;

    const updateActiveIndicator = () => {
      const activeItem = navList.querySelector<HTMLElement>(
        `[data-nav-id="${pathname}"]`,
      );

      if (!activeItem) {
        setActiveIndicator({ left: 0, width: 0 });
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

  return activeIndicator;
}
