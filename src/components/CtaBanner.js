import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import MobileView from '../images/MobileView.jpg';

const CtaBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download Our Mobile App
            </h2>
            <p className="text-purple-200 text-lg mb-6">
              Get exclusive offers and book tickets instantly from your phone
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-900 rounded-lg hover:bg-purple-100 transition-colors">
                <FaGooglePlay className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-white text-purple-900 rounded-lg hover:bg-purple-100 transition-colors">
                <FaAppStore className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-150"></div>
            <img
              src={MobileView}
              alt="Mobile App"
              className="relative z-10 w-64 md:w-80 rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-lg">
            <div className="text-3xl font-bold text-white mb-2">1M+</div>
            <div className="text-purple-200">Active Users</div>
          </div>
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-lg">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-purple-200">Theaters</div>
          </div>
          <div className="p-6 bg-white/10 rounded-lg backdrop-blur-lg">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-purple-200">Daily Bookings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;