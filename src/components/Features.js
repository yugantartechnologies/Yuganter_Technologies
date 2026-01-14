import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  BookOpenIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

export default function Features() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const features = [
    {
      title: "Industry-Oriented Courses",
      desc: "Learn MERN Stack, Python, Java, UI/UX, AI & more with real-world projects.",
      icon: <BookOpenIcon className="w-10 h-10 text-white" />,
    },
    {
      title: "Expert Trainers",
      desc: "Get trained by professionals with real IT industry experience.",
      icon: <AcademicCapIcon className="w-10 h-10 text-white" />,
    },
    {
      title: "Live Project Training",
      desc: "Work on real projects to build confidence and job-ready skills.",
      icon: <CodeBracketIcon className="w-10 h-10 text-white" />,
    },
    {
      title: "Internship Support",
      desc: "We provide internship guidance and experience after course completion.",
      icon: <RocketLaunchIcon className="w-10 h-10 text-white" />,
    },
    {
      title: "Placement Assistance",
      desc: "Resume building, interview preparation & job assistance included.",
      icon: <BriefcaseIcon className="w-10 h-10 text-white" />,
    },
    {
      title: "Modern Learning",
      desc: "Smart classrooms, digital tools & practical based teaching.",
      icon: <LightBulbIcon className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <section
      ref={ref}
      id="features"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-600 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
            Why Choose YugAntar Technologies?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We provide high-quality IT education with practical learning and career-focused training that transforms students into industry-ready professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 hover:border-secondary-200 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-50/0 to-primary-50/0 group-hover:from-secondary-50/50 group-hover:to-primary-50/50 transition-all duration-300"></div>

              <div className="relative z-10 flex flex-col items-start">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-2xl bg-gradient-to-br from-secondary-500 to-primary-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-dark-900 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
