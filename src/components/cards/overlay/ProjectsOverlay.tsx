"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Users,
  CheckCircle2,
  MousePointer2,
  Rocket,
  Search,
  ShieldCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

type ProjectFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ProjectsOverlay() {
  const feature = useRotatingFeature(projectFeatures);
  return (
    <div className="size-full">
      <div className="absolute inset-0 -bottom-10 flex items-end justify-center overflow-hidden">
        <div className="relative flex h-fit w-full flex-col items-center justify-center gap-4">
          <div
            className="relative isolate w-full max-w-xs"
            style={{ aspectRatio: 655 / 352 }}
          >
            <ProjectBoxBack />
            <ProjectFeaturePill feature={feature} />
            <ProjectBoxFront />
          </div>
        </div>
      </div>
    </div>
  );
}

const projectFeatures: ProjectFeature[] = [
  {
    title: "Built for Users",
    description: "Simple, useful, and easy to use",
    icon: Users,
  },
  {
    title: "Production Ready",
    description: "Built to work beyond the demo",
    icon: CheckCircle2,
  },
  {
    title: "Fast & Responsive",
    description: "Optimized for a smooth experience",
    icon: Zap,
  },
  {
    title: "Built to Scale",
    description: "Ready to grow with more users",
    icon: ShieldCheck,
  },
  {
    title: "Clean UX",
    description: "Clear and intuitive interfaces",
    icon: MousePointer2,
  },
  {
    title: "End to End",
    description: "From idea to deployed product",
    icon: Rocket,
  },
  {
    title: "SEO & AEO",
    description: "Built to be found and understood",
    icon: Search,
  },
  {
    title: "Maintainable",
    description: "Clean code built for the long term",
    icon: Wrench,
  },
];

function useRotatingFeature(items: ProjectFeature[], interval = 2500) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [items.length, interval]);

  return items[index];
}

function ProjectFeaturePill({ feature }: { feature: ProjectFeature }) {
  const Icon = feature.icon;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <div
        className="relative flex size-full items-center justify-center"
        style={{ paddingBottom: "65%" }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={feature.title}
            initial={{ y: -52, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1.05 }}
            exit={{ y: 70, opacity: 0, scale: 0.96 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-border bg-card pointer-events-auto absolute z-10 flex w-48 origin-bottom items-center gap-1.5 rounded-full border p-1 pl-1.5 shadow-sm transition-[border-color,box-shadow] delay-100 duration-500 group-hover:border-indigo-400/50 group-hover:shadow-indigo-500/20 dark:group-hover:border-indigo-400/35 dark:group-hover:shadow-indigo-400/15"
          >
            <div className="bg-muted-foreground/10 text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-full transition-colors delay-200 duration-500 group-hover:bg-indigo-500/15 group-hover:text-indigo-500 dark:group-hover:bg-indigo-400/15 dark:group-hover:text-indigo-300">
              <Icon className="size-3.5" strokeWidth={1.7} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-foreground text-xs leading-none font-medium">
                {feature.title}
              </span>

              <span className="text-muted-foreground line-clamp-1 text-[10px]">
                {feature.description}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProjectBoxBack() {
  return (
    <svg
      className="absolute inset-0 z-0 text-neutral-800 transition-colors delay-300 duration-500 group-hover:text-indigo-500 dark:text-white dark:group-hover:text-indigo-400"
      fill="none"
      height="100%"
      viewBox="0 0 655 352"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M535.59 78.7427L487.973 42.8776L558.738 13.9516C562.902 12.2494 564.984 11.3984 567.143 11.5597C569.301 11.7211 571.233 12.8723 575.098 15.1747L590.22 24.1832C603.923 32.347 610.775 36.4289 610.372 42.0779C609.97 47.7269 602.609 50.7964 587.887 56.9354L535.59 78.7427Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.5"
      ></path>
      <path
        d="M123.116 79.1145L171.548 42.8776L97.2715 12.5164C94.8305 11.5186 93.61 11.0197 92.3446 11.1143C91.0793 11.2089 89.9465 11.8837 87.681 13.2334L56.155 32.0149C48.1832 36.7641 44.1973 39.1386 44.4205 42.4378C44.6438 45.737 48.9132 47.553 57.4522 51.1849L123.116 79.1145Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.5"
      ></path>
      <path
        d="M487.973 42.8774L171.548 42.8775L123.116 79.1144L535.59 78.7424L487.973 42.8774Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.5"
      ></path>
      <path
        d="M171.548 78.9088V42.8774L123.116 79.1144L171.548 78.9088Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.5"
      ></path>
      <path
        d="M487.973 78.9088V42.8774L536.404 79.1144L487.973 78.9088Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.5"
      ></path>
    </svg>
  );
}
function ProjectBoxFront() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden text-neutral-800 transition-colors delay-300 duration-500 group-hover:text-indigo-500 dark:text-white dark:group-hover:text-indigo-400"
      fill="none"
      height="100%"
      viewBox="0 0 655 352"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "translate3d(0px, 0px, 0px)" }}
    >
      <path
        className="fill-card"
        d="M123.766 79.1595H536.766V351.159H123.766V79.1595Z"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.5"
      ></path>
      <path
        d="M74.6011 164.033L123.116 79.1138L535.59 78.7419L581.532 164.469C588.006 176.55 591.243 182.59 588.568 187.06C585.892 191.529 579.039 191.529 565.333 191.529H90.5591C76.4759 191.529 69.4343 191.529 66.7781 186.953C64.1219 182.376 67.615 176.262 74.6011 164.033Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="0.5"
      ></path>
    </svg>
  );
}
