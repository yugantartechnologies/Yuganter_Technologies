import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });

  const reviews = [
    {
      name: "Amit Patel",
      role: "MERN Stack Student",
      body: "YugAntar Technologies gave me real project experience. I am now confident in web development and interviews.",
      rating: 5,
    },
    {
      name: "Sita Sharma",
      role: "Python Developer",
      body: "The trainers explain everything practically. This institute changed my career direction completely.",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "UI/UX Designer",
      body: "Live projects and expert guidance helped me build a strong portfolio and real-world skills. Highly recommended!.",
      rating: 5,
    },
  ];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 text-white overflow-hidden"
    >
      {/* subtle texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            What Our Students Say
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Hear from our students who transformed their careers with YugAntar Technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">

          {reviews.map((r, i) => (
            <div
              key={i}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:border-primary-400/40 hover:bg-white/10 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(r.rating)].map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Body */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                “{r.body}”
              </p>

              {/* Divider */}
              <div className="h-[1px] w-full bg-white/10 mb-5"></div>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary-500 text-black flex items-center justify-center font-bold text-base">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{r.name}</h4>
                  <p className="text-sm text-gray-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
