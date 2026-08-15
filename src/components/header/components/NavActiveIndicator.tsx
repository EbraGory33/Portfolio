"use client";

import { RefObject } from "react";
import { motion } from "framer-motion";
import { activeNavigationMotion } from "../constant";
import { useActiveIndicator } from "../hooks";

type NavActiveIndicatorProps = {
  navListRef: RefObject<HTMLUListElement | null>;
};

export function NavActiveIndicator({ navListRef }: NavActiveIndicatorProps) {
  const activeIndicator = useActiveIndicator(navListRef);
  return (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 rounded-full bg-neutral-900/8 dark:bg-white/10"
        variants={activeNavigationMotion(activeIndicator)}
        initial="initial"
        animate="animate"
        transition={activeNavigationMotion(activeIndicator).transition}
      />
      <motion.div
        aria-hidden="true"
        className="dark:bg-primary pointer-events-none absolute -top-2 left-0 -z-10 h-1 w-8 rounded-t-full bg-neutral-900"
        variants={activeNavigationMotion({
          left: activeIndicator.left + (activeIndicator.width - 32) / 2,
        })}
        initial="initial"
        animate="animate"
        transition={activeNavigationMotion(activeIndicator).transition}
      >
        <div className="dark:from-primary/62 absolute -top-3 -left-2 h-7 w-12 rounded-full bg-radial-[farthest-side] from-neutral-900/60 to-transparent blur-md" />
      </motion.div>
    </>
  );
}
