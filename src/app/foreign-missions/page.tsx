'use client';

import React, { useState, useEffect } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import ForeignMissionsSidebar from '../components/ForeignMissionsSidebar';
import ContentContainer from '../components/ContentContainer';

// Content data for different foreign mission sections
const sectionContent = {
  'overview': {
    title: 'Overview',
    description: 'NRSC collaborates with various international space agencies and satellite missions to provide comprehensive remote sensing data products. Our foreign missions program includes partnerships with NASA, ESA, JAXA, and other leading space organizations. These collaborations enable access to diverse satellite data sources, enhancing our capabilities in earth observation and geospatial applications.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'products': {
    title: 'Products',
    description: 'Foreign mission data products include a wide range of satellite data from international missions such as Landsat series, Sentinel series, MODIS, and commercial satellites. These products provide different spatial, spectral, and temporal resolutions to complement Indian satellite data. Products are processed and validated according to international standards and made available through our data dissemination portals.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'optical': {
    title: 'Optical',
    description: 'Optical data products from foreign missions include multispectral and panchromatic data from satellites like Landsat, Sentinel-2, and commercial high-resolution satellites. These products provide high-quality optical imagery with different spatial resolutions ranging from 10m to 30cm. Optical data from foreign missions complement Indian satellite data and provide additional coverage and temporal frequency.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'microwave': {
    title: 'Microwave',
    description: 'Microwave data products from foreign missions include SAR data from satellites like Sentinel-1, RADARSAT, and other international SAR missions. These products provide all-weather, day-night imaging capabilities and are particularly useful for applications such as disaster monitoring, soil moisture assessment, and ocean studies. Foreign microwave data enhances our capabilities in radar remote sensing applications.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'policy': {
    title: 'Policy',
    description: 'NRSC follows international data sharing policies and agreements for foreign mission data products. Our policy framework ensures compliance with international data access protocols while maintaining national security interests. The policy includes guidelines for data usage, redistribution terms, citation requirements, and commercial use restrictions as per international agreements.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'any-query': {
    title: 'Any Query?',
    description: 'For queries related to foreign mission data products, international collaborations, data access procedures, or technical specifications, please contact our international data services team. We provide comprehensive support for foreign mission data including technical guidance, data selection assistance, and application-specific consultation for international satellite data utilization.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ]
  }
};

// Breadcrumb component
const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'overview': 'Overview',
      'products': 'Products',
      'optical': 'Optical',
      'microwave': 'Microwave',
      'policy': 'Policy',
      'any-query': 'Any Query?'
    };
    return sectionMap[section] || 'Overview';
  };

  return (
    <nav className="mb-10" aria-label="Breadcrumb">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
          <ol className="flex items-center justify-center text-sm text-orange-700">
            <li>
              <a
                href="/foreign-missions"
                className="font-medium hover:text-orange-600 transition-colors duration-200"
              >
                Foreign Missions
              </a>
            </li>
            <li className="flex items-center px-2">
              <svg
                className="w-4 h-4 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <span className="font-semibold text-orange-800">
                {getBreadcrumbText(currentSection)}
              </span>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default function ForeignMissions() {
  const [activeSection, setActiveSection] = useState('overview');

  // Handle hash changes in URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionContent[hash as keyof typeof sectionContent]) {
        setActiveSection(hash);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentContent = sectionContent[activeSection as keyof typeof sectionContent] || sectionContent['overview'];

  return (
    <div className="min-h-screen bg-white">
      <HeaderImage />
      <Navbar />

      {/* Sidebar + Content side-by-side */}
      <main className="py-8">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row">
          <ForeignMissionsSidebar />
          <ContentContainer showLeftContent={true} pageType="data-products">
          {/* Breadcrumb Navigation */}
          <Breadcrumb currentSection={activeSection} />
          
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
            {currentContent.title}
          </h1>
          
          {/* Description in white background */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
            <p className="text-gray-700 leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Dynamic Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {currentContent.images.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`${currentContent.title} image ${idx + 1}`}
                className="w-full h-48 object-cover rounded-md shadow-md"
                loading="lazy"
              />
            ))}
          </div>
        </ContentContainer>
        </div>
      </main>

      {/* WebPortals below the main section, full width */}
      <div className="px-4 md:px-12">
        <WebPortals />
      </div>

      <Footer />
    </div>
  );
}
