// TODO: Understand what is happeneing here
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Project } from "@/lib/types/project";

export function useActiveProject(projects: Project[]) {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const registerProject = useCallback(
    (id: string) => (node: HTMLDivElement | null) => {
      if (!node) return;

      if (!observerRef.current) {
        observerRef.current = new IntersectionObserver(
          (entries) => {
            const visibleEntry = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (!visibleEntry) return;

            const projectId =
              visibleEntry.target.getAttribute("data-project-id");

            const project = projects.find((p) => p.id === projectId);

            if (project) {
              setActiveProject(project);
            }
          },
          {
            threshold: [0.25, 0.5, 0.75],
            rootMargin: "-20% 0px -20% 0px",
          },
        );
      }

      node.setAttribute("data-project-id", id);

      observerRef.current.observe(node);
    },
    [projects],
  );

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return {
    activeProject,
    registerProject,
  };
}
