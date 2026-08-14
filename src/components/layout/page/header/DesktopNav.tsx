import { NavItems } from ".";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <NavItems />
    </motion.div>
  );
}

//   className="relative flex w-full flex-col items-center py-1"
//   style={{ opacity: 1, transform: "None" }}
// >
//   <div className="relative flex items-center">
//     <span
//       className="absolute inset-y-0 left-0 -z-10 rounded-full bg-neutral-900/8 dark:bg-white/10"
//       style={{ width: "69px", opacity: 1, transform: "none" }}
//     ></span>
//     <div
//       className="dark:bg-primary pointer-events-none absolute -top-2 left-0 -z-10 h-1 w-8 rounded-t-full bg-neutral-900"
//       style={{ opacity: 1, transform: "translateX(18.5px)" }}
//     >
//       <div className="absolute -top-3 -left-2 h-7 w-12 rounded-full bg-[radial-gradient(farthest-side_at_50%_50%,rgba(23,23,23,0.6),transparent)] blur-md dark:bg-[radial-gradient(farthest-side_at_50%_50%,color-mix(in_oklab,var(--color-primary)_62%,transparent),transparent)]"></div>
//     </div>
//     <ul className="relative flex items-center">
//       <li className="relative list-none" data-nav-id="/">
//         <a
//           aria-current="page"
//           className="block rounded-full px-4 py-1.5 text-sm font-normal text-neutral-950 transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-white dark:focus-visible:ring-white/25"
//           href="/"
//         >
//           Home
//         </a>
//       </li>
//       <li className="relative list-none" data-nav-id="/about">
//         <a
//           className="block rounded-full px-4 py-1.5 text-sm font-normal text-neutral-700 transition-colors duration-150 outline-none hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-white/70 dark:hover:text-white dark:focus-visible:ring-white/25"
//           href="/about"
//         >
//           About
//         </a>
//       </li>
//       <li className="relative list-none" data-nav-id="/projects">
//         <a
//           className="block rounded-full px-4 py-1.5 text-sm font-normal text-neutral-700 transition-colors duration-150 outline-none hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-white/70 dark:hover:text-white dark:focus-visible:ring-white/25"
//           href="/projects"
//         >
//           Work
//         </a>
//       </li>
//       <li className="relative list-none" data-nav-id="/blog">
//         <a
//           className="block rounded-full px-4 py-1.5 text-sm font-normal text-neutral-700 transition-colors duration-150 outline-none hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-white/70 dark:hover:text-white dark:focus-visible:ring-white/25"
//           href="/blog"
//         >
//           Blog
//         </a>
//       </li>
//       <li className="relative list-none" data-nav-id="more-dropdown">
//         <button
//           aria-expanded="false"
//           aria-haspopup="true"
//           className="flex cursor-pointer items-center gap-0.5 rounded-full px-4 py-1.5 text-sm font-normal text-neutral-700 transition-colors duration-150 outline-none select-none hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-white/70 dark:hover:text-white dark:focus-visible:ring-white/25"
//         >
//           More
//           <svg
//             fill="none"
//             height="24"
//             viewBox="0 0 24 24"
//             width="24"
//             xmlns="http://www.w3.org/2000/svg"
//             className="size-3.5 transition-transform duration-200 ease-out"
//           >
//             <path
//               d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="1.5"
//             ></path>
//           </svg>
//         </button>
//       </li>
//       <li className="ml-1 list-none">
//         <button
//           type="button"
//           tabindex="0"
//           data-cuelume-press=""
//           data-slot="button"
//           className="group/button focus-visible:border-ring aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([class*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [a]:hover:bg-primary/80 relative inline-block h-full shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-transparent bg-neutral-200 bg-clip-padding px-4 py-1.5 text-sm font-normal whitespace-nowrap text-neutral-800 transition-colors duration-200 outline-none select-none hover:bg-neutral-300 hover:text-neutral-950 focus-visible:ring-2 focus-visible:ring-blue-500/40 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 aria-invalid:ring-3 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/15 dark:hover:text-white dark:focus-visible:ring-white/25"
//         >
//           Book a Call
//           <div
//             aria-hidden="true"
//             className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-neutral-400/40 blur-sm dark:bg-white/35"
//           ></div>
//         </button>
//       </li>
//     </ul>
//   </div>
// </div>;
