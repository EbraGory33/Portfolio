// TODO: zod.parse(data)
import type { ProjectFrontmatter } from "@/lib/types";

export function parseFrontmatter(data: unknown) {
  return data as ProjectFrontmatter;
}
