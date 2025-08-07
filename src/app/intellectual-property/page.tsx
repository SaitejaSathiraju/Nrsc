'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import ContentContainer from '../components/ContentContainer';

export default function IntellectualProperty() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
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
                <span className="text-gray-800 font-medium">Intellectual Property</span>
              </li>
            </ol>
          </nav>
          
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
            Intellectual Property
          </h1>
          
          {/* Description in white background */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 leading-relaxed">
              NRSC's intellectual property portfolio encompasses a wide range of patents, copyrights, and proprietary technologies developed through our research and development activities. Our IP assets include innovative remote sensing technologies, data processing algorithms, and specialized software tools that contribute to the advancement of geospatial sciences and applications.
            </p>
          </div>

          {/* Dynamic Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              alt="Intellectual Property image 1"
              className="w-full h-48 object-cover rounded-md shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80"
              alt="Intellectual Property image 2"
              className="w-full h-48 object-cover rounded-md shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80"
              alt="Intellectual Property image 3"
              className="w-full h-48 object-cover rounded-md shadow-md"
              loading="lazy"
            />
          </div>

          {/* PDF Documents Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Intellectual Property Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/pdfs/ip-portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                                 <div className="min-w-0 flex-1">
                   <p className="font-medium text-gray-800 mb-1">IP Portfolio Overview</p>
                   <p className="text-xs text-gray-500">Click to download</p>
                 </div>
              </a>

              <a
                href="/pdfs/patents-catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                                 <div className="min-w-0 flex-1">
                   <p className="font-medium text-gray-800 mb-1">Patents Catalog</p>
                   <p className="text-xs text-gray-500">Click to download</p>
                 </div>
              </a>

              <a
                href="/pdfs/technology-transfer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                                 <div className="min-w-0 flex-1">
                   <p className="font-medium text-gray-800 mb-1">Technology Transfer Guide</p>
                   <p className="text-xs text-gray-500">Click to download</p>
                 </div>
              </a>

              <a
                href="/pdfs/software-licensing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                                 <div className="min-w-0 flex-1">
                   <p className="font-medium text-gray-800 mb-1">Software Licensing</p>
                   <p className="text-xs text-gray-500">Click to download</p>
                 </div>
              </a>

              <a
                href="/pdfs/copyright-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                                 <div className="min-w-0 flex-1">
                   <p className="font-medium text-gray-800 mb-1">Copyright Policy</p>
                   <p className="text-xs text-gray-500">Click to download</p>
                 </div>
              </a>

              <a
                href="/pdfs/ip-application.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                                 <div className="min-w-0 flex-1">
                   <p className="font-medium text-gray-800 mb-1">IP Application Form</p>
                   <p className="text-xs text-gray-500">Click to download</p>
                 </div>
              </a>
            </div>
          </div>
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
