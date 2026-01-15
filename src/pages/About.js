import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => {
    document.title = 'About YugAnter Technologies Ahmedabad - Best IT Company in Navrangpura';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'YugAnter Technologies Ahmedabad - Top IT company near Vijay Cross Road offering software development, web solutions, and tech services for businesses in Gujarat.');
    }
  }, []);
  const stats = [
    { number: "5000+", label: "Students Trained", icon: "👥" },
    { number: "4.9★", label: "Google Rating", icon: "⭐" },
    { number: "100%", label: "Placement Support", icon: "🎯" },
    { number: "50+", label: "Expert Mentors", icon: "👨‍🏫" }
  ];

  const values = [
    {
      title: "Industry First Learning",
      desc: "Skills-focused training designed for real-world IT careers, not just certificates.",
      icon: "🚀"
    },
    {
      title: "Integrity & Transparency",
      desc: "Honest guidance, realistic outcomes, and long-term student success.",
      icon: "🤝"
    },
    {
      title: "Innovation Driven",
      desc: "Curriculum aligned with modern tools, frameworks, and global tech trends.",
      icon: "💡"
    },
    {
      title: "Student-Centric Approach",
      desc: "Every student receives mentorship, confidence, and career direction.",
      icon: "🎓"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      <Navbar />

      <PageHeader
        title="About Yugantar Technologies"
        subtitle="Building Skills. Creating Careers. Shaping the Next Generation."
      />

      <main className="flex-grow">
        {/* Hero Stats */}
        <motion.section
          className="py-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 className="text-4xl font-bold text-center mb-12" variants={fadeInUp}>
              Our Impact in Numbers
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="text-4xl mb-2">{s.icon}</div>
                  <h3 className="text-3xl font-bold">{s.number}</h3>
                  <p className="opacity-90 mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Story Timeline */}
        <motion.section
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2 className="text-4xl font-bold text-center mb-12 text-gray-800" variants={fadeInUp}>
              Our Story — A New Era Begins
            </motion.h2>
            <div className="space-y-8">
              <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">The Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yugantar Technologies was founded by five friends who once stood where many
                    students stand today — ambitious, capable, yet confused by outdated education
                    systems and lack of practical exposure.
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">The Transformation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Instead of accepting the gap between education and industry, we chose to
                    transform it. <strong>Yugantar</strong> means a new era — and that is exactly
                    what we aim to create in technical education.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          className="py-20 bg-gradient-to-r from-gray-100 to-gray-200"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 className="text-4xl font-bold text-center mb-12 text-gray-800" variants={fadeInUp}>
              Our Mission & Vision
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-primary-600">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower students with practical IT skills, industry confidence,
                  and career clarity through honest education and expert mentorship.
                </p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 rounded-3xl text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="leading-relaxed">
                  To become India's most trusted IT training institute — producing
                  professionals who are globally competitive and ethically strong.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 className="text-4xl font-bold text-center mb-12 text-gray-800" variants={fadeInUp}>
              What Makes Us Different
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
                  variants={fadeInUp}
                >
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">{v.title}</h4>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Philosophy */}
        <motion.section
          className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 className="text-4xl font-bold mb-6 text-gray-800" variants={fadeInUp}>
              Five Minds. One Mission.
            </motion.h2>
            <motion.p className="text-gray-600 leading-relaxed text-lg" variants={fadeInUp}>
              Our team combines technology, teaching, strategy, communication,
              and operations — united by a single goal:
              <strong className="text-primary-600"> transforming Indian talent into world-class professionals.</strong>
            </motion.p>
            <motion.div className="mt-8 flex justify-center space-x-4" variants={fadeInUp}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl">🧠</div>
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center text-2xl">👥</div>
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center text-2xl">🎯</div>
            </motion.div>
          </div>
        </motion.section>

       

      </main>

      <Footer />
    </div>
  );
}
