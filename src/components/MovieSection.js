import React, { useState } from 'react';
import { FiStar, FiClock, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import movie1 from '../images/movie1.jpg';
import movie2 from '../images/movie2.jpg';
import movie3 from '../images/movie3.jpg';
import movie4 from '../images/movie4.jpg';
import movie5 from '../images/movie5.jpg';
import movie6 from '../images/movie6.jpg';
import movie7 from '../images/movie7.jpg';
import movie8 from '../images/movie8.jpg';
import movie9 from '../images/movie9.jpg';
import movie10 from '../images/movie10.jpg';
import movie11 from '../images/movie11.jpg';
import movie12 from '../images/movie12.jpg';
import movie13 from '../images/movie13.jpg';
import movie14 from '../images/movie14.jpg';
import movie15 from '../images/movie15.jpg';
import movie16 from '../images/movie16.jpg';
import movie17 from '../images/movie17.jpg';
import movie18 from '../images/movie18.jpg';
import movie19 from '../images/movie19.jpg';
import movie20 from '../images/movie20.jpg';
import { useNavigate } from 'react-router-dom';


const MovieSection = () => {
  const [activeTab, setActiveTab] = useState('nowShowing');
  const navigate = useNavigate();

  const movies = {
    nowShowing: [
      {
        id: 1,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie1
      },
      {
        id: 2,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie2
      },
      {
        id: 3,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie3
      },
      {
        id: 4,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie4
      },
      {
        id: 5,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie5
      },
      {
        id: 6,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie6
      },
      {
        id: 7,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie7
      },
      {
        id: 8,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie8
      },
      {
        id: 9,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie9
      },
      {
        id: 10,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie10
      },
      
      
      // Add more movies...
    ],
    comingSoon: [
      {
        id: 11,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie11
      },
      {
        id: 12,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie12
      },
      {
        id: 13,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie13
      },
      {
        id: 14,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie14
      },
      {
        id: 15,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie15
      },
      {
        id: 16,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie16
      },
      {
        id: 17,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie17
      },
      {
        id: 18,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie18
      },
      {
        id: 19,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie19
      },
      {
        id: 20,
        title: "Avengers: Endgame",
        genre: "Action/Sci-Fi",
        rating: "9.0",
        duration: "180",
        language: "English",
        image: movie20
      },
      // Add more movies...
    ]
  };

  const scrollContainer = (direction) => {
    const container = document.getElementById('movieContainer');
    const scrollAmount = direction === 'left' ? -320 : 320;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleBooking = (movieId) => {
    navigate(`/booking/${movieId}`);
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('nowShowing')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'nowShowing'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Now Showing
          </button>
          <button
            onClick={() => setActiveTab('comingSoon')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'comingSoon'
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Coming Soon
          </button>
        </div>

        {/* Movie Slider */}
        <div className="relative">
          <button
            onClick={() => scrollContainer('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
          >
            <FiChevronLeft size={24} />
          </button>

          <div
            id="movieContainer"
            className="flex space-x-6 overflow-x-auto scrollbar-hide py-4"
          >
            {movies[activeTab].map((movie) => (
              <div
                key={movie.id}
                className="flex-none w-64 group"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 p-4 w-full">
                      <div className="flex items-center space-x-2 text-sm text-yellow-400">
                        <FiStar />
                        <span>{movie.rating}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <FiClock />
                        <span>{movie.duration} min</span>
                      </div>
                      <button 
                        onClick={() => handleBooking(movie.id)}
                        className="mt-2 w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">{movie.title}</h3>
                <p className="text-sm text-gray-400">{movie.genre}</p>
                <p className="text-sm text-gray-400">{movie.language}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollContainer('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieSection;