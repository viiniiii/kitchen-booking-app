import React, { useState, useEffect } from "react";
import { fetchKitchens } from "./api/axios";
import KitchensPage from "./components/kitchens/kitchensPage";
import BookingPage from "./components/booking/bookingPage";

const App = () => {
  const [kitchens, setKitchens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedKitchen, setSelectedKitchen] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

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

  if (selectedKitchen) {
    return (
      <BookingPage
        kitchen={selectedKitchen}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onBack={() => {
          setSelectedKitchen(null);
          setSelectedDate(null);
        }}
      />
    );
  }

  return (
    <KitchensPage
      kitchens={kitchens}
      loading={loading}
      onBookNow={setSelectedKitchen}
    />
  );
};

export default App;
