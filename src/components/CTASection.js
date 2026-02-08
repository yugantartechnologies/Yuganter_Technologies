import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CTASection({ onQuickEnroll }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Tag */}
        <div
          className={`inline-block mb-6 px-4 py-1.5 border border-white/20 rounded-full text-sm font-semibold text-primary-400 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Career Growth Program
        </div>

        {/* Heading */}
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.15s" }}
        >
          Build Your Career With Industry-Focused Training
        </h2>

        {/* Description */}
        <p
          className={`text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          Gain real-world skills through live projects, expert mentorship, and structured programs designed
          to prepare you for today’s technology-driven careers.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.45s" }}
        >
          <button
            onClick={onQuickEnroll}
            className="group px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold text-base shadow-lg hover:shadow-xl hover:bg-primary-700 transition-all flex items-center gap-2"
          >
            Enroll Now
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all"
          >
            Book Consultation
          </Link>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-gray-300 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary-400"></span>
            <span className="text-sm md:text-base font-medium">Job Assistance</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary-400"></span>
            <span className="text-sm md:text-base font-medium">Live Projects</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary-400"></span>
            <span className="text-sm md:text-base font-medium">Expert Mentors</span>
          </div>
        </div>

      </div>
    </section>
  );
}
  