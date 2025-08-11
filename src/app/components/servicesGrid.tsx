'use client';

import React from 'react';

type Feature = {
  title: string;
  href: string;
  imgSrc: string;
  alt: string;
};

const features: Feature[] = [
  {
    title: 'NRSC Establishments',
    href: '/establishments',
    imgSrc: 'https://www.nrsc.gov.in/sites/default/files/inline-images/regional_0.jpg',
    alt: 'NRSC Establishments Icon',
  },
  {
    title: 'Satellite Data Reception',
    href: '/satellite-data',
    imgSrc: 'https://www.nrsc.gov.in/sites/default/files/inline-images/antenna_1.jpg',
    alt: 'Satellite Data Reception Icon',
  },
  {
    title: 'Aerial Services & Digital Mapping',
    href: '/aerial-mapping',
    imgSrc: 'https://www.nrsc.gov.in/sites/default/files/inline-images/aerial_2.jpg',
    alt: 'Aerial Services Icon',
  },
  {
    title: 'Data Processing & Dissemination',
    href: '/data-processing',
    imgSrc: 'https://www.nrsc.gov.in/sites/default/files/inline-images/satellite_data_0.jpg',
    alt: 'Data Processing Icon',
  },
  {
    title: 'Disaster Management Support',
    href: '/disaster-support',
    imgSrc: 'https://www.nrsc.gov.in/sites/default/files/inline-images/disaster_0.jpg',
    alt: 'Disaster Management Icon',
  },
  {
    title: 'Remote Sensing Applications',
    href: '/remote-sensing',
    imgSrc: 'https://www.nrsc.gov.in/sites/default/files/inline-images/rs_applications_0.jpg',
    alt: 'Remote Sensing Icon',
  },
  {
    title: 'Geospatial Services',
    href: '/geospatial',
    imgSrc: 'https://www.nrsc.gov.in/sites/default/files/inline-images/geospatial_0.jpg',
    alt: 'Geospatial Services Icon',
  },
  {
    title: 'Capacity Building',
    href: '/capacity-building',
    imgSrc: 'https://www.nrsc.gov.in/sites/default/files/inline-images/outreach_0.jpg',
    alt: 'Capacity Building Icon',
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white px-4 py-6 border-t border-gray-200">
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">Our Services</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-nowrap lg:overflow-x-auto gap-6">
          {features.map(({ title, href, imgSrc, alt }) => (
            <a
              href={href}
              key={title}
              className="min-w-[150px] border border-orange-300 rounded-lg p-4 flex flex-col items-center text-center hover:border-blue-500 transition duration-200 bg-white shadow-sm hover:shadow-md"
            >
              <img
                src={imgSrc}
                alt={alt}
                className="w-16 h-16 object-cover rounded mb-3"
              />
              <span className="text-sm sm:text-base font-medium text-gray-800">{title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
