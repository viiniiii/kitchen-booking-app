import { Calendar, MapPin, Users, Star, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import AvailabilityCalendar from "../AvailabilityCalendar";

const KitchenCard = ({ kitchen, onBookNow }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={kitchen.image} alt={kitchen.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-800">{kitchen.name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{kitchen.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{kitchen.location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm">Up to {kitchen.capacity} people</span>
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {kitchen.amenities.map((amenity, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <button
            onClick={() => setShowCalendar((x) => !x)}
            className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors bg-gray-50 p-3 rounded-lg"
          >
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              View Availability
            </span>
            {showCalendar ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {showCalendar && (
            <div className="mt-3">
              <AvailabilityCalendar kitchen={kitchen} compact={true} />
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            ${kitchen.price}
            <span className="text-sm font-normal text-gray-600">/hour</span>
          </div>
          <button
            onClick={() => onBookNow(kitchen)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default KitchenCard;
