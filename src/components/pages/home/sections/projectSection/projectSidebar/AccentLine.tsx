import { Project } from "@/lib/types/project";

interface AccentLineProps {
  accent: string;
}

export function AccentLine({ accent }: AccentLineProps) {
  return (
    <div
      aria-hidden="true"
      className={`my-4 me-4 h-0.5 min-w-6 bg-${accent}-500 drop-shadow-[0_0_16px_rgb(236_72_153/0.9)] transition-all duration-300 dark:bg-${accent}-400`}
    ></div>
  );
}
