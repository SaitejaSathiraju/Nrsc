'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* NRSC Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-orange-500">NRSC - </span>
              <span className="ml-2 text-sm  font-bold text-orange-500">राष्ट्रीय सुदूर संवेदन केन्द्र</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Contact Us</a></li>
              <li><a href="/sitemap" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Site Map</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Organisation</h3>
            <ul className="space-y-2">
              <li><a href="/careers" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Careers</a></li>
              <li><a href="/eprocurement" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Eprocurement</a></li>
              <li><a href="/rti" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">RTI</a></li>
              <li><a href="/disclaimer" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Disclaimer</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="/tenders" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Tenders</a></li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Others</h3>
            <ul className="space-y-2">
              <li><a href="/vigilance" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Vigilance Administration</a></li>
              <li><a href="/web-info-manager" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">Web Information Manager</a></li>
              <li><a href="/iso" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">ISO</a></li>
              <li><a href="/chss-portal" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">CHSS Portal</a></li>
              <li><a href="/isro-centres" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">ISRO Centres</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="text-center text-gray-400 text-sm space-y-2">
            <div className="font-medium">Version 2.0</div>
            <div>Last Updated Date: 06 August 2025</div>
            <div>NRSC, ISRO. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
