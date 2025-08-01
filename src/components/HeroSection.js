import React, { useState, useEffect } from 'react';
import { FiMapPin, FiCalendar, FiSearch } from 'react-icons/fi';
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import hero4 from '../images/hero4.jpg';
import hero5 from '../images/hero5.jpg';
import hero6 from '../images/hero6.jpg';
import hero7 from '../images/hero7.jpg';
import hero8 from '../images/hero8.jpg';
import hero9 from '../images/hero9.jpg';
import hero10 from '../images/hero10.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState('');
  const [movie, setMovie] = useState('');
  const [date, setDate] = useState('');

  const heroSlides = [
    {
      id: 1,
      image: hero1,
      title: "Experience Cinema at Its Finest",
      subtitle: "Book your tickets for the latest blockbusters"
    },
    {
      id: 2,
      image: hero2,
      title: "Premium Movie Experience",
      subtitle: "Immerse yourself in the world of entertainment"
    },
    {
      id: 3,
      image: hero3,
      title: "Your Entertainment Destination",
      subtitle: "Watch the latest movies in ultimate comfort"
    },
    {
      id: 4,
      image: hero4,
      title: "Your Entertainment Destination",
      subtitle: "Watch the latest movies in ultimate comfort"
    },
    {
      id: 5,
      image: hero5,
      title: "Your Entertainment Destination",
      subtitle: "Watch the latest movies in ultimate comfort"
    },
    {
      id: 6,
      image: hero6,
      title: "Your Entertainment Destination",
      subtitle: "Watch the latest movies in ultimate comfort"
    },
    {
      id: 7,
      image: hero7,
      title: "Your Entertainment Destination",
      subtitle: "Watch the latest movies in ultimate comfort"
    },
    {
      id: 8,
      image: hero8,
      title: "Your Entertainment Destination",
      subtitle: "Watch the latest movies in ultimate comfort"
    },
    {
      id: 9,
      image: hero9,
      title: "Your Entertainment Destination",
      subtitle: "Watch the latest movies in ultimate comfort"
    },
    {
      id: 10,
      image: hero10,
      title: "Your Entertainment Destination",
      subtitle: "Watch the latest movies in ultimate comfort"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Slider */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center max-w-4xl mx-auto mb-6">
          {heroSlides[currentSlide].title}
        </h1>
        <p className="text-xl text-gray-200 text-center mb-12">
          {heroSlides[currentSlide].subtitle}
        </p>

        {/* Search Box */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Select Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 rounded-lg text-white placeholder-gray-300"
              />
            </div>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Movies"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 rounded-lg text-white placeholder-gray-300"
              />
            </div>
            <div className="relative">
              <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 rounded-lg text-white placeholder-gray-300"
              />
            </div>
          </div>
          <button className="w-full md:w-auto mt-4 px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300">
            Search Movies
          </button>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-red-500 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;