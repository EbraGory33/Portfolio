import { ProjectFeature } from ".";

interface ProjectFeaturesProps {
  color: string;
  features: string[];
}

export function ProjectFeatures({ color, features }: ProjectFeaturesProps) {
  // console.log("ProjectFeatures features:", features);
  return (
    <ul className="text-primary/90 mt-4 flex flex-col gap-y-2 text-sm xl:text-base">
      {features.map((feature, index) => (
        <ProjectFeature key={index} color={color} feature={feature} />
      ))}
    </ul>
  );
}
