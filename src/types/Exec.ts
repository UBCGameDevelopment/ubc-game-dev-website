import type { ImageMetadata } from "astro";

/**
 * Represents an executive team member
 */
export interface Exec {
  name: string;
  role: string;
  linkedin: string;
  github?: string;
  portfolio?: string;
  image: ImageMetadata;
}
