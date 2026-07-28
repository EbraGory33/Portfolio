// export const projects = [];
import { type Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "TaskFlow",
    slug: "taskflow",

    category: "Productivity",
    year: "2026",

    description:
      "A collaborative task management platform for teams to organize projects and track progress.",

    detail:
      "TaskFlow provides real-time collaboration, Kanban boards, due dates, team workspaces, and analytics to improve project visibility and productivity.",

    features: [
      "Drag-and-drop Kanban boards",
      "Real-time collaboration",
      "Task assignments",
      "Calendar integration",
      "Progress analytics",
    ],

    accentColor: "blue",
    backgroundGradient:
      "linear-gradient(145deg, rgb(30, 42, 120) 0%, rgb(41, 50, 203) 40%, rgb(90, 106, 239) 75%, rgb(160, 176, 255) 100%)",

    technologies: ["REACT", "TYPESCRIPT", "TAILWIND CSS"],

    previewImages: [
      "/images/projects/taskflow/1.png",
      "/images/projects/taskflow/2.png",
      "/images/projects/taskflow/3.png",
    ],

    href: "https://taskflow-demo.vercel.app",

    featured: true,
  },

  {
    id: "2",
    title: "FitTrack",
    slug: "fittrack",

    category: "Health & Fitness",
    year: "2025",

    description:
      "A fitness dashboard that helps users monitor workouts, nutrition, and progress.",

    detail:
      "FitTrack includes workout planning, meal logging, progress charts, and personalized fitness insights for maintaining healthy habits.",

    features: [
      "Workout planner",
      "Nutrition tracker",
      "Progress charts",
      "Goal reminders",
      "Mobile responsive",
    ],

    accentColor: "green",
    backgroundGradient:
      "linear-gradient(145deg, rgb(20, 83, 45) 0%, rgb(22, 163, 74) 40%, rgb(52, 211, 153) 75%, rgb(167, 243, 208) 100%)",

    technologies: ["REACT", "TYPESCRIPT", "TAILWIND CSS"],

    previewImages: [
      "/images/projects/fittrack/1.png",
      "/images/projects/fittrack/2.png",
    ],

    href: "https://fittrack-demo.vercel.app",

    featured: true,
  },

  {
    id: "3",
    title: "ShopSphere",
    slug: "shopsphere",

    category: "E-Commerce",
    year: "2025",

    description:
      "A modern online storefront featuring advanced product filtering and secure checkout.",

    detail:
      "ShopSphere offers product browsing, wishlists, customer authentication, Stripe payments, and an admin dashboard for inventory management.",

    features: [
      "Product search",
      "Wishlist",
      "Stripe checkout",
      "Admin dashboard",
      "Order history",
    ],

    accentColor: "orange",
    backgroundGradient:
      "linear-gradient(145deg, rgb(124, 45, 18) 0%, rgb(234, 88, 12) 40%, rgb(251, 146, 60) 75%, rgb(254, 215, 170) 100%)",

    technologies: ["NEXT.JS", "TYPESCRIPT"],

    previewImages: [
      "/images/projects/shopsphere/1.png",
      "/images/projects/shopsphere/2.png",
      "/images/projects/shopsphere/3.png",
    ],

    href: "https://shopsphere-demo.vercel.app",

    featured: false,
  },

  {
    id: "4",
    title: "TravelMate",
    slug: "travelmate",

    category: "Travel",
    year: "2024",

    description:
      "An itinerary planning application for organizing trips and discovering destinations.",

    detail:
      "TravelMate helps users build travel plans, save destinations, explore maps, and manage bookings within a single interface.",

    features: [
      "Interactive maps",
      "Trip planner",
      "Saved destinations",
      "Weather forecasts",
      "Expense tracking",
    ],

    accentColor: "cyan",
    backgroundGradient:
      "linear-gradient(145deg, rgb(22, 78, 99) 0%, rgb(6, 182, 212) 40%, rgb(56, 189, 248) 75%, rgb(186, 230, 253) 100%)",

    technologies: ["REACT", "TYPESCRIPT", "TAILWIND CSS"],

    previewImages: [
      "/images/projects/travelmate/1.png",
      "/images/projects/travelmate/2.png",
    ],

    href: "https://travelmate-demo.vercel.app",

    featured: false,
  },

  {
    id: "5",
    title: "DevPortfolio",
    slug: "devportfolio",

    category: "Portfolio",
    year: "2026",

    description:
      "A customizable developer portfolio showcasing projects, blogs, and technical skills.",

    detail:
      "DevPortfolio features animated UI, markdown blog support, dark mode, SEO optimization, and project case studies for developers.",

    features: [
      "Animated UI",
      "Markdown blog",
      "Dark mode",
      "SEO optimized",
      "Responsive design",
    ],

    accentColor: "pink",
    backgroundGradient:
      "linear-gradient(145deg, rgb(131, 24, 67) 0%, rgb(236, 72, 153) 40%, rgb(244, 114, 182) 75%, rgb(251, 207, 232) 100%)",

    technologies: ["REACT", "TYPESCRIPT", "TAILWIND CSS"],

    previewImages: [
      "/images/projects/devportfolio/1.png",
      "/images/projects/devportfolio/2.png",
      "/images/projects/devportfolio/3.png",
    ],

    href: "https://portfolio-demo.vercel.app",

    featured: true,
  },
];
