import { ProjectPage } from "@/components/pages";
import { getAllProject } from "@/lib/mdx/loader";

export default async function Home() {
  const Projects = await getAllProject();
  return <ProjectPage projects={Projects} />;
}
