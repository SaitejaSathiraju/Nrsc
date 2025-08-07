'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              NRSC offers a comprehensive range of services in remote sensing, geospatial technologies, 
              and satellite data applications to support various sectors and user agencies.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Core Services</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Bhuvan Services</h3>
                <p className="text-blue-700 mb-4">
                  India's national geospatial portal providing access to satellite data, 
                  thematic maps, and geospatial services.
                </p>
                <a href="/bhuvan-services" className="text-blue-600 hover:text-blue-800 font-medium">Explore Bhuvan →</a>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Data Dissemination</h3>
                <p className="text-green-700 mb-4">
                  Comprehensive data distribution services including planning, programming, 
                  and archived data ordering systems.
                </p>
                <a href="/data-dissemination" className="text-green-600 hover:text-green-800 font-medium">Learn More →</a>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specialized Services</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Aerial Services & Digital Mapping</h3>
                <p className="text-gray-700">Aerial photography and high-resolution digital mapping services</p>
                <a href="/aerial-services" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">International Ground Station Services</h3>
                <p className="text-gray-700">Ground station operations and international collaboration services</p>
                <a href="/international-ground-station" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">International Disaster Support</h3>
                <p className="text-gray-700">Emergency response and disaster management support services</p>
                <a href="/international-disaster-support" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">EO Calibration Services</h3>
                <p className="text-gray-700">Earth observation calibration and validation services</p>
                <a href="/eo-calibration" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Satellite Ground Station Services</h3>
                <p className="text-gray-700">Ground station operations and satellite data reception services</p>
                <a href="/satellite-ground-station" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Dissemination Services</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Comprehensive Data Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Planning and Programming</h4>
                  <p className="text-yellow-700 text-sm">Strategic planning for data acquisition and distribution</p>
                  <a href="/planning-programming" className="text-yellow-600 hover:text-yellow-800 text-sm">Learn More →</a>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Archived Data Order</h4>
                  <p className="text-yellow-700 text-sm">Access to historical satellite data archives</p>
                  <a href="/archived-data-order" className="text-yellow-600 hover:text-yellow-800 text-sm">Order Data →</a>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Foreign Data Dissemination</h4>
                  <p className="text-yellow-700 text-sm">International data sharing and collaboration services</p>
                  <a href="/foreign-data-dissemination" className="text-yellow-600 hover:text-yellow-800 text-sm">Details →</a>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>State-of-the-art remote sensing capabilities</li>
              <li>Comprehensive technical support and consultation</li>
              <li>Customized solutions for specific applications</li>
              <li>International collaboration and partnerships</li>
              <li>Capacity building and training programs</li>
              <li>Quality assurance and validation services</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
