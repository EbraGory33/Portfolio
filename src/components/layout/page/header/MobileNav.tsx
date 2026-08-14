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
        duration: 0.05,
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
