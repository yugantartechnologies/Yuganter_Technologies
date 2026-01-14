import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CodeBracketIcon, CpuChipIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

export default function CourseHighlights() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const popularCourses = [
    {
      title: "Full Stack Development (MERN)",
      description: "Master MongoDB, Express, React, and Node.js with hands-on projects.",
      icon: <CodeBracketIcon className="w-12 h-12 text-indigo-500" />,
      duration: "6 Months",
      popular: true,
      link: "/courses/full-stack-mern",
    },
    {
      title: "Data Science & AI/ML",
      description: "Learn data analysis, machine learning, and AI with real datasets.",
      icon: <CpuChipIcon className="w-12 h-12 text-purple-500" />,
      duration: "7 Months",
      popular: true,
      link: "/courses/data-science-ai-ml",
    },
    {
      title: "Python Development",
      description: "Build scalable applications and automation scripts with Python & Django.",
      icon: <ComputerDesktopIcon className="w-12 h-12 text-green-500" />,
      duration: "5 Months",
      popular: false,
      link: "/courses/python-development",
    },
  ];

  return (
    <section ref={ref} className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-5 py-2 mb-4 bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-700 rounded-full text-sm font-semibold">
            Popular Courses
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Start Your Journey Today
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our industry-leading courses designed to make you job-ready and boost your career.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {popularCourses.map((course, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-3xl"></div>

              <div className="relative z-10">
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.963c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.963a1 1 0 00-.364-1.118L2.049 9.39c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.963z"/>
                    </svg>
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">
                  {course.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-500">{course.duration}</span>
                  <Link
                    to={course.link}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-2 transition-all"
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

        {/* View All Courses Button */}
        <div className="text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
