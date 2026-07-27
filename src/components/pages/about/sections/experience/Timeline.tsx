"use client";
import Image from "next/image";
import { RefObject } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface TimelineProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

export function Timeline({ containerRef }: TimelineProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.9,
  });
  const imagePosition = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 bottom-0 left-4.5 w-8 md:left-[30%]"
    >
      <div className="relative h-full min-h-50 w-full">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-1/2 w-1.5 -translate-x-1/2 rounded bg-neutral-200 shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.62)] dark:bg-neutral-800">
          <motion.div
            style={{ height: "100%", scaleY: progress }}
            className="h-full origin-top rounded-full bg-linear-to-t from-pink-500 via-blue-500 to-transparent"
          />
        </div>
        {/* Avatar */}
        <motion.div
          className="absolute left-1/2 z-10 -translate-x-1/2"
          style={{
            top: imagePosition,
          }}
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-md dark:border-neutral-950">
            <Image
              src="/images/profile/profile.webp"
              fill

              alt="Profile"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
