import { TechStack } from "@/components/tech";
import type { ProjectFrontmatter } from "@/lib/types";

import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export function ProjectMeta(project: ProjectFrontmatter) {
  return (
    <div className="mt-8 border-y">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 px-4 py-8 md:px-6">
          <div>
            <p className="mb-1.5 font-mono text-[10px] tracking-wider text-neutral-500 uppercase dark:text-neutral-500">
              Type
            </p>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              {project.type}
            </p>
          </div>
          <div>
            <p className="mb-1.5 font-mono text-[10px] tracking-wider text-neutral-500 uppercase dark:text-neutral-500">
              Role
            </p>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              {project.role}
            </p>
          </div>
          <div>
            <p className="mb-1.5 font-mono text-[10px] tracking-wider text-neutral-500 uppercase dark:text-neutral-500">
              Built
            </p>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              {project.published}
            </p>
          </div>
          <div>
            <p className="mb-1.5 font-mono text-[10px] tracking-wider text-neutral-500 uppercase dark:text-neutral-500">
              Updated
            </p>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              {project.updated}
            </p>
          </div>
          <div>
            <p className="mb-1.5 font-mono text-[10px] tracking-wider text-neutral-500 uppercase dark:text-neutral-500">
              Visit
            </p>
            <a
              className="group relative inline-flex items-center text-sm font-medium text-blue-600 before:pointer-events-none before:absolute before:top-[1.5em] before:left-0 before:h-[0.05em] before:w-full before:origin-right before:scale-x-0 before:bg-current before:transition-transform before:duration-300 before:ease-in-out before:content-[''] hover:text-blue-700 hover:before:origin-left hover:before:scale-x-100 dark:text-blue-400 dark:hover:text-blue-300"
              href={project.live}
              rel="noopener noreferrer"
              target="_blank"
              data-ph-capture-attribute-link-type="project_visit"
            >
              <span className="inline-flex items-center gap-1.5 leading-none">
                <ExternalLink className="size-3.5" />
                {project.live}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="ml-2 size-4 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
              />
            </a>
          </div>
          <div>
            <p className="mb-1.5 font-mono text-[10px] tracking-wider text-neutral-500 uppercase dark:text-neutral-500">
              Source
            </p>
            <a
              className="group relative inline-flex items-center text-sm font-medium text-blue-600 before:pointer-events-none before:absolute before:top-[1.5em] before:left-0 before:h-[0.05em] before:w-full before:origin-right before:scale-x-0 before:bg-current before:transition-transform before:duration-300 before:ease-in-out before:content-[''] hover:text-blue-700 hover:before:origin-left hover:before:scale-x-100 dark:text-blue-400 dark:hover:text-blue-300"
              href={project.github}
              rel="noopener noreferrer"
              target="_blank"
              data-ph-capture-attribute-link-type="project_source"
            >
              <span className="inline-flex items-center gap-1.5 leading-none">
                <FaGithub className="size-3.5" />
                GitHub
              </span>
              <ArrowUpRight className="ml-[0.3em] size-3.5 translate-y-1 opacity-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:translate-y-0 group-hover:opacity-100" />
            </a>
          </div>
        </div>
        <div className="border-t px-4 py-8 md:px-6 lg:border-t-0 lg:border-l">
          <p className="mb-3 font-mono text-[10px] tracking-wider text-neutral-500 uppercase dark:text-neutral-500">
            Tech Stack
          </p>
          <TechStack technologies={project.tech} />
        </div>
      </div>
    </div>
  );
}
