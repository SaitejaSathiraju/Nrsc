'use client';

import React from 'react';
import { EarthObservationHighlight, getHighlightCategoryIcon } from '../types/portal';

interface HighlightsSectionProps {
  highlights: EarthObservationHighlight[];
  loading?: boolean;
  error?: string | null;
}

const HighlightsSection: React.FC<HighlightsSectionProps> = ({ 
  highlights, 
  loading = false, 
  error = null 
}) => {
  if (loading) {
    return (
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !highlights || highlights.length === 0) {
    return null; // Don't show section if no highlights
  }

  const featuredHighlight = highlights.find(h => h.is_featured) || highlights[0];

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Highlights of Earth Observation Sciences/Applications
          </h2>
        </div>

        {/* Main Highlight Card */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              {/* Left Side - Content */}
              <div className="flex-1">
                {/* Banner */}
                <div className="mb-4">
                  <div className="inline-block bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    {featuredHighlight.banner_text || featuredHighlight.title}
                  </div>
                </div>

                {/* Title and Description */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {featuredHighlight.title}
                  </h3>
                  {featuredHighlight.subtitle && (
                    <p className="text-blue-100 text-lg mb-3">
                      {featuredHighlight.subtitle}
                    </p>
                  )}
                  {featuredHighlight.description && (
                    <p className="text-blue-50 leading-relaxed">
                      {featuredHighlight.description}
                    </p>
                  )}
                </div>

                {/* Button */}
                <div className="flex items-center gap-4">
                  <a
                    href={featuredHighlight.external_link || '#'}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg"
                    style={{ backgroundColor: featuredHighlight.button_color }}
                  >
                    {featuredHighlight.button_text}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  
                  {/* Category Badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-700 text-blue-100">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getHighlightCategoryIcon(featuredHighlight.category)} />
                    </svg>
                    {featuredHighlight.category}
                  </span>
                </div>
              </div>

              {/* Right Side - 3D Visualization Area */}
              <div className="flex-shrink-0 w-full lg:w-80">
                <div className="bg-blue-700/50 rounded-lg p-6 h-64 flex items-center justify-center">
                  {featuredHighlight.image_url ? (
                    <img
                      src={featuredHighlight.image_url}
                      alt={featuredHighlight.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="text-center text-blue-100">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getHighlightCategoryIcon(featuredHighlight.category)} />
                      </svg>
                      <p className="text-sm">3D Visualization</p>
                      <p className="text-xs opacity-75">Scientific Data Model</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

                        {/* Additional Highlights Grid */}
                {highlights.length > 1 && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.slice(1, 4).map((highlight) => (
                      <div key={highlight.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {highlight.category}
                            </span>
                            {highlight.is_featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                Featured
                              </span>
                            )}
                          </div>
                          
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                            {highlight.title}
                          </h4>
                          
                          {highlight.subtitle && (
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                              {highlight.subtitle}
                            </p>
                          )}
                          
                          <a
                            href={highlight.external_link || '#'}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                          >
                            {highlight.button_text}
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* View More Button */}
                <div className="text-center mt-8">
                  <a
                    href="/highlights"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    View More Highlights
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
