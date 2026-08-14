"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/effects/themeToggle/ThemeToggle";
import { NavGreeting, MobileNav, DesktopNav } from ".";
import { Search } from "lucide-react";

type NavPhase = "greeting" | "transitioning" | "ready";

const LG_BREAKPOINT = 1024;

function useDesktopBreakpoint() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);

    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export function Navigation() {
  const [phase, setPhase] = useState<NavPhase>("greeting");

  useEffect(() => {
    const transitionTimer = window.setTimeout(() => {
      setPhase("transitioning");
    }, 900);

    const readyTimer = window.setTimeout(() => {
      setPhase("ready");
    }, 1150);

    return () => {
      window.clearTimeout(transitionTimer);
      window.clearTimeout(readyTimer);
    };
  }, []);

  const isGreetingVisible = phase === "greeting";

  const desktopTarget = useDesktopBreakpoint();

  // This controls which JSX branch is actually mounted.
  const [renderDesktop, setRenderDesktop] = useState(false);

  // This lets the current branch animate out before it is removed.
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    if (desktopTarget === renderDesktop) return;

    // 1. Fade/compress the currently mounted content out.
    setContentVisible(false);

    // 2. Swap the JSX only after the exit animation has had time to run.
    const swapTimer = window.setTimeout(() => {
      setRenderDesktop(desktopTarget);

      // 3. Mount the new branch in its hidden state, then animate it in.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setContentVisible(true);
        });
      });
    }, 180);

    return () => window.clearTimeout(swapTimer);
  }, [desktopTarget, renderDesktop]);

  return (
    <nav className="container flex items-start py-1.5">
      <div className="mx-auto flex items-start gap-3.5">
        <div className="relative flex justify-center">
          {/* <!-- Spacer --> */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none invisible h-10 shrink-0"
            animate={{
              width: isGreetingVisible ? 190 : desktopTarget ? 472 : 190,
            }}
            transition={{
              // duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* <!-- Actual navbar --> */}
          <motion.div
            // deal with the shadow: shadow-[0_10px_30px_-14px_rgba(0,0,0,0.22),0_3px_8px_-4px_rgba(0,0,0,0.08)]
            className={[
              "shadow-border absolute top-0 left-1/2 flex min-h-10 -translate-x-1/2 items-start justify-center bg-white/90 dark:bg-neutral-800/90 dark:shadow-none",
              isGreetingVisible ? "px-0" : "px-1",
            ].join(" ")}
            id="js-nav-content"

            style={{
              borderRadius: "22px",
              clipPath: "inset(-24px -32px -32px round 22px)",
              opacity: 1,
              height: "42px",
            }}
            animate={{
              width: isGreetingVisible ? 190 : desktopTarget ? 472 : 190,
            }}
            transition={{
              // duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <AnimatePresence mode="wait">
              {isGreetingVisible ? (
                <NavGreeting key="greeting" />
              ) : renderDesktop ? (
                <DesktopNav key="desktop" />
              ) : (
                <MobileNav key="mobile" />
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <button
          aria-label="Open search (⌘K)"
          className="shadow-border relative mt-0.5 hidden size-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.22),0_3px_8px_-4px_rgba(0,0,0,0.08)] transition-all delay-0 duration-150 hover:text-neutral-900 active:scale-95 lg:inline-flex dark:bg-neutral-800/90 dark:text-white/85 dark:shadow-none dark:hover:text-white"
          type="button"
        >
          <Search className="size-4.5" />
          {/* <span
            className="pointer-events-none absolute -bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-[3px] rounded-lg border border-white/20 bg-neutral-900 px-2 py-1 whitespace-nowrap shadow-lg shadow-black/20 dark:border-neutral-200 dark:bg-white dark:shadow-black/5"
            style={{ opacity: 1, transform: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="size-3 text-white/70 dark:text-neutral-500"
            >
              <path d="M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z"></path>
            </svg>
            <span className="text-[11px] leading-none font-semibold text-white/80 dark:text-neutral-600">
              K
            </span>
          </span> */}
        </button>
        {/* todo: Delete later */}
        <ThemeToggle />
        {/*  */}
      </div>
    </nav>
  );
}
