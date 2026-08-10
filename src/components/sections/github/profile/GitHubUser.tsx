// TODO:
// type GitHubUserProps = {};

// export function GitHubUser({}: GitHubUserProps) {
export function GitHubUser() {
  return (
    <div>
      <a
        className="text-sm font-semibold text-zinc-900 transition-colors hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300"
        href="https://github.com/EbraGory33"
        rel="noopener noreferrer"
        target="_blank"
      >
        @EbraGory33
      </a>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        Contribution Graph
      </p>
    </div>
  );
}
