'use client';

import React from 'react';
import HeaderImage from './components/HeaderImage';
import Navbar from './components/navbar';
import PhotoCarousel from './components/PhotoCarousel';
import Footer from './components/Footer';
import HighlightsSection from './components/HighlightsSection';
import AnnouncementsDisastersSection from './components/AnnouncementsDisastersSection';
import PhotoGalleryRecentHappeningsSection from './components/PhotoGalleryRecentHappeningsSection';
import { useEvents } from './hooks/useEvents';
import { useHighlights, useAnnouncements, useDisasters, usePhotoGallery, useRecentHappenings } from './hooks/usePortalData';
import { formatEventDate, getEventStatusColor, getPriorityColor, getEventTypeIcon } from './types/events';
import ServicesGrid from './components/servicesGrid';
import WebPortals from './components/webportals';

export default function Home() {
  const { events, loading: eventsLoading, error: eventsError } = useEvents({ limit: 2, featured: true });
  const { highlights, loading: highlightsLoading, error: highlightsError } = useHighlights({ limit: 3, featured: true });
  const { announcements, loading: announcementsLoading, error: announcementsError } = useAnnouncements({ limit: 5, new: true });
  const { disasters, loading: disastersLoading, error: disastersError } = useDisasters({ limit: 5, active: true });
  const { photos, loading: photosLoading, error: photosError } = usePhotoGallery({ limit: 2, featured: true });
  const { happenings, loading: happeningsLoading, error: happeningsError } = useRecentHappenings({ limit: 5, featured: false });

  return (
    <div className="min-h-screen bg-gray-100 m-0 p-0">
      <HeaderImage />
      <Navbar />
      <PhotoCarousel />
      
      {/* Upcoming Events Section - First */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
            <p className="text-gray-600">Stay updated with our latest events and activities</p>
          </div>
          
          {/* Loading State */}
          {eventsLoading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
              <span className="ml-2 text-gray-600">Loading events...</span>
            </div>
          )}
          
          {/* Error State */}
          {eventsError && (
            <div className="text-center py-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
                <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-sm font-medium text-gray-900 mb-1">No events yet</h3>
                <p className="text-gray-500 text-xs">Check back later for new events and activities.</p>
              </div>
            </div>
          )}
          
          {/* Events Grid - Compact */}
          {!eventsLoading && !eventsError && events.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getEventTypeIcon(event.event_type)} />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getEventStatusColor(event.event_status)}`}>
                          {event.event_status}
                        </span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(event.priority_level)}`}>
                          {event.priority_level}
                        </span>
                      </div>
                      
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-1">
                        {event.event_title}
                      </h3>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{formatEventDate(event.start_date)} - {formatEventDate(event.end_date)}</span>
                        {event.venue && (
                          <span className="truncate">{event.venue}</span>
                        )}
                      </div>
                      
                      {event.registration_required && (
                        <div className="flex items-center mt-2">
                          <svg className="w-3 h-3 text-orange-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                          <span className="text-xs text-orange-600 font-medium">Registration Required</span>
                        </div>
                      )}
                    </div>
                    
                    <a 
                      href={event.external_link || '#'} 
                      className="flex-shrink-0 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* No Events State */}
          {!eventsLoading && !eventsError && events.length === 0 && (
            <div className="text-center py-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
                <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-sm font-medium text-gray-900 mb-1">No events yet</h3>
                <p className="text-gray-500 text-xs">Check back later for new events and activities.</p>
              </div>
            </div>
          )}
          
          {/* View All Events Button */}
          <div className="text-center">
            <a 
              href="/events" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
            >
              View All Events
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Services Grid - Second */}
      <ServicesGrid />
      
      {/* Highlights Section */}
      <HighlightsSection 
        highlights={highlights}
        loading={highlightsLoading}
        error={highlightsError}
      />
      
      {/* Announcements & Disasters Section */}
      <AnnouncementsDisastersSection 
        announcements={announcements}
        disasters={disasters}
        announcementsLoading={announcementsLoading}
        disastersLoading={disastersLoading}
        announcementsError={announcementsError}
        disastersError={disastersError}
      />
      
      {/* Photo Gallery & Recent Happenings Section */}
      <PhotoGalleryRecentHappeningsSection 
        photos={photos}
        happenings={happenings}
        photosLoading={photosLoading}
        happeningsLoading={happeningsLoading}
        photosError={photosError}
        happeningsError={happeningsError}
              />


<div className="bg-white border-1 border-orange-100 shadow-md">
  <div className="max-w-3xl mx-auto p-6 text-center">
    <h3 className="text-3xl font-semibold text-gray-900 mb-6">NRSC Quality Policy</h3>
    <p className="text-orange-800 text-lg leading-relaxed tracking-wide">
      “To excel in promoting enhanced utilization of remote sensing by delivering quality data products, developing value added services and implementing outreach programmes”
    </p>
  </div>
</div>

<WebPortals />
      
      <Footer />
    </div>
  );
}
