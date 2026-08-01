interface ProjectInlineCodeProps {
  children: React.ReactNode;
}
export function ProjectInlineCode({ children }: ProjectInlineCodeProps) {
  return (
    <code className="rounded-sm bg-neutral-200 px-1.5 py-0.5 font-mono font-normal text-zinc-700 before:content-none after:content-none in-data-mdx-link:text-blue-600 dark:bg-neutral-800 dark:text-zinc-300 dark:in-data-mdx-link:text-blue-400">
      {children}
    </code>
  );
}
