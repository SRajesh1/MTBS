import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import MovieAn from './MovieAn.json';
import AuthForm from './components/Auth/AuthForm';
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
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuth = (formData, isLogin) => {
    // Demo credentials
    const demoUser = {
      email: 'demo@gmail.com',
      password: '12345'
    };

    if (isLogin) {
      if (formData.email === demoUser.email && formData.password === demoUser.password) {
        setAuthenticated(true);
      } else {
        alert('Invalid credentials! Use demo@gmail.com / 12345');
      }
    } else {
      // Demo signup
      if (formData.email && formData.password && formData.name) {
        setAuthenticated(true);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || !authenticated) {
    return (
      <div className="min-h-screen w-full bg-gray-900 flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
        <div className="w-full md:w-1/2 max-w-xl mb-8 md:mb-0">
          <Lottie
            animationData={MovieAn}
            loop={true}
            autoplay={true}
            className="w-full h-full"
          />
        </div>
        
        <div className="w-full md:w-1/2 max-w-md md:pl-8">
          <AuthForm onSubmit={handleAuth} />
        </div>
      </div>
    );
  }

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
