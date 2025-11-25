import type { ImageMetadata } from "astro";

/**
 * Represents different types of media that can be displayed for a game
 */
export interface GameMedia {
  type: 'video' | 'images' | 'image';
  
  /** YouTube embed URL (use youtube-nocookie.com for privacy-enhanced mode) */
  videoUrl?: string;
  images?: ImageMetadata[];
  image?: ImageMetadata;
}

/**
 * Represents a game created by UBC Game Development club
 */
export interface Game {
  name: string;
  description?: string;
  instructions?: string;
  media: GameMedia;
  gameLink?: string;
  teamMembers?: string[];
  award?: string;
  year: string;
}
