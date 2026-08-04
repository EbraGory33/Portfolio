import { Project } from "@/lib/types/project";

interface AccentLineProps {
  accent: string;
}
// interface AccentLineProps {
//   accent: "blue" | "green" | "cyan" | "pink" | "orange";
// }

export function AccentLine({ accent }: AccentLineProps) {
  return (
    <div
      aria-hidden="true"
      className={`${accent} my-4 me-4 h-0.5 min-w-6 transition-all duration-300`}
    ></div>
  );
}
