'use client';

import React, { useState, useEffect } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import AwardsSidebar from '../components/AwardsSidebar';
import ContentContainer from '../components/ContentContainer';

// Content data for different award sections
const sectionContent = {
  'awards': {
    title: 'Awards',
    description: 'NRSC has received numerous prestigious awards and recognition for our outstanding contributions to remote sensing and geospatial technology. Our achievements span across various categories including national awards, international recognition, research excellence, and innovation in satellite data processing and applications.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'year-2023': {
    title: 'Year 2023',
    description: 'In 2023, NRSC received several prestigious awards including the National Geospatial Excellence Award for outstanding contributions to geospatial technology, the ISRO Team Excellence Award for exceptional teamwork and project delivery, and recognition for innovative applications in disaster management and environmental monitoring.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'year-2017': {
    title: 'Year 2017',
    description: '2017 was a landmark year for NRSC with recognition for breakthrough technologies in satellite data processing, awards for collaborative research projects with international partners, and honors for developing innovative geospatial solutions that contributed significantly to national development programs.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'year-2016': {
    title: 'Year 2016',
    description: 'NRSC achieved significant recognition in 2016 for excellence in remote sensing applications, particularly in disaster management support and agricultural monitoring systems. Awards were received for developing cutting-edge technologies and methodologies that advanced the field of earth observation.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'year-2015': {
    title: 'Year 2015',
    description: '2015 brought recognition for NRSC\'s innovative approaches to satellite data utilization and geospatial technology development. Awards highlighted our creative solutions in areas such as artificial intelligence applications in remote sensing and automated data processing systems.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'year-2014': {
    title: 'Year 2014',
    description: 'NRSC received awards in 2014 for successful collaborative projects with national and international partners. These recognitions celebrated our ability to work effectively with academic institutions, government agencies, and private sector organizations to achieve common goals.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'year-2013': {
    title: 'Year 2013',
    description: '2013 was marked by awards for outstanding research contributions in remote sensing applications and satellite data processing algorithms. NRSC researchers received recognition for breakthrough technologies and methodologies that advanced the field of earth observation.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'year-2012': {
    title: 'Year 2012',
    description: 'NRSC achieved recognition in 2012 for excellence in technology transfer initiatives and successful commercialization of research outcomes. Awards celebrated our role in bridging the gap between research and practical applications in the geospatial sector.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80'
    ]
  },
  'year-2009-2010': {
    title: 'Year 2009-2010',
    description: 'The period 2009-2010 was significant for NRSC with awards for excellence in public outreach and capacity building programs. These recognitions acknowledged our efforts in educating the public about remote sensing technology and training professionals in geospatial applications.',
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
      'awards': 'Awards',
      'year-2023': 'Year 2023',
      'year-2017': 'Year 2017',
      'year-2016': 'Year 2016',
      'year-2015': 'Year 2015',
      'year-2014': 'Year 2014',
      'year-2013': 'Year 2013',
      'year-2012': 'Year 2012',
      'year-2009-2010': 'Year 2009-2010'
    };
    return sectionMap[section] || 'Awards';
  };

  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <a 
            href="/achievements-awards" 
            className="hover:text-orange-600 transition-colors duration-200"
          >
            Achievements & Awards
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

export default function AchievementsAwards() {
  const [activeSection, setActiveSection] = useState('awards');

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

  const currentContent = sectionContent[activeSection as keyof typeof sectionContent] || sectionContent['awards'];

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />

      {/* Sidebar + Content side-by-side */}
      <main className="flex flex-col md:flex-row py-8">
        <AwardsSidebar />
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
      </main>

      {/* WebPortals below the main section, full width */}
      <div className="px-4 md:px-12">
        <WebPortals />
      </div>

      <Footer />
    </div>
  );
}
