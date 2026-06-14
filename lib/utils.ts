import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Base path for GitHub Pages project sites; empty for the custom domain. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

/** Prefix a public asset path with the base path (for raw URLs / manifest). */
export const asset = (p: string) => `${BASE_PATH}${p.startsWith("/") ? p : `/${p}`}`;
