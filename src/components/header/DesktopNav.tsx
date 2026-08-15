import { NavItems } from ".";
import { motion } from "framer-motion";
import { navigationContentMotion } from "./constant";

export function DesktopNav() {
  return (
    <motion.div
      className="relative flex w-full flex-col items-center py-1"
      variants={navigationContentMotion}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={navigationContentMotion.transition}
    >
      <NavItems />
    </motion.div>
  );
}
