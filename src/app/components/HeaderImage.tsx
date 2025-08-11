// app/components/HeaderImage.tsx
import React from 'react';

export default function HeaderImage() {
  return (
    <div className="w-full h-auto relative overflow-hidden">
      <img
        src="/Logo_iso.png"
        alt="NRSC Header"
        className="w-full h-auto object-cover object-center block"
        style={{ maxHeight: '200px' }}
      />
      {/* Optional overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none"></div>
    </div>
  );
}
