import type { ComponentPropsWithoutRef } from "react";

import {
  ProjectBody,
  ProjectCallout,
  ProjectCode,
  ProjectDivider,
  ProjectHeading,
  ProjectImage,
  ProjectInlineCode,
  ProjectLink,
  ProjectList,
  ProjectListItem,
  ProjectSection,
  ProjectTable,
  ProjectTableBody,
  ProjectTableCell,
  ProjectTableHead,
  ProjectTableRow,
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
  };
}
