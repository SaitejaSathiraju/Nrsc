"use client";
import React, { useState, useEffect, useRef } from "react";

type MenuItem = {
  title: string;
  url?: string;
  submenu?: MenuItem[];
};

const MENU_DATA: MenuItem[] = [
  { title: "Home", url: "/" },
  {
    title: "About Us",
    url: "/about-us",
    submenu: [
      {
        title: "Organisation",
        url: "/organisation",
        submenu: [
          { title: "About NRSC", url: "/about-nrsc" },
          { title: "Organisation Structure", url: "/organisation-structure" },
          { title: "Our Founder", url: "/our-founder" },
          { title: "Our Chairman", url: "/our-chairman" },
          { title: "Our Director", url: "/our-director" },
          { title: "Former Directors", url: "/former-directors" },
        ],
      },
      { title: "NRSC Vision", url: "/nrsc-vision" },
      { title: "ISO Certification", url: "/iso-certification" },
      { title: "Achievements & Awards", url: "/achievements-awards" },
      { title: "Campuses", url: "/campuses" },
      { title: "Contact Us", url: "/contact-us" },
    ],
  },
  {
    title: "Data Products",
    url: "/data-products",
    submenu: [
      { title: "Indian Missions", url: "/indian-missions" },
      { title: "Foreign Missions", url: "/foreign-missions" },
      { title: "Geo Physical", url: "/geo-physical" },
      { title: "Thematic Maps", url: "/thematic-maps" },
    ],
  },
  {
    title: "Resources",
    url: "/resources",
    submenu: [
      { title: "Atlas", url: "/atlas" },
      { title: "Intellectual Property", url: "/intellectual-property" },
      { title: "E-books", url: "/e-books" },
      { title: "Utility Software", url: "/utility-software" },
      { title: "NewsLetters", url: "/newsletters" },
      { title: "Technology Transfers", url: "/technology-transfers" },
      { title: "UIM_2024", url: "/uim-2024" },
      { title: "Brochures", url: "/brochures" },
    ],
  },
  {
    title: "Services",
    url: "/services",
    submenu: [
      { title: "Bhuvan Services", url: "/bhuvan-services" },
      {
        title: "Data Dissemination",
        url: "/data-dissemination",
        submenu: [
          { title: "Planning and Programming", url: "/planning-programming" },
          { title: "Archived Data Order", url: "/archived-data-order" },
          { title: "Foreign Data Dissemination", url: "/foreign-data-dissemination" },
        ],
      },
      { title: "Aerial Services & Digital Mapping", url: "/aerial-services" },
      { title: "International Ground Station Services", url: "/international-ground-station" },
      { title: "International Disaster Support", url: "/international-disaster-support" },
      { title: "EO Calibration Services", url: "/eo-calibration" },
      { title: "Satellite Ground Station Services", url: "/satellite-ground-station" },
    ],
  },
  {
    title: "R & D Activities",
    url: "/r-d-activities",
    submenu: [{ title: "Applications", url: "/r-d-applications" }],
  },
  {
    title: "Applications",
    url: "/applications",
    submenu: [
      { title: "Agriculture", url: "/applications/agriculture" },
      { title: "Disaster Management Support", url: "/applications/disaster-management" },
      { title: "Forestry & Ecology", url: "/applications/forestry-ecology" },
      { title: "Geosciences", url: "/applications/geosciences" },
      { title: "LULC", url: "/applications/lulc" },
      { title: "Rural Development", url: "/applications/rural-development" },
      { title: "Soils", url: "/applications/soils" },
      { title: "Urban & Infrastructure", url: "/applications/urban-infrastructure" },
      { title: "Water Resources", url: "/applications/water-resources" },
      { title: "Earth and Climatic Studies", url: "/applications/earth-climatic-studies" },
    ],
  },
  {
    title: "Training & Outreach",
    url: "/training-outreach",
    submenu: [
      { title: "INTERNATIONAL UNCSSTEAP", url: "/international-uncssteap" },
      { title: "Training Courses", url: "/training-courses" },
      { title: "Outreach", url: "/outreach" },
      { title: "Student Projects/Internships", url: "/student-projects" },
      { title: "Respond Projects", url: "/respond-projects" },
    ],
  },
];

