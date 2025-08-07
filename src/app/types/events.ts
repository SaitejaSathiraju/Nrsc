// TypeScript interfaces for NRSC Events Database Schema

export interface EventCategory {
  id: number;
  category_name: string;
  category_description?: string;
  color_code: string;
  is_active: boolean;
  created_at: string;
}

export interface UpcomingEvent {
  id: number;
  event_title: string;
  event_description?: string;
  event_type: 'Workshop' | 'Conference' | 'Seminar' | 'Training' | 'Meeting' | 'Exhibition' | 'Other';
  start_date: string;
  end_date: string;
  start_time?: string;
  end_time?: string;
  venue?: string;
  location?: string;
  organizer?: string;
  contact_person?: string;
  contact_email?: string;
  contact_phone?: string;
  registration_required: boolean;
  registration_deadline?: string;
  max_participants?: number;
  current_participants: number;
  event_status: 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled' | 'Postponed';
  priority_level: 'Low' | 'Medium' | 'High' | 'Critical';
  tags?: string;
  image_url?: string;
  external_link?: string;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
  is_featured: boolean;
  is_public: boolean;
  categories?: string;
  category_colors?: string;
}

export interface EventCategoryRelation {
  event_id: number;
  category_id: number;
}

export interface FeaturedEvent extends UpcomingEvent {
  // Additional properties for featured events
  featured_order?: number;
}

// API Response types
export interface EventsApiResponse {
  success: boolean;
  data: UpcomingEvent[];
  total: number;
  page: number;
  limit: number;
  message?: string;
}

export interface EventApiResponse {
  success: boolean;
  data: UpcomingEvent;
  message?: string;
}

// Filter and search types
export interface EventFilters {
  event_type?: string;
  start_date?: string;
  end_date?: string;
  category_id?: number;
  is_featured?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}

// Event form types for creating/updating events
export interface CreateEventForm {
  event_title: string;
  event_description?: string;
  event_type: UpcomingEvent['event_type'];
  start_date: string;
  end_date: string;
  start_time?: string;
  end_time?: string;
  venue?: string;
  location?: string;
  organizer?: string;
  contact_person?: string;
  contact_email?: string;
  contact_phone?: string;
  registration_required: boolean;
  registration_deadline?: string;
  max_participants?: number;
  priority_level: UpcomingEvent['priority_level'];
  tags?: string;
  image_url?: string;
  external_link?: string;
  is_featured: boolean;
  is_public: boolean;
  category_ids?: number[];
}

// Utility types
export type EventStatus = UpcomingEvent['event_status'];
export type EventType = UpcomingEvent['event_type'];
export type PriorityLevel = UpcomingEvent['priority_level'];

// Constants
export const EVENT_TYPES: EventType[] = [
  'Workshop',
  'Conference', 
  'Seminar',
  'Training',
  'Meeting',
  'Exhibition',
  'Other'
];

export const EVENT_STATUSES: EventStatus[] = [
  'Upcoming',
  'Ongoing',
  'Completed',
  'Cancelled',
  'Postponed'
];

export const PRIORITY_LEVELS: PriorityLevel[] = [
  'Low',
  'Medium',
  'High',
  'Critical'
];

// Helper functions
export const formatEventDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatEventTime = (time: string): string => {
  return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

export const getEventStatusColor = (status: EventStatus): string => {
  const colors = {
    'Upcoming': 'bg-blue-100 text-blue-800',
    'Ongoing': 'bg-green-100 text-green-800',
    'Completed': 'bg-gray-100 text-gray-800',
    'Cancelled': 'bg-red-100 text-red-800',
    'Postponed': 'bg-yellow-100 text-yellow-800'
  };
  return colors[status] || colors['Upcoming'];
};

export const getPriorityColor = (priority: PriorityLevel): string => {
  const colors = {
    'Low': 'bg-gray-100 text-gray-800',
    'Medium': 'bg-blue-100 text-blue-800',
    'High': 'bg-orange-100 text-orange-800',
    'Critical': 'bg-red-100 text-red-800'
  };
  return colors[priority] || colors['Medium'];
};

export const getEventTypeIcon = (type: EventType): string => {
  const icons = {
    'Workshop': 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    'Conference': 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    'Seminar': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253',
    'Training': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    'Meeting': 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    'Exhibition': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    'Other': 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  };
  return icons[type] || icons['Other'];
};
