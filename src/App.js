import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import Internship from './pages/Internship';
import About from './pages/About';
import Contact from './pages/Contact';
import FloatingEnrollButton from './components/FloatingEnrollButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FloatingEnrollButton />
      </div>
    </Router>
  );
}

export default App;
