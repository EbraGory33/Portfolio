import { type TechName } from "@/lib/types/tech";

export interface Experience {
  id: string;
  company: string;
  logo: string;
  date: string;
  location?: string;
  type: string;
  title: string;

  responsibilities: {
    summary: string;
    details: string;
  }[];
  technologies: TechName[];
}
