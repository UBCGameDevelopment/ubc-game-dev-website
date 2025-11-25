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
}
