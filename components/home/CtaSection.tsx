'use client';

import { useState } from 'react';
import { Phone, CheckCircle, Camera, Star, Award } from 'lucide-react';

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          details: formData.message, // Map message to details for API consistency
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            propertyType: '',
            message: '',
          });
        }, 3000);
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const valuePropositions = [
    {
      icon: Camera,
      text: 'Professional HDR photography that makes properties shine',
    },
    {
      icon: Star,
      text: 'Same-day turnaround for urgent listings',
    },
    {
      icon: Award,
      text: '5+ years experience with 500+ satisfied clients',
    },
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Make Your Properties
              <span className="text-secondary block mt-2">Irresistible?</span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Join hundreds of real estate professionals who trust us to showcase their properties with stunning visuals that sell.
            </p>

            {/* Value Propositions */}
            <div className="space-y-4 mb-8">
              {valuePropositions.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <IconComponent className="h-6 w-6 text-secondary" />
                    </div>
                    <p className="text-gray-200">{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Phone Number CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-secondary rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Call us now for immediate response</p>
                  <a
                    href="tel:+1234567890"
                    className="text-2xl font-bold text-white hover:text-secondary transition-colors duration-200"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="flex items-center space-x-3 text-gray-300">
              <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
              <p className="text-sm">
                <strong>Satisfaction Guaranteed</strong> - If you're not completely satisfied, we'll reshoot for free
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Get Your Free Quote
                  </h3>
                  <p className="text-gray-600">
                    Tell us about your property and we'll provide a custom quote within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-primary mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Property Type</option>
                      <option value="residential">Residential Home</option>
                      <option value="luxury">Luxury Property</option>
                      <option value="commercial">Commercial Space</option>
                      <option value="vacation">Vacation Rental</option>
                      <option value="land">Land/Lot</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your property, timeline, and specific photography needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to receive communications from MF Property Studios. 
                  We respect your privacy and will never share your information.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  We've received your request and will get back to you within 24 hours with a custom quote.
                </p>
                <p className="text-sm text-gray-500">
                  Need immediate assistance? Call us at <strong>(123) 456-7890</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 