import type { Root, Content } from "mdast";

function createSection(children: Content[]): Content {
  return {
    type: "mdxJsxFlowElement",

    name: "ProjectSection",

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
