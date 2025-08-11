import React, { useState } from 'react';

const sidebarItems = [
  'Overview',
  'Products',
  'Optical',
  'Microwave',
  'Policy',
  'Any Query?',
];

const ForeignMissionsSidebar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const getHashFromItem = (item: string) => {
    // Special cases to ensure exact hash matching
    const hashMap: { [key: string]: string } = {
      'Overview': 'overview',
      'Products': 'products',
      'Optical': 'optical',
      'Microwave': 'microwave',
      'Policy': 'policy',
      'Any Query?': 'any-query',
    };
    
    return hashMap[item] || item.replace(/\s+/g, '-').toLowerCase();
  };

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-center items-center p-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white relative rounded-lg shadow-lg mx-4 mt-4">
        <span className="text-lg font-bold">Technical Details</span>
        <button
          onClick={toggleMobileMenu}
          className="absolute right-4 text-2xl font-bold focus:outline-none hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '×' : '≡'}
        </button>
      </div>

      {/* Layout Wrapper */}
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-80 bg-gradient-to-b from-white to-indigo-50 p-6 border border-indigo-200 rounded-xl shadow-lg mt-4 ml-8 hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-4 rounded-lg mb-6 shadow-md">
            <h2 className="text-xl font-bold text-center">Technical Details</h2>
            <div className="w-16 h-1 bg-white mx-auto mt-2 rounded-full"></div>
          </div>
          <ul className="space-y-3">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${getHashFromItem(item)}`}
                  className="flex justify-between items-center p-4 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 rounded-lg leading-relaxed transition-all duration-200 group border border-transparent hover:border-indigo-200 hover:shadow-md"
                >
                  <span className="whitespace-normal font-medium text-gray-700 group-hover:text-indigo-700 transition-colors duration-200">{item}</span>
                  <span className="text-indigo-500 text-lg font-bold group-hover:scale-110 transition-transform duration-200">+</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Sidebar - Enhanced dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-white border border-indigo-200 rounded-xl p-6 shadow-xl mt-2 mx-4">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-4 rounded-lg mb-4 shadow-md">
              <h2 className="text-xl font-bold text-center">Technical Details</h2>
              <div className="w-16 h-1 bg-white mx-auto mt-2 rounded-full"></div>
            </div>
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${getHashFromItem(item)}`}
                    className="flex justify-between items-center p-3 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 rounded-lg leading-relaxed transition-all duration-200 group border border-transparent hover:border-indigo-200"
                    onClick={toggleMobileMenu}
                  >
                    <span className="whitespace-normal font-medium text-gray-700 group-hover:text-indigo-700 transition-colors duration-200">{item}</span>
                    <span className="text-indigo-500 text-lg font-bold group-hover:scale-110 transition-transform duration-200">+</span>
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

export default ForeignMissionsSidebar;
