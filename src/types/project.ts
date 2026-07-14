export interface Project {
  id: string;
  title: string;
  slug: string;

  category: string;
  year: string;

  description: string;

  accentColor: string;

  technologies: string[];

  previewImages: string[];

  href: string;

  featured: boolean;
}
