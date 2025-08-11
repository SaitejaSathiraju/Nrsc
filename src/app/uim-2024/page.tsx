'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import ContentContainer from '../components/ContentContainer';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';

// Breadcrumb component
const Breadcrumb: React.FC = () => {
  return (
    <nav className="mb-10" aria-label="Breadcrumb">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
          <ol className="flex items-center justify-center text-sm text-orange-700">
            <li>
              <a href="/resources" className="font-medium hover:text-orange-600 transition-colors duration-200">
                Resources
              </a>
            </li>
            <li className="flex items-center px-2">
              <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="font-semibold text-orange-800">UIM_2024</span>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default function UIM2024() {
  const technicalSessions = [
    {
      title: "Technical Session - 1",
      documents: [
        { name: "Indian Space Policy 2023 & Future missions", pdf: "/pdfs/uim-2024/session1/indian-space-policy-2023.pdf" },
        { name: "EO Data needs for Sustainable Development", pdf: "/pdfs/uim-2024/session1/eo-data-sustainable-development.pdf" },
        { name: "Implementation of Indian Space Policy for Satellite Data Dissemination Bhoonidhi - ISRO's EO Data Hub", pdf: "/pdfs/uim-2024/session1/bhoonidhi-eo-data-hub.pdf" },
        { name: "Role of NSIL- Space Sector Reforms and Indian Space Policy - 2023", pdf: "/pdfs/uim-2024/session1/nsil-space-sector-reforms.pdf" },
        { name: "Promotion & Authorization of Space Based Activities in the Country", pdf: "/pdfs/uim-2024/session1/space-activities-authorization.pdf" }
      ]
    },
    {
      title: "Technical Session - 2",
      documents: [
        { name: "Space-Based Ocean Science and Applications - Contributing to UN Ocean Decade Initiatives", pdf: "/pdfs/uim-2024/session2/ocean-science-un-decade.pdf" },
        { name: "Ocean & Climate Studies Applications", pdf: "/pdfs/uim-2024/session2/ocean-climate-studies.pdf" },
        { name: "EOS-04 (RISAT-1A) & EOS-06 (Oceansat-3) Applications in Agriculture", pdf: "/pdfs/uim-2024/session2/eos-applications-agriculture.pdf" },
        { name: "AI based Change Detection for Defence Lands", pdf: "/pdfs/uim-2024/session2/ai-change-detection-defence.pdf" },
        { name: "Applications of UAV imaging techniques for characterization of plantation crops", pdf: "/pdfs/uim-2024/session2/uav-plantation-crops.pdf" }
      ]
    },
    {
      title: "Technical Session - 3",
      documents: [
        { name: "Machine learning based augmentation for LISS-4", pdf: "/pdfs/uim-2024/session3/ml-augmentation-liss4.pdf" },
        { name: "High Resolution Cartosat-1 DSM", pdf: "/pdfs/uim-2024/session3/cartosat1-dsm.pdf" },
        { name: "Cartosat-3 Improved Products", pdf: "/pdfs/uim-2024/session3/cartosat3-products.pdf" },
        { name: "New products from SAR Sensors", pdf: "/pdfs/uim-2024/session3/sar-sensor-products.pdf" },
        { name: "NRSC, ISRO Cal-Val activities", pdf: "/pdfs/uim-2024/session3/nrsc-cal-val-activities.pdf" }
      ]
    },
    {
      title: "Technical Session - 4",
      documents: [
        { name: "Improved Resolution of SCATSAT for Weather Forecasting", pdf: "/pdfs/uim-2024/session4/scatsat-weather-forecasting.pdf" },
        { name: "Extraction of Volume of Black Stone from inside and outside of the leased quarry areas of BajabatiHill, DharmasalaTahasil, JajpurDistrict, Odisha for the period 07-11-2005 to 01-01-2019 to comply the Directorate of Vigilance, Odisha, Cuttack arising out of Hon'ble LokayuktaCase NoL.Y-670/2021 Using CARTOSAT-1 Stereo Data and Photogrammetric Technique", pdf: "/pdfs/uim-2024/session4/black-stone-extraction-cartosat.pdf" },
        { name: "Green Cover Index for National Highways of India", pdf: "/pdfs/uim-2024/session4/green-cover-index-highways.pdf" },
        { name: "CARTOSAT : A Technical Odyssey Unveiling Earth's Topography", pdf: "/pdfs/uim-2024/session4/cartosat-technical-odyssey.pdf" }
      ]
    },
    {
      title: "Technical Session - 5",
      documents: [
        { name: "Utilization of RS Data for Generating Solar Energy Potential Maps", pdf: "/pdfs/uim-2024/session5/solar-energy-potential-maps.pdf" },
        { name: "ICESat-2 based Ground photons retrieval in urban areas by using Deep Learning Approach", pdf: "/pdfs/uim-2024/session5/icesat2-ground-photons.pdf" },
        { name: "Data Analysis in Remote Sensing : Change Detection in LULC using Time Series and Deep Learning for Unveiling Insights with Modified SHAP", pdf: "/pdfs/uim-2024/session5/lulc-change-detection-shap.pdf" },
        { name: "Data Science with Geospatial Analytics in PropTech", pdf: "/pdfs/uim-2024/session5/geospatial-analytics-proptech.pdf" },
        { name: "Advanced technologies using Data Science with APIs", pdf: "/pdfs/uim-2024/session5/data-science-apis.pdf" }
      ]
    },
    {
      title: "Technical Session - 6",
      documents: [
        { name: "Global and Indian Geospatial Market and Economy", pdf: "/pdfs/uim-2024/session6/geospatial-market-economy.pdf" },
        { name: "GEOSPATIAL DATA & SERVICES", pdf: "/pdfs/uim-2024/session6/geospatial-data-services.pdf" },
        { name: "Leveraging PLANET Imagery and AI/Analytics to Mitigate Food insecurity in Odisha – NRSC UIM 2024", pdf: "/pdfs/uim-2024/session6/planet-imagery-food-security.pdf" },
        { name: "OGC Standards & Geospatial Data Cubes", pdf: "/pdfs/uim-2024/session6/ogc-standards-data-cubes.pdf" },
        { name: "Harnessing Mult-sensor Technologies for Disaster Monitoring & Detection", pdf: "/pdfs/uim-2024/session6/multisensor-disaster-monitoring.pdf" },
        { name: "Respond to Disaster with on-demand Satellite Imagery", pdf: "/pdfs/uim-2024/session6/ondemand-satellite-imagery.pdf" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderImage />
      <Navbar />

      <main className="py-8">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col">
        <ContentContainer showLeftContent={true} pageType="data-products">
          {/* Breadcrumb Navigation */}
          <Breadcrumb />
          
          <h1 className="text-3xl font-bold mb-8 text-center">
            User Interaction Meet - 2024
          </h1>
          
          {/* Description in white background */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
            <p className="text-gray-700 leading-relaxed">
              The User Interaction Meet (UIM) 2024 brings together experts, researchers, and stakeholders from the remote sensing and geospatial community to discuss the latest developments, share insights, and explore collaborative opportunities in Earth observation and space technology applications.
            </p>
          </div>

          {/* Technical Sessions */}
          <div className="space-y-8">
            {technicalSessions.map((session, sessionIndex) => (
              <div key={sessionIndex} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                  {session.title}
                </h2>
                <div className="space-y-4">
                  {session.documents.map((document, docIndex) => (
                    <a
                      key={docIndex}
                      href={document.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                    >
                      <span className="text-sm font-medium text-gray-600 min-w-[2rem] flex-shrink-0 mt-1">
                        {docIndex + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="text-gray-700 group-hover:text-gray-900 text-sm leading-relaxed break-words">
                          {document.name}
                        </span>
                      </div>
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-200 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ContentContainer>
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
