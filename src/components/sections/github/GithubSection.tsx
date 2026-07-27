import { GithubSectionData } from "@/lib/types/tech";
import { getGithubData } from "@/lib/github";
import { SectionBuilder } from "@/components/layout";
import { GithubProfile } from "./profile";
import { GithubStats } from "./stats";

export async function GithubSection() {
  const githubData: GithubSectionData = await getGithubData();
  return (
    <SectionBuilder
      className=""
      header={"OPEN SOURCE"}
      headline={"Code and Contributions"}
      alignment="center"
    >
      <div className="grid w-full grid-cols-1 gap-2 border-y md:grid-cols-12">
        <GithubProfile />
        <GithubStats />
      </div>
    </SectionBuilder>
  );
}
