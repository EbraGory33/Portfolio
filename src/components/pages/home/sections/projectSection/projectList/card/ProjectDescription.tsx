// TODO:
import { ProjectArrow } from "./ProjectArrow";

export function ProjectDescription() {
  return (
    <div className="relative z-10 flex w-full items-center justify-between gap-8 px-4 py-4 text-white/70 lg:px-10 lg:py-8">
      <h3 className="text-base lg:text-2xl">
        Keychron meets typing test — every key has its own sound, every stat
        tracked
      </h3>

      <ProjectArrow />
    </div>
  );
}
