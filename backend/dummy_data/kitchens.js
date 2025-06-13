const kitchens = [
  {
    id: 1,
    name: "Modern Downtown Kitchen",
    location: "Downtown District",
    rating: 4.8,
    capacity: 8,
    price: 45,
    image: "https://www.howdens.com/-/media/howdens/assets/clh_asset_products/clh_asset_levela_108418/clh_asset_levelb_25522207/clh_asset_levelc_25522209/clh_asset_leveld_25581444/ass_25576121.jpg",
    amenities: ["Professional Equipment", "Dishwasher"],
    totalSlots: 12,
    bookings: [
      { date: "2025-06-16", slotsBooked: 6 },
      { date: "2025-06-17", slotsBooked: 8 },
      { date: "2025-06-18", slotsBooked: 12 },
      { date: "2025-06-19", slotsBooked: 3 },
      { date: "2025-06-20", slotsBooked: 3 },
      { date: "2025-06-21", slotsBooked: 10 },
      { date: "2025-06-22", slotsBooked: 12 },
      { date: "2025-06-23", slotsBooked: 5 },
      { date: "2025-06-24", slotsBooked: 2 },
      { date: "2025-06-25", slotsBooked: 9 },
      { date: "2025-06-26", slotsBooked: 15 }, 
      { date: "2025-06-27", slotsBooked: 7 },
      { date: "2025-06-28", slotsBooked: 12 },
    ]
  },
  {
    id: 2,
    name: "Cozy Suburban Kitchen",
    location: "Westside",
    rating: 4.6,
    capacity: 6,
    price: 35,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDst9ENe99a-M6UyD0SuU9qMIyjd2_m8tV3w&s",
    amenities: ["Garden View", "Large Island", "Wine Fridge"],
    totalSlots: 10,
    bookings: [
      { date: "2025-06-16", slotsBooked: 4 },
      { date: "2025-06-17", slotsBooked: 10 },
      { date: "2025-06-18", slotsBooked: 7 },
      { date: "2025-06-19", slotsBooked: 5 },
      { date: "2025-06-20", slotsBooked: 3 },
      { date: "2025-06-21", slotsBooked: 6 },
      { date: "2025-06-22", slotsBooked: 10 },
      { date: "2025-06-23", slotsBooked: 9 },
      { date: "2025-06-24", slotsBooked: 1 },
      { date: "2025-06-25", slotsBooked: 2 }
    ]
  },
  {
    id: 3,
    name: "Industrial Loft Kitchen",
    location: "Arts District",
    rating: 4.9,
    capacity: 12,
    price: 65,
    image: "https://www.deslaurier.com/hs-fs/hubfs/Blog%20Photos/Deslaurier%20Tomar%202%20006a.jpg?width=6759&name=Deslaurier%20Tomar%202%20006a.jpg",
    amenities: ["Commercial Grade", "Open Space", "Event Hosting"],
    totalSlots: 14,
    bookings: [
      { date: "2025-06-16", slotsBooked: 12 },
      { date: "2025-06-17", slotsBooked: 6 },
      { date: "2025-06-18", slotsBooked: 5 },
      { date: "2025-06-19", slotsBooked: 8 },
      { date: "2025-06-20", slotsBooked: 14 },
      { date: "2025-06-21", slotsBooked: 3 },
      { date: "2025-06-22", slotsBooked: 11 },
      { date: "2025-06-23", slotsBooked: 13 },
      { date: "2025-06-24", slotsBooked: 2 },
      { date: "2025-06-25", slotsBooked: 7 }
    ]
  }
];

export default kitchens;
