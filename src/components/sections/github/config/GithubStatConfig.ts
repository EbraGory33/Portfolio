import { FollowersOverlay, ForksOverlay, StarsOverlay } from "../overlays";

type Variant = "followers" | "forks" | "stars";
export const GithubStatConfig = {
  followers: {
    title: "Followers",
    color: "text-pink-600 dark:text-pink-400",
    overLay: FollowersOverlay,
  },
  forks: {
    title: "Forks",
    color: "text-teal-600 dark:text-teal-400",
    overLay: ForksOverlay,
  },
  stars: {
    title: "GitHub Stars",
    color: "text-amber-600 dark:text-amber-400",
    overLay: StarsOverlay,
  },
} satisfies Record<
  Variant,
  {
    title: string;
    color: string;
    overLay: React.ComponentType;
  }
>;
