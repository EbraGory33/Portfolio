import type { Content, Image, Paragraph, Root } from "mdast";

function isImageParagraph(node: Content): node is Paragraph {
  return (
    node.type === "paragraph" &&
    node.children.length === 1 &&
    node.children[0].type === "image"
  );
}

function resolveLayout(children: Content[]) {
  const first = children[0];

  if (first.type === "code")
    return { component: "ProjectCode", attributes: [] };
  if (first.type === "blockquote")
    return { component: "ProjectCallout", attributes: [] };

  if (isImageParagraph(first)) {
    const image = first.children[0] as Image;
    return {
      component: "ProjectImage",
      attributes: [
        {
          type: "mdxJsxAttribute",
          name: "src",
          value: image.url,
        },
        {
          type: "mdxJsxAttribute",
          name: "alt",
          value: image.alt ?? "",
        },
      ],
    };
  }
  return {
    component: "ProjectSection",
    attributes: [],
  };
}

function createSection(children: Content[]): Content {
  const { component, attributes } = resolveLayout(children);

  if (component === "ProjectSection") {
    const heading = children[0] as Content;
    const body = children.slice(1);
    children = [heading, createBody(body)];
    // console.dir(heading, { depth: null });
  }
  const content = {
    type: "mdxJsxFlowElement",
    name: component,
    attributes: attributes,
    children,
    data: {
      _mdxExplicitJsx: true,
    },
  } as Content;
  // console.dir(content, { depth: null });

  return content;
}

function createBody(children: Content[]): Content {
  return {
    type: "mdxJsxFlowElement",

    name: "ProjectBody",

    attributes: [],

    children,

    data: {
      _mdxExplicitJsx: true,
    },
  } as Content;
}

export function remarkSections() {
  return (tree: Root) => {
    const newChildren: Content[] = [];
    let currentSection: Content[] = [];

    for (const node of tree.children) {
      // Found a section boundary
      if (node.type === "thematicBreak") {
        // Wrap everything we've collected
        if (currentSection.length > 0) {
          newChildren.push(createSection(currentSection));
          currentSection = [];
        }

        // Keep the HR in the document
        newChildren.push(node);

        continue;
      }

      // Collect everything until the next HR
      currentSection.push(node);
    }

    // Last section (no trailing HR)
    if (currentSection.length > 0) {
      newChildren.push(createSection(currentSection));
    }

    tree.children = newChildren;
  };
}
