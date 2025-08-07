'use client';

import React from 'react';
import HeaderImage from '../components/HeaderImage';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

// Team data
const teamMembers = [
  {
    name: 'Dr. Prakash Chauhan',
    title: 'Director',
    image: 'https://img.freepik.com/premium-photo/picture-indian-male-passport-photo-with-short-hair-beard_1046450-20769.jpg',
  },
  {
    name: 'Shri. P. Srinivasulu',
    title: 'Director (AD)',
    image: '/images/srinivasulu.jpg',
  },
  {
    name: 'Dr. S.K Srivastav',
    title: 'Associate Director',
    image: '/images/srivastav.jpg',
  },
  {
    name: 'Shri. G. Srinivasa Rao',
    title: 'Chief General Manager, RCsECSA',
    image: '/images/srinivasa.jpg',
  },
  {
    name: 'Vinod Bothale / Dr. S. Murali Krishnan',
    title: 'Dy. Director, ECSA & RSAA',
    image: '/images/vinod.jpg',
  },
  {
    name: 'Shri. Koteswara Rao K',
    title: 'Dy. Director, DPA & ASDMA Imagery',
    image: '/images/koteswara.jpg',
  },
  {
    name: 'Dr. N Aparna',
    title: 'Dy. Director, SDRISA',
    image: '/images/aparna.jpg',
  },
  {
    name: 'Smt. C S Padmavathy',
    title: 'Dy. Director, MSA',
    image: '/images/padmavathy.jpg',
  },
  {
    name: 'Shri. Abdul Hakeem K',
    title: 'Dy. Director, SRQA - Bhuvan',
    image: '/images/hakeem.jpg',
  },
  {
    name: 'Shri. Ankur Srivastava, IRSS',
    title: 'Dy. Director, BGWSA - Outreach',
    image: '/images/ankur.jpg',
  },
  {
    name: 'Dr. K Chandrasekar',
    title: 'Controller & Group Director, PPEG',
    image: '/images/chandrasekar.jpg',
  },
];

// Common link for all cards
const profileLink = '/contact-details';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderImage />
      <Navbar />
      <main className="py-8 px-4 max-w-7xl mx-auto">
        {/* About Us */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Emails and Phone Numbers</h2>
          
        </section>

        {/* Team Members */}
        <section>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={profileLink}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 block"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{member.title}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
