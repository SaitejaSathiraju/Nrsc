// TypeScript interfaces for NRSC Portal Database Schema

// =============================================
// EARTH OBSERVATION HIGHLIGHTS
// =============================================

export interface EarthObservationHighlight {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  banner_text?: string;
  button_text: string;
  button_color: string;
  image_url?: string;
  external_link?: string;
  category: 'Chlorophyll' | 'Vegetation' | 'Water' | 'Land' | 'Atmosphere' | 'Climate' | 'Other';
  priority_level: 'Low' | 'Medium' | 'High' | 'Critical';
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
}

// =============================================
// ANNOUNCEMENTS
// =============================================

export interface Announcement {
  id: number;
  title: string;
  content?: string;
  announcement_type: 'Recruitment' | 'Tender' | 'Notice' | 'Circular' | 'Addendum' | 'Other';
  reference_number?: string;
  date_published: string;
  deadline_date?: string;
  is_new: boolean;
  is_urgent: boolean;
  external_link?: string;
  file_url?: string;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
  is_active: boolean;
}

// =============================================
// DISASTERS
// =============================================

export interface Disaster {
  id: number;
  title: string;
  description?: string;
  disaster_type: 'Flood' | 'Earthquake' | 'Landslide' | 'Cyclone' | 'Drought' | 'Forest_Fire' | 'Other';
  location?: string;
  event_date?: string;
  severity_level: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Active' | 'Monitoring' | 'Resolved' | 'Historical';
  map_url?: string;
  report_url?: string;
  slider_maps?: string; // JSON string of map URLs
  atlas_url?: string;
  is_new: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
  is_active: boolean;
}

// =============================================
// PHOTO GALLERY
// =============================================

export interface PhotoGalleryCategory {
  id: number;
  category_name: string;
  category_description?: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface PhotoGallery {
  id: number;
  title: string;
  description?: string;
  image_url: string;
  thumbnail_url?: string;
  category_id?: number;
  alt_text?: string;
  caption?: string;
  photographer?: string;
  event_date?: string;
  location?: string;
  tags?: string;
  is_featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
  is_active: boolean;
  category_name?: string; // From JOIN with categories
}

// =============================================
// RECENT HAPPENINGS
// =============================================

export interface RecentHappening {
  id: number;
  title: string;
  description?: string;
  event_type: 'Award' | 'Conference' | 'Workshop' | 'Launch' | 'Meeting' | 'Training' | 'Exhibition' | 'Other';
  event_date?: string;
  venue?: string;
  organizer?: string;
  external_link?: string;
  image_url?: string;
  is_new: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
  is_active: boolean;
}

// =============================================
// API RESPONSE TYPES
// =============================================

export interface HighlightsApiResponse {
  success: boolean;
  data: EarthObservationHighlight[];
  total: number;
  page: number;
  limit: number;
}

export interface AnnouncementsApiResponse {
  success: boolean;
  data: Announcement[];
  total: number;
  page: number;
  limit: number;
}

export interface DisastersApiResponse {
  success: boolean;
  data: Disaster[];
  total: number;
  page: number;
  limit: number;
}

export interface PhotoGalleryApiResponse {
  success: boolean;
  data: PhotoGallery[];
  total: number;
  page: number;
  limit: number;
}

export interface RecentHappeningsApiResponse {
  success: boolean;
  data: RecentHappening[];
  total: number;
  page: number;
  limit: number;
}

// =============================================
// FILTER AND SEARCH TYPES
// =============================================

export interface PortalFilters {
  category?: string;
  type?: string;
  status?: string;
  is_new?: boolean;
  is_featured?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}

// =============================================
// CONSTANTS
// =============================================

export const HIGHLIGHT_CATEGORIES = [
  'Chlorophyll',
  'Vegetation', 
  'Water',
  'Land',
  'Atmosphere',
  'Climate',
  'Other'
] as const;

export const ANNOUNCEMENT_TYPES = [
  'Recruitment',
  'Tender',
  'Notice',
  'Circular',
  'Addendum',
  'Other'
] as const;

export const DISASTER_TYPES = [
  'Flood',
  'Earthquake',
  'Landslide',
  'Cyclone',
  'Drought',
  'Forest_Fire',
  'Other'
] as const;

export const DISASTER_STATUSES = [
  'Active',
  'Monitoring',
  'Resolved',
  'Historical'
] as const;

export const HAPPENING_TYPES = [
  'Award',
  'Conference',
  'Workshop',
  'Launch',
  'Meeting',
  'Training',
  'Exhibition',
  'Other'
] as const;

// =============================================
// UTILITY FUNCTIONS
// =============================================

export const formatPortalDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getDisasterTypeColor = (type: Disaster['disaster_type']): string => {
  const colors = {
    'Flood': 'bg-blue-100 text-blue-800',
    'Earthquake': 'bg-red-100 text-red-800',
    'Landslide': 'bg-orange-100 text-orange-800',
    'Cyclone': 'bg-purple-100 text-purple-800',
    'Drought': 'bg-yellow-100 text-yellow-800',
    'Forest_Fire': 'bg-red-100 text-red-800',
    'Other': 'bg-gray-100 text-gray-800'
  };
  return colors[type] || colors['Other'];
};

export const getDisasterStatusColor = (status: Disaster['status']): string => {
  const colors = {
    'Active': 'bg-red-100 text-red-800',
    'Monitoring': 'bg-yellow-100 text-yellow-800',
    'Resolved': 'bg-green-100 text-green-800',
    'Historical': 'bg-gray-100 text-gray-800'
  };
  return colors[status] || colors['Historical'];
};

export const getAnnouncementTypeColor = (type: Announcement['announcement_type']): string => {
  const colors = {
    'Recruitment': 'bg-blue-100 text-blue-800',
    'Tender': 'bg-green-100 text-green-800',
    'Notice': 'bg-orange-100 text-orange-800',
    'Circular': 'bg-purple-100 text-purple-800',
    'Addendum': 'bg-yellow-100 text-yellow-800',
    'Other': 'bg-gray-100 text-gray-800'
  };
  return colors[type] || colors['Other'];
};

export const getHappeningTypeIcon = (type: RecentHappening['event_type']): string => {
  const icons = {
    'Award': 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    'Conference': 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    'Workshop': 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    'Launch': 'M13 10V3L4 14h7v7l9-11h-7z',
    'Meeting': 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    'Training': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    'Exhibition': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    'Other': 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  };
  return icons[type] || icons['Other'];
};

export const getHighlightCategoryIcon = (category: EarthObservationHighlight['category']): string => {
  const icons = {
    'Chlorophyll': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    'Vegetation': 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    'Water': 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    'Land': 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    'Atmosphere': 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    'Climate': 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    'Other': 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  };
  return icons[category] || icons['Other'];
};
