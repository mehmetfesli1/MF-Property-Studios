'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle, Upload, X } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    propertyType: '',
    services: [] as string[],
    timeline: '',
    budget: '',
    details: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyAddress: '',
          propertyType: '',
          services: [],
          timeline: '',
          budget: '',
          details: '',
        });
        setFiles([]);
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

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '(123) 456-7890',
      action: 'tel:+1234567890',
      buttonText: 'Call Now',
      available: '24/7 Emergency Service',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your project details',
      contact: 'info@mfpropertystudios.com',
      action: 'mailto:info@mfpropertystudios.com',
      buttonText: 'Send Email',
      available: 'Response within 2 hours',
    },
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      description: 'Book a free consultation call',
      contact: 'Free 15-minute consultation',
      action: '/booking',
      buttonText: 'Book Meeting',
      available: 'Same-day availability',
    },
  ];

  const serviceOptions = [
    'Interior Photography',
    'Exterior Photography',
    'Aerial Drone Photography',
    '360° Virtual Tours',
    'Property Videography',
    'Twilight Photography',
    'Commercial Photography',
    'Floor Plans',
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Emergency Service', hours: '24/7 Available' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        
        <div className="relative container-custom">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-shadow">
              Let's Discuss Your Project
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
              Ready to transform your property into an irresistible listing? We're here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1234567890"
                className="btn-secondary text-lg px-8 py-4"
              >
                Call (123) 456-7890
              </a>
              <a
                href="#contact-form"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="text-center bg-gray-light rounded-2xl p-8 card-hover">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-lg font-semibold text-primary mb-2">{method.contact}</p>
                  <p className="text-sm text-gray-500 mb-6">{method.available}</p>
                  <Link
                    href={method.action}
                    className="btn-primary"
                  >
                    {method.buttonText}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Business Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-primary">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Contact */}
            <div className="bg-gray-light rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-primary">Our Location</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Office Address</h4>
                  <p className="text-gray-600">
                    123 Main Street<br />
                    Suite 200<br />
                    Your City, State 12345
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Service Area</h4>
                  <p className="text-gray-600">
                    We serve the greater metropolitan area including all surrounding counties. 
                    Travel fees may apply for locations beyond 30 miles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Contact Form */}
      <section id="contact-form" className="section-padding bg-gray-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Project Details Form
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tell us about your project so we can provide you with an accurate quote and timeline
              </p>
            </div>

            {!isSubmitted ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                          placeholder="John Smith"
                        />
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                          placeholder="john@example.com"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <label htmlFor="propertyAddress" className="block text-sm font-medium text-primary mb-2">
                          Property Address
                        </label>
                        <input
                          type="text"
                          id="propertyAddress"
                          name="propertyAddress"
                          value={formData.propertyAddress}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                          placeholder="123 Property Street, City, State"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Property Details */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-6">Property Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-primary mb-2">
                          Property Type *
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          required
                          value={formData.propertyType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        >
                          <option value="">Select Property Type</option>
                          <option value="residential">Residential Home</option>
                          <option value="luxury">Luxury Property ($1M+)</option>
                          <option value="commercial">Commercial Space</option>
                          <option value="vacation">Vacation Rental</option>
                          <option value="land">Land/Lot</option>
                          <option value="new-construction">New Construction</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-primary mb-2">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                        >
                          <option value="">Select Timeline</option>
                          <option value="asap">ASAP (Rush Order)</option>
                          <option value="this-week">This Week</option>
                          <option value="next-week">Next Week</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-6">Services Needed</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {serviceOptions.map((service) => (
                        <label key={service} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="w-5 h-5 text-secondary border-gray-300 rounded focus:ring-secondary"
                          />
                          <span className="text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-primary mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-plus">$2,000+</option>
                      <option value="discuss">Prefer to Discuss</option>
                    </select>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Reference Images (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">
                        Upload photos of your property or inspiration images
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="btn-outline cursor-pointer"
                      >
                        Choose Files
                      </label>
                    </div>
                    
                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                            <span className="text-sm text-gray-700">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-primary mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={6}
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Tell us more about your project, special requirements, access instructions, or any other important details..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-3" />
                        Send Project Details
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-6">
                  By submitting this form, you agree to receive communications from MF Property Studios. 
                  We respect your privacy and will never share your information. Response time: within 2 hours during business hours.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4">Thank You!</h3>
                <p className="text-xl text-gray-600 mb-6">
                  We've received your project details and will get back to you within 2 hours with a custom quote and timeline.
                </p>
                <p className="text-gray-600 mb-8">
                  In the meantime, feel free to browse our portfolio or call us directly at{' '}
                  <a href="tel:+1234567890" className="text-secondary font-semibold hover:underline">
                    (123) 456-7890
                  </a>{' '}
                  if you have any urgent questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/portfolio" className="btn-primary">
                    View Our Portfolio
                  </Link>
                  <Link href="/services" className="btn-outline">
                    Learn About Our Services
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              Need Rush Service?
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We offer same-day and next-day emergency photography services for urgent listings. 
              Additional rush fees apply, but we're here when you need us most.
            </p>
            <a
              href="tel:+1234567890"
              className="btn-secondary text-lg px-10 py-5"
            >
              Call for Rush Service
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage; 