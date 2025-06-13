import React from "react";
import { Calendar, Clock, Check } from "lucide-react";

// Shows a summary of the confirmed booking details
const BookingSummary = ({ booking }) => {
  if (!booking || !booking.kitchen) return null;

  const { kitchen, name, email, date, time, hours, bookingId } = booking;
  const totalCost = kitchen.price * hours;

  return (
    <section className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-black">Booking Summary</h2>
      <div className="space-y-4">
        {/* Kitchen Info */}
        <div className="border-b pb-4">
          <h3 className="font-semibold text-gray-600 text-lg mb-2">{kitchen.name}</h3>
          <p className="text-gray-600">{kitchen.location}</p>
        </div>
        {/* Customer & Booking Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-700">Customer Details</h4>
            <p className="text-gray-600">Name: {name}</p>
            <p className="text-gray-600">Email: {email}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700">Booking Details</h4>
            <div className="flex items-center text-gray-600 mb-1">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{date && new Date(date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-1">
              <Clock className="w-4 h-4 mr-2" />
              <span>{time} ({hours} {hours > 1 ? "hours" : "hour"})</span>
            </div>
          </div>
        </div>
        {/* Total Cost */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium text-blue-700">Total Amount:</span>
            <span className="text-2xl font-bold text-blue-600">
              ${totalCost}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSummary;
