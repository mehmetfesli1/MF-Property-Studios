'use client';

import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Placeholder client logos - in real implementation, these would come from assets
  const clientLogos = [
    { name: 'Keller Williams', src: 'https://via.placeholder.com/120x60/e5e5e5/666?text=KW' },
    { name: 'RE/MAX', src: 'https://via.placeholder.com/120x60/e5e5e5/666?text=REMAX' },
    { name: 'Coldwell Banker', src: 'https://via.placeholder.com/120x60/e5e5e5/666?text=CB' },
    { name: 'Century 21', src: 'https://via.placeholder.com/120x60/e5e5e5/666?text=C21' },
    { name: 'Sotheby\'s', src: 'https://via.placeholder.com/120x60/e5e5e5/666?text=SIR' },
    { name: 'Compass', src: 'https://via.placeholder.com/120x60/e5e5e5/666?text=COMPASS' },
  ];

  const testimonials = [
    {
      quote: "MF Property Studios transformed our listings completely. Our properties now sell 40% faster with their stunning photography.",
      client: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      company: "Keller Williams",
      result: "40% faster sales",
    },
    {
      quote: "The drone footage and virtual tours have revolutionized how we showcase luxury properties. Absolutely game-changing.",
      client: "Michael Chen",
      title: "Luxury Property Specialist", 
      company: "Sotheby's International",
      result: "25% higher offers",
    },
    {
      quote: "Professional, reliable, and incredibly talented. Their work has become essential to our marketing strategy.",
      client: "Emily Rodriguez",
      title: "Broker Owner",
      company: "RE/MAX Premier",
      result: "300% more inquiries",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted by Leading Real Estate Professionals
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-12 w-auto max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote className="h-8 w-8 text-secondary/30" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <blockquote className="text-xl lg:text-2xl text-primary font-medium leading-relaxed mb-8">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-secondary fill-current"
                  />
                ))}
              </div>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                  <div className="text-center lg:text-left">
                    <p className="font-semibold text-primary text-lg">
                      {testimonials[currentTestimonial].client}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].title}
                    </p>
                    <p className="text-secondary font-medium">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                  
                  <div className="hidden lg:block w-px h-12 bg-gray-300" />
                  
                  <div className="text-center lg:text-left">
                    <p className="text-sm text-gray-600 mb-1">Result:</p>
                    <p className="font-semibold text-accent text-lg">
                      {testimonials[currentTestimonial].result}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-secondary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection; 