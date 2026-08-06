import {
  Children,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from "react";
import { FileTree, CodeBlock } from ".";

type CodeElementProps = {
  className?: string;
  children?: React.ReactNode;
  path?: string;
  lang?: string;
};

function getSource(children: ReactNode) {
  return typeof children === "string" ? children : null;
}
export function ContentBlock({
  children,
  ...props
}: ComponentPropsWithoutRef<"pre">) {
  const codeElement = Children.only(children) as ReactElement<CodeElementProps>;

  const language = codeElement.props.lang;
  const source = getSource(codeElement.props.children);
  const path = codeElement.props.path;

  console.log("CodeElement: ", codeElement);
  console.log("Language: ", language);
  console.log("Source: ", source);
  console.log("Path: ", path);

  if (source) {
    if (language === "filetree") return <FileTree>{source}</FileTree>;
    if (language)
      return (
        <CodeBlock path={path} lang={language}>
          {source}
        </CodeBlock>
      );
    return <pre>{children}</pre>;
  }
  return null;
}
