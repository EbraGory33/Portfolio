// TODO: Understand what is happeneing here
"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Project } from "@/lib/types/project";

export function useActiveProject(projects: Project[]) {
  const [activeIndex, setActiveIndex] = useState(0);
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

            const project = projects.find((p) => p.slug === projectId);
            const index = projects.findIndex((p) => p.slug === projectId);

            if (project) {
              setActiveProject(project);
              setActiveIndex(index);
            }
          },
          {
            threshold: 0.75,
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
    activeIndex,
    activeProject,
    registerProject,
  };
}
