'use client';

import React, { useState, useEffect } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import AboutUsSidebar from '../components/about-usSidebar';
import ContentContainer from '../components/ContentContainer';

const imageUrls = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
];

// Content data for different sections
const sectionContent = {
  'our-activities': {
    title: 'Our Activities',
    description: 'NRSC conducts a wide range of activities in remote sensing and geospatial technology. Our core activities include satellite data acquisition and processing, development of remote sensing applications, disaster management support services, geospatial services for governance, capacity building and training programs, and technology transfer and outreach.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'satellite-data-acquisition': {
    title: 'Satellite Data Acquisition',
    description: 'NRSC operates ground stations for receiving satellite data from various Indian and international satellites including Cartosat series satellites, Resourcesat series satellites, Oceansat series satellites, and international satellite missions.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'data-processing-dissemination': {
    title: 'Data Processing & Dissemination',
    description: 'We process and disseminate satellite data products to various user communities through standard data products generation, value-added products development, data dissemination through Bhuvan portal, and custom data processing services.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'aerial-services-digital-mapping': {
    title: 'Aerial Services & Digital Mapping',
    description: 'NRSC provides comprehensive aerial services and digital mapping solutions including aerial photography and surveying, digital elevation model generation, 3D mapping and visualization, and infrastructure mapping services.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'remote-sensing-applications': {
    title: 'Remote Sensing Applications',
    description: 'We develop and implement remote sensing applications for various sectors including agriculture and crop monitoring, forestry and ecology assessment, water resources management, urban planning and infrastructure, and land use and land cover mapping.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'disaster-management-support': {
    title: 'Disaster Management Support',
    description: 'NRSC provides critical support for disaster management through rapid response mapping, damage assessment, risk assessment and vulnerability mapping, and early warning system support.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'geospatial-services': {
    title: 'Geospatial Services',
    description: 'We provide comprehensive geospatial services for good governance including spatial data infrastructure development, GIS-based decision support systems, digital governance solutions, and smart city applications.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'region-specific-services': {
    title: 'Region Specific Services',
    description: 'NRSC offers specialized services tailored to regional requirements including regional resource mapping, local development planning, regional environmental monitoring, and custom regional applications.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'outreach-and-training': {
    title: 'Outreach and Training',
    description: 'We conduct extensive outreach and training programs including professional training courses, student internship programs, international collaboration programs, technology transfer initiatives, and public awareness campaigns.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ]
  }
};

// Breadcrumb component (centered pill style)
const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'our-activities': 'Our Activities',
      'satellite-data-acquisition': 'Satellite Data Acquisition',
      'data-processing-dissemination': 'Data Processing & Dissemination',
      'aerial-services-digital-mapping': 'Aerial Services & Digital Mapping',
      'remote-sensing-applications': 'Remote Sensing Applications',
      'disaster-management-support': 'Disaster Management Support',
      'geospatial-services': 'Geospatial Services',
      'region-specific-services': 'Region Specific Services',
      'outreach-and-training': 'Outreach and Training'
    };
    return sectionMap[section] || 'Our Activities';
  };

  return (
    <nav className="mb-10" aria-label="Breadcrumb">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
          <ol className="flex items-center justify-center text-sm text-orange-700">
            <li>
              <a
                href="/about-us"
                className="font-medium hover:text-orange-600 transition-colors duration-200"
              >
                About Us
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

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState('our-activities');

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

  const currentContent = sectionContent[activeSection as keyof typeof sectionContent] || sectionContent['our-activities'];

  return (
    <div className="min-h-screen bg-white">
      <HeaderImage />
      <Navbar />

      {/* Sidebar + Content with right-side time widget */}
      <main className="py-8">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row">
          <AboutUsSidebar />
          <ContentContainer showLeftContent={true} pageType="about">
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
