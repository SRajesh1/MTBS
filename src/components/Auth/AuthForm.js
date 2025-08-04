import { useState } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

const AuthForm = ({ onSubmit }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, isLogin);
  };

  return (
    <div className="w-full max-w-md p-8 bg-gray-900/50 backdrop-blur-sm rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="name"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="password"
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
        >
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>

        <div className="text-center text-gray-400 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-red-500 hover:text-red-400"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;