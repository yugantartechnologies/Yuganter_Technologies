import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CourseHighlights from '../components/CourseHighlights';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import EnrollmentModal from '../components/EnrollmentModal';
import Footer from '../components/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    document.title = 'YugAnter Technologies - Build Your Future-Ready IT Career';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Master Full-Stack Development, MERN Stack, Python, AI/ML, and Data Science with real-world projects at YugAnter Technologies. 100% Placement Assistance.');
    }
  }, []);

  const handleQuickEnroll = () => {
    // Default course for quick enrollment
    setSelectedCourse({
      title: "Full Stack Development (MERN)",
      icon: "💻",
      duration: "6 Months"
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };
    // Default course for quick enrollment
    setSelectedCourse({
      title: "Full Stack Development (MERN)",
      icon: "💻",
      duration: "6 Months"
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Hero onQuickEnroll={handleQuickEnroll} />
        <Features />
        <CourseHighlights />
        <Testimonials />
        <CTASection onQuickEnroll={handleQuickEnroll} />
      </main>
      <EnrollmentModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={() => console.log("Quick enrollment successful")}
      />
      <Footer />
    </div>
  );
}
