import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Internship() {
  const internshipPrograms = [
    {
      title: "Web Development Internship",
      duration: "3-6 Months",
      icon: "🌐",
      skills: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
      description: "Build real-world web applications and gain hands-on experience in modern web technologies."
    },
    {
      title: "Python Development Internship",
      duration: "3-6 Months",
      icon: "🐍",
      skills: ["Python", "Django", "Flask", "Database", "APIs"],
      description: "Develop backend systems and APIs using Python frameworks and best practices."
    },
    {
      title: "Mobile App Development Internship",
      duration: "3-6 Months",
      icon: "📱",
      skills: ["React Native", "Flutter", "Firebase", "App Design"],
      description: "Create cross-platform mobile applications and learn app deployment strategies."
    },
    {
      title: "UI/UX Design Internship",
      duration: "2-4 Months",
      icon: "🎨",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "Design beautiful user interfaces and create engaging user experiences."
    },
    {
      title: "Data Science Internship",
      duration: "4-6 Months",
      icon: "📊",
      skills: ["Python", "Machine Learning", "Data Analysis", "Visualization"],
      description: "Work on data analysis projects and machine learning models."
    },
    {
      title: "Java Development Internship",
      duration: "3-6 Months",
      icon: "☕",
      skills: ["Java", "Spring Boot", "Hibernate", "REST APIs"],
      description: "Develop enterprise-level applications using Java and Spring framework."
    }
  ];

  const benefits = [
    {
      icon: "💼",
      title: "Real Project Experience",
      description: "Work on live projects and build your portfolio"
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals"
    },
    {
      icon: "📜",
      title: "Certificate",
      description: "Receive internship completion certificate"
    },
    {
      icon: "🚀",
      title: "Job Placement",
      description: "Get assistance in finding your dream job"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageHeader 
        title="Internship Programs" 
        subtitle="Gain Real-World Experience"
      />
      
      <main className="flex-grow py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
              Launch Your Career with Hands-On Experience
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our internship programs provide you with real-world project experience, expert mentorship, and the skills needed to excel in your career.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Internship Programs */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 text-center mb-12">
              Available Internship Programs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internshipPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 hover:border-secondary-200"
                >
                  <div className="text-5xl mb-4">{program.icon}</div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base md:text-lg font-bold text-gray-800">{program.title}</h4>
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-sm font-semibold">
                      {program.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Skills You'll Learn:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-12 text-white mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">How Our Internship Works</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Apply", desc: "Submit your application" },
                { step: "02", title: "Interview", desc: "Technical assessment" },
                { step: "03", title: "Start", desc: "Begin your internship" },
                { step: "04", title: "Complete", desc: "Get certificate & placement" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h4 className="text-base md:text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-sm md:text-base text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Internship?</h3>
            <p className="text-sm md:text-base lg:text-lg mb-8 opacity-90">
              Join our internship program and gain the experience you need to launch your career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-secondary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Apply for Internship
              </Link>
              <a
                href="tel:+919054372690"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
              >
                Call: +91 90543 72690
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
