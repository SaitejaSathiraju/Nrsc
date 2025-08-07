import { useState, useEffect } from 'react';
import { 
  EarthObservationHighlight, 
  Announcement, 
  Disaster, 
  PhotoGallery, 
  RecentHappening,
  HighlightsApiResponse,
  AnnouncementsApiResponse,
  DisastersApiResponse,
  PhotoGalleryApiResponse,
  RecentHappeningsApiResponse
} from '../types/portal';

// Hook for fetching highlights
export function useHighlights(options: { limit?: number; featured?: boolean } = {}) {
  const { limit = 5, featured = true } = options;
  
  const [highlights, setHighlights] = useState<EarthObservationHighlight[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHighlights = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        limit: limit.toString(),
        ...(featured && { featured: 'true' })
      });
      
      const response = await fetch(`/api/portal/highlights?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: HighlightsApiResponse = await response.json();
      
      if (data.success) {
        setHighlights(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch highlights');
      }
    } catch (err) {
      console.error('Error fetching highlights:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch highlights');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHighlights();
  }, [limit, featured]);

  return {
    highlights,
    loading,
    error,
    refetch: fetchHighlights
  };
}

// Hook for fetching announcements
export function useAnnouncements(options: { limit?: number; new?: boolean } = {}) {
  const { limit = 10, new: newOnly = true } = options;
  
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        limit: limit.toString(),
        ...(newOnly && { new: 'true' })
      });
      
      const response = await fetch(`/api/portal/announcements?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: AnnouncementsApiResponse = await response.json();
      
      if (data.success) {
        setAnnouncements(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch announcements');
      }
    } catch (err) {
      console.error('Error fetching announcements:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch announcements');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, [limit, newOnly]);

  return {
    announcements,
    loading,
    error,
    refetch: fetchAnnouncements
  };
}

// Hook for fetching disasters
export function useDisasters(options: { limit?: number; active?: boolean } = {}) {
  const { limit = 5, active = true } = options;
  
  const [disasters, setDisasters] = useState<Disaster[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDisasters = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        limit: limit.toString(),
        ...(active && { active: 'true' })
      });
      
      const response = await fetch(`/api/portal/disasters?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: DisastersApiResponse = await response.json();
      
      if (data.success) {
        setDisasters(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch disasters');
      }
    } catch (err) {
      console.error('Error fetching disasters:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch disasters');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDisasters();
  }, [limit, active]);

  return {
    disasters,
    loading,
    error,
    refetch: fetchDisasters
  };
}

// Hook for fetching photo gallery
export function usePhotoGallery(options: { limit?: number; featured?: boolean } = {}) {
  const { limit = 6, featured = true } = options;
  
  const [photos, setPhotos] = useState<PhotoGallery[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        limit: limit.toString(),
        ...(featured && { featured: 'true' })
      });
      
      const response = await fetch(`/api/portal/photos?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: PhotoGalleryApiResponse = await response.json();
      
      if (data.success) {
        setPhotos(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch photos');
      }
    } catch (err) {
      console.error('Error fetching photos:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch photos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [limit, featured]);

  return {
    photos,
    loading,
    error,
    refetch: fetchPhotos
  };
}

// Hook for fetching recent happenings
export function useRecentHappenings(options: { limit?: number; featured?: boolean } = {}) {
  const { limit = 5, featured = false } = options;
  
  const [happenings, setHappenings] = useState<RecentHappening[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHappenings = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams({
        limit: limit.toString(),
        ...(featured && { featured: 'true' })
      });
      
      const response = await fetch(`/api/portal/happenings?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: RecentHappeningsApiResponse = await response.json();
      
      if (data.success) {
        setHappenings(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch recent happenings');
      }
    } catch (err) {
      console.error('Error fetching recent happenings:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch recent happenings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHappenings();
  }, [limit, featured]);

  return {
    happenings,
    loading,
    error,
    refetch: fetchHappenings
  };
}
