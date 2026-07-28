import { Project } from "@/lib/types/project";

interface AccentLineProps {
  accent: string;
}
// interface AccentLineProps {
//   accent: "blue" | "green" | "cyan" | "pink" | "orange";
// }

export function AccentLine({ accent }: AccentLineProps) {
  const accentClasses = {
    blue: "bg-blue-500 dark:bg-blue-400 drop-shadow-[0_0_16px_rgb(59_130_246/0.9)]",
    green:
      "bg-green-500 dark:bg-green-400 drop-shadow-[0_0_16px_rgb(34_197_94/0.9)]",
    orange:
      "bg-orange-500 dark:bg-orange-400 drop-shadow-[0_0_16px_rgb(249_115_22/0.9)]",
    cyan: "bg-cyan-500 dark:bg-cyan-400 drop-shadow-[0_0_16px_rgb(6_182_212/0.9)]",
    pink: "bg-pink-500 dark:bg-pink-400 drop-shadow-[0_0_16px_rgb(236_72_153/0.9)]",
  };

  return (
    <div
      aria-hidden="true"
      className={`my-4 me-4 h-0.5 min-w-6 bg-${accent}-500 drop-shadow-[0_0_16px_rgb(236_72_153/0.9)] transition-all duration-300 dark:bg-${accent}-400`}
      // className={`my-4 me-4 h-0.5 min-w-6 transition-all duration-300 ${accentClasses[accent]}`}
    ></div>
  );
}
