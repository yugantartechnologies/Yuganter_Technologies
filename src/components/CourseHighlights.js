import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CourseHighlights() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const popularCourses = [
    {
      title: "Full Stack Development (MERN)",
      description: "Master MongoDB, Express, React, and Node.js",
      icon: "💻",
      duration: "6 Months",
      popular: true
    },
    {
      title: "Data Science & AI/ML",
      description: "Learn data analysis, machine learning, and AI",
      icon: "🤖",
      duration: "7 Months",
      popular: true
    },
    {
      title: "Python Development",
      description: "Build scalable web applications with Django",
      icon: "🐍",
      duration: "5 Months",
      popular: false
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-600 rounded-full text-sm font-semibold mb-4">
            Popular Courses
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Start Your Journey Today
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Choose from our industry-leading courses designed to make you job-ready
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {popularCourses.map((course, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-secondary-200 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/0 to-primary-500/0 group-hover:from-secondary-500/5 group-hover:to-primary-500/5 transition-all duration-300"></div>
              
              <div className="relative z-10">
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ Popular
                  </div>
                )}
                
                <div className="text-6xl mb-6">{course.icon}</div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-dark-900 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-500">{course.duration}</span>
                  <Link
                    to="/courses"
                    className="text-secondary-600 hover:text-secondary-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Courses</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
