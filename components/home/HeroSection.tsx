'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Play, Camera, Video, Plane } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - in real implementation, these would come from Cloudinary
  const backgroundImages = [
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  ];

  const services = [
    { icon: Camera, label: 'Interior Photography' },
    { icon: Plane, label: 'Aerial Drone Shots' },
    { icon: Video, label: '360° Virtual Tours' },
    { icon: Play, label: 'Property Videos' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 text-shadow animate-fade-in">
          Transforming Properties into{' '}
          <span className="text-secondary">Irresistible Listings</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-slide-up">
          Professional real estate photography & videography that sells. 
          Showcase your properties with stunning visuals that captivate buyers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up">
          <Link
            href="/portfolio"
            className="btn-primary text-lg px-10 py-5"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="btn-secondary text-lg px-10 py-5"
          >
            Get Quote
          </Link>
        </div>

        {/* Services Strip */}
        <div className="animate-fade-in">
          <p className="text-gray-300 mb-8 text-lg">Our Specialties</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="p-4 rounded-full bg-white/10 group-hover:bg-secondary/20 transition-all duration-300 mb-3">
                    <IconComponent className="h-8 w-8 text-white group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    {service.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full">
          <div className="w-1 h-8 bg-white rounded-full animate-pulse" />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-secondary' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 