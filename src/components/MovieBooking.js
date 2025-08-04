import { useState, useEffect } from 'react';
import { FiStar, FiClock, FiMapPin, FiInfo, FiArrowLeft } from 'react-icons/fi';
import { format, addDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import Movie from '../images/Movie.jpg';

const MovieBooking = ({ movieId }) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showInfo, setShowInfo] = useState({
    hallName: 'SCREEN 1',
    totalSeats: 48,
    availableSeats: 36,
    ticketPrice: 12.99
  });

  // Generate next 7 days for date selection
  const availableDates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  // Demo time slots
  const timeSlots = [
    '10:00 AM', '12:30 PM', '3:00 PM', '6:30 PM', '9:00 PM'
  ];

  // Demo seat layout
  const seatLayout = {
    rows: ['A', 'B', 'C', 'D'],
    seatsPerRow: 12,
    bookedSeats: ['A1', 'B5', 'C7', 'D10']
  };

  const handleSeatClick = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else if (selectedSeats.length < 6 && !seatLayout.bookedSeats.includes(seatId)) {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const getTotalCost = () => {
    return (selectedSeats.length * showInfo.ticketPrice).toFixed(2);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="mb-6 flex items-center text-gray-300 hover:text-white transition-colors mt-5"
        >
          <FiArrowLeft className="mr-2" size={20} />
          <span>Back to Movies</span>
        </button>

        {/* Movie Info Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={Movie}
              alt="Movie Poster"
              className="w-full md:w-48 h-72 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-2">Movie Title</h1>
              <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                <span className="flex items-center"><FiClock className="mr-2" /> 180 min</span>
                <span className="flex items-center"><FiStar className="mr-2 text-yellow-400" /> 9.0</span>
                <span>English</span>
                <span>Action/Sci-Fi</span>
              </div>
              
              {/* Date Selection */}
              <div className="mb-6">
                <h3 className="text-white mb-3">Select Date</h3>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {availableDates.map((date) => (
                    <button
                      key={date.toString()}
                      onClick={() => setSelectedDate(date)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg ${
                        selectedDate.toDateString() === date.toDateString()
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {format(date, 'EEE, MMM d')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h3 className="text-white mb-3">Select Time</h3>
                <div className="flex flex-wrap gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-lg ${
                        selectedTime === time
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seat Selection */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Select Seats</h2>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-gray-600 rounded mr-2"></span>
                    <span className="text-gray-300">Available</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-red-600 rounded mr-2"></span>
                    <span className="text-gray-300">Booked</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-4 h-4 bg-green-500 rounded mr-2"></span>
                    <span className="text-gray-300">Selected</span>
                  </div>
                </div>
              </div>

              {/* Screen */}
              <div className="relative mb-8">
                <div className="h-2 bg-gray-600 rounded-lg mb-2"></div>
                <p className="text-center text-gray-400 text-sm">SCREEN</p>
              </div>

              {/* Seats Grid */}
              <div className="grid gap-y-4">
                {seatLayout.rows.map((row) => (
                  <div key={row} className="flex justify-center gap-2">
                    <span className="w-8 text-center text-gray-400">{row}</span>
                    <div className="flex gap-2 flex-wrap">
                      {Array.from({ length: seatLayout.seatsPerRow }, (_, i) => {
                        const seatId = `${row}${i + 1}`;
                        const isBooked = seatLayout.bookedSeats.includes(seatId);
                        const isSelected = selectedSeats.includes(seatId);
                        return (
                          <button
                            key={seatId}
                            onClick={() => handleSeatClick(seatId)}
                            disabled={isBooked}
                            className={`w-8 h-8 rounded ${
                              isBooked
                                ? 'bg-red-600 cursor-not-allowed'
                                : isSelected
                                ? 'bg-green-500'
                                : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                          >
                            <span className="text-xs text-white">{i + 1}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="bg-gray-800 rounded-lg p-6 h-fit">
            <h2 className="text-xl font-semibold text-white mb-4">Booking Summary</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between">
                <span>Selected Seats</span>
                <span>{selectedSeats.join(', ') || 'None'}</span>
              </div>
              <div className="flex justify-between">
                <span>Number of Seats</span>
                <span>{selectedSeats.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Price per Ticket</span>
                <span>${showInfo.ticketPrice}</span>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total Amount</span>
                  <span>${getTotalCost()}</span>
                </div>
              </div>
              <button
                disabled={!selectedTime || selectedSeats.length === 0}
                className="w-full py-3 bg-red-600 text-white rounded-lg mt-6 disabled:bg-gray-600 disabled:cursor-not-allowed"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBooking;