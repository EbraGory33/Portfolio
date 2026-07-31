import matter from "gray-matter";

export function parseMDX(source: string) {
  return matter(source);
}
