// // export const experiences = [];
import { Experience } from "@/lib/types/experience";

// export const experienceData: Experience[] = [
//   {
//     id: "builderio",
//     company: "Builder.io",
//     logo: "/logos/builderio.svg",
//     date: "May 2024 – Present",
//     location: "Remote",
//     type: "Full-time",
//     title: "Frontend Software Engineer",
//     responsibilities: [
//       {
//         details: "Architected Headless Systems (Sanity/Contentful)",
//         summary:
//           "Designed reusable page-builder blocks and data modeling structures. Optimized GROQ queries, improving content delivery speed by 25% across 7+ production sites.",
//       },
//       {
//         details: "Developed Scalable Next.js Applications",
//         summary:
//           "Built performant applications using the App Router, Server Components, and TypeScript while maintaining high code quality and accessibility.",
//       },
//       {
//         details: "Created Reusable UI Components",
//         summary:
//           "Implemented a shared component library that accelerated feature development and ensured design consistency across projects.",
//       },
//       {
//         details: "Optimized Performance",
//         summary:
//           "Reduced bundle sizes, improved Core Web Vitals, and optimized rendering strategies for faster page loads.",
//       },
//     ],
//     technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS"],
//   },
// {
//   id: "freelance",
//   company: "Freelance",
//   logo: "/logos/freelance.svg",
//   date: "Jan 2023 – Apr 2024",
//   location: "Remote",
//   type: "Contract",
//   title: "Frontend Engineer",
//   responsibilities: [
//     {
//       details: "Built Production Websites",
//       summary:
//         "Delivered modern, responsive web applications for startups using React, Next.js, and Tailwind CSS.",
//     },
//     {
//       details: "Integrated Headless CMS",
//       summary:
//         "Connected Contentful and Sanity with dynamic page builders, enabling non-technical teams to manage content independently.",
//     },
//     {
//       details: "Collaborated Across Teams",
//       summary:
//         "Worked closely with designers and backend engineers to deliver features quickly while maintaining a high standard of quality.",
//     },
//   ],
//   technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS"],
// },
// ];

// export const experiences = experienceData;

export const experienceData: Experience[] = [
  {
    id: "freelance",
    company: "Freelance",
    logo: "/logos/freelance.svg",
    date: "Jan 2023 – Present",
    location: "Remote",
    type: "Contract",
    title: "Software Engineer",

    responsibilities: [
      {
        details: "Built Full-Stack Web Applications",
        summary:
          "Developed responsive web applications using React and Next.js, building reusable components and integrating backend services to deliver maintainable user-facing features.",
      },
      {
        details: "Developed RESTful APIs",
        summary:
          "Built and integrated RESTful API endpoints using Node.js and Express to support application data, authentication, and frontend functionality.",
      },
      {
        details: "Worked with Databases",
        summary:
          "Integrated MongoDB and PostgreSQL into full-stack applications, working with application data models and backend services to support dynamic user experiences.",
      },
      {
        details: "Improved UI & Accessibility",
        summary:
          "Created responsive interfaces with React, TypeScript, HTML, and CSS while applying accessibility-first practices across reusable UI components.",
      },
      {
        details: "Collaborated & Maintained Code",
        summary:
          "Used Git and GitHub to manage source code, troubleshoot application issues, review changes, and collaborate throughout the development lifecycle.",
      },
    ],

    technologies: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "NODE.JS",
      "EXPRESS",
      "MONGODB",
      "HTML",
      "CSS",
      "PYTHON",
      "JAVA",
    ],
  },
  {
    id: "reality-ai-labs",
    company: "Reality AI Labs",
    logo: "/logos/reality-ai-labs.svg",
    date: "Nov 2024 – Aug 2025",
    location: "New York, NY",
    type: "Open Source",
    title: "Open-Source Software Developer",
    responsibilities: [
      {
        details: "Built Secure Authentication Systems",
        summary:
          "Implemented secure password reset flows using Next.js, Firebase Auth, reCAPTCHA, and validation, reducing password reset errors by 15% based on application logs.",
      },
      {
        details: "Optimized Application Performance",
        summary:
          "Optimized the Marvel Launchpad dashboard using Firestore and Next.js API routes, reducing page load times to under 600ms.",
      },
      {
        details: "Resolved Critical API & Authentication Issues",
        summary:
          "Resolved 7 critical API and authentication bugs involving token validation and delivered 2 educator tools, reducing recurring authentication-related bug reports from 13 to 9.",
      },
      {
        details: "Developed Authenticated User Profiles",
        summary:
          "Built authenticated user profiles with 5 configurable fields, secure image uploads, and social link integrations, improving profile completion by 10%.",
      },
    ],
    technologies: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "FIREBASE",
      "FIRESTORE",
      "REST APIs",
    ],
  },
];

export const experiences = experienceData;

export const educationData = [
  {
    id: "per-scholas",
    school: "Per Scholas",
    logo: "/logos/per-scholas.svg",
    date: "Nov 2025",
    location: "New York, NY",
    degree: "Software Engineering Immersive Training Program",
    details: [
      "Hands-on software engineering training covering Git/GitHub, Postman, NPM, Agile/Scrum, debugging, and accessibility-first design.",
    ],
    technologies: [
      "GIT",
      "GITHUB",
      "POSTMAN",
      "NPM",
      "AGILE/SCRUM",
      "ACCESSIBILITY",
    ],
  },
  {
    id: "lehman-college",
    school: "Herbert H. Lehman College",
    logo: "/logos/lehman-college.svg",
    date: "May 2024",
    location: "Bronx, NY",
    degree: "Bachelor of Science in Computer Science",
    details: [
      "Completed coursework in Data Structures, Algorithms, Database Systems, Cryptography, and Mobile Programming.",
      "Dean's List — Spring 2022.",
    ],
    technologies: [
      "DATA STRUCTURES",
      "ALGORITHMS",
      "DATABASE SYSTEMS",
      "CRYPTOGRAPHY",
      "MOBILE PROGRAMMING",
    ],
  },
];

export const education = educationData;
