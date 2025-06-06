import Link from 'next/link';
import { Camera, Plane, RotateCcw, Video, Clock, DollarSign, CheckCircle, Star, Zap, Award } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      name: 'Interior Photography',
      icon: Camera,
      shortDescription: 'Capture the essence of interior spaces with professional HDR photography',
      fullDescription: 'Our interior photography showcases the beauty and functionality of indoor spaces. Using advanced HDR techniques and professional lighting, we create images that highlight architectural details, natural light flow, and the overall ambiance of each room.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        'HDR processing for perfect exposure balance',
        'Professional lighting setup for optimal ambiance',
        'Wide-angle lenses to showcase space effectively',
        'Detail shots of key features and finishes',
        'Color correction for accurate representation'
      ],
      equipment: [
        'Canon EOS R5 full-frame camera',
        'Professional wide-angle lenses (14-24mm)',
        'HDR bracketing technology',
        'Professional lighting equipment',
        'Tripods and stabilization gear'
      ],
      deliverables: [
        '20-30 high-resolution edited photos',
        'Multiple formats (web, print, MLS)',
        'Basic editing and color correction',
        '24-48 hour turnaround',
        'Online gallery for easy sharing'
      ],
      startingPrice: '$299',
      featured: true,
    },
    {
      id: 2,
      name: 'Aerial Drone Photography',
      icon: Plane,
      shortDescription: 'Stunning aerial perspectives that showcase property and surroundings',
      fullDescription: 'Our certified drone pilots capture breathtaking aerial views that provide unique perspectives of properties and their surroundings. Perfect for showcasing large estates, commercial properties, and highlighting proximity to amenities.',
      image: 'https://images.unsplash.com/photo-1473409998854-cfaca2a25dce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        'FAA certified and insured drone operations',
        '4K video and high-resolution photo capability',
        'Multiple angles and elevations',
        'Property boundary visualization',
        'Neighborhood and amenity showcasing'
      ],
      equipment: [
        'DJI Mavic 3 Pro with 4K camera',
        'Hasselblad camera system',
        'Advanced gimbal stabilization',
        'Long-range transmission capability',
        'Professional editing software'
      ],
      deliverables: [
        '15-20 aerial photographs',
        '2-3 minute aerial video tour',
        'Property boundary overview shots',
        'Neighborhood context images',
        'Raw footage available upon request'
      ],
      startingPrice: '$399',
      featured: true,
    },
    {
      id: 3,
      name: '360° Virtual Tours',
      icon: RotateCcw,
      shortDescription: 'Immersive virtual experiences that let buyers explore every space',
      fullDescription: 'Create interactive virtual tours that allow potential buyers to walk through properties from anywhere in the world. Our 360° tours provide an immersive experience that increases engagement and qualified leads.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        'Interactive room-to-room navigation',
        'Embedded floor plans and hotspots',
        'Mobile and desktop compatibility',
        'Social media integration',
        'Lead capture functionality'
      ],
      equipment: [
        'Insta360 Pro 2 camera system',
        '8K 360° video capability',
        'Professional tripod systems',
        'Specialized stitching software',
        'VR headset compatibility'
      ],
      deliverables: [
        'Complete 360° virtual tour',
        'Embedded floor plan navigation',
        'Mobile-optimized viewing',
        'Shareable links and embed codes',
        'Analytics and viewing statistics'
      ],
      startingPrice: '$599',
      featured: true,
    },
    {
      id: 4,
      name: 'Property Videography',
      icon: Video,
      shortDescription: 'Cinematic video tours that tell your property\'s story',
      fullDescription: 'Professional video production that creates compelling narratives about properties. Our cinematic approach combines smooth camera movements, professional audio, and expert editing to produce videos that captivate and convert.',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        'Cinematic camera movements and transitions',
        'Professional audio and music',
        'Storytelling approach to property features',
        'Multiple video lengths for different platforms',
        'Drone footage integration available'
      ],
      equipment: [
        'Sony FX6 professional cinema camera',
        'Gimbal stabilization systems',
        'Professional audio recording',
        'Cinematic lenses and filters',
        '4K and HDR video capability'
      ],
      deliverables: [
        '2-4 minute property video',
        'Social media optimized versions',
        'Raw footage available',
        'Professional music licensing',
        'Custom branding and titles'
      ],
      startingPrice: '$799',
      featured: false,
    },
    {
      id: 5,
      name: 'Twilight Photography',
      icon: Camera,
      shortDescription: 'Dramatic golden hour and twilight shots that create emotional appeal',
      fullDescription: 'Capture properties during the magical golden hour and twilight periods when warm interior lighting contrasts beautifully with the dusky sky. These images create emotional connections and make properties stand out.',
      image: 'https://images.unsplash.com/photo-1464822759844-d150ad6d1dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        'Warm interior lighting showcase',
        'Dramatic sky and landscape contrast',
        'Emotional appeal and ambiance',
        'Perfect for luxury listings',
        'Seasonal timing optimization'
      ],
      equipment: [
        'Full-frame cameras with low-light capability',
        'Professional tripods for stability',
        'HDR and exposure blending techniques',
        'Color temperature balancing tools',
        'Weather monitoring equipment'
      ],
      deliverables: [
        '10-15 twilight photographs',
        'Interior/exterior light balance',
        'Multiple exposure options',
        'Weather contingency planning',
        'Seasonal timing coordination'
      ],
      startingPrice: '$499',
      featured: false,
    },
    {
      id: 6,
      name: 'Commercial Photography',
      icon: Camera,
      shortDescription: 'Specialized photography for commercial real estate properties',
      fullDescription: 'Professional photography tailored for commercial properties including office buildings, retail spaces, warehouses, and industrial facilities. We understand the unique requirements of commercial real estate marketing.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      benefits: [
        'Specialized commercial property expertise',
        'Tenant privacy considerations',
        'Flexible scheduling for business hours',
        'Property signage and branding inclusion',
        'Multiple format deliverables'
      ],
      equipment: [
        'Professional wide-angle systems',
        'Specialized commercial lighting',
        'Architectural perspective correction',
        'High-resolution capture capability',
        'Professional editing workflows'
      ],
      deliverables: [
        '25-40 commercial property photos',
        'Exterior and interior documentation',
        'Tenant space photography',
        'Signage and branding shots',
        'Marketing material ready formats'
      ],
      startingPrice: '$699',
      featured: false,
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most projects delivered within 24-48 hours',
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: '5+ years experience with cutting-edge equipment',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden fees',
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'State-of-the-art cameras and editing software',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary via-primary to-primary/90">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
              Comprehensive real estate photography and videography services designed to make your properties irresistible to buyers
            </p>
            <Link
              href="/contact"
              className="btn-secondary text-lg px-10 py-5"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Why Choose MF Property Studios?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const IconComponent = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section
            key={service.id}
            className={`section-padding ${isEven ? 'bg-gray-light' : 'bg-white'}`}
          >
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                isEven ? '' : 'lg:grid-cols-2'
              }`}>
                {/* Content */}
                <div className={isEven ? 'order-1' : 'order-1 lg:order-2'}>
                  {service.featured && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-secondary/10 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                        {service.name}
                      </h2>
                      <p className="text-gray-600 mt-1">{service.shortDescription}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.fullDescription}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Key Benefits</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Equipment */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-primary mb-3">Professional Equipment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.equipment.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-white rounded-lg shadow-lg">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Starting at</p>
                      <p className="text-3xl font-bold text-secondary">{service.startingPrice}</p>
                      <p className="text-sm text-gray-500">*Final pricing based on property size and requirements</p>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-primary whitespace-nowrap"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className={isEven ? 'order-2' : 'order-2 lg:order-1'}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-primary mb-6 text-center">
                  What You'll Receive
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-gray-700">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Package Deals */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Save with Our Package Deals
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Combine multiple services for maximum impact and better value. Our packages are designed to give you everything you need to market your property effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Essential Package */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Essential</h3>
                <div className="text-4xl font-bold text-secondary mb-4">$699</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Interior Photography</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Exterior Photography</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Basic Aerial Shots</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-secondary w-full">
                  Choose Essential
                </Link>
              </div>

              {/* Professional Package */}
              <div className="bg-secondary text-white rounded-2xl p-8 transform scale-105 shadow-2xl">
                <div className="bg-white text-secondary text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-4">$1,299</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Everything in Essential</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>360° Virtual Tour</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Twilight Photography</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Property Video Tour</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary w-full">
                  Choose Professional
                </Link>
              </div>

              {/* Luxury Package */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Luxury</h3>
                <div className="text-4xl font-bold text-secondary mb-4">$1,999</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Extended Aerial Coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Cinematic Video Production</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span>Same-Day Delivery</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn-secondary w-full">
                  Choose Luxury
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "How quickly can you deliver the photos?",
                answer: "Most standard photography packages are delivered within 24-48 hours. Rush delivery (same-day) is available for an additional fee."
              },
              {
                question: "Do you provide photos in different formats?",
                answer: "Yes, we provide high-resolution files suitable for print, web-optimized versions for online listings, and MLS-ready formats."
              },
              {
                question: "What happens if the weather is bad for aerial shots?",
                answer: "We monitor weather conditions closely and will reschedule aerial photography for optimal conditions at no additional charge."
              },
              {
                question: "Can you work around tenant schedules?",
                answer: "Absolutely. We're flexible with scheduling and can work around tenant availability, especially for commercial properties."
              },
              {
                question: "Do you offer discounts for multiple properties?",
                answer: "Yes, we offer volume discounts for agents and agencies booking multiple properties. Contact us for custom pricing."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss your project and create a custom photography package that meets your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-lg px-10 py-5"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/portfolio"
                className="btn-outline text-lg px-10 py-5"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage; 