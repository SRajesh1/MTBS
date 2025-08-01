import React, { useState } from 'react';
import { FiFilm, FiHeart, FiSmile, FiZap, FiGlobe } from 'react-icons/fi';

const GenreSection = () => {
  const [activeGenre, setActiveGenre] = useState('all');
  const [activeLanguage, setActiveLanguage] = useState('all');

  const genres = [
    { id: 'action', name: 'Action', icon: <FiZap /> },
    { id: 'drama', name: 'Drama', icon: <FiHeart /> },
    { id: 'comedy', name: 'Comedy', icon: <FiSmile /> },
    { id: 'scifi', name: 'Sci-Fi', icon: <FiFilm /> }
  ];

  const languages = [
    { id: 'english', name: 'English' },
    { id: 'hindi', name: 'Hindi' },
    { id: 'telugu', name: 'Telugu' },
    { id: 'tamil', name: 'Tamil' }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
          <p className="text-gray-400">Find movies by genre and language</p>
        </div>

        {/* Genres */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">Popular Genres</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => setActiveGenre(genre.id)}
                className={`flex items-center justify-center space-x-2 p-4 rounded-lg transition-all ${
                  activeGenre === genre.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <span className="text-xl">{genre.icon}</span>
                <span>{genre.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Languages</h3>
          <div className="flex flex-wrap gap-4">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => setActiveLanguage(language.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeLanguage === language.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FiGlobe />
                  <span>{language.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Showing results for{' '}
            <span className="text-white font-semibold">
              {activeGenre === 'all' ? 'All Genres' : genres.find(g => g.id === activeGenre)?.name}
            </span>
            {' '}in{' '}
            <span className="text-white font-semibold">
              {activeLanguage === 'all' ? 'All Languages' : languages.find(l => l.id === activeLanguage)?.name}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GenreSection;