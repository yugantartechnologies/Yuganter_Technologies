import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import ServiceBookingModal from "../components/ServiceBookingModal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Services() {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });

  useEffect(() => {
    document.title = 'IT Services Ahmedabad - YugAntar Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Best IT services in Navrangpura Ahmedabad - Web development, mobile app development, software solutions, digital marketing, and IT consultancy for businesses.');
    }
  }, []);

  const handleBookService = (service) => {
    setBookingModal({ isOpen: true, service });
  };

  const handleCloseBookingModal = () => {
    setBookingModal({ isOpen: false, service: null });
  };
  const services = [
  {
    title: "Web Application Development",
    description:
      "We build scalable, secure, and high-performance web applications tailored to your business needs using the latest technologies.",
    icon: "🌐",
    features: [
      "Custom web applications",
      "Secure & scalable architecture",
      "Admin & user dashboards",
      "Cloud deployment",
      "Maintenance & support",
    ],
  },
  {
    title: "Mobile Application Development",
    description:
      "End-to-end mobile app development for Android and iOS platforms delivering smooth UI/UX and robust, secure performance solutions",
    icon: "📱",
    features: [
      "Android & iOS apps",
      "Flutter / React Native",
      "UI/UX design",
      "App testing & deployment",
      "Ongoing support",
    ],
  },
  {
    title: "Game Development",
    description:
      "Interactive and engaging game development solutions for mobile and web platforms using modern, powerful game engines and technologies.",
    icon: "🎮",
    features: [
      "2D & 3D game development",
      "Unity & Web-based games",
      "Game UI/UX design",
      "Multiplayer integration",
      "Game testing & optimization",
    ],
  },
  {
    title: "E-Commerce Development",
    description:
      "Custom e-commerce solutions to help businesses sell products online with secure payment and easy management.",
    icon: "🛒",
    features: [
      "Custom e-commerce websites",
      "Payment gateway integration",
      "Product & order management",
      "Cart & checkout system",
      "SEO-friendly store",
    ],
  },
  {
    title: "Internship & Training Programs",
    description:
      "Industry-oriented internship and training programs with live projects and placement assistance.",
    icon: "🎓",
    features: [
      "Live project training",
      "Industry expert mentors",
      "Internship certification",
      "Career guidance",
      "Placement assistance",
    ],
  },
  {
    title: "CRM Development",
    description:
      "Custom CRM solutions to manage customers, sales, leads, and business processes efficiently and securely with scalable automation.",
    icon: "📊",
    features: [
      "Lead & customer management",
      "Sales tracking",
      "Reports & analytics",
      "Role-based access",
      "Custom workflow automation",
    ],
  },
  {
    title: "Web ERP Development",
    description:
      "Complete ERP systems to manage business operations such as finance, HR, inventory, and sales from one platform.",
    icon: "🏢",
    features: [
      "Inventory management",
      "HR & payroll system",
      "Accounting & billing",
      "Role-based dashboards",
      "Custom ERP modules",
    ],
  },
  {
    title: "API Development & Integration",
    description:
      "Secure and scalable API development for seamless integration between applications and third-party services.",
    icon: "🔗",
    features: [
      "REST & GraphQL APIs",
      "Third-party integrations",
      "Authentication & security",
      "High performance APIs",
      "API documentation",
    ],
  },
  {
    title: "Field Force Management System",
    description:
      "Smart field force management solutions to track, manage, and optimize your on-field workforce operations.",
    icon: "📍",
    features: [
      "Live location tracking",
      "Task & attendance management",
      "Reports & analytics",
      "Mobile app integration",
      "Real-time notifications",
    ],
  },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive IT Solutions"
      />
      
      <main className="flex-grow py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
              End-to-End IT Solutions for Your Success
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From training and education to placement assistance and project development, we provide comprehensive services to help you achieve your career goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} onBook={handleBookService} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg md:text-xl font-bold text-dark-900 mb-4">Why Choose Our Services?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Industry-experienced trainers and consultants</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Practical, hands-on learning approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Flexible schedules and learning modes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% placement assistance guarantee</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary-500 to-primary-500 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-lg md:text-xl font-bold mb-4">Get Started Today</h3>
              <p className="text-sm md:text-base mb-6 opacity-90">
                Ready to take the next step in your career? Contact us to learn more about our services and how we can help you achieve your goals.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 text-center transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+916355582605"
                  className="block w-full px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Call: +91 6355582605
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ServiceBookingModal 
        service={bookingModal.service} 
        isOpen={bookingModal.isOpen} 
        onClose={handleCloseBookingModal} 
      />

      <Footer />
    </div>
  );
}
