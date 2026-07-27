import { GithubStatConfig } from "@/components/sections";

export interface GithubStatCardProps {
  variant?: keyof typeof GithubStatConfig;
  value: GithubStat;
}

export interface GithubSectionData {
  contributions: GithubContributions;
  stats: GithubStats;
}

export interface GithubContributions {
  total: number;
  previousCalendarYearTotal: number;
  calendar: GithubWeek[];
}

export interface GithubWeek {
  contributionDays: GithubContributionDay[];
}

export interface GithubContributionDay {
  date: string;
  contributionCount: number;
}

export interface GithubStats {
  followers: GithubStat;
  forks: GithubStat;
  stars: GithubStat;
}

export interface GithubStat {
  value: number;
}
