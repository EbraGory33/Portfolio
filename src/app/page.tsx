import { getAllProject } from "@/lib/mdx";
import { HomePage } from "@/components/pages";
// import { projects as test } from "@/lib/data/project";
export default async function Home() {
  const projects = await getAllProject();
  return (
    <main>
      <HomePage projects={projects} />
      {/* <HomePage projects={test} /> */}
    </main>
  );
}
