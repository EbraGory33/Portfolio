interface ProjectDetailsProps {
  detail: string;
}

export function ProjectDetails({ detail }: ProjectDetailsProps) {
  return (
    <p className="text-primary/90 my-2 text-sm font-light xl:text-base">
      {detail}
    </p>
  );
}
