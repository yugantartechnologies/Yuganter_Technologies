import React from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  const stats = [
    { number: "5000+", label: "Students Trained" },
    { number: "4.9", label: "Google Rating" },
    { number: "100%", label: "Placement Assistance" },
    { number: "50+", label: "Expert Trainers" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in everything we do, ensuring the highest quality education and training."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We maintain the highest standards of integrity and transparency in all our interactions."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We continuously innovate our curriculum to stay ahead of industry trends and technologies."
    },
    {
      icon: "💡",
      title: "Student Success",
      description: "Your success is our success. We are committed to helping every student achieve their career goals."
    }
  ];

  const team = [
    {
      name: "Expert Trainers",
      role: "Industry Professionals",
      description: "Our trainers have years of real-world experience in top IT companies."
    },
    {
      name: "Career Counselors",
      role: "Placement Support",
      description: "Dedicated team helping students with resume building and interview preparation."
    },
    {
      name: "Technical Support",
      role: "24/7 Assistance",
      description: "Round-the-clock support to help you with any technical queries or issues."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageHeader 
        title="About Us" 
        subtitle="Your Career Partner"
      />
      
      <main className="flex-grow">
        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-secondary-500 to-primary-500 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  YugAntar Technologies is a leading IT training institute committed to transforming careers through quality education and practical training. We believe in empowering students with industry-relevant skills that make them job-ready.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  With years of experience in the IT industry, we understand what employers are looking for. Our curriculum is designed by industry experts to bridge the gap between academic learning and real-world application.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Located in the heart of Ahmedabad, we have trained thousands of students who are now working in top IT companies across India and abroad.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary-500 to-primary-500 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-lg md:text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-sm md:text-base mb-6 leading-relaxed">
                  To provide world-class IT education and training that empowers individuals to build successful careers in technology, while maintaining the highest standards of excellence and integrity.
                </p>
                <h3 className="text-lg md:text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  To become the most trusted IT training institute in India, recognized for producing industry-ready professionals who drive innovation and excellence in the tech world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#081a3a] text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#081a3a] text-center mb-12">
              Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-sm md:text-base text-secondary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Visit Our Campus</h2>
                <p className="text-sm md:text-base opacity-90 leading-relaxed mb-6">
                  Located in the heart of Ahmedabad, our modern campus provides the perfect learning environment with state-of-the-art facilities and infrastructure.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-secondary-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="opacity-90">204, 2nd Floor, Yash Aqua, Vijay Cross Road, Navrangpura, Ahmedabad - 380009</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-secondary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919054372690" className="opacity-90 hover:text-secondary-400 transition-colors">+91 90543 72690</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-secondary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:info@yugantertech.com" className="opacity-90 hover:text-secondary-400 transition-colors">info@yugantertech.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Industry-experienced trainers",
                    "Practical, project-based learning",
                    "100% placement assistance",
                    "Modern infrastructure & facilities",
                    "Flexible batch timings",
                    "Affordable fee structure"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-secondary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
