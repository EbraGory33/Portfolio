import { GithubSectionData } from "@/lib/types/tech";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME!;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;

const headers = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
};

const CONTRIBUTIONS_QUERY = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
            color
          }
        }
      }
    }
  }
}
`;
export async function getGithubData(): Promise<GithubSectionData> {
  const [profileResponse, reposResponse, contributionsResponse] =
    await Promise.all([
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
      fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: CONTRIBUTIONS_QUERY,
          variables: {
            login: GITHUB_USERNAME,
          },
        }),
        next: {
          revalidate: 60 * 30,
        },
      }),
    ]);

  if (!profileResponse.ok) {
    throw new Error("Failed to fetch GitHub profile.");
  }

  if (!reposResponse.ok) {
    throw new Error("Failed to fetch GitHub repositories.");
  }
  if (!contributionsResponse.ok) {
    throw new Error("Failed to fetch GitHub contributions.");
  }

  const profile = await profileResponse.json();
  const repos = await reposResponse.json();
  const contributions = await contributionsResponse.json();

  const totalStars = repos.reduce(
    (sum: number, repo: any) => sum + repo.stargazers_count,
    0,
  );

  const totalForks = repos.reduce(
    (sum: number, repo: any) => sum + repo.forks_count,
    0,
  );
  const calendar =
    contributions.data.user.contributionsCollection.contributionCalendar;

  return {
    contributions: calendar,

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
