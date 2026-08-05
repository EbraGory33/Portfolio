import type { ComponentPropsWithoutRef } from "react";
import {
  Children,
  isValidElement,
  type ComponentPropsWithRef,
  type ReactElement,
} from "react";

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

    pre: function CodeBlock({ children }: ComponentPropsWithRef<"pre">) {
      // const code = Children.only(children);
      const code = Children.only(children) as ReactElement<{
        className?: string;
        children: string;
      }>;

      if (!isValidElement(code)) {
        return <pre>{children}</pre>;
      }
      console.log(code.props.className);
      console.log(code.props);
      console.log(code);

      return <pre>{children}</pre>;
    },

    //   pre: function CodeBlock({ children }: ComponentPropsWithRef<"pre">) {
    //     console.log(children);

    //     const code = Children.only(children);
    //     if (code) console.log(code.props);
    //     return <pre>{children}</pre>;
    //   },
  };
}
