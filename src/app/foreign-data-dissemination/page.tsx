"use client";

import React, { useEffect, useState } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ContentContainer from '../components/ContentContainer';
import ForeignDataDisseminationSidebar from '../components/ForeignDataDisseminationSidebar';
import WebPortals from '../components/webportals';

const sectionContent = {
  'overview': {
    title: 'Overview',
    description:
      'Foreign Data Dissemination handles procurement and delivery of satellite data from international missions, following applicable policies and licensing.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'ordering-and-payment': {
    title: 'Ordering and Payment',
    description:
      'Ordering involves request submission, feasibility check with partner agencies, quotation, and payment. Delivery is provided per partner timelines and terms.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'foreign-missions': {
    title: 'Foreign Missions',
    description:
      'Supported foreign missions include Sentinel, Landsat, RADARSAT, and other partner satellites. Availability depends on partner data policies.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'who-can-buy-foreign-data': {
    title: 'Who can buy Foreign data?',
    description:
      'Government, academia, research, and commercial users may request foreign data, subject to national clearances and partner policies.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'links': {
    title: 'Links',
    description:
      'Useful links to partner catalogs, request forms, and documentation are provided for convenience and due diligence.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'any-query': {
    title: 'Any Query?',
    description:
      'Contact the Foreign Data Dissemination team for assistance on availability, pricing, licensing, and delivery information.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    ],
  },
};

const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = Object.fromEntries(
      Object.entries(sectionContent).map(([key, value]) => [key, (value as any).title])
    );
    return sectionMap[section] || 'Overview';
  };

  return (
    <nav className="mb-10" aria-label="Breadcrumb">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
          <ol className="flex items-center justify-center text-sm text-orange-700">
            <li>
              <a href="/foreign-data-dissemination" className="font-medium hover:text-orange-600 transition-colors duration-200">
                Foreign Data Dissemination
              </a>
            </li>
            <li className="flex items-center px-2">
              <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="font-semibold text-orange-800">{getBreadcrumbText(currentSection)}</span>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default function ForeignDataDissemination() {
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
          <ForeignDataDisseminationSidebar />
          <ContentContainer showLeftContent={true} pageType="applications">
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


