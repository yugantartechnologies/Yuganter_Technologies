import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
    const inquiries = JSON.parse(localStorage.getItem('generalInquiries') || '[]');
    inquiries.push({ ...formData, id: Date.now(), submittedAt: new Date().toISOString() });
    localStorage.setItem('generalInquiries', JSON.stringify(inquiries));
    // Handle form submission here
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      content: "204, 2nd Floor, Yash Aqua, Vijay Cross Road, Navrangpura, Ahmedabad - 380009"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      content: "+91 6355582605",
      link: "tel:+916355582605"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "support@yugantartechnologies.com",
      link: "mailto:support@yugantartechnologies.com"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in Touch"
      />
      
      <main className="flex-grow py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

               
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 text-white font-semibold text-sm md:text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-900 mb-6">Contact Information</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-secondary-500 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map or Additional Info */}
              <div className="bg-gradient-to-br from-secondary-500 to-primary-500 rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-lg md:text-xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <a
                  href="tel:+916355582605"
                  className="block w-full px-6 py-3 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 text-center transform hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
