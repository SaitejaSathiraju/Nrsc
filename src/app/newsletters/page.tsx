'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';
import Footer from '../components/Footer';
import ContentContainer from '../components/ContentContainer';

export default function Newsletters() {
  const newsletters = [
    { date: "December 2024", document: "NRSC-SAMVAAD", pdf: "/pdfs/nrsc-samvaad-dec-2024.pdf" },
    { date: "July 2024", document: "Pixel 2 People (P2P) - News Letter - July,2024", pdf: "/pdfs/p2p-july-2024.pdf" },
    { date: "May 2024", document: "SAMVAAD 2024 Technical", pdf: "/pdfs/samvaad-2024-technical.pdf" },
    { date: "May 2024", document: "SAMVAAD 2023 General", pdf: "/pdfs/samvaad-2023-general.pdf" },
    { date: "January 2024", document: "Pixel 2 People (P2P) - News Letter - January,2024", pdf: "/pdfs/p2p-january-2024.pdf" },
    { date: "November 2023", document: "Souvenir - Inter Centre Sports Meet - November,2023", pdf: "/pdfs/souvenir-sports-meet-nov-2023.pdf" },
    { date: "July 2023", document: "Pixel 2 People (P2P) - News Letter - July,2023", pdf: "/pdfs/p2p-july-2023.pdf" },
    { date: "September 2023", document: "Souvenir - Golden Jubilee Celebrations", pdf: "/pdfs/souvenir-golden-jubilee-sep-2023.pdf" },
    { date: "May 2023", document: "SAMVAAD 2023 Technical", pdf: "/pdfs/samvaad-2023-technical.pdf" },
    { date: "January 2023", document: "Pixel 2 People (P2P) - News Letter - January,2023", pdf: "/pdfs/p2p-january-2023.pdf" },
    { date: "December 2022", document: "NRSC-SAMVAAD", pdf: "/pdfs/nrsc-samvaad-dec-2022.pdf" },
    { date: "July 2022", document: "Pixel 2 People (P2P) - News Letter - July,2022", pdf: "/pdfs/p2p-july-2022.pdf" },
    { date: "March 2022", document: "SAMVAAD 2022 Technical", pdf: "/pdfs/samvaad-2022-technical.pdf" },
    { date: "Jan 2022", document: "Pixel 2 People (P2P) - News Letter - Jan,2022", pdf: "/pdfs/p2p-jan-2022.pdf" },
    { date: "October 2021", document: "NRSC-SAMVAAD", pdf: "/pdfs/nrsc-samvaad-oct-2021.pdf" },
    { date: "July 2021", document: "Pixel 2 People (P2P) - News Letter - July,2021", pdf: "/pdfs/p2p-july-2021.pdf" },
    { date: "March 2021", document: "SAMVAAD 2021 Technical", pdf: "/pdfs/samvaad-2021-technical.pdf" },
    { date: "January 2021", document: "Pixel 2 People (P2P) - News Letter - January,2021", pdf: "/pdfs/p2p-january-2021.pdf" },
    { date: "November 2020", document: "NRSC-SAMVAAD", pdf: "/pdfs/nrsc-samvaad-nov-2020.pdf" },
    { date: "January 2020", document: "Pixel 2 People (P2P) - News Letter - January,2020", pdf: "/pdfs/p2p-january-2020.pdf" },
    { date: "July 2020", document: "Pixel 2 People (P2P) - News Letter - July,2020", pdf: "/pdfs/p2p-july-2020.pdf" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-full px-4 py-2 shadow-sm">
                <ol className="flex items-center justify-center text-sm text-orange-700">
                  <li>
                    <a
                      href="/resources"
                      className="font-medium hover:text-orange-600 transition-colors duration-200"
                    >
                      Resources
                    </a>
                  </li>
                  <li className="flex items-center px-2">
                    <svg
                      className="w-4 h-4 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li>
                    <span className="font-semibold text-orange-800">Newsletters</span>
                  </li>
                </ol>
              </div>
            </div>
          </nav>
          
          <h1 className="text-3xl font-bold mb-8 text-center">
            Newsletters
          </h1>
          
          {/* Description in white background */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-gray-700 leading-relaxed">
              NRSC publishes various newsletters and publications including SAMVAAD, Pixel 2 People (P2P), and special souvenirs. These publications provide insights into our research activities, technical developments, and organizational events.
            </p>
          </div>

          {/* Newsletters Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Document
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {newsletters.map((newsletter, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {newsletter.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {newsletter.document}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a
                          href={newsletter.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-red-600 text-white text-xs rounded-md hover:bg-red-700 transition-colors duration-200"
                        >
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          PDF
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
