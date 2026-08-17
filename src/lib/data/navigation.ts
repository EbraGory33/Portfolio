import {
  Home,
  User,
  Folder,
  FileText,
  BookOpen,
  Laptop,
  Trophy,
  Link,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const pages = [
  {
    value: "home",
    label: "Home",
    link: "/",
    icon: Home,
    nav: "primary",
  },
  {
    value: "about",
    label: "About",
    link: "/about",
    icon: User,
    nav: "primary",
  },
  {
    value: "projects",
    label: "Work",
    link: "/projects",
    icon: Folder,
    nav: "primary",
  },
  {
    value: "blog",
    label: "Blog",
    link: "/blog",
    icon: FileText,
    nav: "primary",
  },
  {
    value: "guestbook",
    label: "Guestbook",
    link: "/guestbook",
    icon: BookOpen,
    nav: "more",
  },
  {
    value: "uses",
    label: "Uses",
    link: "/uses",
    icon: Laptop,
    nav: "more",
  },
  {
    value: "attribution",
    label: "Attribution",
    link: "/attribution",
    icon: Trophy,
    nav: "more",
  },
  {
    value: "links",
    label: "Links",
    link: "/links",
    icon: Link,
    nav: "more",
  },
];
export const primaryPages = new Set(
  pages.filter((page) => page.nav === "primary"),
);

export const morePages = new Map(
  pages.filter((page) => page.nav === "more").map((page) => [page.link, page]),
);

export const socials = [
  {
    value: "linkedin",
    label: "Linkedin",
    link: "https://linkedin.com/in/ebrahim-gory/",
    icon: FaLinkedin,
  },
  {
    value: "github",
    label: "Github",
    link: "https://github.com/ebragory33",
    icon: FaGithub,
  },
  {
    value: "instagram",
    label: "Instagram",
    link: "https://instagram.com/webstudios.dev/",
    icon: FaInstagram,
  },
  {
    value: "twitter",
    label: "X (Twitter)",
    link: "https://x.com/SWEbra24",
    icon: FaXTwitter,
  },
];
