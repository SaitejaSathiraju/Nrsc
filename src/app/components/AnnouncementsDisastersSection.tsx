'use client';

import React from 'react';
import { Announcement, Disaster, formatPortalDate, getAnnouncementTypeColor, getDisasterTypeColor, getDisasterStatusColor } from '../types/portal';

interface AnnouncementsDisastersSectionProps {
  announcements: Announcement[];
  disasters: Disaster[];
  announcementsLoading?: boolean;
  disastersLoading?: boolean;
  announcementsError?: string | null;
  disastersError?: string | null;
}

const AnnouncementsDisastersSection: React.FC<AnnouncementsDisastersSectionProps> = ({
  announcements,
  disasters,
  announcementsLoading = false,
  disastersLoading = false,
  announcementsError = null,
  disastersError = null
}) => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Announcements Column */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Announcements</h3>
              
              {announcementsLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : announcementsError ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No announcements available</p>
                </div>
              ) : announcements.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No announcements available</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            {announcement.is_new && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                NEW
                              </span>
                            )}
                            {announcement.is_urgent && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                URGENT
                              </span>
                            )}
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getAnnouncementTypeColor(announcement.announcement_type)}`}>
                              {announcement.announcement_type}
                            </span>
                          </div>
                          
                          <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                            {announcement.title}
                          </h4>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Published: {formatPortalDate(announcement.date_published)}</span>
                            {announcement.deadline_date && (
                              <span>Deadline: {formatPortalDate(announcement.deadline_date)}</span>
                            )}
                          </div>
                        </div>
                        
                        <a
                          href={announcement.external_link || '#'}
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
                href="/announcements"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                View All Announcements
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Disasters Column */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Disasters</h3>
              
              {disastersLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : disastersError ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No disaster information available</p>
                </div>
              ) : disasters.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No disaster information available</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  {disasters.map((disaster) => (
                    <div key={disaster.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            {disaster.is_new && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                NEW
                              </span>
                            )}
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDisasterTypeColor(disaster.disaster_type)}`}>
                              {disaster.disaster_type}
                            </span>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDisasterStatusColor(disaster.status)}`}>
                              {disaster.status}
                            </span>
                          </div>
                          
                          <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                            {disaster.title}
                          </h4>
                          
                          {disaster.location && (
                            <p className="text-xs text-gray-500 mb-1">
                              Location: {disaster.location}
                            </p>
                          )}
                          
                          {disaster.event_date && (
                            <p className="text-xs text-gray-500">
                              Date: {formatPortalDate(disaster.event_date)}
                            </p>
                          )}
                        </div>
                        
                        <div className="flex flex-col gap-1">
                          {disaster.map_url && (
                            <a
                              href={disaster.map_url}
                              className="text-blue-600 hover:text-blue-700 text-xs font-medium"
                            >
                              Map
                            </a>
                          )}
                          {disaster.report_url && (
                            <a
                              href={disaster.report_url}
                              className="text-green-600 hover:text-green-700 text-xs font-medium"
                            >
                              Report
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* View More Button */}
            <div className="text-center mt-6 pb-6">
              <a
                href="/disasters"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
              >
                View All Disasters
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

export default AnnouncementsDisastersSection;
