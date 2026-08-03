import { ReactElement } from "react";
import { type TechName } from "@/lib/types/tech";

export type ProjectFrontmatter = {
  title: string;
  description: string;
  summary?: string;

  published?: string;
  updated?: string;

  type?: string;
  role?: string;
  // tech?: string[];
  tech: TechName[];

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
};
