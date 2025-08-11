'use client';

import React, { useState, useEffect } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import CampusesSidebar from '../components/CampusesSidebar';
import ContentContainer from '../components/ContentContainer';

// Content data for different campus sections
const sectionContent = {
  'nrsc-balanagar': {
    title: 'NRSC Balanagar',
    description: 'NRSC Balanagar is the main campus and headquarters of the National Remote Sensing Centre. This campus houses the primary administrative offices, research laboratories, and satellite data processing facilities. The campus features state-of-the-art infrastructure for remote sensing applications, data processing centers, and training facilities.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'nrsc-shadnagar': {
    title: 'NRSC Shadnagar',
    description: 'NRSC Shadnagar campus is dedicated to satellite data acquisition and ground station operations. This facility plays a crucial role in receiving and processing satellite data from various Indian and international satellites. The campus includes advanced antenna systems and data processing infrastructure.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'nrsc-jeedimetla': {
    title: 'NRSC Jeedimetla',
    description: 'NRSC Jeedimetla campus focuses on specialized research and development activities in remote sensing technology. This campus houses advanced laboratories for geospatial applications, environmental monitoring systems, and innovative technology development projects.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'nrsc-begumpet': {
    title: 'NRSC Begumpet',
    description: 'NRSC Begumpet campus serves as a regional center for remote sensing applications and capacity building. This facility provides training programs, workshops, and technical support to various government departments and user agencies in the region.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'nrsc-regional-centers': {
    title: 'NRSC Regional Centers',
    description: 'NRSC Regional Centers are strategically located across different parts of the country to provide localized remote sensing services and support. These centers work closely with state governments, local authorities, and regional user communities to address specific regional requirements and applications.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'rrsc-central': {
    title: 'RRSC Central',
    description: 'RRSC Central serves as the central hub for regional remote sensing activities and coordination. This center provides comprehensive remote sensing services, data processing capabilities, and technical support to central government departments and national-level projects.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'rrsc-north': {
    title: 'RRSC North',
    description: 'RRSC North covers the northern region of India, providing specialized remote sensing services for Himalayan states, northern plains, and high-altitude regions. The center focuses on applications related to mountain ecology, glacial studies, and northern regional development.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'rrsc-south': {
    title: 'RRSC South',
    description: 'RRSC South serves the southern states of India with specialized remote sensing applications for coastal regions, tropical ecosystems, and southern regional development. The center provides expertise in coastal monitoring, agricultural applications, and southern regional projects.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'rrsc-east': {
    title: 'RRSC East',
    description: 'RRSC East covers the eastern region of India, providing remote sensing services for eastern states, northeastern regions, and eastern coastal areas. The center specializes in applications for eastern regional development, forest monitoring, and eastern coastal studies.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'rrsc-west': {
    title: 'RRSC West',
    description: 'RRSC West serves the western region of India, providing remote sensing services for western states, desert regions, and western coastal areas. The center specializes in applications for arid land studies, western regional development, and western coastal monitoring.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ]
  }
};

// Breadcrumb component
const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'nrsc-balanagar': 'NRSC Balanagar',
      'nrsc-shadnagar': 'NRSC Shadnagar',
      'nrsc-jeedimetla': 'NRSC Jeedimetla',
      'nrsc-begumpet': 'NRSC Begumpet',
      'nrsc-regional-centers': 'NRSC Regional Centers',
      'rrsc-central': 'RRSC Central',
      'rrsc-north': 'RRSC North',
      'rrsc-south': 'RRSC South',
      'rrsc-east': 'RRSC East',
      'rrsc-west': 'RRSC West'
    };
    return sectionMap[section] || 'NRSC Balanagar';
  };

  return (
    <nav className="mb-10" aria-label="Breadcrumb">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
          <ol className="flex items-center justify-center text-sm text-orange-700">
            <li>
              <a
                href="/campuses"
                className="font-medium hover:text-orange-600 transition-colors duration-200"
              >
                Campuses
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

export default function Campuses() {
  const [activeSection, setActiveSection] = useState('nrsc-balanagar');

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

  const currentContent = sectionContent[activeSection as keyof typeof sectionContent] || sectionContent['nrsc-balanagar'];

  return (
    <div className="min-h-screen bg-white">
      <HeaderImage />
      <Navbar />

      {/* Sidebar + Content with right-side time widget */}
      <main className="py-8">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row">
          <CampusesSidebar />
          <ContentContainer showLeftContent={true} pageType="default">
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
