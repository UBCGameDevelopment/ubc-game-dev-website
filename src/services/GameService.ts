import type { Game } from '../types';
import { games as staticGames } from '../data/games';

/**
 * Service layer for game data operations.
 * Provides a centralized interface for accessing and filtering game data.
 * Can be easily extended to fetch from API endpoints instead of static data.
 */
export class GameService {
  /**
   * Get all games
   * 
   * @returns       Array of all games
   */
  static getAll(): Game[] {
    return staticGames;
  }

  /**
   * Get games by year
   * 
   * @param year    Year string to filter by (e.g., "2022/2023")
   * @returns       Filtered array of games
   */
  static getByYear(year: string): Game[] {
    return staticGames.filter(game => game.year === year);
  }

  /**
   * Get games by award
   * 
   * @param award   Award string to filter by
   * @returns       Filtered array of games with the specified award
   */
  static getByAward(award: string): Game[] {
    return staticGames.filter(game => game.award === award);
  }

  /**
   * Get unique years from all games, sorted in descending order (newest first)
   * 
   * @returns       Sorted array of unique year strings
   */
  static getYears(): string[] {
    const years = [...new Set(staticGames.map(game => game.year))];
    return years.sort((a, b) => {
      // Sort in descending order (newest first)
      const [aStart] = a.split('/').map(Number);
      const [bStart] = b.split('/').map(Number);
      return bStart - aStart;
    });
  }

  /**
   * Get a single game by name
   * 
   * @param name    Game name to search for
   * @returns       Game object or undefined if not found
   */
  static getByName(name: string): Game | undefined {
    return staticGames.find(game => game.name === name);
  }

  /**
   * Search games by name or description
   * 
   * @param query   Search query string
   * @returns       Array of games matching the query
   */
  static search(query: string): Game[] {
    const lowerQuery = query.toLowerCase();
    return staticGames.filter(game =>
      game.name.toLowerCase().includes(lowerQuery) ||
      game.description?.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Get total count of games
   * 
   * @returns       Total number of games
   */
  static getCount(): number {
    return staticGames.length;
  }

  /**
   * Get all games sorted by year (newest first)
   * 
   * @returns       Array of games sorted by year descending
   */
  static getAllSorted(): Game[] {
    return [...staticGames].sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }

  /**
   * Group games by year
   * 
   * @returns       Object with years as keys and arrays of games as values
   */
  static getGroupedByYear(): Record<string, Game[]> {
    return staticGames.reduce((acc, game) => {
      const year = game.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(game);
      return acc;
    }, {} as Record<string, Game[]>);
  }

  /**
   * Get games grouped by year with years sorted (newest first)
   * 
   * @returns       Object with sorted years and their games
   */
  static getGroupedByYearSorted(): { years: string[]; gamesByYear: Record<string, Game[]> } {
    const gamesByYear = this.getGroupedByYear();
    const years = Object.keys(gamesByYear).sort((a, b) => parseInt(b) - parseInt(a));
    return { years, gamesByYear };
  }

  /**
   * Get the featured/latest games
   * 
   * @param count   Number of games to return
   * @returns       Array of the most recent games
   */
  static getFeatured(count: number): Game[] {
    return this.getAllSorted().slice(0, count);
  }

  /**
   * Get image source from a game's media
   * Returns the first available image from media (image or images array)
   * 
   * @param game    Game object to extract image from
   * @returns       Image source string or fallback placeholder
   */
  static getGameImageSrc(game: Game): string {
    if (game.media?.image) {
      return game.media.image.src;
    }
    if (game.media?.images && game.media.images.length > 0) {
      return game.media.images[0].src;
    }
    return '/assets/placeholder-game.png';
  }
}
