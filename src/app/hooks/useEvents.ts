import { useState, useEffect } from 'react';
import { UpcomingEvent, EventsApiResponse } from '../types/events';

interface UseEventsOptions {
  limit?: number;
  featured?: boolean;
  autoFetch?: boolean;
}

interface UseEventsReturn {
  events: UpcomingEvent[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useEvents(options: UseEventsOptions = {}): UseEventsReturn {
  const { limit = 10, featured = false, autoFetch = true } = options;
  
  const [events, setEvents] = useState<UpcomingEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        limit: limit.toString(),
        ...(featured && { featured: 'true' })
      });
      
      const response = await fetch(`/api/events?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: EventsApiResponse = await response.json();
      
      if (data.success) {
        setEvents(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch events');
      }
    } catch (err) {
      console.error('Error fetching events:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch events');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchEvents();
    }
  }, [limit, featured, autoFetch]);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents
  };
}

// Hook for fetching a single event
export function useEvent(eventId: number) {
  const [event, setEvent] = useState<UpcomingEvent | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/events/${eventId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setEvent(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch event');
      }
    } catch (err) {
      console.error('Error fetching event:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch event');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  return {
    event,
    loading,
    error,
    refetch: fetchEvent
  };
}
