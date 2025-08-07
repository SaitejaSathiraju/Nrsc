'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function FormerDirectorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderImage />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Former Directors</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Leadership Legacy</h2>
            <p className="text-gray-600 mb-6">
              NRSC has been fortunate to have visionary leaders who have shaped the organization's 
              growth and contributed significantly to India's remote sensing capabilities.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Former Director 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/4">
                  <div className="w-48 h-64 bg-gray-200 rounded-lg mx-auto md:mx-0">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <span>Director Image</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. YVN Krishnamurthy</h3>
                  <p className="text-lg text-gray-600 mb-4">Former Director (2018-2022)</p>
                  <p className="text-gray-600 mb-4">
                    Led NRSC during a period of significant technological advancement and expansion 
                    of remote sensing applications across various sectors.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Key Contributions</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Advanced satellite data processing capabilities</li>
                        <li>• Enhanced disaster management support</li>
                        <li>• Strengthened international collaborations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Focus Areas</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Geospatial technology development</li>
                        <li>• Capacity building programs</li>
                        <li>• Research and innovation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Former Director 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/4">
                  <div className="w-48 h-64 bg-gray-200 rounded-lg mx-auto md:mx-0">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <span>Director Image</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. V. K. Dadhwal</h3>
                  <p className="text-lg text-gray-600 mb-4">Former Director (2015-2018)</p>
                  <p className="text-gray-600 mb-4">
                    Contributed significantly to the development of remote sensing applications 
                    and establishment of key programs at NRSC.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Key Contributions</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Agricultural applications development</li>
                        <li>• Environmental monitoring programs</li>
                        <li>• Technology transfer initiatives</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Focus Areas</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Remote sensing applications</li>
                        <li>• Research and development</li>
                        <li>• Capacity building</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Former Director 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="md:w-1/4">
                  <div className="w-48 h-64 bg-gray-200 rounded-lg mx-auto md:mx-0">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <span>Director Image</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. K. Radhakrishnan</h3>
                  <p className="text-lg text-gray-600 mb-4">Former Director (2010-2015)</p>
                  <p className="text-gray-600 mb-4">
                    Played a crucial role in modernizing NRSC's infrastructure and expanding 
                    its capabilities in satellite data processing and applications.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Key Contributions</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Infrastructure modernization</li>
                        <li>• Advanced data processing systems</li>
                        <li>• International partnerships</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Focus Areas</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Technology development</li>
                        <li>• System modernization</li>
                        <li>• Strategic planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Legacy and Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Institutional Growth</h3>
                <p className="text-gray-600">Each director contributed to NRSC's evolution and capabilities</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technology Advancement</h3>
                <p className="text-gray-600">Continuous improvement in remote sensing technologies</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">National Service</h3>
                <p className="text-gray-600">Enhanced capabilities for national development programs</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
