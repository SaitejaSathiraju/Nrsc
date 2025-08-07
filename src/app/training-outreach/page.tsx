'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function TrainingOutreach() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Training & Outreach</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              NRSC conducts comprehensive training programs and outreach activities to build capacity, 
              share knowledge, and promote the use of remote sensing technologies across various sectors.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Training Programs</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Training Courses</h3>
                <p className="text-blue-700 mb-4">
                  Specialized training programs covering remote sensing fundamentals, applications, 
                  and advanced techniques for various user groups.
                </p>
                <ul className="text-blue-700 space-y-1">
                  <li>• Basic Remote Sensing</li>
                  <li>• Advanced Applications</li>
                  <li>• Software Training</li>
                  <li>• Sector-specific Programs</li>
                </ul>
                <a href="/training-courses" className="text-blue-600 hover:text-blue-800 font-medium">View Courses →</a>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">INTERNATIONAL UNCSSTEAP</h3>
                <p className="text-green-700 mb-4">
                  International training programs under the United Nations Platform for Space-based 
                  Information for Disaster Management and Emergency Response.
                </p>
                <a href="/international-uncssteap" className="text-green-600 hover:text-green-800 font-medium">Learn More →</a>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outreach Activities</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Outreach</h3>
                <p className="text-gray-700">Public awareness programs and community engagement activities</p>
                <a href="/outreach" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Student Projects/Internships</h3>
                <p className="text-gray-700">Research opportunities and internship programs for students</p>
                <a href="/student-projects" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Respond Projects</h3>
                <p className="text-gray-700">Emergency response and disaster management training programs</p>
                <a href="/respond-projects" className="text-blue-600 hover:text-blue-800 text-sm">Details →</a>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Training Categories</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Comprehensive Training Offerings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Technical Training</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Remote Sensing Fundamentals</li>
                    <li>• GIS Applications</li>
                    <li>• Data Processing Techniques</li>
                    <li>• Software Tools Training</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Application Training</h4>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li>• Agriculture Applications</li>
                    <li>• Disaster Management</li>
                    <li>• Water Resources</li>
                    <li>• Urban Planning</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Target Audiences</h2>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Government Officials</h3>
                <p className="text-gray-700 text-sm">Training for policy makers and administrators</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Academic Institutions</h3>
                <p className="text-gray-700 text-sm">Programs for students and researchers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Industry Professionals</h3>
                <p className="text-gray-700 text-sm">Training for corporate and private sector</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">International Partners</h3>
                <p className="text-gray-700 text-sm">Global training and collaboration programs</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Training Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Hands-on practical training with real data</li>
              <li>Expert faculty from NRSC and partner institutions</li>
              <li>Certification upon successful completion</li>
              <li>Access to latest software and tools</li>
              <li>Networking opportunities with professionals</li>
              <li>Follow-up support and consultation</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
