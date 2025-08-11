"use client";
import React, { useState, useEffect } from 'react';

interface LeftSideContentProps {
  pageType?: 'resources' | 'about' | 'data-products' | 'services' | 'applications' | 'default';
}

const LeftSideContent: React.FC<LeftSideContentProps> = ({ pageType = 'default' }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden lg:block w-80 space-y-6">
      {/* Current Time & Date */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">
            {currentTime.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: true 
            })}
          </div>
          <div className="text-sm opacity-90">
            {currentTime.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideContent;
