import type { Exec } from '../types';
import { execs as staticExecs } from '../data/execs';

/**
 * Service layer for executive/team member data operations.
 * Provides a centralized interface for accessing and filtering exec data.
 * Can be easily extended to fetch from API endpoints instead of static data.
 */
export class ExecService {
  /**
   * Get all executives
   * 
   * @returns           Array of all executives
   */
  static getAll(): Exec[] {
    return staticExecs;
  }

  /**
   * Get executives by role
   * @param role        Role string
   * @returns           Filtered array of executives
   */
  static getByRole(role: string): Exec[] {
    return staticExecs.filter(exec =>
      exec.role.toLowerCase().includes(role.toLowerCase())
    );
  }

  /**
   * Get the president(s) -> if we have vice-president lol
   * 
   * @returns           Array of executives with "President" in their role
   */
  static getPresidents(): Exec[] {
    return staticExecs.filter(exec =>
      exec.role.toLowerCase().includes('president') &&
      !exec.role.toLowerCase().includes('vice')
    );
  }

  /**
   * Get all executives except presidents (for grid display)
   * 
   * @returns           Array of non-president executives
   */
  static getNonPresidents(): Exec[] {
    return staticExecs.filter(exec =>
      !(exec.role.toLowerCase().includes('president') &&
        !exec.role.toLowerCase().includes('vice'))
    );
  }

  /**
   * Get executives with GitHub profiles
   * 
   * @returns           Array of executives who have GitHub links
   */
  static getWithGitHub(): Exec[] {
    return staticExecs.filter(exec => exec.github);
  }

  /**
   * Get executives with portfolio links
   * 
   * @returns           Array of executives who have portfolio links
   */
  static getWithPortfolio(): Exec[] {
    return staticExecs.filter(exec => exec.portfolio);
  }

  /**
   * Search executives by name
   * 
   * @param query       Search query string
   * @returns           Array of executives matching the query
   */
  static search(query: string): Exec[] {
    const lowerQuery = query.toLowerCase();
    return staticExecs.filter(exec =>
      exec.name.toLowerCase().includes(lowerQuery) ||
      exec.role.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Get total count of executives
   * 
   * @returns           Total number of executives
   */
  static getCount(): number {
    return staticExecs.length;
  }

  /**
   * Get the president (single, exact role match)
   * 
   * @returns           President exec or null if not found
   */
  static getPresident(): Exec | null {
    return staticExecs.find(e => e.role === 'President') || null;
  }

  /**
   * Get all executives except the president
   * Maintains original order of execs
   * 
   * @returns           Array of non-president executives
   */
  static getExceptPresident(): Exec[] {
    const presidentIndex = staticExecs.findIndex(e => e.role === 'President');
    return staticExecs.filter((_, i) => i !== presidentIndex);
  }

  /**
   * Get president and rest of execs separately
   * Useful for layouts that display president prominently
   * 
   * @returns           Object with president and rest of execs
   */
  static getWithPresidentSeparated(): { president: Exec | null; rest: Exec[] } {
    const presidentIndex = staticExecs.findIndex(e => e.role === 'President');
    const president = presidentIndex >= 0 ? staticExecs[presidentIndex] : null;
    const rest = staticExecs.filter((_, i) => i !== presidentIndex);
    return { president, rest };
  }
}
