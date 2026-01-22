import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Internship from './pages/Internship';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BacklinkGuide from './pages/BacklinkGuide';
import FullStackCourse from './pages/FullStackCourse';
import PythonCourse from './pages/PythonCourse';
import JavaCourse from './pages/JavaCourse';
import UiUxCourse from './pages/UiUxCourse';
import DataScienceCourse from './pages/DataScienceCourse';
import MobileAppCourse from './pages/MobileAppCourse';
import DigitalMarketingCourse from './pages/DigitalMarketingCourse';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminInternshipList from './admin/AdminInternshipList';
import AdminCourseInquiries from './admin/AdminCourseInquiries';
import AdminGeneralInquiries from './admin/AdminGeneralInquiries';
import AdminServiceInquiries from './admin/AdminServiceInquiries';
import Attendance from './pages/Attendance';
import AdminAttendance from './admin/AdminAttendance';
import AdminStudents from './admin/AdminStudents';
import FloatingEnrollButton from './components/FloatingEnrollButton';
import StudentRegistration from './components/StudentRegistration';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/full-stack-mern" element={<FullStackCourse />} />
          <Route path="/courses/python-development" element={<PythonCourse />} />
          <Route path="/courses/java-full-stack" element={<JavaCourse />} />
          <Route path="/courses/ui-ux-design" element={<UiUxCourse />} />
          <Route path="/courses/data-science-ai-ml" element={<DataScienceCourse />} />
          <Route path="/courses/mobile-app-development" element={<MobileAppCourse />} />
          <Route path="/courses/digital-marketing" element={<DigitalMarketingCourse />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/backlink-guide" element={<BacklinkGuide />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/course-inquiries" element={<AdminCourseInquiries />} />
          <Route path="/admin/internships" element={<AdminInternshipList />} />
          <Route path="/admin/general-inquiries" element={<AdminGeneralInquiries />} />
          <Route path="/admin/service-inquiries" element={<AdminServiceInquiries />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/admin/attendance" element={<AdminAttendance />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path="/registration" element={<StudentRegistration />} />
        </Routes>
        <FloatingEnrollButton />
      </div>
    </Router>
  );
}

export default App;
