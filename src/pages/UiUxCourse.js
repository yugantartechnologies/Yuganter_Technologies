import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnrollmentModal from "../components/EnrollmentModal";
import { PencilIcon, CpuChipIcon, EyeIcon, UserGroupIcon, CheckCircleIcon, ClockIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

export default function UiUxCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const course = {
    title: "UI/UX Design",
    description:
      "Master design principles, tools like Figma, and create stunning user interfaces.",
    icon: <PencilIcon className="w-16 h-16 text-indigo-500" />,
    duration: "4 Months",
    features: [
      "Design Principles",
      "Figma & Adobe XD",
      "Prototyping",
      "User Research",
      "Wireframing",
      "Portfolio Development",
    ],
    syllabus: [
      "Design Fundamentals",
      "Color Theory and Typography",
      "User Research and Personas",
      "Wireframing and Prototyping",
      "Figma and Adobe XD Tools",
      "UI Design Principles",
      "UX Design Process",
      "Portfolio Creation",
    ],
    prerequisites: "No prior experience required",
    mode: "Online/Offline",
    technologies: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
      { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", color: "#FF61F6" },
      { name: "Sketch", icon: "https://cdn.worldvectorlogo.com/logos/sketch.svg", color: "#F7B500" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", color: "#31A8FF" },
      { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", color: "#FF9A00" },
      { name: "InVision", icon: "https://cdn.worldvectorlogo.com/logos/invision.svg", color: "#FF3366" },
    ],
    careerOpportunities: [
      { title: "UI/UX Designer", description: "Design user interfaces and experiences for digital products.", icon: <PencilIcon className="w-8 h-8 text-blue-500" /> },
      { title: "Product Designer", description: "Work on product design and user experience.", icon: <CpuChipIcon className="w-8 h-8 text-green-500" /> },
      { title: "UX Researcher", description: "Conduct user research and usability testing.", icon: <EyeIcon className="w-8 h-8 text-purple-500" /> },
      { title: "Design Consultant", description: "Provide design consulting services to businesses.", icon: <UserGroupIcon className="w-8 h-8 text-orange-500" /> },
    ],
    stats: [
      { label: "Duration", value: "4 Months", icon: <ClockIcon className="w-6 h-6 text-indigo-500" /> },
      { label: "Mode", value: "Online/Offline", icon: <ComputerDesktopIcon className="w-6 h-6 text-green-500" /> },
      { label: "Students Enrolled", value: "250+", icon: <UserGroupIcon className="w-6 h-6 text-purple-500" /> },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <PageHeader title={course.title} subtitle="Master UI/UX Design" />

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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tools You'll Learn</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
