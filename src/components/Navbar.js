import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              MovieTicket
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#movies" className="text-white hover:text-red-500 transition-colors">Movies</a>
            <a href="#events" className="text-white hover:text-red-500 transition-colors">Events</a>
            <a href="#contact" className="text-white hover:text-red-500 transition-colors">Contact</a>
            <button className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
              Profile
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#movies" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md">
              Movies
            </a>
            <a href="#events" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md">
              Events
            </a>
            <a href="#contact" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md">
              Contact
            </a>
            <button className="w-full text-left px-3 py-2 text-white bg-red-600 rounded-md">
              Profile
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;