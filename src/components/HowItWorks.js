import React from 'react';
import { FiSearch, FiLayout, FiCreditCard } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiSearch className="w-12 h-12" />,
      title: "Search Movies",
      description: "Browse through our vast collection of latest movies and select your favorite one"
    },
    {
      icon: <FiLayout className="w-12 h-12" />,
      title: "Choose Seats",
      description: "Select your preferred seats from our interactive seating layout"
    },
    {
      icon: <FiCreditCard className="w-12 h-12" />,
      title: "Pay & Enjoy",
      description: "Make secure payment and get ready for an amazing movie experience"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Book your movie tickets in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>

              <div className="text-red-500 mb-4 mt-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>

              <p className="text-gray-400 text-center">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-red-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-full font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300">
            Book Your Tickets Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;