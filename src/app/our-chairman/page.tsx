'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function OurChairmanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderImage />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Chairman</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="w-64 h-80 bg-gray-200 rounded-lg mx-auto md:mx-0 mb-6 md:mb-0">
                  {/* Placeholder for chairman image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span>Chairman Image</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Dr. S. Somanath</h2>
                <p className="text-lg text-gray-600 mb-4">Chairman, ISRO</p>
                <p className="text-lg text-gray-600 mb-6">
                  Leading India's space program with vision and expertise in space technology and applications.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Leadership Role</h3>
                    <p className="text-gray-600">
                      As the Chairman of ISRO, Dr. Somanath provides strategic leadership to all ISRO centers 
                      including NRSC, guiding India's space program towards new heights.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expertise</h3>
                    <p className="text-gray-600">
                      A distinguished scientist with extensive experience in launch vehicle technology, 
                      propulsion systems, and space mission management.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision for NRSC</h3>
                    <p className="text-gray-600">
                      Emphasizes the importance of remote sensing and geospatial technology for national development, 
                      disaster management, and environmental monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Priorities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technology Advancement</h3>
                <p className="text-gray-600">Promoting cutting-edge space technology development</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">National Development</h3>
                <p className="text-gray-600">Ensuring space technology benefits reach all sectors</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">International Collaboration</h3>
                <p className="text-gray-600">Strengthening global partnerships in space research</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Capacity Building</h3>
                <p className="text-gray-600">Developing human resources and expertise</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Strategic Focus Areas</h2>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Remote Sensing Applications</h3>
                <p className="text-gray-600">
                  Expanding the use of satellite data for agriculture, forestry, water resources, 
                  and urban planning applications.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Disaster Management</h3>
                <p className="text-gray-600">
                  Enhancing capabilities for disaster monitoring, assessment, and response using 
                  space-based technologies.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Climate Change Studies</h3>
                <p className="text-gray-600">
                  Supporting climate change research and environmental monitoring through 
                  advanced remote sensing techniques.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Digital India</h3>
                <p className="text-gray-600">
                  Contributing to Digital India initiatives through geospatial data and 
                  technology solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
