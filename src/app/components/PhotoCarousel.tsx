"use client";
import React, { useState, useEffect, useRef } from 'react';

const PhotoCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = 6;

  const slides = [
    {
      title: "Satellite Data Processing",
      description: "Advanced satellite data processing and analysis capabilities for remote sensing applications.",
      link: "/satellite-data",
      imageUrl: "https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png"
    },
    {
      title: "Disaster Management Support",
      description: "Real-time disaster monitoring and support services for emergency response and recovery.",
      link: "/disaster-management",
      imageUrl: "https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png"
    },
    {
      title: "Agricultural Monitoring",
      description: "Precision agriculture monitoring and crop assessment using satellite imagery and GIS.",
      link: "/agriculture",
      imageUrl: "https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png"
    },
    {
      title: "Urban Planning & Development",
      description: "Comprehensive urban planning support through satellite mapping and spatial analysis.",
      link: "/urban-planning",
      imageUrl: "https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png"
    },
    {
      title: "Water Resources Management",
      description: "Advanced water resource monitoring and management using remote sensing technology.",
      link: "/water-resources",
      imageUrl: "https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png"
    },
    {
      title: "Environmental Monitoring",
      description: "Comprehensive environmental monitoring and assessment for sustainable development.",
      link: "/environmental-monitoring",
      imageUrl: "https://www.nrsc.gov.in/sites/default/files/inline-images/Parliament_NRSC_Website_1176x320.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentSlide]);

  return (
    <section className="py-4 md:py-8 bg-white w-full">
      {/* Carousel Container - Full Width */}
      <div className="relative w-full">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-orange-600 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          onMouseEnter={stopAutoPlay}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-orange-600 p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 border border-gray-200"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Track - Full Width */}
        <div className="overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <a 
                  href={slide.link}
                  className="block w-full relative overflow-hidden group cursor-pointer border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mx-2 md:mx-4"
                >
                  {/* Image Section */}
                  <div className="w-full h-48 md:h-64 lg:h-80 relative overflow-hidden">
                    <img 
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Small thin section for name below the image */}
                  <div className="w-full bg-white border-t border-gray-200">
                    <div className="px-4 md:px-6 lg:px-8 py-2 md:py-3">
                      <h4 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 text-center group-hover:text-orange-600 transition-colors duration-200">
                        {slide.title}
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator - Below the carousel */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={stopAutoPlay}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-orange-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PhotoCarousel;
