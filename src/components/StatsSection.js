import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function StatsSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const stats = [
    {
      number: "5000+",
      label: "Students Trained",
      icon: "👥",
      color: "from-secondary-500 to-secondary-600"
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: "⭐",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      number: "95%",
      label: "Placement Rate",
      icon: "💼",
      color: "from-secondary-500 to-secondary-600"
    },
    {
      number: "50+",
      label: "Industry Experts",
      icon: "👨‍🏫",
      color: "from-primary-500 to-primary-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Trusted by thousands of students and recognized by industry leaders
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-3">{stat.icon}</div>
                <div className={`text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
