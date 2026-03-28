import type { ImageMetadata } from "astro";

/**
 * Represents a club event
 */
export interface EventActionLink {
  label: string;
  href: string;
}

export interface EventSupplementalImage {
  src: string;
  alt: string;
}

export interface Event {
  title: string;
  date: string;
  description: string;
  detailPoints?: string[];
  actionLink?: EventActionLink;
  supplementalImage?: EventSupplementalImage;
  location: string;
  mapLink?: string;
  image: ImageMetadata;
  isActive: boolean;
  isoDate: string; // ISO 8601 format for sorting/parsing
}
