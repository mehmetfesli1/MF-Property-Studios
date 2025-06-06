'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, ExternalLink } from 'lucide-react';

const FeaturedPortfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Placeholder portfolio items - in real implementation, these would come from Sanity
  const featuredProjects = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'modern-luxury-villa',
      aspectRatio: 'aspect-square',
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      type: 'Luxury',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'downtown-penthouse',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: 3,
      title: 'Waterfront Estate',
      type: 'Luxury',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'waterfront-estate',
      aspectRatio: 'aspect-[3/4]',
    },
    {
      id: 4,
      title: 'Contemporary Townhouse',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'contemporary-townhouse',
      aspectRatio: 'aspect-square',
    },
    {
      id: 5,
      title: 'Commercial Office Space',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'commercial-office-space',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: 6,
      title: 'Mountain Cabin Retreat',
      type: 'Vacation Rental',
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c91a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'mountain-cabin-retreat',
      aspectRatio: 'aspect-[3/4]',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Featured Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work showcasing stunning properties across residential, commercial, and luxury markets.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg card-hover ${project.aspectRatio}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Project Type Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full">
                    {project.type}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-white text-xl lg:text-2xl font-bold mb-2 text-shadow">
                  {project.title}
                </h3>

                {/* View Gallery Button */}
                <div 
                  className={`transition-all duration-300 ${
                    hoveredProject === project.id 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-all duration-300"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Gallery
                  </Link>
                </div>
              </div>

              {/* External Link Icon */}
              <div 
                className={`absolute top-4 right-4 transition-all duration-300 ${
                  hoveredProject === project.id 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-2'
                }`}
              >
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <ExternalLink className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Portfolio CTA */}
        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="btn-primary text-lg px-10 py-5"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio; 