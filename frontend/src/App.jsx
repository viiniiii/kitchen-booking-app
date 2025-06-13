import React, { useState, useEffect } from "react";
import { fetchKitchens } from "./api/axios";
import KitchensPage from "./components/kitchens/kitchensPage";
import BookingPage from "./components/booking/bookingPage";
import BookingSummary from "./components/confirm_booking/BookingSummary";
import ConfirmOverview from "./components/confirm_booking/ConfirmOverview";

const App = () => {
  const [kitchens, setKitchens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedKitchen, setSelectedKitchen] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchKitchens();
        setKitchens(data);
      } catch (e) {
        console.error("Error fetching kitchens:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmitBooking = (bookingData) => {
    setBooking(bookingData);
    setShowConfirmation(true);
    setSelectedKitchen(null);
    setSelectedDate(null);
  };

  if (showConfirmation && booking) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <div className="max-w-4xl mx-auto py-8 px-6">
          <ConfirmOverview />
          <BookingSummary booking={booking} />
          <button
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
            onClick={() => {
              setShowConfirmation(false);
              setBooking(null);
            }}
          >
            Book Another Kitchen
          </button>
        </div>
      </div>
    );
  }

  if (selectedKitchen) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <BookingPage
          kitchen={selectedKitchen}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onBack={() => {
            setSelectedKitchen(null);
            setSelectedDate(null);
          }}
          onSubmitBooking={handleSubmitBooking}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <KitchensPage
        kitchens={kitchens}
        loading={loading}
        onBookNow={setSelectedKitchen}
      />
    </div>
  );
};

export default App;
