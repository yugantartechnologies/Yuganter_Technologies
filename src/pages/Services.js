import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Services() {
  useEffect(() => {
    document.title = 'IT Services - YugAnter Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover our IT services including training, software development, consulting, and more. Empowering businesses with innovative technology solutions.');
    }
  }, []);
  const services = [
    {
      title: "IT Training & Education",
      description: "Comprehensive training programs in cutting-edge technologies with hands-on projects and industry mentorship.",
      icon: "🎓",
      features: [
        "Industry-expert trainers",
        "Live project-based learning",
        "Certification programs",
        "Career guidance & counseling",
        "Placement assistance"
      ]
    },
    {
      title: "Corporate Training",
      description: "Customized training solutions for businesses to upskill their teams and stay competitive.",
      icon: "🏢",
      features: [
        "Customized curriculum",
        "On-site & online training",
        "Team-based learning",
        "Progress tracking",
        "Post-training support"
      ]
    },
    {
      title: "Internship Programs",
      description: "Real-world internship opportunities to gain practical experience and build your portfolio.",
      icon: "💼",
      features: [
        "Live project assignments",
        "Mentor guidance",
        "Industry exposure",
        "Certificate of completion",
        "Job placement support"
      ]
    },
    {
      title: "Placement Assistance",
      description: "End-to-end placement support including resume building, interview prep, and job referrals.",
      icon: "🚀",
      features: [
        "Resume & portfolio review",
        "Mock interviews",
        "Job referrals",
        "Interview preparation",
        "Career counseling"
      ]
    },
    {
      title: "Project Development",
      description: "Custom software development services for businesses and individuals.",
      icon: "💻",
      features: [
        "Web application development",
        "Mobile app development",
        "E-commerce solutions",
        "API development",
        "Maintenance & support"
      ]
    },
    {
      title: "Consulting Services",
      description: "Expert IT consulting to help businesses make informed technology decisions.",
      icon: "🔍",
      features: [
        "Technology assessment",
        "Architecture design",
        "Digital transformation",
        "Process optimization",
        "Strategic planning"
      ]
    }
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
              <ServiceCard key={index} service={service} />
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

      <Footer />
    </div>
  );
}
