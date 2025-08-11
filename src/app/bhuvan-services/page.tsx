'use client';

import React, { useEffect, useState } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ServicesSidebar from '../components/ServicesSidebar';
import ContentContainer from '../components/ContentContainer';
import WebPortals from '../components/webportals';

// Content data
const sectionContent = {
  'overview': {
    title: 'Overview',
    description:
      'Bhuvan Services provide a comprehensive suite of geospatial services and satellite data products through the Bhuvan platform, supporting decision-making across sectors.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'satellite-data-services': {
    title: 'Satellite Data Services',
    description:
      'Access multi-mission satellite data, scheduling, and ordering systems for diverse applications.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'thematic-services': {
    title: 'Thematic Services',
    description:
      'Discover thematic map services such as land use, vegetation, hydrology, and infrastructure.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'natural-resources-census': {
    title: 'Natural Resources Census',
    description:
      'National census layers and analytics on natural resources, supporting governance and planning.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'agriculture': {
    title: 'Agriculture',
    description:
      'Crop monitoring, yield estimation, and agri-advisories through satellite-driven analytics.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'forestry-and-environment': {
    title: 'Forestry & Environment',
    description:
      'Forest cover mapping, biodiversity, and environmental compliance services.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'rural-development': {
    title: 'Rural Development',
    description:
      'Decision support for rural infrastructure, resource planning, and program monitoring.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'water-resources': {
    title: 'Water Resources',
    description:
      'Hydrological assessments, watershed management, and reservoir monitoring tools.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'geosciences': {
    title: 'GeoSciences',
    description:
      'Geology, geomorphology, minerals, and terrain analytics using EO datasets.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'urban-and-infrastructure': {
    title: 'Urban & Infrastructure',
    description:
      'Urban growth, infrastructure mapping, and smart city planning services.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'ocean-sciences-and-atmosphere': {
    title: 'Ocean Sciences and Atmosphere',
    description:
      'Ocean color, SST, altimetry, and atmospheric composition services for marine and climate.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'disaster-management-support': {
    title: 'Disaster Management Support',
    description:
      'Rapid mapping, risk assessment, and decision support for disaster response.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'mobile-applications': {
    title: 'Mobile Applications',
    description:
      'Mobile apps for field data collection, citizen science, and on-the-go access to Bhuvan.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
    ],
  },
};

// Breadcrumb
const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = Object.fromEntries(
      Object.entries(sectionContent).map(([key, value]) => [key, (value as any).title])
    );
    return sectionMap[currentSection] || 'Overview';
  };

  return (
    <nav className="mb-10" aria-label="Breadcrumb">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
          <ol className="flex items-center justify-center text-sm text-orange-700">
            <li>
              <a
                href="/services"
                className="font-medium hover:text-orange-600 transition-colors duration-200"
              >
                Services
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

export default function Services() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && sectionContent[hash as keyof typeof sectionContent]) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentContent = sectionContent[activeSection as keyof typeof sectionContent] || sectionContent['overview'];

  return (
    <div className="min-h-screen bg-white">
      <HeaderImage />
      <Navbar />

      <main className="py-8">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row">
          <ServicesSidebar />
          <ContentContainer showLeftContent={true} pageType="services">
            <Breadcrumb currentSection={activeSection} />

            <h1 className="text-3xl font-bold mb-8 text-center">{currentContent.title}</h1>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
              <p className="text-gray-700 leading-relaxed">{currentContent.description}</p>
            </div>

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
      <WebPortals />

      <Footer />
    </div>
  );
}
