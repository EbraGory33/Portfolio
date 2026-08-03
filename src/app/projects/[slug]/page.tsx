import { BackgroundImage, Content, PageBuilder } from "@/components/layout";
import { ProjectHeader, ProjectMeta } from "@/components/project";
import { getProject } from "@/lib/mdx/loader";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);
  // console.log("Frontmatter:", project.frontmatter);
  return (
    <>
      <BackgroundImage
        image="/images/backgrounds/blueprint.avif"
        alt="Blueprint"
      />

      <PageBuilder>
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
    </>
  );
}
