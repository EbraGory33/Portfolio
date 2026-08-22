import { notFound } from "next/navigation";

import { BackgroundImage, PageBuilder } from "@/components/layout";
import { ProjectHeader, ProjectMeta } from "@/components/project";
import { getProject, getAllProject } from "@/lib/mdx/loader";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);
  // TODO: Generate a custom 404 page component
  if (!project) {
    return notFound();
  }
  return (
    <PageBuilder>
      <BackgroundImage
        image={project.frontmatter.cover}
        alt={`Project Cover - ${project.frontmatter.title}`}
      />
      <div className="relative col-span-1 min-w-0">
        <ProjectHeader
          title={project.frontmatter.title}
          description={project.frontmatter.description}
        />
        <ProjectMeta {...project.frontmatter} />
        <article className="prose dark:prose-invert max-w-none">
          <div>{project.content}</div>
        </article>
      </div>
    </PageBuilder>
  );
}
