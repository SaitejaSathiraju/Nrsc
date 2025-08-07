'use client';

import React, { useState, useEffect } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import ThematicMapsSidebar from '../components/ThematicMapsSidebar';
import ContentContainer from '../components/ContentContainer';

// Content data for different thematic maps sections
const sectionContent = {
  'overview': {
    title: 'Overview',
    description: 'NRSC provides comprehensive thematic maps covering various domains including land use, vegetation, water resources, and infrastructure. Our thematic mapping services utilize advanced remote sensing techniques and geospatial analysis to create detailed, accurate, and up-to-date thematic maps for various applications.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'Thematic Maps Catalog', url: 'https://bhuvan.nrsc.gov.in/thematic-maps', type: 'external' },
      { name: 'Mapping Guidelines', url: '/pdfs/mapping-guidelines.pdf', type: 'pdf' },
      { name: 'Data Access Portal', url: 'https://data.nrsc.gov.in/thematic', type: 'external' }
    ]
  },
  'cartodem': {
    title: 'CartoDEM',
    description: 'CartoDEM (Cartosat Digital Elevation Model) provides high-resolution digital elevation data derived from Cartosat satellite imagery. These elevation models are essential for terrain analysis, slope calculations, drainage network analysis, and 3D visualization applications. CartoDEM data supports various applications in hydrology, geology, and infrastructure planning.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'CartoDEM Viewer', url: 'https://bhuvan.nrsc.gov.in/cartodem', type: 'external' },
      { name: 'Technical Specifications', url: '/pdfs/cartodem-specs.pdf', type: 'pdf' },
      { name: 'Download Portal', url: 'https://data.nrsc.gov.in/cartodem', type: 'external' },
      { name: 'User Manual', url: '/pdfs/cartodem-manual.pdf', type: 'pdf' }
    ]
  },
  'wms-layers': {
    title: 'WMS Layers',
    description: 'Web Map Service (WMS) layers provide standardized access to thematic map data through web services. Our WMS layers include various thematic datasets such as land use, vegetation, water bodies, and administrative boundaries. These services enable seamless integration of thematic data into GIS applications and web mapping platforms.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'WMS Service Directory', url: 'https://services.nrsc.gov.in/wms', type: 'external' },
      { name: 'Layer Catalog', url: '/pdfs/wms-catalog.pdf', type: 'pdf' },
      { name: 'API Documentation', url: 'https://docs.nrsc.gov.in/wms-api', type: 'external' },
      { name: 'Integration Guide', url: '/pdfs/wms-integration.pdf', type: 'pdf' }
    ]
  },
  'any-query': {
    title: 'Any Query?',
    description: 'For queries related to thematic maps, CartoDEM data, WMS services, or technical specifications, please contact our thematic mapping team. We provide comprehensive support including technical guidance, data access assistance, and application-specific consultation for thematic mapping applications.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'Contact Information', url: '/pdfs/contact-info.pdf', type: 'pdf' },
      { name: 'Support Portal', url: 'https://support.nrsc.gov.in/thematic', type: 'external' },
      { name: 'FAQ Document', url: '/pdfs/thematic-faq.pdf', type: 'pdf' },
      { name: 'Technical Support', url: 'https://help.nrsc.gov.in/thematic-maps', type: 'external' }
    ]
  }
};

// Breadcrumb component
const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'overview': 'Overview',
      'cartodem': 'CartoDEM',
      'wms-layers': 'WMS Layers',
      'any-query': 'Any Query?'
    };
    return sectionMap[section] || 'Overview';
  };

  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <a 
            href="/thematic-maps" 
            className="hover:text-orange-600 transition-colors duration-200"
          >
            Thematic Maps
          </a>
        </li>
        <li className="flex items-center">
          <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-800 font-medium">
            {getBreadcrumbText(currentSection)}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default function ThematicMaps() {
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
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />

      {/* Sidebar + Content side-by-side */}
      <main className="flex flex-col md:flex-row py-8">
        <ThematicMapsSidebar />
        <ContentContainer>
          {/* Breadcrumb Navigation */}
          <Breadcrumb currentSection={activeSection} />
          
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
            {currentContent.title}
          </h1>
          
          {/* Description in white background */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 leading-relaxed">
              {currentContent.description}
            </p>
          </div>

          {/* Dynamic Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mb-8">
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

          {/* Links Section */}
          {currentContent.links && currentContent.links.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Related Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
                  >
                    {link.type === 'pdf' ? (
                      <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-800 truncate">{link.name}</p>
                      <p className="text-xs text-gray-500">
                        {link.type === 'pdf' ? 'Click to download' : 'Click to visit'}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </ContentContainer>
      </main>

      {/* WebPortals below the main section, full width */}
      <div className="px-4 md:px-12">
        <WebPortals />
      </div>

      <Footer />
    </div>
  );
}
