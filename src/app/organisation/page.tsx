'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import WebPortals from '../components/webportals';  
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />
      <main className="py-8 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">Organisation Structure</h1>
        
        {/* Centered Image */}
        <div className="flex justify-center">
          <img
            src="https://www.nrsc.gov.in/sites/default/files/inline-images/orgenglish02062025.jpg"
            alt="Organisation Structure"
            className="w-full max-w-6xl h-auto rounded-lg shadow-lg"
          />
        </div>
        
      </main>
      <WebPortals />
      <Footer />
    </div>
  );
}
