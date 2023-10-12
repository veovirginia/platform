import { type ClassValue, clsx } from "clsx";
import { dash } from "radash";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const COLORS: Record<string, string> = {
  "computer-science": `text-computer-science bg-computer-science-background border-computer-science-muted`,
  math: `text-math bg-math-background border-math-muted`,
};

export function getMajorClassname(major: string) {
  const formattedMajor = dash(major.toLowerCase());
  return COLORS[formattedMajor];
}
