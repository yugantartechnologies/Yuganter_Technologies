import React from "react";
import { Link } from "react-router-dom";

export default function Hero({ onQuickEnroll }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white overflow-hidden">

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-10 animate-pulse"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent"></div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-secondary-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-secondary-300 rounded-full opacity-50 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 border border-secondary-400/30 rounded-full text-sm font-semibold text-secondary-200 animate-pulse">
            🚀 Transform Your Career Today
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
            YugAntar Technologies
            <br />
            <span className="bg-gradient-to-r from-secondary-400 via-secondary-300 to-primary-400 bg-clip-text text-transparent animate-gradient">
              Build Your Future-Ready IT Career
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-6 font-medium leading-relaxed">
            Practical Training • Live Projects • Industry Experts • 100% Placement Assistance
          </p>

          <p className="text-sm md:text-base text-gray-300 mb-10 max-w-xl leading-relaxed">
            Master Full-Stack Development, MERN Stack, Python, AI/ML, and Data Science with real-world projects and become job-ready in just a few months.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={onQuickEnroll}
              className="group px-6 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 text-white font-semibold text-base rounded-xl shadow-xl shadow-secondary-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-secondary-500/50 flex items-center justify-center gap-2"
            >
              <span>Enroll Now - Start Learning</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <Link
              to="/courses"
              className="px-6 py-3 border-2 border-primary-400/80 text-primary-300 hover:bg-primary-500/20 hover:border-primary-400 hover:text-white font-semibold text-base rounded-xl transition-all duration-300 backdrop-blur-sm text-center"
            >
              Explore All Courses
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold text-base rounded-xl transition-all duration-300 text-center"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-14 flex flex-wrap gap-6 md:gap-8 justify-center md:justify-start">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <svg className="w-6 h-6 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 01.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <span className="text-gray-200 font-medium text-sm">5000+ Students Trained</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-200 font-medium text-sm">4.9 Google Rating</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-200 font-medium text-sm">100% Job Assistance</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center animate-slide-in-right">
            <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500/20 to-primary-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition duration-500 animate-float"></div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              alt="Students coding"
              className="relative rounded-2xl shadow-2xl border-4 border-secondary-500/30 w-full max-w-md group-hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-secondary-500 to-primary-500 px-6 py-3 rounded-full font-bold shadow-xl text-white animate-bounce-slow">
              <span className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                Admissions Open
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
