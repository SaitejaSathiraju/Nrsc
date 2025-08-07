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
    <section className="py-4 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            onMouseEnter={stopAutoPlay}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-orange-600 p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 border border-gray-200"
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
            className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-orange-600 p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 border border-gray-200"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gray-100 border-orange-300 border-1 rounded-lg overflow-hidden shadow-lg mx-1 md:mx-2">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-300 flex items-center justify-center">
                      <img 
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2 md:p-4">
                      <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2 line-clamp-1">
                        {slide.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3 line-clamp-2 leading-tight md:leading-relaxed">
                        {slide.description}
                      </p>
                      <a 
                        href={slide.link} 
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-xs md:text-sm transition-colors"
                      >
                        Learn More
                        <svg className="ml-1 w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-2 md:mt-4 space-x-0.5 md:space-x-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onMouseEnter={stopAutoPlay}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-orange-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
