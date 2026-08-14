import { NavItems } from ".";
import { motion } from "framer-motion";

export function DesktopNav() {
  return (
    <motion.div
      className="relative flex w-full flex-col items-center py-1"

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
      <NavItems />
    </motion.div>
  );
}
