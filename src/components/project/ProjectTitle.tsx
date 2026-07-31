import { cn } from "@/lib/utils";

interface ProjectTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function ProjectTitle({
  className,
  children,
  ...props
}: ProjectTitleProps) {
  return (
    <h1 className={cn("font-bluu text-4xl", className)} {...props}>
      {children}
    </h1>
  );
}
