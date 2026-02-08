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
    document.title = "Internship Programs Ahmedabad - YugAntar Technologies";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join internship programs in Ahmedabad for Web Development, Data Science, and more. Gain practical experience with expert mentorship at YugAntar Technologies."
      );
    }
  }, []);

  const internshipPrograms = [
    {
      title: "Web Development Internship",
      duration: "3–6 Months",
      icon: "🌐",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      description:
        "Build modern web applications with real-world projects and mentorship.",
    },
    {
      title: "Python Development Internship",
      duration: "3–6 Months",
      icon: "🐍",
      skills: ["Python", "Flask", "Django", "APIs", "Databases"],
      description: "Learn backend development by building scalable Python applications.",
    },
    {
      title: "Mobile App Development Internship",
      duration: "3–6 Months",
      icon: "📱",
      skills: ["Flutter", "React Native", "Firebase"],
      description: "Design and develop cross-platform mobile apps from scratch.",
    },
    {
      title: "UI / UX Design Internship",
      duration: "2–4 Months",
      icon: "🎨",
      skills: ["Figma", "Wireframing", "Prototyping"],
      description: "Create user-centered designs and interactive prototypes.",
    },
    {
      title: "Data Science Internship",
      duration: "4–6 Months",
      icon: "📊",
      skills: ["Python", "ML", "Data Analysis", "Visualization"],
      description: "Work with data, build ML models, and gain analytical experience.",
    },
    {
      title: "Java Development Internship",
      duration: "3–6 Months",
      icon: "☕",
      skills: ["Java", "Spring Boot", "REST APIs"],
      description: "Develop enterprise-grade applications using Java technologies.",
    },
  ];

  const benefits = [
    { icon: "💼", title: "Live Projects", desc: "Hands-on experience with real projects" },
    { icon: "👨‍🏫", title: "Expert Mentors", desc: "Learn from industry professionals" },
    { icon: "📜", title: "Certification", desc: "Internship completion certificate" },
    { icon: "🚀", title: "Career Support", desc: "Placement & interview guidance" },
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

      {/* Hero Section */}
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
            <a
              href="#programs"
              className="px-8 py-4 bg-white text-secondary-600 font-semibold rounded-2xl shadow-lg hover:scale-105 transition"
            >
              Explore Programs
            </a>
            <a
              href="tel:+916355582605"
              className="px-8 py-4 border-2 border-white rounded-2xl hover:bg-white/10 transition"
            >
              Call: +91 6355582605
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Explore Our Internship Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {internshipPrograms.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition duration-300"
              >
                {/* Top Icon Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="text-6xl">{p.icon}</div>
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{p.title}</h3>
                  <span className="inline-block text-sm px-4 py-1 rounded-full bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-700 font-medium mb-4">
                    {p.duration}
                  </span>
                  <p className="text-gray-600 mb-5">{p.description}</p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {p.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-secondary-100 to-primary-100 text-secondary-700 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => openModal(p)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-semibold hover:scale-105 hover:shadow-lg transition"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-600 to-primary-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h2>
        <p className="text-lg mb-8">Start your professional journey with us today</p>
        <a
          href="#programs"
          className="inline-block px-10 py-4 bg-white text-secondary-600 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Apply for Internship
        </a>
      </section>

      {/* Internship Modal */}
      <InternshipModal
        internship={selectedInternship}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
