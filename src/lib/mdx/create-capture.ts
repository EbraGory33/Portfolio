import React from "react";

function extractChildren(node: React.ReactNode): React.ReactNode {
  if (Array.isArray(node)) {
    return node.map(extractChildren);
  }

  if (
    React.isValidElement<{ children: React.ReactNode }>(node) &&
    node.type === "p"
  ) {
    return node.props.children;
  }

  return node;
}

export function createCapture(name?: string) {
  let value: React.ReactNode = null;
  let captured = false;

  function Capture({ children }: { children: React.ReactNode }) {
    console.log(`[${name}] rendering`, children);
    console.log(`[${name}] captured?`, captured);
    if (!captured) {
      //   value = children;
      value = extractChildren(children);
      captured = true;

      console.log(`[${name}] SAVED`, value);

      return null;
    }

    // return React.createElement("p", null, children);
    return children;
    // return (<p>{children}</p>);
  }

  return {
    Component: Capture,
    getValue: () => {
      console.log(`[${name}] GET`, value);
      return value;
    },
  };
}

// lib/mdx/create-capture.ts
