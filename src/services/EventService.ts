import type { Event } from '../types';
import { events as staticEvents } from '../data/events';

/**
 * Service layer for event data operations.
 * Provides a centralized interface for accessing and filtering event data.
 * Can be easily extended to fetch from API endpoints instead of static data.
 */
export class EventService {
  /**
   * Get all events
   * 
   * @returns           Array of all events
   */
  static getAll(): Event[] {
    return staticEvents;
  }

  /**
   * Get upcoming events (events in the future)
   * Note: Requires events to have proper date format for comparison
   * 
   * @returns           Array of upcoming events
   */
  static getUpcoming(): Event[] {
    const now = new Date();
    return staticEvents.filter(event => {
      try {
        const eventDate = new Date(event.date);
        return eventDate >= now;
      } catch {
        return false;
      }
    });
  }

  /**
   * Get past events
   * 
   * @returns               Array of past events
   */
  static getPast(): Event[] {
    const now = new Date();
    return staticEvents.filter(event => {
      try {
        const eventDate = new Date(event.date);
        return eventDate < now;
      } catch {
        return true; // Include events with invalid dates in past
      }
    });
  }

  /**
   * Get events by location
   * 
   * @param location        Location string to filter by
   * @returns               Filtered array of events
   */
  static getByLocation(location: string): Event[] {
    return staticEvents.filter(event => 
      event.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  /**
   * Search events by title or description
   * 
   * @param query           Search query string
   * @returns               Array of events matching the query
   */
  static search(query: string): Event[] {
    const lowerQuery = query.toLowerCase();
    return staticEvents.filter(event => 
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Get total count of events
   * 
   * @returns               Total number of events
   */
  static getCount(): number {
    return staticEvents.length;
  }
}
