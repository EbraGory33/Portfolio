import { ProjectFeature } from ".";

interface ProjectFeaturesProps {
  accent: string;
  features: string[];
}

export function ProjectFeatures({ accent, features }: ProjectFeaturesProps) {
  return (
    <ul className="text-primary/90 mt-4 flex flex-col gap-y-2 text-sm xl:text-base">
      {features.map((feature, index) => (
        <ProjectFeature key={index} accent={accent} feature={feature} />
      ))}
    </ul>
  );
}
