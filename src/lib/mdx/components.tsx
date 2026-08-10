import type { ComponentPropsWithoutRef } from "react";

import { ContentBlock } from "@/components/mdx";
import {
  ProjectBody,
  // ProjectCallout,
  ProjectCode,
  ProjectDivider,
  ProjectHeading,
  ProjectImage,
  ProjectInlineCode,
  // ProjectLink,
  // ProjectList,
  // ProjectListItem,
  ProjectSection,
  // ProjectTable,
  // ProjectTableBody,
  // ProjectTableCell,
  // ProjectTableHead,
  // ProjectTableRow,
} from "@/components/project";

export function mdxComponents() {
  let sectionNumber = 1;

  return {
    ProjectSection,
    ProjectBody,
    ProjectImage,
    ProjectCode,

    h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
      <ProjectHeading number={sectionNumber++}>{children}</ProjectHeading>
    ),

    code: ({ children }: ComponentPropsWithoutRef<"code">) => (
      <ProjectInlineCode>{children}</ProjectInlineCode>
    ),

    hr: ProjectDivider,

    pre: ContentBlock,
  };
}

// // CallOuts later
// <div class="not-prose my-6 rounded-2xl border border-neutral-200 bg-neutral-200/50 p-1 dark:border-neutral-800 dark:bg-neutral-900/50">
//   <div class="relative overflow-hidden rounded-xl border border-neutral-200/80 bg-[#F6F6F8] shadow-xs dark:border-neutral-800 dark:bg-transparent"></div>
// </div>;
