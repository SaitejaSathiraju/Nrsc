'use client';

import React, { useEffect, useState } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import ContentContainer from '../components/ContentContainer';
import DataDisseminationSidebar from '../components/DataDisseminationSidebar';
import WebPortals from '../components/webportals';

const sectionContent = {
  'overview': {
    title: 'Overview',
    description:
      'NRSC Data Dissemination provides end-to-end services for planning, programming, ordering, and delivery of satellite data and products. This ensures efficient and secure access for diverse users.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'planning-and-programming-system': {
    title: 'Planning and Programming System',
    description:
      'The planning and programming system schedules satellite acquisitions and optimizes resource utilization. It includes request intake, feasibility analysis, pass planning, and acquisition scheduling.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'information-to-users-for-programming': {
    title: 'Information to users for Programming',
    description:
      'Guidelines for users submitting programming requests: target AOIs, time windows, sensor modes, and priority levels. Includes request formats and contact channels for clarifications.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'ordering-and-dissemination': {
    title: 'Ordering & Dissemination',
    description:
      'Online ordering, secure payment (where applicable), tasking status, and delivery via download or media. Includes metadata, license terms, and DOIs where relevant.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'any-query': {
    title: 'Any Query?',
    description:
      'For assistance with programming, ordering, delivery, or policy, contact the Data Dissemination team. Support available via email, phone, and helpdesk.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80',
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
              <a href="/data-dissemination" className="font-medium hover:text-orange-600 transition-colors duration-200">
                Data Dissemination
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

export default function DataDissemination() {
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
          <DataDisseminationSidebar />
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


