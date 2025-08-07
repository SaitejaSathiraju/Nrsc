'use client';

import React, { useState, useEffect } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import ResourcesSidebar from '../components/ResourcesSidebar';
import ContentContainer from '../components/ContentContainer';

// Content data for different resources sections
const sectionContent = {
  'river-basin-atlas': {
    title: 'River Basin Atlas',
    description: 'The River Basin Atlas provides comprehensive mapping and analysis of river basins across India. This atlas includes detailed information on river networks, watershed boundaries, hydrological characteristics, and water resource potential. The atlas serves as a valuable resource for water resource planning, flood management, and environmental conservation.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'River Basin Atlas Viewer', url: 'https://bhuvan.nrsc.gov.in/river-basin', type: 'external' },
      { name: 'Atlas Documentation', url: '/pdfs/river-basin-atlas.pdf', type: 'pdf' },
      { name: 'Download Portal', url: 'https://data.nrsc.gov.in/river-basin', type: 'external' },
      { name: 'Technical Report', url: '/pdfs/river-basin-report.pdf', type: 'pdf' }
    ]
  },
  'wastelands-atlas': {
    title: 'Wastelands Atlas',
    description: 'The Wastelands Atlas provides detailed mapping and classification of wastelands across India. This comprehensive atlas includes information on degraded lands, barren areas, and potential areas for reclamation and development. The atlas supports land use planning, environmental restoration, and sustainable development initiatives.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'Wastelands Atlas Portal', url: 'https://bhuvan.nrsc.gov.in/wastelands', type: 'external' },
      { name: 'Classification Guide', url: '/pdfs/wastelands-classification.pdf', type: 'pdf' },
      { name: 'Data Access', url: 'https://data.nrsc.gov.in/wastelands', type: 'external' },
      { name: 'Reclamation Guidelines', url: '/pdfs/wastelands-reclamation.pdf', type: 'pdf' }
    ]
  },
  'flood-hazard-zonation-atlas': {
    title: 'Flood Hazard Zonation Atlas',
    description: 'The Flood Hazard Zonation Atlas provides comprehensive mapping of flood-prone areas and risk zones across India. This atlas includes detailed flood hazard maps, vulnerability assessments, and risk zonation for various return periods. The atlas supports disaster management planning, infrastructure development, and flood mitigation strategies.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'Flood Atlas Viewer', url: 'https://bhuvan.nrsc.gov.in/flood-atlas', type: 'external' },
      { name: 'Risk Assessment Manual', url: '/pdfs/flood-risk-assessment.pdf', type: 'pdf' },
      { name: 'Download Platform', url: 'https://data.nrsc.gov.in/flood-atlas', type: 'external' },
      { name: 'Mitigation Guidelines', url: '/pdfs/flood-mitigation.pdf', type: 'pdf' }
    ]
  },
  'glacial-lake-atlas': {
    title: 'Glacial Lake Atlas',
    description: 'The Glacial Lake Atlas provides comprehensive mapping and monitoring of glacial lakes in the Himalayan region. This atlas includes information on glacial lake distribution, size variations, and potential glacial lake outburst flood (GLOF) risks. The atlas supports climate change studies, disaster risk assessment, and environmental monitoring.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'Glacial Lake Viewer', url: 'https://bhuvan.nrsc.gov.in/glacial-lakes', type: 'external' },
      { name: 'GLOF Risk Assessment', url: '/pdfs/glacial-lake-risk.pdf', type: 'pdf' },
      { name: 'Data Portal', url: 'https://data.nrsc.gov.in/glacial-lakes', type: 'external' },
      { name: 'Monitoring Guidelines', url: '/pdfs/glacial-monitoring.pdf', type: 'pdf' }
    ]
  },
  'tea-garden-atlas': {
    title: 'Tea Garden Atlas',
    description: 'The Tea Garden Atlas provides detailed mapping and analysis of tea cultivation areas across India. This atlas includes information on tea garden distribution, production statistics, and environmental conditions affecting tea cultivation. The atlas supports agricultural planning, crop monitoring, and sustainable tea production.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'Tea Garden Portal', url: 'https://bhuvan.nrsc.gov.in/tea-gardens', type: 'external' },
      { name: 'Cultivation Guide', url: '/pdfs/tea-cultivation.pdf', type: 'pdf' },
      { name: 'Production Data', url: 'https://data.nrsc.gov.in/tea-gardens', type: 'external' },
      { name: 'Quality Assessment', url: '/pdfs/tea-quality.pdf', type: 'pdf' }
    ]
  },
  'landslide-atlas': {
    title: 'Landslide Atlas',
    description: 'The Landslide Atlas provides comprehensive mapping and analysis of landslide-prone areas across India. This atlas includes detailed landslide susceptibility maps, historical landslide events, and risk assessment for various geological and climatic conditions. The atlas supports disaster management, infrastructure planning, and environmental conservation.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'Landslide Atlas Viewer', url: 'https://bhuvan.nrsc.gov.in/landslides', type: 'external' },
      { name: 'Risk Assessment Manual', url: '/pdfs/landslide-risk.pdf', type: 'pdf' },
      { name: 'Data Access Portal', url: 'https://data.nrsc.gov.in/landslides', type: 'external' },
      { name: 'Prevention Guidelines', url: '/pdfs/landslide-prevention.pdf', type: 'pdf' }
    ]
  },
  'geology-atlas': {
    title: 'Geology Atlas',
    description: 'The Geology Atlas provides comprehensive geological mapping and analysis of India\'s geological features. This atlas includes detailed geological maps, mineral resource information, structural geology, and geological hazard assessments. The atlas supports mineral exploration, infrastructure development, and environmental planning.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'Geology Atlas Portal', url: 'https://bhuvan.nrsc.gov.in/geology', type: 'external' },
      { name: 'Geological Guide', url: '/pdfs/geology-guide.pdf', type: 'pdf' },
      { name: 'Mineral Data', url: 'https://data.nrsc.gov.in/geology', type: 'external' },
      { name: 'Exploration Manual', url: '/pdfs/geological-exploration.pdf', type: 'pdf' }
    ]
  },
  'lulc-atlas': {
    title: 'LULC Atlas',
    description: 'The Land Use Land Cover (LULC) Atlas provides comprehensive mapping and analysis of land use patterns across India. This atlas includes detailed land use classification, change detection analysis, and spatial distribution of various land cover types. The atlas supports urban planning, environmental monitoring, and sustainable development.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ],
    links: [
      { name: 'LULC Atlas Viewer', url: 'https://bhuvan.nrsc.gov.in/lulc', type: 'external' },
      { name: 'Classification Manual', url: '/pdfs/lulc-classification.pdf', type: 'pdf' },
      { name: 'Change Detection Data', url: 'https://data.nrsc.gov.in/lulc', type: 'external' },
      { name: 'Analysis Guidelines', url: '/pdfs/lulc-analysis.pdf', type: 'pdf' }
    ]
  }
};

// Breadcrumb component
const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'river-basin-atlas': 'River Basin Atlas',
      'wastelands-atlas': 'Wastelands Atlas',
      'flood-hazard-zonation-atlas': 'Flood Hazard Zonation Atlas',
      'glacial-lake-atlas': 'Glacial Lake Atlas',
      'tea-garden-atlas': 'Tea Garden Atlas',
      'landslide-atlas': 'Landslide Atlas',
      'geology-atlas': 'Geology Atlas',
      'lulc-atlas': 'LULC Atlas'
    };
    return sectionMap[section] || 'River Basin Atlas';
  };

  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <a 
            href="/resources" 
            className="hover:text-orange-600 transition-colors duration-200"
          >
            Resources
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

export default function Resources() {
  const [activeSection, setActiveSection] = useState('river-basin-atlas');

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

  const currentContent = sectionContent[activeSection as keyof typeof sectionContent] || sectionContent['river-basin-atlas'];

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />

      {/* Sidebar + Content side-by-side */}
      <main className="flex flex-col md:flex-row py-8">
        <ResourcesSidebar />
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
