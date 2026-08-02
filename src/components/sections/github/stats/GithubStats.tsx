import type { GithubStats } from "@/lib/types";

import { GithubStatCard } from "./GithubStatCard";
interface GithubStatsProps {
  stats: GithubStats;
}

export function GithubStats({ stats }: GithubStatsProps) {
  return (
    <div className="flex h-full gap-2 md:col-span-3 md:flex-col">
      <GithubStatCard value={stats.followers} />
      <GithubStatCard variant="forks" value={stats.forks} />
      <GithubStatCard variant="stars" value={stats.stars} />
    </div>
  );
}
