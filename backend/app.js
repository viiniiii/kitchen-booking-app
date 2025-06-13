import express from "express";
import cors from "cors";
import kitchenRouter from "./routes/kitchen.js";
import bookingRouter from "./routes/booking.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/kitchens", kitchenRouter);
app.use("/api/bookings", bookingRouter);

export default app;