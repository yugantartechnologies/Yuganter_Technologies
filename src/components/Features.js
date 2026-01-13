import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Features() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const items = [
    { 
      title: "Industry-Oriented Courses", 
      desc: "Learn MERN Stack, Python, Java, UI/UX, AI & more with real-world projects.",
      icon: "📚"
    },
    { 
      title: "Expert Trainers", 
      desc: "Get trained by professionals with real IT industry experience.",
      icon: "👨‍🏫"
    },
    { 
      title: "Live Project Training", 
      desc: "Work on real projects to build confidence and job-ready skills.",
      icon: "💻"
    },
    { 
      title: "Internship Support", 
      desc: "We provide internship guidance and experience after course completion.",
      icon: "🎯"
    },
    { 
      title: "Placement Assistance", 
      desc: "Resume building, interview preparation & job assistance included.",
      icon: "💼"
    },
    { 
      title: "Modern Learning", 
      desc: "Smart classrooms, digital tools & practical based teaching.",
      icon: "🚀"
    },
  ];

  return (
    <section ref={ref} id="features" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Why Choose YugAntar Technologies?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            We provide high-quality IT education with practical learning and career-focused training that transforms students into industry-ready professionals.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-secondary-200 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/0 to-primary-50/0 group-hover:from-secondary-50/50 group-hover:to-primary-50/50 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-secondary-500 to-primary-500 text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {it.icon}
                </div>

                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 group-hover:text-dark-900 transition-colors">
                  {it.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
