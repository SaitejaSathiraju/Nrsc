'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import ContentContainer from '../components/ContentContainer';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';

// Breadcrumb component
const Breadcrumb: React.FC = () => {
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
          <span className="text-gray-800 font-medium">Brochures</span>
        </li>
      </ol>
    </nav>
  );
};

export default function Brochures() {
  const brochures2025 = [
    {
      name: "Bhoonidhi – ISRO's Earth Observation Data Hub",
      pdf: "/pdfs/brochures-2025/bhoonidhi-eo-data-hub.pdf"
    },
    {
      name: "MOSDAC User Order Processing Software (UOPS)",
      pdf: "/pdfs/brochures-2025/mosdac-uops.pdf"
    },
    {
      name: "Visualisation of Earth Observatin Data & Arcival System (VEDAS)",
      pdf: "/pdfs/brochures-2025/vedas-brochure.pdf"
    },
    {
      name: "Bhuvan NextGen",
      pdf: "/pdfs/brochures-2025/bhuvan-nextgen.pdf"
    },
    {
      name: "NDEM version 5.0",
      pdf: "/pdfs/brochures-2025/ndem-v5.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />

      <main className="py-8">
        <ContentContainer>
          {/* Breadcrumb Navigation */}
          <Breadcrumb />
          
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
            Brochures
          </h1>
          
          {/* Description in white background */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 leading-relaxed">
              Explore our comprehensive collection of brochures showcasing NRSC's latest technologies, platforms, and services. These informative brochures provide detailed insights into our Earth observation capabilities, data processing systems, and geospatial solutions.
            </p>
          </div>

          {/* Brochures Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-2">
              Brochures - 2025
            </h2>
            <div className="space-y-4">
              {brochures2025.map((brochure, index) => (
                <a
                  key={index}
                  href={brochure.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <span className="text-sm font-medium text-gray-600 min-w-[2rem] flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-gray-700 group-hover:text-gray-900 text-sm leading-relaxed break-words">
                      {brochure.name}
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-200 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
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
