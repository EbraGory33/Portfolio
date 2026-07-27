export const TECHS = {
  "NEXT.JS": {
    icon: "/icons/nextjs.svg",
  },
  REACT: {
    icon: "/icons/react.svg",
  },
  TYPESCRIPT: {
    icon: "/icons/typescript.svg",
  },
  "TAILWIND CSS": {
    icon: "/icons/tailwindcss.svg",
  },
  "NODE.JS": {
    icon: "/icons/nodejs.svg",
  },
  "DRIZZLE ORM": {
    icon: "/icons/drizzle.svg",
  },
  "MOTION.DEV": {
    icon: "/icons/motion.svg",
  },
  "SHADCN UI": {
    icon: "/icons/shadcn.svg",
  },
  "Web-Audio-API": {
    icon: "/icons/webaudioapi.svg",
  },
  Serwist: {
    icon: "/icons/serwist.svg",
  },
  ZOD: {
    icon: "/icons/zod.svg",
  },
  RECHARTS: {
    icon: "/icons/recharts.svg",
  },
} as const;

export type TechName = keyof typeof TECHS;
