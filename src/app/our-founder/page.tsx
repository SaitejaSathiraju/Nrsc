'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function OurFounderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderImage />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Founder</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="w-64 h-80 bg-gray-200 rounded-lg mx-auto md:mx-0 mb-6 md:mb-0">
                  {/* Placeholder for founder image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <span>Founder Image</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Dr. Vikram Sarabhai</h2>
                <p className="text-lg text-gray-600 mb-6">
                  The visionary founder of India's space program and a pioneer in remote sensing technology.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Early Life & Education</h3>
                    <p className="text-gray-600">
                      Born in 1919, Dr. Sarabhai was a brilliant scientist who studied at Cambridge University 
                      and later established the Physical Research Laboratory in Ahmedabad.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision for Space Program</h3>
                    <p className="text-gray-600">
                      Dr. Sarabhai envisioned using space technology for national development, 
                      particularly in areas like communication, weather forecasting, and natural resource management.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Establishment of ISRO</h3>
                    <p className="text-gray-600">
                      He played a crucial role in establishing the Indian Space Research Organisation (ISRO) 
                      and laid the foundation for India's space program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Contributions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Space Research</h3>
                <p className="text-gray-600">Pioneered space research in India and established key institutions</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Remote Sensing</h3>
                <p className="text-gray-600">Advocated for the use of satellite technology for Earth observation</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
                <p className="text-gray-600">Established educational institutions and promoted scientific education</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">International Collaboration</h3>
                <p className="text-gray-600">Fostered international partnerships in space research</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Legacy</h2>
            <p className="text-gray-600 mb-6">
              Dr. Vikram Sarabhai's vision continues to inspire generations of scientists and engineers. 
              His emphasis on using space technology for societal benefits remains the cornerstone of 
              India's space program and institutions like NRSC.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Scientific Excellence</h3>
                <p className="text-gray-600">Commitment to scientific research and innovation</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">National Development</h3>
                <p className="text-gray-600">Focus on technology for national progress</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Human Values</h3>
                <p className="text-gray-600">Emphasis on human development and values</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
