interface ProjectFeatureProps {
  accent: string;
  feature: string;
}

export function ProjectFeature({ accent, feature }: ProjectFeatureProps) {
  return (
    <li className="flex items-start">
      <svg
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        className={`me-1.5 mt-0.5 size-5 shrink-0 bg-${accent}-600/20 fill-${accent}-500 text-${accent}-600 drop-shadow-[0_0_16px_rgb(236_72_153/0.9)] transition-all duration-300 lg:bg-transparent dark:fill-${accent}-400 dark:text-${accent}-400"`}
      >
        <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
      </svg>
      <span>{feature}</span>
    </li>
  );
}
