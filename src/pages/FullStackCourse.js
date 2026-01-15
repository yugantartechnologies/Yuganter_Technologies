import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnrollmentModal from "../components/EnrollmentModal";
import { CodeBracketIcon, CpuChipIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, PencilIcon, CheckCircleIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default function FullStackCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const course = {
    title: "Full Stack Development (MERN)",
    description:
      "Master MongoDB, Express, React, and Node.js to build modern web applications from scratch.",
    icon: <CodeBracketIcon className="w-16 h-16 text-indigo-500" />,
    duration: "6 Months",
    popular: true,
    features: [
      "React.js & Redux",
      "Node.js & Express",
      "MongoDB Database",
      "RESTful APIs",
      "Authentication & Authorization",
      "Deployment & DevOps",
    ],
    syllabus: [
      "HTML, CSS, JavaScript Fundamentals",
      "React.js Advanced Concepts",
      "Node.js and Express Framework",
      "MongoDB Database Design",
      "API Development and Integration",
      "Authentication and Security",
      "Deployment with Heroku/AWS",
      "Project Work and Portfolio",
    ],
    prerequisites: "Basic knowledge of programming and HTML/CSS",
    mode: "Online/Offline",
    technologies: [
      { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg", color: "#E34F26" },
      { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg", color: "#1572B6" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
      { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg", color: "#61DAFB" },
      { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", color: "#339933" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
      { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", color: "#47A248" },
    ],
    careerOpportunities: [
      { title: "Full Stack Developer", description: "Build complete web applications from frontend to backend.", icon: <CodeBracketIcon className="w-8 h-8 text-blue-500" /> },
      { title: "MERN Stack Developer", description: "Specialize in MongoDB, Express, React, and Node.js stack.", icon: <CpuChipIcon className="w-8 h-8 text-green-500" /> },
      { title: "Web Application Developer", description: "Create dynamic and responsive web applications.", icon: <ComputerDesktopIcon className="w-8 h-8 text-purple-500" /> },
      { title: "Backend Developer", description: "Focus on server-side development and APIs.", icon: <DevicePhoneMobileIcon className="w-8 h-8 text-orange-500" /> },
    ],
    stats: [
      { label: "Duration", value: "6 Months", icon: <ClockIcon className="w-6 h-6 text-indigo-500" /> },
      { label: "Mode", value: "Online/Offline", icon: <ComputerDesktopIcon className="w-6 h-6 text-green-500" /> },
      { label: "Students Enrolled", value: "500+", icon: <UserGroupIcon className="w-6 h-6 text-purple-500" /> },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <PageHeader title={course.title} subtitle="Master Full Stack Development" />

      <main className="flex-grow py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Course Overview */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16 border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
              <div className="flex-shrink-0">
                {course.icon}
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{course.description}</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {course.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                  {stat.icon}
                  <div>
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technologies You'll Learn</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {course.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-200"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
                  <span
                    className="text-sm font-semibold text-center"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Course Syllabus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.syllabus.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Career Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.careerOpportunities.map((opportunity, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-300 transform hover:scale-105 border border-gray-200">
                  <div className="flex items-center gap-4 mb-3">
                    {opportunity.icon}
                    <h4 className="font-bold text-gray-900">{opportunity.title}</h4>
                  </div>
                  <p className="text-gray-600">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h3>
            <p className="text-gray-600 text-lg">{course.prerequisites}</p>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of students who have transformed their careers with YugAntar Technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-white text-secondary-600 font-semibold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Enroll Now
              </button>
              <Link
                to="/courses"
                className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 text-center"
              >
                Back to Courses
              </Link>
            </div>
          </div>

        </div>
      </main>

      <EnrollmentModal
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          console.log('Enrollment successful!');
        }}
      />

      <Footer />
    </div>
  );
}
