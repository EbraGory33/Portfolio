"use client";
import { useRef } from "react";
import { Experience } from "@/lib/types/experience";
import { ExperienceCard, Timeline } from ".";
interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={timelineRef}
      className="mb-pagebuilder relative flex w-full flex-col divide-y overflow-hidden border-t"
    >
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}

      <Timeline containerRef={timelineRef} />
    </div>
  );
}
