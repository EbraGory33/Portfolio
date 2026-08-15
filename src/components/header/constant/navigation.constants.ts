import { background } from "@/lib/data";
import { number } from "framer-motion";

// Navigation Links
export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // { name: "Skills", href: "/blog" },
  { name: "Work", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export const baseClasses =
  "block rounded-full px-4 py-1.5 text-sm font-normal transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:focus-visible:ring-white/25";

export const activeClasses = "text-neutral-950 dark:text-white";

export const inactiveClasses =
  "text-neutral-700 hover:text-neutral-950 dark:text-white/70 dark:hover:text-white";

export const activeNavigationMotion = ({
  left,
  width,
}: {
  left: number;
  width?: number;
}) => ({
  initial: {
    opacity: 0,
    transform: "translateX(0px)",
    ...(width && { 0: number }),
  },
  animate: {
    opacity: 1,
    transform: `translateX(${left}px)`,
    ...(width && { width }),
  },
  transition: {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

// Navigation animations
export const navigationContentMotion = {
  initial: {
    opacity: 0,
    transform: "translateY(6px) scale(0.97)",
  },
  animate: {
    opacity: 1,
    transform: "translateY(0px) scale(1)",
    transitionEnd: {
      transform: "none",
    },
  },
  exit: {
    opacity: 0,
    transform: "translateY(-6px) scale(0.97)",
  },
  transition: {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

export const navigationResizeMotion = (
  isGreetingVisible: boolean,
  isDesktop: boolean,
) => ({
  initial: {
    borderRadius: "22px",
    clipPath: "inset(-24px -32px -32px round 22px)",
    opacity: 1,
    height: "42px",
    width: 0,
  },
  animate: {
    width: !isGreetingVisible && isDesktop ? 472 : 190,
  },
  transition: {
    duration: 3,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});
