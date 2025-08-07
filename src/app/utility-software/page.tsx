'use client';

import React, { useState } from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import ContentContainer from '../components/ContentContainer';

export default function UtilitySoftware() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const utilitySoftware = [
    {
      id: 1,
      title: "Cloud and Shadow Mask Utility",
      description: "Clouds in remote sensing images are a source of information in different ways. Clouds play a critical role in the climate system and have importance in the energy balance of the atmosphere. Cloud cover can also provide information related to weather conditions and predictions. In Optical remote sensing the data acquired is affected by the presence of cloud. For studying land resources, the clouds block the features beneath it. In such cases, information on cloud pixels is a necessity for feature extraction. Delineation of clouds and cloud shadows is an important pre-processing step. Any reliable cloud delineation algorithm makes use of thermal band in addition to visible bands. In the absence of thermal band for Resoursesat-2 AWiFS images, an algorithm based on unsupervised classification exploiting spectral attributes is developed for automatic cloud and cloud shadow detection.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
      downloads: [
        { name: "Download", url: "/downloads/cloud-shadow-mask-utility.zip" }
      ],
      manuals: [
        { name: "User Manual", url: "/pdfs/cloud-shadow-mask-manual.pdf" }
      ]
    },
    {
      id: 2,
      title: "SWIR Band synthesis utility for IRS Resourcesat-2 LISS-4 Mx Data",
      description: "SWIR band finds its uses in many applications (snow and cloud detection etc.), Resourcesat Series satellites carry LISS-4 sensor which provides data at a spatial resolution of 5.8m in 4, 3, 2 bands. The SWIR band of in LISS-4 is synthesized using the spatial and spectral knowledge from LISS-3. This module generates synthesized SWIR band at a spatial resolution of LISS-4, by taking the inputs as LISS-3 (Layer stacked as B234), LISS-4 (Layer stacked as B2345) images along with their Meta files. The module accepts inputs in Geo-Tiff format and provides output in Geo-Tiff format. The S/W module has been developed using the coefficients derived from spectral transformation method to establish a relationship between B234 and B345 of LISS-3 image and applying these coefficients on B234 of LISS-4 Image to derive synthesized SWIR band.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
      downloads: [
        { name: "Download", url: "/downloads/swir-band-synthesis-utility.zip" }
      ],
      manuals: [
        { name: "User Manual", url: "/pdfs/swir-band-synthesis-manual.pdf" }
      ]
    },
    {
      id: 3,
      title: "Resourcesat-2 HDF to GeoTiff conversion Utility",
      description: "HDF stands for Hierarchical Data Format. HDF5 is a library and multi object file format for storing scientific data. HDF5 is a completely new Hierarchical Data Format, consisting of a data format specification and a supporting library implementation. It is freely available and designed to address some of the limitations of the older HDF format and also to address current and anticipated requirements of modern systems and applications. Two versions of HDF are currently in widespread use: HDF4 and HDF5. HDF5 is adopted as one of the formats for product dissemination from ISRO's earth observation satellite RESOURCESAT-2.The HDF to GeoTiff Conversion utility developed to allow a user to convert HDF5 Level 2 RAD/Geo data products for RESOURCESAT-2 AWiFS, LISS3, LISS4 (Mono, Mx modes) sensors into GeoTiff format to facilitate users to use these data in other applications which does not support HDF.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=80",
      downloads: [
        { name: "Download 32 Bit Linux Version", url: "/downloads/hdf-geotiff-32bit-linux.zip" },
        { name: "Download 64 Bit Linux Version", url: "/downloads/hdf-geotiff-64bit-linux.zip" },
        { name: "Download 32 Bit Windows Version", url: "/downloads/hdf-geotiff-32bit-windows.zip" },
        { name: "Download 64 Bit Windows Version", url: "/downloads/hdf-geotiff-64bit-windows.zip" }
      ],
      manuals: [
        { name: "User Manual", url: "/pdfs/hdf-geotiff-manual.pdf" }
      ]
    },
    {
      id: 4,
      title: "Data Processing Utility",
      description: "Advanced data processing utility for remote sensing applications. This tool provides comprehensive data processing capabilities for various satellite data formats and supports multiple output formats for different applications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      downloads: [
        { name: "Download", url: "/downloads/data-processing-utility.zip" }
      ],
      manuals: [
        { name: "User Manual", url: "/pdfs/data-processing-manual.pdf" }
      ]
    },
    {
      id: 5,
      title: "Image Analysis Tool",
      description: "Comprehensive image analysis tool for remote sensing data. This utility provides advanced image processing capabilities including classification, segmentation, and feature extraction for various remote sensing applications.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
      downloads: [
        { name: "Download", url: "/downloads/image-analysis-tool.zip" }
      ],
      manuals: [
        { name: "User Manual", url: "/pdfs/image-analysis-manual.pdf" }
      ]
    },
    {
      id: 6,
      title: "Satellite Data Converter",
      description: "Multi-format satellite data converter utility. This tool supports conversion between various satellite data formats and provides batch processing capabilities for large datasets.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80",
      downloads: [
        { name: "Download", url: "/downloads/satellite-data-converter.zip" }
      ],
      manuals: [
        { name: "User Manual", url: "/pdfs/satellite-data-converter-manual.pdf" }
      ]
    }
  ];

  const totalPages = Math.ceil(utilitySoftware.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = utilitySoftware.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
                <span className="text-gray-800 font-medium">Utility Software</span>
              </li>
            </ol>
          </nav>
          
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
            Utility Software
          </h1>
          
          {/* Description in white background */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 leading-relaxed">
              NRSC provides specialized utility software tools for remote sensing data processing and analysis. Our utility software includes tools for cloud detection, band synthesis, and data format conversion that support various applications in geospatial sciences and remote sensing.
            </p>
          </div>

          {/* Dynamic Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
              alt="Utility Software image 1"
              className="w-full h-48 object-cover rounded-md shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80"
              alt="Utility Software image 2"
              className="w-full h-48 object-cover rounded-md shadow-md"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=400&q=80"
              alt="Utility Software image 3"
              className="w-full h-48 object-cover rounded-md shadow-md"
              loading="lazy"
            />
          </div>

          {/* Utility Software Items */}
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="md:w-1/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md shadow-md"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="md:w-2/3">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* Download Links */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Downloads:</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.downloads.map((download, index) => (
                        <a
                          key={index}
                          href={download.url}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          {download.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* User Manual Links */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">User Manuals:</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.manuals.map((manual, index) => (
                        <a
                          key={index}
                          href={manual.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          {manual.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8 mb-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Next
              </button>
            </div>
          )}
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
