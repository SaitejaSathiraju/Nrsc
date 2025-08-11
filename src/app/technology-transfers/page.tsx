'use client';

import React, { useState, useEffect } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import TechnologyTransferSidebar from '../components/TechnologyTransferSidebar';
import ContentContainer from '../components/ContentContainer';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';

// Breadcrumb component
const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'overview': 'Overview',
      'tt': 'TT',
      'active': 'Active',
      'archives': 'Archives',
    };
    return sectionMap[section] || section;
  };

  return (
    <nav className="mb-10" aria-label="Breadcrumb">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
          <ol className="flex items-center justify-center text-sm text-orange-700">
            <li>
              <a href="/resources" className="font-medium hover:text-orange-600 transition-colors duration-200">
                Resources
              </a>
            </li>
            <li className="flex items-center px-2">
              <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="font-semibold text-orange-800">Technology Transfers</span>
            </li>
            {currentSection !== 'overview' && (
              <>
                <li className="flex items-center px-2">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li>
                  <span className="font-semibold text-orange-800">{getBreadcrumbText(currentSection)}</span>
                </li>
              </>
            )}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default function TechnologyTransfers() {
  const [activeSection, setActiveSection] = useState('overview');

  const sectionContent = {
    overview: {
      title: "Technology Transfer Overview",
      description: "NRSC's Technology Transfer program facilitates the transfer of innovative technologies, software, and intellectual property to industry partners, research institutions, and government agencies. Our technology transfer initiatives aim to bridge the gap between research and commercialization, ensuring that cutting-edge remote sensing and geospatial technologies reach end-users effectively.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80"
      ],
      links: [
        { name: 'Technology Transfer Portal', url: 'https://nrsc.gov.in/tech-transfer', type: 'external' },
        { name: 'Transfer Guidelines', url: '/pdfs/tech-transfer-guidelines.pdf', type: 'pdf' },
        { name: 'Application Form', url: 'https://nrsc.gov.in/tech-transfer/apply', type: 'external' },
        { name: 'Process Manual', url: '/pdfs/tech-transfer-manual.pdf', type: 'pdf' }
      ]
    },
    tt: {
      title: "Technology Transfer Process",
      description: "Our technology transfer process involves several key stages: technology identification and evaluation, intellectual property protection, market assessment, partner identification, licensing agreements, and ongoing support. We work closely with potential licensees to ensure successful technology adoption and commercialization.",
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80"
      ],
      links: [
        { name: 'Process Overview', url: 'https://nrsc.gov.in/tech-transfer/process', type: 'external' },
        { name: 'Process Documentation', url: '/pdfs/tech-transfer-process.pdf', type: 'pdf' },
        { name: 'Step-by-Step Guide', url: 'https://nrsc.gov.in/tech-transfer/guide', type: 'external' },
        { name: 'Best Practices', url: '/pdfs/tech-transfer-best-practices.pdf', type: 'pdf' }
      ]
    },
    active: {
      title: "Active Technology Transfer Projects",
      description: "Currently active technology transfer projects include advanced image processing algorithms, satellite data analysis tools, and specialized software utilities for remote sensing applications. These projects are being actively developed and prepared for commercialization through strategic partnerships.",
      images: [
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=80"
      ],
      links: [
        { name: 'Active Projects Portal', url: 'https://nrsc.gov.in/tech-transfer/active', type: 'external' },
        { name: 'Project Catalog', url: '/pdfs/active-projects-catalog.pdf', type: 'pdf' },
        { name: 'Partnership Opportunities', url: 'https://nrsc.gov.in/tech-transfer/partnerships', type: 'external' },
        { name: 'Project Guidelines', url: '/pdfs/active-projects-guidelines.pdf', type: 'pdf' }
      ]
    },
    archives: {
      title: "Technology Transfer Archives",
      description: "Our archives contain records of completed technology transfer projects, including successful licensing agreements, commercialized technologies, and case studies of technology adoption. These archives serve as a valuable resource for understanding the impact and success of our technology transfer initiatives.",
      images: [
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
      ],
      links: [
        { name: 'Archives Portal', url: 'https://nrsc.gov.in/tech-transfer/archives', type: 'external' },
        { name: 'Case Studies', url: '/pdfs/tech-transfer-case-studies.pdf', type: 'pdf' },
        { name: 'Success Stories', url: 'https://nrsc.gov.in/tech-transfer/success-stories', type: 'external' },
        { name: 'Historical Data', url: '/pdfs/tech-transfer-history.pdf', type: 'pdf' }
      ]
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && sectionContent[hash as keyof typeof sectionContent]) {
        setActiveSection(hash);
      }
    };

    // Set initial section based on hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentContent = sectionContent[activeSection as keyof typeof sectionContent];

  return (
    <div className="min-h-screen bg-white">
      <HeaderImage />
      <Navbar />

      {/* Sidebar + Content side-by-side */}
      <main className="py-8">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row">
        <TechnologyTransferSidebar />
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 mb-8">
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

          {/* Related Links Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Related Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentContent.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.type === 'external' ? '_blank' : undefined}
                  rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
                >
                  {link.type === 'external' ? (
                    <svg className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-800 truncate">{link.name}</p>
                    <p className="text-xs text-gray-500">
                      {link.type === 'external' ? 'Click to visit' : 'Click to download'}
                    </p>
                  </div>
                </a>
              ))}
            </div>
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
