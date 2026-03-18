/**
 * Centralized configuration for external links used throughout the site
 * Update these URLs in one place to reflect changes across the entire application
 */

export const SOCIAL_LINKS = {
  discord: "https://discord.gg/RXMxvEcj7B",
  instagram: "https://www.instagram.com/ubcgamedev/",
  twitch: "https://www.twitch.tv/ubcgamedev",
  // Add other social links as needed
  // twitter: "https://twitter.com/ubcgamedev",
  // facebook: "https://facebook.com/ubcgamedev",
} as const;

// Export all links for convenience
export const LINKS = {
  ...SOCIAL_LINKS,
} as const;
