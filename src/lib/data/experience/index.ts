// export const experiences = [];
import { Experience } from "@/lib/types/experience";

export const experienceData: Experience[] = [
  {
    id: "builderio",
    company: "Builder.io",
    logo: "/logos/builderio.svg",
    date: "May 2024 – Present",
    location: "Remote",
    type: "Full-time",
    title: "Frontend Software Engineer",
    responsibilities: [
      {
        details: "Architected Headless Systems (Sanity/Contentful)",
        summary:
          "Designed reusable page-builder blocks and data modeling structures. Optimized GROQ queries, improving content delivery speed by 25% across 7+ production sites.",
      },
      {
        details: "Developed Scalable Next.js Applications",
        summary:
          "Built performant applications using the App Router, Server Components, and TypeScript while maintaining high code quality and accessibility.",
      },
      {
        details: "Created Reusable UI Components",
        summary:
          "Implemented a shared component library that accelerated feature development and ensured design consistency across projects.",
      },
      {
        details: "Optimized Performance",
        summary:
          "Reduced bundle sizes, improved Core Web Vitals, and optimized rendering strategies for faster page loads.",
      },
    ],
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS"],
  },
  {
    id: "freelance",
    company: "Freelance",
    logo: "/logos/freelance.svg",
    date: "Jan 2023 – Apr 2024",
    location: "Remote",
    type: "Contract",
    title: "Frontend Developer",
    responsibilities: [
      {
        details: "Built Production Websites",
        summary:
          "Delivered modern, responsive web applications for startups using React, Next.js, and Tailwind CSS.",
      },
      {
        details: "Integrated Headless CMS",
        summary:
          "Connected Contentful and Sanity with dynamic page builders, enabling non-technical teams to manage content independently.",
      },
      {
        details: "Collaborated Across Teams",
        summary:
          "Worked closely with designers and backend engineers to deliver features quickly while maintaining a high standard of quality.",
      },
    ],
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS"],
  },
];

export const experiences = experienceData;
