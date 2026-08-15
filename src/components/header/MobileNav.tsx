"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { navigationContentMotion } from "./constant";
import { MenuNavTrigger } from "@/components/menu";
export function MobileNav() {
  return (
    <motion.div
      className="mt-0.5"
      variants={navigationContentMotion}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={navigationContentMotion.transition}
    >
      <MenuNavTrigger variant="mobile" />
    </motion.div>
  );
}
