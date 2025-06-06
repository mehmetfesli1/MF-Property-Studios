'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, Filter } from 'lucide-react';

// Metadata is handled in layout.tsx for client components
// We'll create a separate metadata file for this page

interface Project {
  id: number;
  title: string;
  type: string;
  category: 'all' | 'residential' | 'commercial' | 'luxury' | 'vacation';
  image: string;
  slug: string;
  description: string;
  featured: boolean;
}

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'luxury' | 'vacation'>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Portfolio projects - in real implementation, these would come from Sanity
  const allProjects: Project[] = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      type: 'Luxury Residential',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'modern-luxury-villa',
      description: 'Stunning 5-bedroom villa with infinity pool and panoramic city views',
      featured: true,
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      type: 'Urban Luxury',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'downtown-penthouse',
      description: 'Elegant penthouse in the heart of downtown with 360° city views',
      featured: true,
    },
    {
      id: 3,
      title: 'Waterfront Estate',
      type: 'Luxury Waterfront',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'waterfront-estate',
      description: 'Magnificent waterfront estate with private dock and beach access',
      featured: true,
    },
    {
      id: 4,
      title: 'Contemporary Family Home',
      type: 'Residential',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'contemporary-family-home',
      description: 'Beautiful 4-bedroom family home with modern design and large backyard',
      featured: false,
    },
    {
      id: 5,
      title: 'Commercial Office Complex',
      type: 'Commercial',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'commercial-office-complex',
      description: 'Modern office complex with state-of-the-art facilities and parking',
      featured: false,
    },
    {
      id: 6,
      title: 'Mountain Cabin Retreat',
      type: 'Vacation Rental',
      category: 'vacation',
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c91a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'mountain-cabin-retreat',
      description: 'Cozy mountain cabin perfect for weekend getaways and family vacations',
      featured: false,
    },
    {
      id: 7,
      title: 'Suburban Family Residence',
      type: 'Residential',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'suburban-family-residence',
      description: 'Charming suburban home with traditional architecture and mature landscaping',
      featured: false,
    },
    {
      id: 8,
      title: 'Retail Shopping Center',
      type: 'Commercial',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'retail-shopping-center',
      description: 'Prime retail location with high foot traffic and excellent visibility',
      featured: false,
    },
    {
      id: 9,
      title: 'Beachfront Vacation Home',
      type: 'Vacation Rental',
      category: 'vacation',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'beachfront-vacation-home',
      description: 'Stunning beachfront property with direct ocean access and sunset views',
      featured: true,
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: allProjects.length },
    { key: 'residential', label: 'Residential', count: allProjects.filter(p => p.category === 'residential').length },
    { key: 'commercial', label: 'Commercial', count: allProjects.filter(p => p.category === 'commercial').length },
    { key: 'luxury', label: 'Luxury', count: allProjects.filter(p => p.category === 'luxury').length },
    { key: 'vacation', label: 'Vacation Rental', count: allProjects.filter(p => p.category === 'vacation').length },
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-primary/90">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover stunning properties brought to life through our professional photography and videography services
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="sticky top-20 z-40 bg-white shadow-md border-b">
        <div className="container-custom">
          <div className="py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">Filter by category:</span>
              </div>
              <div className="text-sm text-gray-600">
                Showing {filteredProjects.length} of {allProjects.length} projects
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key as any)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-secondary text-white shadow-lg'
                      : 'bg-gray-100 text-primary hover:bg-secondary/10 hover:text-secondary'
                  }`}
                >
                  {filter.label}
                  <span className="ml-2 text-sm opacity-75">({filter.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Gallery Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Gallery
                    </Link>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-secondary text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors duration-200"
                  >
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="btn-outline">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Showcase Your Property?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join our portfolio of satisfied clients and see your property transformed into an irresistible listing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-secondary text-lg px-10 py-5"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-5"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage; 