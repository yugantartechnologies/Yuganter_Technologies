import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CodeBracketIcon, CpuChipIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

export default function CourseHighlights() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });

  const popularCourses = [
    {
      title: "Full Stack Development (MERN)",
      description: "Master MongoDB, Express, React, and Node.js with hands-on projects.",
      icon: <CodeBracketIcon className="w-7 h-7" />,
      duration: "6 Months",
      popular: true,
      link: "/courses/full-stack-mern",
    },
    {
      title: "Data Science & AI/ML",
      description: "Learn data analysis, machine learning, and AI with real datasets.",
      icon: <CpuChipIcon className="w-7 h-7" />,
      duration: "7 Months",
      popular: true,
      link: "/courses/data-science-ai-ml",
    },
    {
      title: "Python Development",
      description: "Build scalable applications and automation scripts with Python & Django.",
      icon: <ComputerDesktopIcon className="w-7 h-7" />,
      duration: "5 Months",
      popular: false,
      link: "/courses/python-development",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white overflow-hidden"
    >
      {/* subtle texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`mb-20 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">
            Popular Programs
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Start Your <span className="text-primary-400">Professional Journey</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed">
            Choose from our career-focused programs designed to make you industry-ready
            with practical knowledge and real-world skills.
          </p>
        </div>

        {/* Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {popularCourses.map((course, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-primary-400/40 hover:bg-white/10 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400">
                  {course.icon}
                </div>

                {course.popular && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-500 text-black">
                    Popular
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 tracking-tight text-white">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {course.description}
              </p>

              {/* Divider */}
              <div className="h-[1px] w-full bg-white/10 mb-5"></div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-400">
                  {course.duration}
                </span>

                <Link
                  to={course.link}
                  className="text-primary-400 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            to="/courses"
            className="inline-flex items-center gap-3 px-10 py-3 rounded-xl bg-primary-500 text-black font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
          >
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
