import express from "express";
import cors from "cors";
import kitchenRouter from "./routes/kitchen.js";
import bookingRouter from "./routes/booking.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://kitchen-booking-frontend.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); 
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    console.error("Blocked by CORS:", origin);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true, 
}));

app.use(express.json());

app.use("/api/kitchens", kitchenRouter);
app.use("/api/bookings", bookingRouter);

export default app;
