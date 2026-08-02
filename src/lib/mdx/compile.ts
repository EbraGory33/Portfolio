import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "./components";
import { remarkSections } from "./plugins";
import type { ProjectFrontmatter } from "./types";

export async function compileProject(source: string) {
  return compileMDX<ProjectFrontmatter>({
    source,
    components: mdxComponents(),

    options: {
      mdxOptions: {
        remarkPlugins: [remarkSections, remarkGfm],
      },
    },
  });
}
