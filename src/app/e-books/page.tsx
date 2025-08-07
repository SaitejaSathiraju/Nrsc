'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import ContentContainer from '../components/ContentContainer';

export default function EBooks() {
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
                <span className="text-gray-800 font-medium">E-Books</span>
              </li>
            </ol>
          </nav>
          
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
            E-Books
          </h1>
          
          {/* Description in white background */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 leading-relaxed">
              NRSC provides a comprehensive collection of digital publications and e-books covering various aspects of remote sensing, geospatial technologies, and their applications. Our e-books include technical manuals, research publications, case studies, and educational materials that serve as valuable resources for researchers, students, and professionals in the field of geospatial sciences.
            </p>
          </div>

          {/* Dynamic Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              alt="E-Books image 1"
              className="w-full h-48 object-cover rounded-md shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80"
              alt="E-Books image 2"
              className="w-full h-48 object-cover rounded-md shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80"
              alt="E-Books image 3"
              className="w-full h-48 object-cover rounded-md shadow-md"
              loading="lazy"
            />
          </div>

          {/* E-Books Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Digital Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/pdfs/remote-sensing-fundamentals.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 mb-1">Remote Sensing Fundamentals</p>
                  <p className="text-sm text-gray-600 mb-1">Dr. Rajesh Kumar</p>
                  <p className="text-xs text-gray-500">Click to download</p>
                </div>
              </a>

              <a
                href="/pdfs/geospatial-applications.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 mb-1">Geospatial Applications</p>
                  <p className="text-sm text-gray-600 mb-1">Prof. Priya Sharma</p>
                  <p className="text-xs text-gray-500">Click to download</p>
                </div>
              </a>

              <a
                href="/pdfs/satellite-data-analysis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 mb-1">Satellite Data Analysis</p>
                  <p className="text-sm text-gray-600 mb-1">Dr. Amit Patel</p>
                  <p className="text-xs text-gray-500">Click to download</p>
                </div>
              </a>

              <a
                href="/pdfs/environmental-monitoring.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 mb-1">Environmental Monitoring</p>
                  <p className="text-sm text-gray-600 mb-1">Dr. Meera Singh</p>
                  <p className="text-xs text-gray-500">Click to download</p>
                </div>
              </a>

              <a
                href="/pdfs/urban-planning-gis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 mb-1">Urban Planning with GIS</p>
                  <p className="text-sm text-gray-600 mb-1">Prof. Sanjay Verma</p>
                  <p className="text-xs text-gray-500">Click to download</p>
                </div>
              </a>

              <a
                href="/pdfs/disaster-management.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 mb-1">Disaster Management</p>
                  <p className="text-sm text-gray-600 mb-1">Dr. Anjali Desai</p>
                  <p className="text-xs text-gray-500">Click to download</p>
                </div>
              </a>

              <a
                href="/pdfs/agriculture-applications.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 mb-1">Agriculture Applications</p>
                  <p className="text-sm text-gray-600 mb-1">Dr. Ramesh Kumar</p>
                  <p className="text-xs text-gray-500">Click to download</p>
                </div>
              </a>

              <a
                href="/pdfs/climate-change-studies.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-800 mb-1">Climate Change Studies</p>
                  <p className="text-sm text-gray-600 mb-1">Prof. Sunita Reddy</p>
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
