// TODO: find where goes
import Link from "next/link";

import { TechStack } from "@/components/tech";
import { background } from "@/lib/data";
import { Project } from "@/lib/types/project";

import { ProjectCardHeader,ProjectFrame } from ".";

interface ProjectLinkProps {
  project: Project;
  index: number;
  layout: "mobile" | "desktop";
}

export function ProjectLink({ project, index, layout }: ProjectLinkProps) {
  return layout == "mobile" ? (
    <>
      {/* TODO: other prop */}
      <ProjectCardHeader
        index={index}
        title={project.frontmatter.title}
        slug={project.slug}
      />
      <ProjectFrame
        id={project.slug}
        image={project.frontmatter.thumbnail}
        description={project.frontmatter.summary}
        background={background[index % background.length].gradient}
        layout="mobile"
        slug={project.slug}
      />
      <TechStack technologies={project.frontmatter.tech} />
    </>
  ) : layout == "desktop" ? (
    <Link
      id={`project-${index}`}
      href={`/projects/${project.slug}`}
      aria-label={`View Details of ${project.frontmatter.title}`}
      className="group shadow-border relative block aspect-16/11 w-full cursor-pointer overflow-hidden rounded-2xl bg-white p-1 sm:aspect-video md:aspect-16/10 lg:aspect-16/11 lg:rounded-3xl lg:p-2 dark:bg-white/6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 hidden h-px bg-[linear-gradient(90deg,rgba(0,0,0,0)_5%,rgba(255,255,255,0.8)_35%,rgb(255,255,255)_50%,rgba(255,255,255,0.8)_65%,rgba(0,0,0,0)_95%)] dark:block"
      ></div>
      <ProjectFrame
        id={project.slug}
        image={project.frontmatter.thumbnail}
        description={project.frontmatter.summary}
        background={background[index % background.length].gradient}
        layout="desktop"
        slug={project.slug}
      />
    </Link>
  ) : null;
}
