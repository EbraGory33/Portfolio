import { HomePage } from "@/components/pages";
import { getAllProject } from "@/lib/mdx";

export default async function Home() {
  const projects = await getAllProject();
  return (
    <main>
      <HomePage projects={projects} />
    </main>
  );
}
