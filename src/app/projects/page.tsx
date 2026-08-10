import { ProjectPage } from "@/components/pages";
import { getAllProject } from "@/lib/mdx/loader";
// import { projects as test } from "@/lib/data/project";

export default async function Home() {
  const Projects = await getAllProject();
  // console.log("Projects: ", Projects);
  return <ProjectPage projects={Projects} />;
  // return <ProjectPage projects={test} />;
}
