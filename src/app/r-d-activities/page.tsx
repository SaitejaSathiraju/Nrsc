'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function RDActivities() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">R & D Activities</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              NRSC conducts cutting-edge research and development activities in remote sensing technologies, 
              geospatial applications, and satellite data processing to advance the field and support national development.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Research Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Satellite Data Processing</h3>
                <p className="text-blue-700 mb-4">
                  Advanced algorithms and methodologies for processing satellite data from various missions 
                  including optical, radar, and hyperspectral sensors.
                </p>
                <ul className="text-blue-700 space-y-1">
                  <li>• Image processing algorithms</li>
                  <li>• Data fusion techniques</li>
                  <li>• Quality assessment methods</li>
                  <li>• Automated processing systems</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Application Development</h3>
                <p className="text-green-700 mb-4">
                  Development of innovative applications for various sectors including agriculture, 
                  forestry, water resources, and disaster management.
                </p>
                <ul className="text-green-700 space-y-1">
                  <li>• Crop monitoring systems</li>
                  <li>• Forest assessment tools</li>
                  <li>• Water resource mapping</li>
                  <li>• Disaster monitoring systems</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Research Programs</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technology Development</h3>
                <p className="text-gray-700">Development of new technologies and methodologies for remote sensing applications</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Algorithm Research</h3>
                <p className="text-gray-700">Research on advanced algorithms for data processing and analysis</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Validation Studies</h3>
                <p className="text-gray-700">Ground truth validation and accuracy assessment studies</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Applications Research</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Sectoral Applications</h3>
              <p className="text-yellow-700 mb-4">
                Research and development of applications for various sectors including agriculture, 
                forestry, water resources, urban planning, and disaster management.
              </p>
              <a href="/r-d-applications" className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">
                Explore Applications
              </a>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Collaborative Research</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Academic partnerships with universities and research institutions</li>
              <li>Industry collaboration for technology transfer</li>
              <li>International research programs and partnerships</li>
              <li>Government agency collaborations for application development</li>
              <li>Joint research projects with international space agencies</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Research Outputs</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Publications</h3>
                <p className="text-gray-700">Research papers published in peer-reviewed journals and conferences</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Patents</h3>
                <p className="text-gray-700">Intellectual property and patented technologies developed through research</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Software Tools</h3>
                <p className="text-gray-700">Software applications and tools developed for various applications</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Methodologies</h3>
                <p className="text-gray-700">Standardized methodologies and best practices for remote sensing applications</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
