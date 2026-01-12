import type { ImageMetadata } from "astro";

/**
 * Represents a club event
 */
export interface Event {
  title: string;
  date: string;
  description: string;
  location: string;
  mapLink?: string;
  image: ImageMetadata;
  isActive: boolean;
}
