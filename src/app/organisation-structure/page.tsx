'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function OrganisationStructurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderImage />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Organisation Structure</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">NRSC Organizational Hierarchy</h2>
            <p className="text-gray-600 mb-6">
              The National Remote Sensing Centre operates under a well-defined organizational structure 
              that ensures efficient management and execution of its various programs and initiatives.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Director</h3>
                <p className="text-gray-600">Overall leadership and strategic direction of NRSC</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Deputy Director</h3>
                <p className="text-gray-600">Supporting the Director in administrative and technical matters</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Group Heads</h3>
                <p className="text-gray-600">Leading various technical and administrative groups</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Managers</h3>
                <p className="text-gray-600">Managing specific projects and initiatives</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Technical Divisions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Processing Division</h3>
                <p className="text-gray-600">Satellite data processing and analysis</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Applications Division</h3>
                <p className="text-gray-600">Remote sensing applications development</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Software Development Division</h3>
                <p className="text-gray-600">Geospatial software and tools development</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Training Division</h3>
                <p className="text-gray-600">Capacity building and training programs</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Administrative Structure</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Human Resources</h3>
                  <p className="text-gray-600">Personnel management and development</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Finance & Accounts</h3>
                  <p className="text-gray-600">Financial management and budgeting</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Administration</h3>
                  <p className="text-gray-600">General administration and facilities</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Security</h3>
                  <p className="text-gray-600">Security and safety management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
