'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function OurDirectorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderImage />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Director</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="w-64 h-80 bg-gray-200 rounded-lg mx-auto md:mx-0 mb-6 md:mb-0">
                  {/* Placeholder for director image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span>Director Image</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Dr. Prakash Chauhan</h2>
                <p className="text-lg text-gray-600 mb-4">Director, NRSC</p>
                <p className="text-lg text-gray-600 mb-6">
                  Leading NRSC with expertise in remote sensing and geospatial technology applications.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Leadership</h3>
                    <p className="text-gray-600">
                      Dr. Chauhan provides strategic leadership to NRSC, overseeing all aspects of 
                      remote sensing operations, research, and applications development.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expertise</h3>
                    <p className="text-gray-600">
                      A distinguished scientist with extensive experience in remote sensing, 
                      satellite data processing, and geospatial applications.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
                    <p className="text-gray-600">
                      Committed to advancing remote sensing technology for national development, 
                      disaster management, and environmental monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Strategic Planning</h3>
                <p className="text-gray-600">Developing long-term strategies for NRSC's growth and development</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Research Leadership</h3>
                <p className="text-gray-600">Overseeing research programs and technological innovations</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Collaboration</h3>
                <p className="text-gray-600">Fostering partnerships with national and international organizations</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Capacity Building</h3>
                <p className="text-gray-600">Promoting skill development and knowledge transfer</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Focus Areas</h2>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Advanced Remote Sensing</h3>
                <p className="text-gray-600">
                  Promoting cutting-edge remote sensing technologies and applications for 
                  various sectors including agriculture, forestry, and urban planning.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Disaster Management</h3>
                <p className="text-gray-600">
                  Enhancing NRSC's capabilities in disaster monitoring, assessment, 
                  and response using satellite-based technologies.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Environmental Monitoring</h3>
                <p className="text-gray-600">
                  Supporting environmental studies and climate change research through 
                  advanced remote sensing techniques and data analysis.
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technology Transfer</h3>
                <p className="text-gray-600">
                  Facilitating the transfer of remote sensing technologies to various 
                  government departments and user agencies.
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
