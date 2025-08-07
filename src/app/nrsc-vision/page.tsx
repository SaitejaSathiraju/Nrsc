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
        <h1 className="text-3xl font-bold text-center mb-6">NRSC VISION</h1>

        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-4">NRSC Vision Statement:</h2>
          <p className="text-base sm:text-lg font-medium leading-relaxed">
            To continue to be in the forefront of developing remote sensing applications in the country
            and be the technology expert in establishing ground stations and generating high quality 
            satellite and aerial data products.
          </p>
        </div>

        {/* Centered Image */}
        <div className="flex justify-center mt-8 px-4">
          <img
            src="https://www.nrsc.gov.in/sites/default/files/inline-images/NRSC_Vision.JPG"
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
