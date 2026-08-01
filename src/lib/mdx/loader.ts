import type { Project, ProjectFrontmatter } from "@/lib/mdx/types";
import fs from "fs/promises";
import path from "path";
import {
  compileProject,
  parseMDX,
  parseFrontmatter,
  PROJECT_DIRECTORY,
  PROJECT_EXTENSION,
} from ".";

export async function getProject(slug: string): Promise<Project> {
  const filePath = path.join(
    process.cwd(),
    PROJECT_DIRECTORY,
    `${slug + PROJECT_EXTENSION}`,
  );
  // if (!fs.existsSync(filePath)) return null;

  const source = await fs.readFile(filePath, "utf8");

  const { data, content } = parseMDX(source);

  const { content: compiled } = await compileProject(content);

  return {
    slug,
    frontmatter: parseFrontmatter(data),
    // content,
    content: compiled,
  };
}
