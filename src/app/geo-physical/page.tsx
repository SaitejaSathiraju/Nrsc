'use client';

import React, { useState, useEffect } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import GeophysicalSidebar from '../components/GeophysicalSidebar';
import ContentContainer from '../components/ContentContainer';

// Content data for different geophysical sections
const sectionContent = {
  'overview': {
    title: 'Overview',
    description: 'NRSC provides comprehensive geophysical data products covering terrestrial, oceanic, atmospheric, and cryospheric domains. Our geophysical products are derived from satellite observations and ground-based measurements, providing essential data for climate studies, environmental monitoring, and geophysical research applications.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80'
    ],
    pdfs: [
      { name: 'Geophysical Overview Guide', url: '/pdfs/geophysical-overview.pdf' },
      { name: 'Data Product Catalog', url: '/pdfs/geophysical-catalog.pdf' }
    ]
  },
  'terrestrial-products': {
    title: 'Terrestrial Products',
    description: 'Terrestrial geophysical products include land surface temperature, soil moisture, vegetation indices, and land use data. These products are derived from various satellite sensors and provide crucial information for agriculture, forestry, urban planning, and environmental monitoring applications.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    ],
    pdfs: [
      { name: 'Terrestrial Products Manual', url: '/pdfs/terrestrial-products.pdf' },
      { name: 'Land Surface Temperature Guide', url: '/pdfs/land-temperature.pdf' }
    ]
  },
  'ocean-products': {
    title: 'Ocean Products',
    description: 'Ocean geophysical products include sea surface temperature, ocean color, sea level, and ocean currents data. These products are essential for marine ecosystem monitoring, climate studies, and oceanographic research. Our ocean products support fisheries management, coastal zone monitoring, and marine biodiversity studies.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ],
    pdfs: [
      { name: 'Ocean Products Documentation', url: '/pdfs/ocean-products.pdf' },
      { name: 'Sea Surface Temperature Guide', url: '/pdfs/sea-temperature.pdf' }
    ]
  },
  'atmospheric-products': {
    title: 'Atmospheric Products',
    description: 'Atmospheric geophysical products include temperature profiles, humidity, cloud cover, and atmospheric composition data. These products support weather forecasting, climate modeling, and atmospheric research. Our atmospheric data products are used for air quality monitoring, climate change studies, and meteorological applications.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ],
    pdfs: [
      { name: 'Atmospheric Products Guide', url: '/pdfs/atmospheric-products.pdf' },
      { name: 'Temperature Profile Manual', url: '/pdfs/temperature-profile.pdf' }
    ]
  },
  'cryospheric-products': {
    title: 'Cryospheric Products',
    description: 'Cryospheric geophysical products include snow cover, glacier extent, sea ice concentration, and ice sheet data. These products are crucial for climate change studies, water resource management, and polar research. Our cryospheric data supports studies on glacier dynamics, snow melt patterns, and polar ecosystem monitoring.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ],
    pdfs: [
      { name: 'Cryospheric Products Manual', url: '/pdfs/cryospheric-products.pdf' },
      { name: 'Snow Cover Analysis Guide', url: '/pdfs/snow-cover.pdf' }
    ]
  },
  'policy': {
    title: 'Policy',
    description: 'NRSC follows established policies for geophysical data product dissemination and usage. Our policy framework ensures fair access to geophysical data while maintaining data quality and scientific integrity. The policy includes guidelines for data access, usage restrictions, citation requirements, and commercial use terms.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ],
    pdfs: [
      { name: 'Data Access Policy', url: '/pdfs/data-policy.pdf' },
      { name: 'Usage Guidelines', url: '/pdfs/usage-guidelines.pdf' }
    ]
  },
  'price': {
    title: 'Price',
    description: 'Geophysical data products are available at various pricing tiers based on data type, resolution, and usage requirements. Academic and research institutions may qualify for discounted rates. Commercial users can access data through licensing agreements. Contact our data services team for detailed pricing information.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ],
    pdfs: [
      { name: 'Pricing Structure', url: '/pdfs/pricing-structure.pdf' },
      { name: 'Commercial Licensing', url: '/pdfs/commercial-licensing.pdf' }
    ]
  },
  'data-dissemination-links': {
    title: 'Data Dissemination Links',
    description: 'Access geophysical data products through our various dissemination portals and platforms. These links provide direct access to data downloads, visualization tools, and metadata information. Our dissemination system ensures secure and efficient data delivery to authorized users.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ],
    pdfs: [
      { name: 'Data Access Guide', url: '/pdfs/data-access-guide.pdf' },
      { name: 'Portal User Manual', url: '/pdfs/portal-manual.pdf' }
    ]
  },
  'any-query': {
    title: 'Any Query?',
    description: 'For queries related to geophysical data products, technical specifications, data access procedures, or pricing information, please contact our geophysical data services team. We provide comprehensive support including technical guidance, data selection assistance, and application-specific consultation.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ],
    pdfs: [
      { name: 'Contact Information', url: '/pdfs/contact-info.pdf' },
      { name: 'Support Guidelines', url: '/pdfs/support-guidelines.pdf' }
    ]
  }
};

// Breadcrumb component
const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'overview': 'Overview',
      'terrestrial-products': 'Terrestrial Products',
      'ocean-products': 'Ocean Products',
      'atmospheric-products': 'Atmospheric Products',
      'cryospheric-products': 'Cryospheric Products',
      'policy': 'Policy',
      'price': 'Price',
      'data-dissemination-links': 'Data Dissemination Links',
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
                href="/geo-physical"
                className="font-medium hover:text-orange-600 transition-colors duration-200"
              >
                Geo Physical
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

export default function GeoPhysical() {
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
          <GeophysicalSidebar />
          <ContentContainer showLeftContent={true} pageType="data-products">
          {/* Breadcrumb Navigation */}
          <Breadcrumb currentSection={activeSection} />
          
          <h1 className="text-3xl font-bold mb-8 text-center">
            {currentContent.title}
          </h1>
          
          {/* Description in white background */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
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

          {/* PDF Documents Section */}
          {currentContent.pdfs && currentContent.pdfs.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Related Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.pdfs.map((pdf, idx) => (
                  <a
                    key={idx}
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
                  >
                    <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-800 truncate">{pdf.name}</p>
                      <p className="text-xs text-gray-500">Click to download</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
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
