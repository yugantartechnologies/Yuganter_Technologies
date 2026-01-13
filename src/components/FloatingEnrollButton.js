import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import EnrollmentModal from "./EnrollmentModal";

export default function FloatingEnrollButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Don't show on contact page
  if (location.pathname === "/contact") return null;

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const defaultCourse = {
    title: "Full Stack Development (MERN)",
    icon: "💻",
    duration: "6 Months"
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-secondary-500/50 transition-all duration-300 transform hover:scale-110 flex items-center gap-2 font-semibold text-sm md:text-base group animate-bounce-slow"
        aria-label="Quick Enroll"
      >
        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span className="hidden sm:inline">Enroll Now</span>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
      </button>

      <EnrollmentModal
        course={defaultCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => console.log("Quick enrollment successful")}
      />
    </>
  );
}
