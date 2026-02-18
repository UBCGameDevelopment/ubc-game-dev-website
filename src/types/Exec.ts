import type { ImageMetadata } from "astro";

export type ExecClass = "President" | "Leadership" | "Operations" | "Tech & Design";

/**
 * Represents an executive team member
 */
export interface Exec {
  name: string;
  role: string;
  execClass: ExecClass;
  season: string;
  linkedin: string;
  github?: string;
  portfolio?: string;
  image: ImageMetadata;
}
