import React from "react";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MovieSection from './components/MovieSection';
import GenreSection from './components/GenreSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <MovieSection />
        <GenreSection />
        <HowItWorks />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
