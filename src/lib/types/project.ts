import { ReactElement } from "react";

import { type TechName } from "@/lib/types";

export type ProjectFrontmatter = {
  title: string;
  description: string;
  summary: string;

  published: string;
  updated?: string;

  type?: string;
  role?: string;

  tech: TechName[];

  Highlights: string[];

  github?: string;
  live?: string;

  featured?: boolean;

  cover: string;
  thumbnail: string;
  images?: string[];
};

// export interface Project {
//   id: string;
//   title: string;
//   slug: string;

//   category: string;
//   year: string;

//   description: string;
//   detail: string;

//   features: string[];

//   accentColor: string;
//   backgroundGradient: string;

//   technologies: TechName[];

//   previewImages: string[];

//   href: string;

//   featured: boolean;
// }

// export type Project = {
//   slug: string;
//   frontmatter: ProjectFrontmatter;
//   content?: ReactElement;
// };
export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content?: ReactElement;
}

export interface ProjectDataProps {
  projects: Project[];
}
