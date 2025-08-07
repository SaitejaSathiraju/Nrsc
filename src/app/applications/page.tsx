'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function Applications() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Applications</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              NRSC develops and provides remote sensing applications for various sectors to support 
              sustainable development, resource management, and environmental monitoring across India.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sectoral Applications</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Agriculture</h3>
                <p className="text-green-700 mb-4">
                  Crop monitoring, yield estimation, soil moisture assessment, and precision agriculture applications.
                </p>
                <a href="/applications/agriculture" className="text-green-600 hover:text-green-800 font-medium">Explore Agriculture →</a>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Disaster Management Support</h3>
                <p className="text-blue-700 mb-4">
                  Real-time monitoring and assessment for floods, cyclones, earthquakes, and other natural disasters.
                </p>
                <a href="/applications/disaster-management" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Forestry & Ecology</h3>
                <p className="text-purple-700 mb-4">
                  Forest cover mapping, biodiversity assessment, and ecological monitoring applications.
                </p>
                <a href="/applications/forestry-ecology" className="text-purple-600 hover:text-purple-800 font-medium">Explore Forestry →</a>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Water Resources</h3>
                <p className="text-orange-700 mb-4">
                  Water body mapping, groundwater assessment, and watershed management applications.
                </p>
                <a href="/applications/water-resources" className="text-orange-600 hover:text-orange-800 font-medium">Explore Water Resources →</a>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specialized Applications</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Geosciences</h3>
                <p className="text-gray-700">Geological mapping, mineral exploration, and terrain analysis</p>
                <a href="/applications/geosciences" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">LULC</h3>
                <p className="text-gray-700">Land Use Land Cover mapping and change detection</p>
                <a href="/applications/lulc" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Rural Development</h3>
                <p className="text-gray-700">Rural infrastructure mapping and development planning</p>
                <a href="/applications/rural-development" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Soils</h3>
                <p className="text-gray-700">Soil mapping, classification, and fertility assessment</p>
                <a href="/applications/soils" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Urban & Infrastructure</h3>
                <p className="text-gray-700">Urban planning, infrastructure mapping, and smart city applications</p>
                <a href="/applications/urban-infrastructure" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Earth and Climatic Studies</h3>
                <p className="text-gray-700">Climate monitoring, atmospheric studies, and environmental assessment</p>
                <a href="/applications/earth-climatic-studies" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Application Benefits</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Key Advantages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-yellow-700 space-y-2">
                  <li>• Large area coverage and monitoring</li>
                  <li>• Cost-effective data collection</li>
                  <li>• Regular and systematic observations</li>
                  <li>• Multi-temporal analysis capabilities</li>
                </ul>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Integration with GIS and GPS</li>
                  <li>• Real-time monitoring capabilities</li>
                  <li>• Standardized methodologies</li>
                  <li>• Decision support systems</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Implementation Support</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Technical consultation and support services</li>
              <li>Capacity building and training programs</li>
              <li>Customized application development</li>
              <li>Data processing and analysis services</li>
              <li>Validation and accuracy assessment</li>
              <li>Integration with existing systems</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
