import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from './assets/LetsDev.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Enhanced scroll handler with AOS refresh
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // First refresh AOS to reset animations
      if (window.AOS) {
        window.AOS.refreshHard();
      }
      
      // Then scroll to section
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Refresh again after scroll completes
      setTimeout(() => {
        if (window.AOS) {
          window.AOS.refreshHard();
        }
      }, 600);
      
      setActiveSection(id);
    }
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('nav')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['home', 'projects', 'services', 'about', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
                data-aos="fade-down"
                data-aos-delay={100}
                data-aos-duration="500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div 
          className="md:hidden bg-white absolute w-full left-0 shadow-lg"
          data-aos="fade-down"
          data-aos-duration="300"
        >
          <div className="flex flex-col items-center space-y-3 py-4 px-2">
            {['home', 'projects', 'services', 'about', 'contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`w-11/12 text-center py-3 px-4 rounded-md transition-all ${
                  activeSection === item
                    ? 'font-semibold text-blue-600 bg-blue-50'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
                data-aos="fade-right"
                data-aos-delay={50 * index}
                data-aos-duration="400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;