import React, { useState } from 'react';

const sidebarItems = [
  'River Basin Atlas',
  'Wastelands Atlas',
  'Flood Hazard Zonation Atlas',
  'Glacial Lake Atlas',
  'Tea Garden Atlas',
  'Landslide Atlas',
  'Geology Atlas',
  'LULC Atlas',
];

const ResourcesSidebar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const getHashFromItem = (item: string) => {
    // Special cases to ensure exact hash matching
    const hashMap: { [key: string]: string } = {
      'River Basin Atlas': 'river-basin-atlas',
      'Wastelands Atlas': 'wastelands-atlas',
      'Flood Hazard Zonation Atlas': 'flood-hazard-zonation-atlas',
      'Glacial Lake Atlas': 'glacial-lake-atlas',
      'Tea Garden Atlas': 'tea-garden-atlas',
      'Landslide Atlas': 'landslide-atlas',
      'Geology Atlas': 'geology-atlas',
      'LULC Atlas': 'lulc-atlas',
    };
    
    return hashMap[item] || item.replace(/\s+/g, '-').toLowerCase();
  };

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-center items-center p-4 bg-gray-800 text-white relative">
        <span className="text-lg font-bold">Atlas Resources</span>
        <button
          onClick={toggleMobileMenu}
          className="absolute right-4 text-2xl font-bold focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '×' : '≡'}
        </button>
      </div>

      {/* Layout Wrapper */}
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-72 bg-white p-4 border border-orange-300 rounded-md mt-4 ml-8">
          <h2 className="text-lg font-semibold mb-4">--- Atlas Resources ---</h2>
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${getHashFromItem(item)}`}
                  className="flex justify-between items-center p-3 hover:bg-gray-200 rounded leading-relaxed"
                >
                  <span className="whitespace-normal">{item}</span>
                  <span className="text-gray-500 text-lg font-bold">+</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Sidebar - Simple dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-white border border-gray-300 rounded-md p-4 shadow-md mt-2 mx-4">
            <h2 className="text-lg font-semibold mb-4 text-center">--- Atlas Resources ---</h2>
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${getHashFromItem(item)}`}
                    className="flex justify-between items-center p-3 hover:bg-gray-100 rounded leading-relaxed"
                    onClick={toggleMobileMenu}
                  >
                    <span className="whitespace-normal">{item}</span>
                    <span className="text-gray-500 text-lg font-bold">+</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesSidebar;
