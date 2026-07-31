import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "./components";
import type { ProjectFrontmatter } from "./types";
import { createCapture } from "./create-capture";

export const titleCapture = createCapture();
// const subtitleCapture = createCapture();
export const descriptionCapture = createCapture();

export async function compileProject(
  source: string,
  //   frontmatter: ProjectFrontmatter,
) {
  return compileMDX<ProjectFrontmatter>({
    source,
    components: mdxComponents,

    // options: {
    //   parseFrontmatter: false,
    // },
  });
}
