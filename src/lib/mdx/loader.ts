import fs from "fs/promises";
import path from "path";

import type { Project } from "@/lib/types";

import {
  compileProject,
  parseFrontmatter,
  parseMDX,
  PROJECT_DIRECTORY,
  PROJECT_EXTENSION,
} from ".";

export async function getAllProject(): Promise<Array<Project>> {
  const dir = path.join(process.cwd(), PROJECT_DIRECTORY);

  const files = await fs.readdir(dir);

  const projects = await Promise.all(
    files
      .filter((file) => file.endsWith(PROJECT_EXTENSION))
      .map(async (file) => {
        const slug = path.basename(file, PROJECT_EXTENSION);
        const filePath = path.join(dir, file);

        const source = await fs.readFile(filePath, "utf8");
        const { data } = parseMDX(source);

        return {
          slug,
          frontmatter: parseFrontmatter(data),
        };
      }),
  );

  return projects;
}

export async function getProject(slug: string): Promise<Project | null> {
  const filePath = path.join(
    process.cwd(),
    PROJECT_DIRECTORY,
    `${slug + PROJECT_EXTENSION}`,
  );
  // if (!fs.existsSync(filePath)) return null;
  try {
    const source = await fs.readFile(filePath, "utf8");

    const { data, content } = parseMDX(source);

    const { content: compiled } = await compileProject(content);

    return {
      slug,
      frontmatter: parseFrontmatter(data),
      content: compiled,
    };
  } catch (error) {
    return null;
  }
}
