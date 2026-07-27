import { type TechName } from "@/lib/types/tech";

export interface Project {
  id: string;
  title: string;
  slug: string;

  category: string;
  year: string;

  description: string;
  detail: string;

  features: string[];

  accentColor: string;
  backgroundGradient: string;

  technologies: TechName[];

  previewImages: string[];

  href: string;

  featured: boolean;
}
