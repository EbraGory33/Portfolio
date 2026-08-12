import { TechStack } from "@/components/tech";
import type { ProjectFrontmatter } from "@/lib/types";

import { FaGithub } from "react-icons/fa";
import { ArrowRight, ExternalLink } from "lucide-react";

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
              <svg
                aria-hidden="true"
                className="ml-[0.3em] size-[0.55em] translate-y-1 opacity-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:translate-y-0 group-hover:opacity-100"
                fill="none"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                ></path>
              </svg>
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
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-3.5"
                >
                  <path
                    d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                    opacity="0.2"
                  ></path>
                  <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                </svg> */}
                <FaGithub className="size-3.5" />
                GitHub
              </span>
              <ArrowRight className="ml-[0.3em] size-3.5 translate-y-1 opacity-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:translate-y-0 group-hover:opacity-100" />
              {/* <svg
                aria-hidden="true"
                className="ml-[0.3em] size-[0.55em] translate-y-1 opacity-0 transition-all duration-300 [motion-reduce:transition-none] group-hover:translate-y-0 group-hover:opacity-100"
                fill="none"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                ></path>
              </svg> */}
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
