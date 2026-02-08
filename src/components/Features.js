import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  BookOpenIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });

  const features = [
    {
      title: "Industry-Oriented Courses",
      desc: "Master MERN Stack, Python, AI & more with hands-on projects.",
      icon: <BookOpenIcon className="w-6 h-6" />,
    },
    {
      title: "Expert Trainers",
      desc: "Learn from industry veterans with real-world experience.",
      icon: <AcademicCapIcon className="w-6 h-6" />,
    },
    {
      title: "Live Project Training",
      desc: "Work on real-world projects to gain professional confidence.",
      icon: <CodeBracketIcon className="w-6 h-6" />,
    },
    {
      title: "Placement Assistance",
      desc: "Resume grooming and mock interviews for job success.",
      icon: <BriefcaseIcon className="w-6 h-6" />,
    },
    {
      title: "Internship Support",
      desc: "Kickstart your career with top internship opportunities.",
      icon: <RocketLaunchIcon className="w-6 h-6" />,
    },
    {
      title: "Modern Learning",
      desc: "Practical execution over outdated theory-based learning.",
      icon: <LightBulbIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section
      ref={ref}
      id="features"
      className="relative py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white overflow-hidden"
    >
      {/* Subtle corporate texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary-500 font-mono text-sm tracking-widest mb-3 uppercase">
            Excellence in Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Why Choose <span className="text-primary-500">YugAntar Technologies</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed">
            We build professionals, not just programmers. Our training model is
            focused on industry readiness, practical execution, and career growth.
          </p>
        </div>

        {/* Clean Corporate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((f, i) => (
            <div
              key={i}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-primary-500/40 hover:bg-white/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-black transition-all duration-500">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {f.desc}
              </p>

              {/* Divider */}
              <div className="mt-6 h-[1px] w-full bg-white/10 group-hover:bg-primary-500/40 transition-all"></div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-wider text-gray-400">
                <span>Corporate Training</span>
                <span className="text-primary-500 font-semibold">→</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
