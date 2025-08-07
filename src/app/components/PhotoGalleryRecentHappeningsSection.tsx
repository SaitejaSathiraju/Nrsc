'use client';

import React from 'react';
import { PhotoGallery, RecentHappening, formatPortalDate, getHappeningTypeIcon } from '../types/portal';

interface PhotoGalleryRecentHappeningsSectionProps {
  photos: PhotoGallery[];
  happenings: RecentHappening[];
  photosLoading?: boolean;
  happeningsLoading?: boolean;
  photosError?: string | null;
  happeningsError?: string | null;
}

const PhotoGalleryRecentHappeningsSection: React.FC<PhotoGalleryRecentHappeningsSectionProps> = ({
  photos,
  happenings,
  photosLoading = false,
  happeningsLoading = false,
  photosError = null,
  happeningsError = null
}) => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Photo Gallery Column */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Photo Gallery</h3>
              
              {photosLoading ? (
                <div className="space-y-4">
                  <div className="animate-pulse">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-gray-200 rounded"></div>
                      <div className="h-32 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ) : photosError ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No photos available</p>
                </div>
              ) : photos.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No photos available</p>
                </div>
              ) : (
                <div>
                  {/* Featured Photos Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {photos.slice(0, 2).map((photo) => (
                      <div key={photo.id} className="relative group">
                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={photo.image_url}
                            alt={photo.alt_text || photo.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        {photo.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 rounded-b-lg">
                            {photo.caption}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* View Gallery Link */}
                  <div className="text-center">
                    <a
                      href="/gallery"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      View Gallery
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* View More Button */}
            <div className="text-center mt-6 pb-6">
              <a
                href="/gallery"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                View All Photos
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Recent Happenings Column */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Happenings</h3>
              
              {happeningsLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : happeningsError ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No recent happenings available</p>
                </div>
              ) : happenings.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No recent happenings available</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {happenings.map((happening) => (
                    <div key={happening.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-start gap-3">
                        {/* Event Type Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getHappeningTypeIcon(happening.event_type)} />
                            </svg>
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {happening.is_new && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                NEW
                              </span>
                            )}
                            <span className="text-xs text-gray-500 font-medium">
                              {happening.event_type}
                            </span>
                          </div>
                          
                          <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                            {happening.title}
                          </h4>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            {happening.event_date && (
                              <span>{formatPortalDate(happening.event_date)}</span>
                            )}
                            {happening.venue && (
                              <span className="truncate">{happening.venue}</span>
                            )}
                          </div>
                          
                          {happening.organizer && (
                            <p className="text-xs text-gray-500 mt-1">
                              Organizer: {happening.organizer}
                            </p>
                          )}
                        </div>
                        
                        <a
                          href={happening.external_link || '#'}
                          className="flex-shrink-0 text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* View More Button */}
            <div className="text-center mt-6 pb-6">
              <a
                href="/happenings"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
              >
                View All Happenings
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGalleryRecentHappeningsSection;
