import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Calendar, Users, Star, MapPin } from "lucide-react";


function getAvailabilityMap(bookings, totalSlots, month, year) {
  const bookingMap = {};
  bookings.forEach((b) => {
    const d = new Date(b.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    bookingMap[key] = b.slotsBooked;
  });
  return (day) => {
    if (!day) return "unavailable";
    const today = new Date();
    const date = new Date(year, month, day);
    if (
      date < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    )
      return "past";
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const slots = bookingMap[key] || 0;
    if (slots === 0) return "available";
    if (slots >= totalSlots) return "fully-booked";
    return "partially-available";
  };
}

// Calendar Component
const AvailabilityCalendar = ({
  kitchen,
  onDateSelect,
  compact = false,
  selectedDate,
  setSelectedDate,
}) => {
    if (!kitchen || !Array.isArray(kitchen.bookings) || typeof kitchen.totalSlots !== "number") {
    return <div>Loading...</div>;
  }

  const [currentDate, setCurrentDate] = useState(new Date());

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const getDaysInMonth = () => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
    for (let day = 1; day <= daysInMonth; day++) days.push(day);
    return days;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200 hover:bg-green-200";
      case "partially-available":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200";
      case "fully-booked":
        return "bg-red-100 text-red-800 border-red-200 cursor-not-allowed";
      case "past":
        return "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed opacity-50";
      default:
        return "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed";
    }
  };

  const handleDateClick = (day) => {
    if (!day) return;
    const status = getAvailabilityMap(
      kitchen.bookings,
      kitchen.totalSlots,
      month,
      year
    )(day);
    if (["fully-booked", "unavailable", "past"].includes(status)) return;
    const dateObj = new Date(year, month, day);
    setSelectedDate && setSelectedDate(dateObj);
    onDateSelect && onDateSelect(dateObj);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const containerClass = compact
    ? "bg-gray-50 rounded-lg p-4"
    : "bg-white rounded-lg shadow-lg p-6";
  const titleClass = compact ? "text-lg font-semibold text-black" : "text-xl font-semibold text-black";

  const availabilityFn = getAvailabilityMap(
    kitchen.bookings,
    kitchen.totalSlots,
    month,
    year
  );

  return (
    <div className={containerClass}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={titleClass}>Availability</h3>
        <div className="flex items-center">
          <button
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            className="p-1 mr-3 hover:bg-gray-200 rounded-full transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span
            className={`font-medium text-center ${
              compact ? "text-sm min-w-16" : "text-lg min-w-40"
            } text-black `}
          >
            {monthNames[month]} {year}
          </span>
          <button
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="p-1 ml-3 hover:bg-gray-200 rounded-full transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      {!compact && (
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-200 border border-green-300 rounded mr-2"></div>
            <span className="text-black">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-200 border border-yellow-300 rounded mr-2"></div>
            <span className="text-black">Partially Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-200 border border-red-300 rounded mr-2"></div>
            <span className="text-black">Fully Booked</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-200 border border-gray-300 rounded mr-2 opacity-50"></div>
            <span className="text-black">Past</span>
          </div>
        </div>
      )}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((d) => (
          <div
            key={d}
            className={`text-center font-medium text-gray-500 py-1 ${
              compact ? "text-xs" : "text-sm"
            }`}
          >
            {compact ? d.slice(0, 1) : d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {getDaysInMonth().map((day, i) => {
          const status = availabilityFn(day);
          const isSelected =
            selectedDate &&
            day === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear();
          return (
            <button
              key={i}
              onClick={() => handleDateClick(day)}
              disabled={!day || status === "fully-booked" || status === "unavailable" || status === "past"}
              className={`
                aspect-square border rounded font-medium transition-colors
                ${compact ? "text-xs" : "text-sm"}
                ${day ? getStatusColor(status) : "bg-gray-50 cursor-default"}
                ${isSelected ? "ring-2 ring-blue-500" : ""}
              `}
            >
              {day && <span>{day}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default AvailabilityCalendar;
