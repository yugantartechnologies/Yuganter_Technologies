import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../public/Yuganter_Technologies.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Services", path: "/services" },
    { name: "Internship", path: "/internship" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className={`w-full bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-xl backdrop-blur-md bg-opacity-95' : 'shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-18 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center group cursor-pointer">
          <div className="relative">
            <img
              src={logo}
              alt="YugAntar"
              className="w-12 h-12 md:w-14 md:h-14 mr-3 rounded-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary-400/20 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            YugAntar Technologies
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white text-sm md:text-base font-medium relative py-2 transition-colors duration-300 hover:text-secondary-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-secondary-400 after:to-primary-400 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300 ${
                location.pathname === item.path ? 'text-secondary-300 after:w-full' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Join Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 px-5 py-2 rounded-xl font-semibold text-sm md:text-base text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/50 inline-block"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-gradient-to-b from-dark-900/98 to-dark-800/98 backdrop-blur-md px-5 py-6 flex flex-col gap-4 border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-white text-base font-medium hover:text-secondary-300 transition-colors duration-200 py-2 border-b border-white/5 hover:border-secondary-400/30 ${
                location.pathname === item.path ? 'text-secondary-300' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-600 hover:to-primary-600 px-6 py-3 rounded-xl font-semibold text-sm md:text-base text-white mt-2 transition-all duration-300 transform hover:scale-105 text-center"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
