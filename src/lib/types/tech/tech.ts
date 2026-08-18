export const TECHS = {
  "NEXT.JS": {
    icon: "devicon:nextjs",
  },
  REACT: {
    icon: "devicon:react",
  },
  TYPESCRIPT: {
    icon: "devicon:typescript",
  },
  "TAILWIND CSS": {
    icon: "devicon:tailwindcss",
  },
  "NODE.JS": {
    icon: "devicon:nodejs",
  },
  "DRIZZLE ORM": {
    icon: "simple-icons:drizzle",
  },
  "MOTION.DEV": {
    icon: "simple-icons:framer",
  },
  "SHADCN UI": {
    icon: "simple-icons:shadcnui",
  },
  "WEB AUDIO API": {
    icon: "mdi:waveform",
  },
  SERWIST: {
    icon: "mdi:progress-wrench",
  },
  ZOD: {
    icon: "simple-icons:zod",
  },
  RECHARTS: {
    icon: "lucide:chart-no-axes-combined",
  },
  EXPRESS: {
    icon: "simple-icons:express",
  },
  MONGODB: {
    icon: "devicon:mongodb",
  },
  JAVASCRIPT: {
    icon: "devicon:javascript",
  },
  HTML: {
    icon: "devicon:html5",
  },
  CSS: {
    icon: "devicon:css3",
  },
} as const;

export type TechName = keyof typeof TECHS;
