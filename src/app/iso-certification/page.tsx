'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';  
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderImage />
      <Navbar />
      <main className="py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">ISO CERTIFICATION</h1>

        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-4">NRSC Quality Policy:</h2>
          <p className="text-base sm:text-lg font-medium leading-relaxed">
          “To excel in promoting enhanced utilization of remote sensing by delivering quality data products, developing value added services and implementing outreach programmes”
          </p>
        </div>

        {/* Centered Image */}
        <div className="flex justify-center mt-8 px-4">
          <img
            src="https://www.nrsc.gov.in/sites/default/files/inline-images/ISO_NRSC_2024_0.JPG"
            alt="NRSC Vision"
            className="w-full max-w-6xl h-auto rounded-lg shadow-lg"
          />
        </div>
      </main>

      <WebPortals />
      <Footer />
    </div>
  );
}
