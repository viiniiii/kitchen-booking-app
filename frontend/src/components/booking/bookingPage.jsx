import React from "react";
import { Users, Star } from "lucide-react";
import Header from "../Header"; 
import AvailabilityCalendar from "../AvailabilityCalendar"; 
import BookingForm from "./bookingForm";

const BookingPage = ({
  kitchen,
  selectedDate,
  setSelectedDate,
  onBack,
  onSubmitBooking 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Book Kitchen" subtitle={kitchen.name} />
      <div className="max-w-4xl mx-auto py-8 px-6 space-y-8">
        <div>
          <button
            onClick={onBack}
            className="mb-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
          >
            ← Back to Kitchens
          </button>
          <div className="flex gap-6 flex-col md:flex-row">
            <img
              src={kitchen.image}
              alt={kitchen.name}
              className="w-full md:w-2/5 h-56 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl text-blue-600 font-semibold">{kitchen.name}</h3>
              <div className="text-gray-600 text-blue-600 mb-2">{kitchen.location}</div>
              <div className="mb-4 font-medium text-blue-600">
                  <span className="text-black">${kitchen.price}/hour</span>
            
              </div>
              <div className="mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-500" />
                   <span className="text-black">{kitchen.capacity} people</span>
              </div>
              <div className="mb-4 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-600" />
                 <span className="text-black">{kitchen.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
        {/* CALENDAR — select date first */}
        <AvailabilityCalendar
          kitchen={kitchen}
          onDateSelect={setSelectedDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        {/* Show the booking form only when a date is selected */}
        {selectedDate && (
          <BookingForm
            kitchen={kitchen}
            selectedDate={selectedDate}
            onSubmit={onSubmitBooking}
          />
        )}
      </div>
    </div>
  );
};

export default BookingPage;
