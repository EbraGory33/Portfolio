"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { navigationContentMotion } from "./constant";
import { MobileNavTrigger } from ".";
export function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div
      className="mt-0.5"
      variants={navigationContentMotion}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={navigationContentMotion.transition}
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
