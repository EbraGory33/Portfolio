interface SidebarHeaderProps {
  title: string;
}

export function SidebarHeader({ title }: SidebarHeaderProps) {
  return <h3 className="font-bluu text-foreground text-2xl">{title}</h3>;
}
