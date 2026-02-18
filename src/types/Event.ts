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
  isoDate: string; // ISO 8601 format for sorting/parsing
}
