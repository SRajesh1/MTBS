import React, { useState, useEffect } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Review from '../images/Review.jpg';


const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: Review,
      rating: 5,
      comment: "Best movie booking experience ever! The interface is so user-friendly and the seat selection process is seamless.",
      role: "Movie Enthusiast"
    },
    {
      id: 2,
      name: "Michael Chen",
      image: Review,
      rating: 5,
      comment: "I love how easy it is to book tickets. The app remembers my preferences and makes recommendations based on my taste.",
      role: "Regular Customer"
    },
    {
      id: 3,
      name: "Emily Davis",
      image: Review,
      rating: 4,
      comment: "Great service and amazing deals! The loyalty program is fantastic and saves me money on every booking.",
      role: "Film Buff"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: Review,
      rating: 5,
      comment: "Best movie booking experience ever! The interface is so user-friendly and the seat selection process is seamless.",
      role: "Movie Enthusiast"
    },
    {
      id: 5,
      name: "Michael Chen",
      image: Review,
      rating: 5,
      comment: "I love how easy it is to book tickets. The app remembers my preferences and makes recommendations based on my taste.",
      role: "Regular Customer"
    },
    {
      id: 6,
      name: "Emily Davis",
      image: Review,
      rating: 4,
      comment: "Great service and amazing deals! The loyalty program is fantastic and saves me money on every booking.",
      role: "Film Buff"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-400">
            Trusted by thousands of movie lovers
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar key={i} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-red-600 w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;