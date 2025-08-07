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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const navRef = useRef<HTMLDivElement | null>(null);

  useOutsideAlerter(navRef, () => {
    setMobileMenuOpen(false);
    setOpenSubmenus(new Set());
  });

  const toggleSubmenu = (path: string) => {
    setOpenSubmenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(path)) newSet.delete(path);
      else newSet.add(path);
      return newSet;
    });
  };

  const renderMenuItem = (item: MenuItem, parentPath = "", level = 0) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const path = parentPath ? `${parentPath}/${item.title}` : item.title;

    return (
      <li key={path} className="relative group" role="none">
        {hasSubmenu ? (
          <>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openSubmenus.has(path)}
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth < 768) {
                  toggleSubmenu(path);
                } else {
                  // On desktop, navigate to the main page when clicked
                  if (item.url) {
                    window.location.href = item.url;
                  }
                }
              }}
              className={`w-full text-left md:inline-flex md:items-center
                py-3 px-4 md:py-2 md:px-3
                text-gray-700 hover:text-orange-600
                focus:outline-none focus:ring-2 focus:ring-orange-500
                transition-colors duration-200
                ${level === 0 ? "font-semibold text-base" : "font-normal text-sm"}
                md:rounded-md md:hover:bg-gray-50`}
            >
              {item.title}
              <svg
                className="ml-2 mt-1 md:mt-0 w-4 h-4 fill-current text-gray-400 group-hover:text-orange-600 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 7l4.5 4.5L14.5 7z" />
              </svg>
            </button>

            <div
              className={`
                ${level === 0 ? "md:absolute md:top-full md:left-0 md:mt-1" : "md:absolute md:left-full md:top-0 md:ml-1"}
                bg-white border border-gray-200 rounded-lg shadow-lg z-50
                transition-all duration-200
                ${openSubmenus.has(path) ? "block" : "hidden"}
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
          <button
            type="button"
            onClick={() => {
              if (item.url) {
                window.location.href = item.url;
              }
            }}
            className={`w-full text-left block py-3 px-4 md:py-2 md:px-3 text-gray-700 hover:text-orange-600
              focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200
              ${level === 0 ? "font-semibold text-base" : "font-normal text-sm"}
              md:rounded-md md:hover:bg-gray-50`}
            role="menuitem"
          >
            {item.title}
          </button>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
         

          <div className="hidden md:flex md:items-center md:space-x-1">
            <ul className="flex flex-col md:flex-row md:space-x-1">
              {MENU_DATA.map((item) => renderMenuItem(item))}
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
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
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner max-h-[70vh] overflow-y-auto">
          <ul className="py-2">{MENU_DATA.map((item) => renderMenuItem(item))}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
