import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import type { ProjectFrontmatter } from "@/lib/types";

import { mdxComponents } from "./components";
import { remarkCodeMeta,remarkSections } from "./plugins";

export async function compileProject(source: string) {
  return compileMDX<ProjectFrontmatter>({
    source,
    components: mdxComponents(),

    options: {
      mdxOptions: {
        // remarkPlugins: [remarkSections, remarkGfm],
        remarkPlugins: [remarkGfm, remarkSections, remarkCodeMeta],
      },
    },
  });
}
