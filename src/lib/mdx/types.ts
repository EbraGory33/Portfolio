import { ReactElement } from "react";

export type ProjectFrontmatter = {
  title: string;
  description: string;
  summary?: string;

  published?: string;
  updated?: string;

  type?: string;
  role?: string;

  tech?: string[];

  github?: string;
  live?: string;

  featured?: boolean;

  cover?: string;
  thumbnail?: string;
};

export type Project = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: ReactElement;
  // content: string;
};
