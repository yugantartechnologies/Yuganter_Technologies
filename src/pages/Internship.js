import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import InternshipModal from "../components/InternshipModal";
import { motion } from "framer-motion";

export default function Internship() {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Internship Programs Ahmedabad - YugAnter Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join internship programs in Ahmedabad for Web Development, Data Science, and more. Gain practical experience with expert mentorship at YugAnter Technologies.');
    }
  }, []);

  const internshipPrograms = [
    {
      title: "Web Development Internship",
      duration: "3–6 Months",
      icon: "🌐",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      description: "Build modern web applications with real-world projects and mentorship."
    },
    {
      title: "Python Development Internship",
      duration: "3–6 Months",
      icon: "🐍",
      skills: ["Python", "Flask", "Django", "APIs", "Databases"],
      description: "Learn backend development by building scalable Python applications."
    },
    {
      title: "Mobile App Development Internship",
      duration: "3–6 Months",
      icon: "📱",
      skills: ["Flutter", "React Native", "Firebase"],
      description: "Design and develop cross-platform mobile apps from scratch."
    },
    {
      title: "UI / UX Design Internship",
      duration: "2–4 Months",
      icon: "🎨",
      skills: ["Figma", "Wireframing", "Prototyping"],
      description: "Create user-centered designs and interactive prototypes."
    },
    {
      title: "Data Science Internship",
      duration: "4–6 Months",
      icon: "📊",
      skills: ["Python", "ML", "Data Analysis", "Visualization"],
      description: "Work with data, build ML models, and gain analytical experience."
    },
    {
      title: "Java Development Internship",
      duration: "3–6 Months",
      icon: "☕",
      skills: ["Java", "Spring Boot", "REST APIs"],
      description: "Develop enterprise-grade applications using Java technologies."
    }
  ];

  const benefits = [
    { icon: "💼", title: "Live Projects", desc: "Hands-on experience with real projects" },
    { icon: "👨‍🏫", title: "Expert Mentors", desc: "Learn from industry professionals" },
    { icon: "📜", title: "Certification", desc: "Internship completion certificate" },
    { icon: "🚀", title: "Career Support", desc: "Placement & interview guidance" }
  ];

  const openModal = (program) => {
    setSelectedInternship(program);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <PageHeader
        title="Internship Programs"
        subtitle="Real-World Experience • Expert Mentorship • Career Growth"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Kickstart Your Career with Industry Internships
          </motion.h1>
          <p className="text-lg md:text-2xl opacity-90 mb-10">
            Learn by doing. Work on real projects. Get job-ready.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#programs" className="px-8 py-4 bg-white text-secondary-600 font-semibold rounded-2xl shadow-lg hover:scale-105 transition">
              Explore Programs
            </a>
            <a href="tel:+916355582605" className="px-8 py-4 border-2 border-white rounded-2xl hover:bg-white/10 transition">
              Call: +91 6355582605
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-md"
              >
                <div className="text-5xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Available Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipPrograms.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg border"
              >
                <div className="text-6xl mb-4">{p.icon}</div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-secondary-100 text-secondary-600">
                    {p.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.skills.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{s}</span>
                  ))}
                </div>
                <button
                  onClick={() => openModal(p)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-semibold hover:scale-105 transition"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary-600 to-primary-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h2>
        <p className="text-lg mb-8">Start your professional journey with us today</p>
        <a href="#programs" className="inline-block px-10 py-4 bg-white text-secondary-600 rounded-2xl font-semibold hover:scale-105 transition">
          Apply for Internship
        </a>
      </section>

      <InternshipModal
        internship={selectedInternship}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
