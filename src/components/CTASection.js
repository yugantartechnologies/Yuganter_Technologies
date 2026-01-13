import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CTASection({ onQuickEnroll }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  return (
    <section className="py-24 bg-gradient-to-br from-secondary-500 via-secondary-600 to-primary-500 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-10"></div>
      
      {/* Animated Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl animate-pulse delay-1000"></div>
      
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className={`inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          🎓 Limited Time Offer
        </div>
        
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
          Ready to Transform Your Career?
        </h2>
        
        <p className={`text-sm md:text-base lg:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
          Join thousands of successful students who have built their dream careers with YugAntar Technologies. Start your journey today!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onQuickEnroll}
            className="group px-6 py-3 bg-white text-secondary-600 font-bold text-base rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2"
          >
            <span>Enroll Now - Free Demo</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-white text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-sm md:text-base">100% Job Assistance</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-sm md:text-base">Live Project Training</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-sm md:text-base">Industry Expert Trainers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
