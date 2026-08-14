"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MobileNavTrigger } from ".";
export function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div
      className="mt-0.5"

      initial={{
        opacity: 0,
        transform: "translateY(6px) scale(0.97)",
      }}
      animate={{
        opacity: 1,
        transform: "translateY(0px) scale(1)",
        transitionEnd: {
          transform: "none",
        },
      }}
      exit={{
        opacity: 0,
        transform: "translateY(-6px) scale(0.97)",
      }}

      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <MobileNavTrigger
        expanded={isMobileMenuOpen}
        onClick={() => {
          setIsMobileMenuOpen((open) => !open);
        }}
      />
    </motion.div>
  );
}
// Todo:
// <div
//   className="mt-1.25 flex min-w-46 cursor-pointer items-center justify-center gap-2.5 px-2.5 py-1"
//   style={{
//     opacity: 1,
//     transform: "translateY(1.78798px) scale(0.99106)",
//   }}
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="1em"
//     height="1em"
//     fill="currentColor"
//     viewBox="0 0 256 256"
//     className="size-5 text-neutral-500 dark:text-white/60"
//   >
//     <path
//       d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm16,112L80,176l32-64,64-32Z"
//       opacity="0.2"
//     ></path>
//     <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path>
//   </svg>
//   <span className="text-sm font-medium whitespace-nowrap text-neutral-600 select-none dark:text-white/70">
//     tap to explore
//   </span>
// </div>;
