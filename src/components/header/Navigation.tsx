"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDesktopBreakpoint, useGreetingPhase } from "./hooks";
import { navigationResizeMotion } from "./constant";
import { MenuNavTrigger } from "@/components/menu";
import { NavGreeting, MobileNav, DesktopNav } from ".";

export function Navigation() {
  const phase = useGreetingPhase();
  const isGreetingVisible = phase === "greeting";
  const isDesktop = useDesktopBreakpoint();
  const resizeMotion = navigationResizeMotion(isGreetingVisible, isDesktop);

  const [showNavigation, setShowNavigation] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowNavigation(true);
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);
  return (
    <nav className="container flex items-start py-1.5">
      <div className="mx-auto flex items-start gap-3.5">
        {showNavigation && (
          <div className="relative flex justify-center">
            {/* <!-- Spacer --> */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none invisible min-h-10 shrink-0"
              variants={resizeMotion}
              initial="initial"
              animate="animate"
              transition={resizeMotion.transition}
            />
            {/* <!-- Actual navbar --> */}
            <motion.div
              id="js-nav-content"
              // deal with the shadow: shadow-[0_10px_30px_-14px_rgba(0,0,0,0.22),0_3px_8px_-4px_rgba(0,0,0,0.08)]
              className={[
                "shadow-border absolute top-0 left-1/2 flex min-h-10 -translate-x-1/2 items-start justify-center bg-white/90 dark:bg-neutral-800/90 dark:shadow-none",
                isGreetingVisible ? "px-0" : "px-1",
              ].join(" ")}
              variants={resizeMotion}
              initial="initial"
              animate="animate"
              transition={resizeMotion.transition}
            >
              <AnimatePresence mode="wait">
                {isGreetingVisible ? (
                  <NavGreeting key="greeting" />
                ) : isDesktop ? (
                  <DesktopNav key="desktop" />
                ) : (
                  <MobileNav key="mobile" />
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
        <MenuNavTrigger variant="desktop" />
      </div>
    </nav>
  );
}
