import type { Event } from '../types';
import { events as staticEvents } from '../data/events';

/**
 * Service layer for event data operations.
 * Provides a centralized interface for accessing and filtering event data.
 * Can be easily extended to fetch from API endpoints instead of static data.
 */
export class EventService {
  /** Event dates are campus-local dates; expire them after the day ends. */
  private static getToday(): string {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Vancouver',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).formatToParts(new Date());
    const value = (type: string) => parts.find(part => part.type === type)!.value;
    return `${value('year')}-${value('month')}-${value('day')}`;
  }

  private static getEvents(): Event[] {
    const today = this.getToday();
    return staticEvents.map(event => ({
      ...event,
      isActive: event.isActive && event.isoDate.slice(0, 10) >= today,
    }));
  }

  /**
   * Get all events
   * 
   * @returns           Array of all events
   */
  static getAll(): Event[] {
    return this.getEvents().sort((a, b) =>
      new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime()
    );
  }

  /** Get events happening today or on a later campus-local date. */
  static getUpcoming(): Event[] {
    const today = this.getToday();
    return this.getEvents().filter(event => event.isoDate.slice(0, 10) >= today);
  }

  /** Get events whose campus-local date has passed. */
  static getPast(): Event[] {
    const today = this.getToday();
    return this.getEvents().filter(event => event.isoDate.slice(0, 10) < today);
  }

  /**
   * Get events by location
   * 
   * @param location        Location string to filter by
   * @returns               Filtered array of events
   */
  static getByLocation(location: string): Event[] {
    return this.getEvents().filter(event =>
      event.location?.toLowerCase().includes(location.toLowerCase())
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
    return this.getEvents().filter(event =>
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery) ||
      event.detailPoints?.some(detail => detail.toLowerCase().includes(lowerQuery))
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
    return this.getEvents().sort((a, b) =>
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
    detailPoints?: string[];
    actionLink?: Event["actionLink"];
    supplementalImage?: Event["supplementalImage"];
    location?: string;
    mapLink?: string;
    imageSrc: string;
    isActive: boolean;
    chapterNumber: number;
  }> {
    const today = this.getToday();
    return events.map((event, index) => ({
      title: event.title,
      date: event.date,
      description: event.description,
      detailPoints: event.detailPoints,
      actionLink: event.actionLink,
      supplementalImage: event.supplementalImage,
      location: event.location,
      mapLink: event.mapLink,
      imageSrc: event.image.src,
      isActive: event.isActive && event.isoDate.slice(0, 10) >= today,
      chapterNumber: index + 1,
    }));
  }

  /**
   * Get count of completed (inactive) events
   * 
   * @returns               Number of completed events
   */
  static getCompletedCount(): number {
    return this.getEvents().filter(e => !e.isActive).length;
  }
}
