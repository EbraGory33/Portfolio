import {
  ProjectParagraph,
  ProjectImage,
  ProjectCode,
  ProjectCallout,
  ProjectList,
  ProjectListItem,
  ProjectTable,
  ProjectTableHead,
  ProjectTableBody,
  ProjectTableRow,
  ProjectTableCell,
  ProjectLink,
  ProjectDivider,
  ProjectInlineCode,
} from "@/components/project";
import { createCapture } from "./create-capture";

export const titleCapture = createCapture();
// const subtitleCapture = createCapture();
export const descriptionCapture = createCapture();

export const mdxComponents = {
  // First MDX h1 becomes the hero title
  h1: () => null,
  //   h1: titleCapture.Component,
  // First blockquote becomes subtitle
  //   blockquote: subtitleCapture.Component,
  blockquote: () => null,
  // First paragraph becomes description
  p: descriptionCapture.Component,
  //   // Headings
  //   h1: ProjectTitle,
  //   h2: ProjectHeading,
  //   h3: (props) => <ProjectHeading level={3} {...props} />,
  //   h4: (props) => <ProjectHeading level={4} {...props} />,
  //   // Text
  //   p: ProjectParagraph,
  //   strong: (props) => <strong className="font-semibold" {...props} />,
  //   em: (props) => <em className="italic" {...props} />,
  //   // Links
  //   a: ProjectLink,
  //   // Images
  //   img: ProjectImage,
  //   // Code
  //   pre: ProjectCode,
  //   code: ProjectInlineCode,
  //   // Quotes / Callouts
  //   blockquote: ProjectCallout,
  //   // Lists
  //   ul: ProjectList,
  //   ol: (props) => <ProjectList ordered {...props} />,
  //   li: ProjectListItem,
  //   // Tables
  //   table: ProjectTable,
  //   thead: ProjectTableHead,
  //   tbody: ProjectTableBody,
  //   tr: ProjectTableRow,
  //   td: ProjectTableCell,
  //   th: ProjectTableCell,
  //   // Misc
  //   hr: ProjectDivider,
};
