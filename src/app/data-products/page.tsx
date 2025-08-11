'use client';

import React, { useState, useEffect } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import DataProductsSidebar from '../components/DataProductsSidebar';
import ContentContainer from '../components/ContentContainer';

// Content data for Technical Details sections on Data Products page
const sectionContent = {
  'overview': {
    title: 'Overview',
    description:
      'NRSC provides comprehensive satellite data products from various Indian and international satellite missions. Our data products include optical, microwave, and hyperspectral data with different spatial, spectral, and temporal resolutions to meet diverse application requirements. These products are processed using advanced algorithms and validated through ground truth data.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'data-product-dois': {
    title: "Data Product DOI's",
    description:
      'All NRSC data products are assigned Digital Object Identifiers (DOIs) for proper citation and attribution. These DOIs ensure that data products can be properly referenced in scientific publications and research work. Each DOI provides a permanent link to the specific data product and includes metadata about the product specifications and usage terms.',
    images: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'optical': {
    title: 'Optical',
    description:
      'NRSC provides optical satellite data products from various missions including Cartosat series, Resourcesat series, and international satellites. These products include multispectral and panchromatic data with spatial resolutions ranging from 0.5m to 56m. Optical data products are widely used for land use mapping, agriculture monitoring, urban planning, and environmental studies.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'microwave': {
    title: 'Microwave',
    description:
      'Microwave satellite data products include Synthetic Aperture Radar (SAR) data from various missions. These products provide all-weather, day-night imaging capabilities and are particularly useful for applications such as disaster monitoring, soil moisture assessment, forest monitoring, and ocean studies. Microwave data products are available in different polarizations and resolutions.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'hyperspectral': {
    title: 'Hyperspectral',
    description:
      'Hyperspectral data products provide detailed spectral information with hundreds of narrow spectral bands. These products are used for detailed material identification, mineral exploration, precision agriculture, and environmental monitoring. NRSC processes and disseminates hyperspectral data from various missions with advanced spectral analysis capabilities.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'policy': {
    title: 'Policy',
    description:
      'NRSC follows established policies for data product dissemination and usage. Our data policy ensures fair access to satellite data products while protecting national security interests. The policy includes guidelines for data access, usage restrictions, citation requirements, and commercial use terms. Regular updates to the policy reflect technological advancements and user requirements.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'data-dissemination-portals': {
    title: 'Data Dissemination Portals',
    description:
      'NRSC operates multiple data dissemination portals to provide easy access to satellite data products. These portals include Bhuvan, the national geospatial platform, and specialized portals for different user communities. The portals offer user registration, data browsing, online ordering, and download capabilities with comprehensive metadata and documentation.',
    images: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'users': {
    title: 'Users',
    description:
      'NRSC data products serve a diverse user community including government departments, academic institutions, research organizations, private sector companies, and international users. Our user base spans various sectors including agriculture, forestry, water resources, urban planning, disaster management, and environmental monitoring. We provide specialized support and training to different user categories.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80',
    ],
  },
  'any-query': {
    title: 'Any Query?',
    description:
      'For any queries related to data products, technical specifications, data access procedures, or user support, please contact our data services team. We provide comprehensive support through multiple channels including email, phone, and online help systems. Our technical experts are available to assist with data selection, processing requirements, and application-specific guidance.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80',
    ],
  },
};

// Breadcrumb component
const Breadcrumb: React.FC<{ currentSection: string }> = ({ currentSection }) => {
  const getBreadcrumbText = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'overview': 'Overview',
      'data-product-dois': "Data Product DOI's",
      'optical': 'Optical',
      'microwave': 'Microwave',
      'hyperspectral': 'Hyperspectral',
      'policy': 'Policy',
      'data-dissemination-portals': 'Data Dissemination Portals',
      'users': 'Users',
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
                href="/data-products"
                className="font-medium hover:text-orange-600 transition-colors duration-200"
              >
                Data Products
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

export default function DataProducts() {
  const [activeSection, setActiveSection] = useState('overview');

  // Handle hash changes in URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
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

      {/* Enhanced Layout with Left Sidebar and Right Side Time Widget */}
      <main className="py-8">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row">
          {/* Left Sidebar */}
          <DataProductsSidebar variant="tech" />
          
          {/* Main Content with Right Side Time Widget */}
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
