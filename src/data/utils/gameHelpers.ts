import type { Game } from '../../types';

/**
 * Get unique years from games and sort them in descending order (newest first)
 * 
 * @param games    Array of Game objects
 * @returns        Sorted array of unique year strings
 */
export function getGameYears(games: Game[]): string[] {
  const years = [...new Set(games.map(game => game.year))];
  return years.sort((a, b) => {
    const [aStart] = a.split('/').map(Number);
    const [bStart] = b.split('/').map(Number);
    return bStart - aStart;
  });
}

/**
 * Filter games by year
 * 
 * @param games   Array of Game objects
 * @param year    Year string to filter by
 * @returns       Filtered array of games
 */
export function filterGamesByYear(games: Game[], year: string): Game[] {
  return games.filter(game => game.year === year);
}

/**
 * Get games by award type
 * 
 * @param games   Array of Game objects
 * @param award   Award string to filter by
 * @returns       Filtered array of games with the specified award
 */
export function getGamesByAward(games: Game[], award: string): Game[] {
  return games.filter(game => game.award === award);
}
