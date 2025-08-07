import React from 'react';

type WebPortal = {
  name: string;
  url: string;
  iconUrl: string;
};

const portals: WebPortal[] = [
  {
    name: 'BHOONIDHI',
    url: 'https://github.com',
    iconUrl: 'https://www.nrsc.gov.in/sites/default/files/inline-images/Bhoonidhi_2_0.png',
  },
  {
    name: 'BHOONIDHI DATA HUB',
    url: 'https://linkedin.com',
    iconUrl: 'https://www.nrsc.gov.in/sites/default/files/inline-images/search_new_map.png',
  },
  {
    name: 'BHUVAN MAPS',
    url: 'https://twitter.com',
    iconUrl: 'https://www.nrsc.gov.in/sites/default/files/inline-images/Capture_0.JPG',
  },
  {
    name: 'NDEM',
    url: 'https://facebook.com',
    iconUrl: 'https://www.nrsc.gov.in/sites/default/files/inline-images/ndem_other_0.png',
  },
  {
    name: 'NICES',
    url: 'https://example.com',
    iconUrl: 'https://www.nrsc.gov.in/sites/default/files/inline-images/p1.png',
  },
  {
    name: 'BHUVAN PANCHAYAT - 3.0',
    url: 'https://youtube.com',
    iconUrl: 'https://www.nrsc.gov.in/sites/default/files/inline-images/BP3_2.png',
  },
  {
    name: 'India-WRIS',
    url: 'https://instagram.com',
    iconUrl: 'https://www.nrsc.gov.in/sites/default/files/inline-images/p6.png',
  },
];

const WebPortals: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center">Web Portals</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center">
        {portals.map((portal) => (
          <a
            key={portal.name}
            href={portal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center transition-transform hover:scale-105"
          >
            <img
              src={portal.iconUrl}
              alt={portal.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-medium">{portal.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WebPortals;
