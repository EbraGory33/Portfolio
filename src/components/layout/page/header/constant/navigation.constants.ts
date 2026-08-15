// Navigation Links
export const baseClasses =
  "block rounded-full px-4 py-1.5 text-sm font-normal transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:focus-visible:ring-white/25";

export const activeClasses = "text-neutral-950 dark:text-white";

export const inactiveClasses =
  "text-neutral-700 hover:text-neutral-950 dark:text-white/70 dark:hover:text-white";

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
  animate: {
    width: !isGreetingVisible && isDesktop ? 472 : 190,
  },
  transition: {
    duration: 3,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});
