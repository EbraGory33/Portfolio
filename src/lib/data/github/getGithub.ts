import { GithubSectionData, GithubRepository } from "@/lib/types/tech";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME!;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;

const headers = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
};

const previousYear = new Date().getFullYear() - 1;
const from = `${previousYear}-01-01T00:00:00Z`;
const to = `${previousYear}-12-31T23:59:59Z`;
const CONTRIBUTIONS_QUERY = `
query(
  $login: String!
  $from: DateTime!
  $to: DateTime!
) {
  user(login: $login) {
    lastYear: contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            date
            contributionCount
          }
        }
      }
    }

    contributions2025: contributionsCollection(
      from: $from
      to: $to
    ) {
      contributionCalendar {
        totalContributions
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
          revalidate: 300,
          // revalidate: 60 * 30,
        },
      }),

      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
        {
          headers,
          next: {
            revalidate: 300,
            // revalidate: 60 * 30,
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
            from,
            to,
          },
        }),
        next: {
          // revalidate: 60 * 30,
          revalidate: 300,
        },
      }),
    ]);

  if (!profileResponse.ok) {
    throw new Error(
      `Failed to fetch GitHub profile for "${GITHUB_USERNAME}" (${profileResponse.status} ${profileResponse.statusText}).\n` +
        `Response: ${await profileResponse.text()}`,
    );
  }

  if (!reposResponse.ok) {
    throw new Error(
      `Failed to fetch repositories for "${GITHUB_USERNAME}" (${reposResponse.status} ${reposResponse.statusText}).\n` +
        `Response: ${await reposResponse.text()}`,
    );
  }

  if (!contributionsResponse.ok) {
    throw new Error(
      `Failed to fetch GitHub contributions for "${GITHUB_USERNAME}" (${contributionsResponse.status} ${contributionsResponse.statusText}).\n` +
        `Response: ${await contributionsResponse.text()}`,
    );
  }

  const profile = await profileResponse.json();
  const repos = (await reposResponse.json()) as GithubRepository[];
  const contributions = await contributionsResponse.json();

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0,
  );

  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

  const calendar = {
    total:
      contributions.data.user.lastYear.contributionCalendar.totalContributions,

    previousCalendarYearTotal:
      contributions.data.user.contributions2025.contributionCalendar
        .totalContributions,

    calendar: contributions.data.user.lastYear.contributionCalendar.weeks,
  };

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
