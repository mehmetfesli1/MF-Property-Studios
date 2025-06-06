'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ChevronRight, X, Calendar, MapPin, Home, Camera, Video, Plane, RotateCcw } from 'lucide-react';

interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'aerial' | 'detail';
}

interface ProjectData {
  id: number;
  title: string;
  type: string;
  slug: string;
  description: string;
  location: string;
  completedDate: string;
  squareFootage: string;
  images: ProjectImage[];
  services: string[];
  highlights: string[];
}

// Mock project data - in real implementation, this would come from Sanity
const getProjectData = (slug: string): ProjectData | null => {
  const projects: Record<string, ProjectData> = {
    'modern-luxury-villa': {
      id: 1,
      title: 'Modern Luxury Villa',
      type: 'Luxury Residential',
      slug: 'modern-luxury-villa',
      description: 'This stunning 5-bedroom luxury villa showcases contemporary architecture with clean lines and expansive glass walls. The property features an infinity pool, panoramic city views, and meticulously designed interior spaces that blend modern luxury with comfort.',
      location: 'Beverly Hills, CA',
      completedDate: 'March 2024',
      squareFootage: '6,500 sq ft',
      services: ['Interior Photography', 'Exterior Photography', 'Aerial Drone Shots', '360° Virtual Tour', 'Twilight Photography'],
      highlights: [
        'Infinity pool with city views',
        'Floor-to-ceiling windows throughout',
        'Smart home automation system',
        'Gourmet chef\'s kitchen',
        'Master suite with private balcony'
      ],
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Villa exterior view', category: 'exterior' },
        { id: 2, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Living room interior', category: 'interior' },
        { id: 3, src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Aerial view of property', category: 'aerial' },
        { id: 4, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Kitchen detail', category: 'detail' },
        { id: 5, src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Bedroom interior', category: 'interior' },
        { id: 6, src: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Pool area', category: 'exterior' },
      ]
    },
    'downtown-penthouse': {
      id: 2,
      title: 'Downtown Penthouse',
      type: 'Urban Luxury',
      slug: 'downtown-penthouse',
      description: 'An elegant penthouse suite in the heart of downtown featuring 360° city views, premium finishes, and a private rooftop terrace. This sophisticated urban retreat combines luxury living with the excitement of city life.',
      location: 'Downtown Los Angeles, CA',
      completedDate: 'February 2024',
      squareFootage: '3,200 sq ft',
      services: ['Interior Photography', 'Twilight Photography', '360° Virtual Tour', 'Aerial Drone Shots'],
      highlights: [
        '360° panoramic city views',
        'Private rooftop terrace',
        'Floor-to-ceiling windows',
        'Premium appliances and finishes',
        'Concierge services'
      ],
      images: [
        { id: 1, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Penthouse living area', category: 'interior' },
        { id: 2, src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'City view from window', category: 'interior' },
        { id: 3, src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Aerial building view', category: 'aerial' },
        { id: 4, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Kitchen detail', category: 'detail' },
      ]
    }
  };

  return projects[slug] || null;
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectData(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}

function ProjectPageClient({ project }: { project: ProjectData }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
    const [imageFilter, setImageFilter] = useState<'all' | 'exterior' | 'interior' | 'aerial' | 'detail'>('all');

  const filteredImages = imageFilter === 'all' 
    ? project.images 
    : project.images.filter(img => img.category === imageFilter);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen]);

  const serviceIcons: Record<string, any> = {
    'Interior Photography': Camera,
    'Exterior Photography': Camera,
    'Aerial Drone Shots': Plane,
    '360° Virtual Tour': RotateCcw,
    'Property Videography': Video,
    'Twilight Photography': Camera,
  };

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-gray-light">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span>›</span>
            <Link href="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link>
            <span>›</span>
            <span className="text-primary font-medium">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Project Hero */}
      <section className="relative h-96 lg:h-[60vh] overflow-hidden">
        <img
          src={project.images[0].src}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container-custom">
            <div className="text-white">
              <span className="inline-block px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full mb-4">
                {project.type}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-shadow">
                {project.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-200">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{project.completedDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span>{project.squareFootage}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Filter */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {['all', 'exterior', 'interior', 'aerial', 'detail'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setImageFilter(filter as any)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        imageFilter === filter
                          ? 'bg-secondary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {filteredImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Camera className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-primary mb-6">About This Project</h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-light rounded-2xl p-8 sticky top-32">
                {/* Project Details */}
                <h3 className="text-xl font-bold text-primary mb-6">Project Details</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-sm text-gray-600">Property Type</span>
                    <p className="font-semibold text-primary">{project.type}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Location</span>
                    <p className="font-semibold text-primary">{project.location}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Square Footage</span>
                    <p className="font-semibold text-primary">{project.squareFootage}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">Completed</span>
                    <p className="font-semibold text-primary">{project.completedDate}</p>
                  </div>
                </div>

                {/* Services Used */}
                <h4 className="text-lg font-bold text-primary mb-4">Services Provided</h4>
                <div className="space-y-3 mb-8">
                  {project.services.map((service, index) => {
                    const IconComponent = serviceIcons[service] || Camera;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="p-1 bg-secondary/20 rounded">
                          <IconComponent className="h-4 w-4 text-secondary" />
                        </div>
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Property Highlights */}
                <h4 className="text-lg font-bold text-primary mb-4">Property Highlights</h4>
                <ul className="space-y-2 mb-8">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="block w-full bg-secondary text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Get Similar Photography
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-5xl max-h-[90vh] mx-4">
            <img
              src={filteredImages[currentImage]?.src}
              alt={filteredImages[currentImage]?.alt}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white text-sm">
                {currentImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Related Projects */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            More Projects
          </h2>
          <div className="text-center">
            <Link
              href="/portfolio"
              className="btn-primary text-lg px-10 py-5"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 