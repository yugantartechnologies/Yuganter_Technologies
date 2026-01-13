import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CourseCard from "../components/CourseCard";
import EnrollmentModal from "../components/EnrollmentModal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      title: "Full Stack Development (MERN)",
      description: "Master MongoDB, Express, React, and Node.js to build modern web applications from scratch.",
      icon: "💻",
      duration: "6 Months",
      popular: true,
      features: [
        "React.js & Redux",
        "Node.js & Express",
        "MongoDB Database",
        "RESTful APIs",
        "Authentication & Authorization",
        "Deployment & DevOps"
      ]
    },
    {
      title: "Python Development",
      description: "Learn Python programming, Django framework, and build scalable web applications.",
      icon: "🐍",
      duration: "5 Months",
      popular: false,
      features: [
        "Python Fundamentals",
        "Django Framework",
        "Database Management",
        "API Development",
        "Web Scraping",
        "Data Analysis"
      ]
    },
    {
      title: "Java Full Stack",
      description: "Comprehensive Java training with Spring Boot, Hibernate, and modern Java technologies.",
      icon: "☕",
      duration: "6 Months",
      popular: false,
      features: [
        "Core Java & Advanced Java",
        "Spring Boot Framework",
        "Hibernate ORM",
        "Microservices",
        "JSP & Servlets",
        "Enterprise Applications"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Master design principles, tools like Figma, and create stunning user interfaces.",
      icon: "🎨",
      duration: "4 Months",
      popular: false,
      features: [
        "Design Principles",
        "Figma & Adobe XD",
        "Prototyping",
        "User Research",
        "Wireframing",
        "Portfolio Development"
      ]
    },
    {
      title: "Data Science & AI/ML",
      description: "Learn data analysis, machine learning, and artificial intelligence with Python.",
      icon: "🤖",
      duration: "7 Months",
      popular: true,
      features: [
        "Python for Data Science",
        "Machine Learning",
        "Deep Learning",
        "Data Visualization",
        "NLP & Computer Vision",
        "Real-world Projects"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications using React Native and Flutter.",
      icon: "📱",
      duration: "5 Months",
      popular: false,
      features: [
        "React Native",
        "Flutter Development",
        "App Architecture",
        "State Management",
        "API Integration",
        "App Store Deployment"
      ]
    }
  ];

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const handleEnrollmentSuccess = () => {
    // You can add additional logic here, like analytics tracking
    console.log("Enrollment successful for:", selectedCourse?.title);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageHeader 
        title="Our Courses" 
        subtitle="Choose Your Career Path"
      />
      
      <main className="flex-grow py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
              Transform Your Career with Industry-Ready Skills
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive courses are designed by industry experts to help you master in-demand technologies and land your dream job.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} onEnroll={handleEnroll} />
            ))}
          </div>

          {/* Enrollment Modal */}
          <EnrollmentModal
            course={selectedCourse}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSuccess={handleEnrollmentSuccess}
          />

          {/* Call to Action */}
          <div className="mt-20 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-sm md:text-base lg:text-lg mb-8 opacity-90">
              Join thousands of students who have transformed their careers with YugAntar Technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-secondary-600 font-semibold text-sm md:text-base rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Book Free Demo Class
              </Link>
              <a
                href="tel:+919054372690"
                className="px-6 py-3 border-2 border-white text-white font-semibold text-sm md:text-base rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
              >
                Call Us: +91 90543 72690
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
