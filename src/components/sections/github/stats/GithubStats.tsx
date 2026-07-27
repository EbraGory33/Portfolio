import { GithubStatCard } from "./GithubStatCard";

export function GithubStats() {
  return (
    <div className="flex h-full gap-2 md:col-span-3 md:flex-col">
      <GithubStatCard />
      <GithubStatCard variant="forks" />
      <GithubStatCard variant="stars" />
    </div>
  );
}
