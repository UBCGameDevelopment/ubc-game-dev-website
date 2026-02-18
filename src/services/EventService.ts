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

  /**
   * Get events sorted by date (newest first)
   * 
   * @returns               Array of events sorted by isoDate descending
   */
  static getSortedByDate(): Event[] {
    return [...staticEvents].sort((a, b) =>
      new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime()
    );
  }

  /**
   * Get the latest N events sorted by date
   * 
   * @param count           Number of events to return
   * @returns               Array of the latest events
   */
  static getLatest(count: number): Event[] {
    return this.getSortedByDate().slice(0, count);
  }

  /**
   * Prepare events data for modal display
   * Transforms event data into a format suitable for EventModal component
   * 
   * @param events          Array of events to transform
   * @returns               Array of event objects formatted for modal
   */
  static prepareForModal(events: Event[]): Array<{
    title: string;
    date: string;
    description: string;
    location: string;
    mapLink: string;
    imageSrc: string;
    isActive: boolean;
    chapterNumber: number;
  }> {
    return events.map((event, index) => ({
      title: event.title,
      date: event.date,
      description: event.description,
      location: event.location,
      mapLink: event.mapLink || "",
      imageSrc: event.image.src,
      isActive: event.isActive,
      chapterNumber: index + 1,
    }));
  }

  /**
   * Get count of completed (inactive) events
   * 
   * @returns               Number of completed events
   */
  static getCompletedCount(): number {
    return staticEvents.filter(e => !e.isActive).length;
  }
}
