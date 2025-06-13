import express from "express";
import bookings from '../dummy_data/bookings.js';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(bookings));
  } catch (error) {
    res.status(500).json({ error: "Failed to get kitchen's data", message: error });
  }
});

router.post("/", async (req, res) => {
  const { kitchenId, name, email, date, time, hours, totalPrice } = req.body;

  // Validate presence of all required fields
  if (
    !kitchenId || !name || !email || !date || !time ||
    typeof hours === "undefined" || typeof totalPrice === "undefined"
  ) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newBooking = {
    id: Date.now(),
    kitchenId,
    name,
    email,
    date,
    time,
    hours,
    totalPrice,
    createdAt: new Date().toISOString()
  };

  bookings.push(newBooking);

  res.status(201).json({
    message: 'Booking successful',
    booking: newBooking
  });
});

export default router;
