import { GithubSectionData } from "@/lib/types/tech";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME!;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;

const headers = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
};

export async function getGithubData(): Promise<GithubSectionData> {
  const [profileResponse, reposResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers,
      next: {
        revalidate: 60 * 30,
      },
    }),

    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers,
        next: {
          revalidate: 60 * 30,
        },
      },
    ),
  ]);

  if (!profileResponse.ok) {
    throw new Error("Failed to fetch GitHub profile.");
  }

  if (!reposResponse.ok) {
    throw new Error("Failed to fetch GitHub repositories.");
  }

  const profile = await profileResponse.json();
  const repos = await reposResponse.json();

  const totalStars = repos.reduce(
    (sum: number, repo: any) => sum + repo.stargazers_count,
    0,
  );

  const totalForks = repos.reduce(
    (sum: number, repo: any) => sum + repo.forks_count,
    0,
  );

  return {
    contributions: {
      total: 0,
      calendar: [],
    },

    stats: {
      followers: {
        value: profile.followers,
      },

      forks: {
        value: totalForks,
      },

      stars: {
        value: totalStars,
      },
    },
  };
}
