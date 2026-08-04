import { ProjectLink } from "@/components/project";
import type { ProjectDataProps } from "@/lib/types";

export function ProjectCatalog({ projects }: ProjectDataProps) {
  return (
    <div className="relative px-3 md:px-4">
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <div className="h-full w-px border-l border-dashed"></div>
        <div className="absolute top-0 -left-px h-18 w-0.75 bg-linear-to-b from-neutral-50 to-transparent dark:from-neutral-950"></div>
        <div className="absolute bottom-0 -left-px h-18 w-0.75 bg-linear-to-t from-neutral-50 to-transparent dark:from-neutral-950"></div>
      </div>
      <div
        className="no-js-fix grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2 lg:gap-y-0"
        style={{ opacity: 1 }}
      >
        {projects.map((project, index) => (
          <div
            className={`${index % 2 === 0 && index !== 0 ? "mt-12" : index % 2 != 0 ? "mt-48" : ""} group no-js-fix relative flex flex-col`}
            style={{ opacity: 1, transform: "none" }}
          >
            <div
              className={`${index % 2 === 0 ? "right-[-1.35rem] flex-row xl:right-[-1.35rem]" : "left-[-1.35rem] flex-row-reverse xl:left-[-1.35rem]"} absolute top-[64px] hidden w-[calc(100%+2.35rem)] items-center lg:flex`}
            >
              <div
                aria-hidden="true"
                className="h-px flex-1 border-t border-dashed transition-colors duration-500 group-hover:border-neutral-400 dark:group-hover:border-neutral-700"
                style={{ transformOrigin: "right center", transform: "none" }}
              ></div>
              <div
                aria-hidden="true"
                className="ring-border relative flex size-3 items-center justify-center rounded-full bg-neutral-50 ring-1 transition-[box-shadow,background-color] duration-500 group-hover:ring-2 group-hover:ring-neutral-400 dark:bg-neutral-950 dark:group-hover:ring-neutral-600"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="size-1 rounded-full bg-neutral-400 transition-colors duration-500 group-hover:bg-neutral-600 dark:bg-neutral-600 dark:group-hover:bg-neutral-300"></div>
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-6 lg:gap-8">
              <ProjectLink project={project} index={index} layout="mobile" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
