import Link from 'next/link';
import { Plane, RotateCcw, Video, ArrowRight } from 'lucide-react';

const ServicesShowcase = () => {
  const services = [
    {
      id: 1,
      title: 'Aerial Drone Imagery',
      subtitle: 'Capture the Full Picture',
      description: 'Stunning aerial photography and videography that showcases the complete property, neighborhood, and surroundings from unique perspectives.',
      image: 'https://images.unsplash.com/photo-1473409998854-cfaca2a25dce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Plane,
      features: [
        '4K Ultra HD Video',
        'High-Resolution Photos',
        'Multiple Angles & Heights',
        'Property Boundary Views'
      ]
    },
    {
      id: 2,
      title: '360° Virtual Tours',
      subtitle: 'Immersive Property Experiences',
      description: 'Interactive virtual tours that allow potential buyers to explore every room and space as if they were walking through the property themselves.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: RotateCcw,
      features: [
        'Interactive Floor Plans',
        'Room-to-Room Navigation',
        'Mobile & Desktop Compatible',
        'Social Media Integration'
      ]
    },
    {
      id: 3,
      title: 'Interior Walkthrough Videos',
      subtitle: 'Cinematic Property Tours',
      description: 'Professional cinematic videos that tell the story of each property with smooth camera movements and expert composition.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: Video,
      features: [
        'Cinematic Camera Work',
        'Professional Lighting',
        'Music & Narration',
        'Quick Turnaround'
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Photography Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional real estate photography services designed to make your listings stand out and sell faster in today's competitive market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                {/* Service Image */}
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="image-overlay" />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 text-shadow">
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium text-shadow">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 lg:p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/services"
                    className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors duration-200 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Hover Preview for 360° Tours */}
                {service.id === 2 && (
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <RotateCcw className="h-12 w-12 mx-auto mb-4 animate-spin" />
                      <p className="text-lg font-semibold">360° Preview</p>
                      <p className="text-sm text-gray-300">Hover to explore</p>
                    </div>
                  </div>
                )}

                {/* Play Button for Video Services */}
                {service.id === 3 && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="btn-primary text-lg px-10 py-5"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase; 