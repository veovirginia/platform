import { type ClassValue, clsx } from "clsx";
import {
  Home,
  Calendar,
  Users2,
  Hammer,
  Code,
  BookOpen,
  UserCog2,
  Key,
} from "lucide-react";
import { dash } from "radash";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const COLORS: Record<string, string> = {
  "computer-science": `text-computer-science bg-computer-science-background`,
  math: `text-math bg-math-background`,
  statistics: "text-statistics bg-statistics-background",
  english: "text-english bg-english-background",
  commerce: "text-commerce bg-commerce-background",
  economics: "text-economics bg-economics-background",
};

export function getMajorClassname(major: string) {
  return COLORS[dash(major.toLowerCase())];
}

export const UNVERIFIED_ALLOWED_LINKS = ["/profile"];
export const SLUG_PREFIX = "/platform";

export function isCurrentPage(pathname: string, slug: string) {
  return pathname === `${SLUG_PREFIX}${slug}`;
}

export const SIDEBAR_LINKS = [
  {
    title: "Home",
    icon: Home,
    slug: "",
  },
  {
    title: "Events",
    icon: Calendar,
    slug: "/events",
  },
];

export const SIDEBAR_GROUPS = [
  {
    title: "Directory",
    children: [
      {
        title: "Users",
        icon: Users2,
        slug: "/users",
      },
      {
        title: "Projects",
        icon: Hammer,
        slug: "/projects",
      },
    ],
  },
  {
    title: "Community",
    children: [
      {
        title: "GitReal",
        icon: Code,
        slug: "/gitreal",
      },
      {
        title: "UVA Resources",
        icon: BookOpen,
        slug: "/resources",
      },
    ],
  },
  {
    title: "Settings",
    children: [
      {
        title: "Profile",
        icon: UserCog2,
        slug: "/profile",
      },
      {
        title: "API Keys",
        icon: Key,
        slug: "/keys",
      },
    ],
  },
];
