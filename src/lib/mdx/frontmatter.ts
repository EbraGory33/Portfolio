// TODO: zod.parse(data)
import type { ProjectFrontmatter } from "@/lib/mdx/types";

export function parseFrontmatter(data: unknown) {
  return data as ProjectFrontmatter;
}
