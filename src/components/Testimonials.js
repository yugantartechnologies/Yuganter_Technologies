import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const reviews = [
    {
      name: "Amit Patel",
      role: "MERN Stack Student",
      body: "YugAntar Technologies gave me real project experience. I am now confident in web development and interviews.",
      rating: 5
    },
    {
      name: "Sita Sharma",
      role: "Python Developer",
      body: "The trainers explain everything practically. This institute changed my career direction completely.",
      rating: 5
    },
    {
      name: "Rahul Mehta",
      role: "UI/UX Designer",
      body: "Live projects and guidance helped me build a strong portfolio. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <section ref={ref} id="testimonials" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Hear from our students who have transformed their careers with YugAntar Technologies.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-secondary-200 relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-secondary-200 text-6xl font-serif leading-none">"</div>
              
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 relative z-10">
                {r.body}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-primary-400 flex items-center justify-center text-white font-bold text-base">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-base text-gray-900">{r.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
