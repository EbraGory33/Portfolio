import Image from "next/image";
import { MapPin, BriefcaseBusiness } from "lucide-react";
import { Experience } from "@/lib/types/experience";
import { TechStack } from "@/components/pages/home";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="relative grid grid-cols-[1fr_auto_1fr] gap-x-4 px-5 py-12 md:grid-cols-[30%_auto_1fr] md:gap-x-12">
      {/* Left */}
      <div className="col-span-3 mb-8 h-full pl-12 md:col-span-1 md:mb-0 md:pl-0">
        <div className="sticky flex flex-col items-start gap-y-4">
          <time
            className="text-muted-foreground font-mono text-xs font-medium tracking-wider uppercase"
            dateTime={experience.date}
          >
            {experience.date}
          </time>

          <span className="flex items-center gap-3">
            <div className="relative size-9 shrink-0 overflow-hidden rounded-md border shadow-sm">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                // fill
                className="object-cover object-center"
                width="50"
                height="50"
              />
            </div>

            <h2 className="font-bluu text-2xl text-neutral-900 dark:text-neutral-100">
              {experience.company}
            </h2>
          </span>
          <div className="mt-1 flex flex-col gap-1.5">
            {experience.location && (
              <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>{experience.location}</span>
              </div>
            )}
            <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
              <BriefcaseBusiness className="h-3.5 w-3.5 shrink-0" />
              <span>{experience.type}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Spacer */}
      <div className="hidden w-8 md:block" />

      {/* Right */}
      <div className="col-span-3 pl-12 md:col-span-1 md:pl-0">
        <div className="flex flex-col text-sm leading-relaxed">
          <h3 className="font-bluu mb-4 text-2xl text-neutral-900 dark:text-neutral-100">
            {experience.title}
          </h3>

          <div className="mb-4 text-neutral-600 dark:text-neutral-400">
            <ul className="md:pl-4my-4 flex list-disc flex-col space-y-2 gap-y-3 pl-6 marker:text-neutral-300 md:list-disc dark:marker:text-neutral-600">
              {experience.responsibilities.map((item, index) => (
                <li key={index} className="relative pl-0">
                  <strong className="font-medium text-neutral-900 dark:text-white">
                    {/* <strong className="font-semibold text-neutral-900 dark:text-white"> */}
                    {item.details}:
                  </strong>{" "}
                  {item.summary}
                </li>
              ))}
            </ul>
          </div>
          <TechStack technologies={experience.technologies} />
        </div>
      </div>
    </article>
  );
}
