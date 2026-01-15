import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course, onEnroll }) {
  const getCourseSlug = (title) => {
    const slugs = {
      "Full Stack Development (MERN)": "full-stack-mern",
      "Python Development": "python-development",
      "Java Full Stack": "java-full-stack",
      "UI/UX Design": "ui-ux-design",
      "Data Science & AI/ML": "data-science-ai-ml",
      "Mobile App Development": "mobile-app-development",
      "Digital Marketing": "digital-marketing"
    };
    return slugs[title] || title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:border-secondary-200 overflow-hidden">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay (optional for better text visibility) */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-secondary-600 z-10">
          {course.duration}
        </div>

        {course.popular && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
            ⭐ Popular
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-dark-900 transition-colors">
          {course.title}
        </h3>
        
        <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
          {course.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {course.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
          {course.features.length > 4 && (
            <li className="text-xs text-gray-500 pl-6">+ {course.features.length - 4} more features</li>
          )}
        </ul>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 space-y-3">
          <Link
            to={`/courses/${getCourseSlug(course.title)}`}
            className="w-full px-4 py-2.5 border border-secondary-500 text-secondary-600 font-semibold text-sm md:text-base rounded-xl hover:bg-secondary-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>View Details</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </Link>
          <button 
            onClick={() => onEnroll && onEnroll(course)}
            className="w-full px-4 py-2.5 bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 text-white font-semibold text-sm md:text-base rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>Enroll Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