function useOutsideAlerter<T extends HTMLElement>(ref: React.RefObject<T | null>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isMac, setIsMac] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Detect operating system
  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0);
  }, []);

  useOutsideAlerter(navRef, () => {
    setMobileMenuOpen(false);
    setOpenSubmenus(new Set());
    setSearchOpen(false);
  });

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K for search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(!searchOpen);
      }
      // Escape to close search
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  const toggleSubmenu = (path: string) => {
    setOpenSubmenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(path)) newSet.delete(path);
      else newSet.add(path);
      return newSet;
    });
  };

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      const newZoom = zoomLevel + 10;
      setZoomLevel(newZoom);
      // Use zoom property with fallback
      if ('zoom' in document.body.style) {
        document.body.style.zoom = `${newZoom}%`;
      } else {
        // Fallback for browsers that don't support zoom
        (document.body.style as any).transform = `scale(${newZoom / 100})`;
        (document.body.style as any).transformOrigin = 'top left';
      }
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 50) {
      const newZoom = zoomLevel - 10;
      setZoomLevel(newZoom);
      // Use zoom property with fallback
      if ('zoom' in document.body.style) {
        document.body.style.zoom = `${newZoom}%`;
      } else {
        // Fallback for browsers that don't support zoom
        (document.body.style as any).transform = `scale(${newZoom / 100})`;
        (document.body.style as any).transformOrigin = 'top left';
      }
    }
  };

  const handleZoomReset = () => {
    setZoomLevel(100);
    if ('zoom' in document.body.style) {
      document.body.style.zoom = '100%';
    } else {
      (document.body.style as any).transform = 'scale(1)';
      (document.body.style as any).transformOrigin = 'top left';
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality here
      console.log("Searching for:", searchQuery);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const renderMenuItem = (item: MenuItem, parentPath = "", level = 0) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const path = parentPath ? `${parentPath}/${item.title}` : item.title;
    const isOpen = openSubmenus.has(path);

    return (
      <li key={path} className="relative group" role="none">
        {hasSubmenu ? (
          <>
            <div className="flex items-center">
              {item.url ? (
                <a
                  href={item.url}
                  className={`flex-1 text-left md:inline-flex md:items-center
                    py-4 px-6 md:py-2 md:px-3
                    text-gray-700 hover:text-orange-600
                    focus:outline-none focus:ring-2 focus:ring-orange-500
                    transition-all duration-200
                    ${level === 0 ? "font-semibold text-base border-b border-gray-100" : "font-normal text-sm"}
                    md:rounded-md md:hover:bg-gray-50 md:border-b-0
                    whitespace-nowrap md:flex-shrink-0`}
                >
                  {item.title}
                </a>
              ) : (
                <span className={`flex-1 text-left md:inline-flex md:items-center
                  py-4 px-6 md:py-2 md:px-3
                  text-gray-700
                  ${level === 0 ? "font-semibold text-base border-b border-gray-100" : "font-normal text-sm"}
                  md:border-b-0
                  whitespace-nowrap md:flex-shrink-0`}
                >
                  {item.title}
                </span>
              )}
              
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth < 768) {
                    toggleSubmenu(path);
                  }
                }}
                className="md:hidden p-2 text-gray-400 hover:text-orange-600 transition-colors"
              >
                {/* Mobile: Side arrow indicator */}
                <div className={`w-2 h-2 border-r-2 border-b-2 border-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-45' : '-rotate-45'}`}></div>
              </button>
              
              {/* Desktop: Down arrow */}
              <svg
                className="hidden md:block ml-2 mt-1 md:mt-0 w-4 h-4 fill-current text-gray-400 group-hover:text-orange-600 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 7l4.5 4.5L14.5 7z" />
              </svg>
            </div>

            <div
              className={`
                ${level === 0 ? "md:absolute md:top-full md:left-0 md:mt-1" : "md:absolute md:left-full md:top-0 md:ml-1"}
                bg-white border border-gray-200 rounded-lg shadow-lg z-50
                transition-all duration-200
                ${isOpen ? "block md:hidden" : "hidden"}
                md:group-hover:block
                min-w-[200px]
              `}
              role="menu"
              aria-label={`${item.title} submenu`}
            >
              <ul className="py-2">{item.submenu!.map((subItem) => renderMenuItem(subItem, path, level + 1))}</ul>
            </div>
          </>
        ) : (
          <>
            {item.url ? (
              <a
                href={item.url}
                className={`w-full text-left block py-4 px-6 md:py-2 md:px-3 text-gray-700 hover:text-orange-600
                  focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200
                  ${level === 0 ? "font-semibold text-base border-b border-gray-100" : "font-normal text-sm"}
                  md:rounded-md md:hover:bg-gray-50 md:border-b-0
                  whitespace-nowrap md:flex-shrink-0`}
                role="menuitem"
              >
                {item.title}
              </a>
            ) : (
              <button
                type="button"
                className={`w-full text-left block py-4 px-6 md:py-2 md:px-3 text-gray-700 hover:text-orange-600
                  focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200
                  ${level === 0 ? "font-semibold text-base border-b border-gray-100" : "font-normal text-sm"}
                  md:rounded-md md:hover:bg-gray-50 md:border-b-0
                  whitespace-nowrap md:flex-shrink-0`}
                role="menuitem"
              >
                {item.title}
              </button>
            )}
          </>
        )}
      </li>
    );
  };

  return (
    <nav
      ref={navRef}
      className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm"
      aria-label="Primary navigation"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand - Left side */}
          <div className="flex-shrink-0">
            {/* Add your logo here if needed */}
          </div>

          {/* Main Navigation - Center */}
          <div className="hidden md:flex md:items-center md:flex-1 md:justify-center">
            <ul className="flex flex-row items-center space-x-1 md:flex-nowrap overflow-visible md:overflow-visible">
              {MENU_DATA.map((item) => renderMenuItem(item))}
            </ul>
          </div>

          {/* Desktop: Zoom and Search Controls - Right side extreme */}
          <div className="hidden md:flex md:items-center md:space-x-2 relative ml-auto -mr-2 sm:-mr-4 md:-mr-6 lg:-mr-8 xl:-mr-12 2xl:-mr-16">
            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 50}
                className="p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                title="Zoom Out"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                </svg>
              </button>
              <button
                onClick={handleZoomReset}
                className="px-2 py-1 text-xs text-gray-600 hover:text-orange-600 hover:bg-white rounded transition-all duration-200"
                title="Reset Zoom"
              >
                {zoomLevel}%
              </button>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 200}
                className="p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                title="Zoom In"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </button>
            </div>

            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-gray-100 transition-all duration-200 relative group"
              title="Search (Ctrl+K)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {/* Keyboard shortcut indicator */}
              <span className="absolute -top-1 -right-1 bg-gray-200 text-gray-600 text-xs px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {isMac ? '⌘' : 'Ctrl'} + K
              </span>
            </button>

            {/* Search Input */}
            {searchOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[300px] z-50">
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors duration-200"
                  >
                    Search
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle - Right side */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-all duration-200"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600">
            <h2 className="text-lg font-bold text-white">Navigation Menu</h2>
          </div>
          <ul className="py-2">
            {MENU_DATA.map((item) => renderMenuItem(item))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
