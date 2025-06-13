import express from "express";
import cors from "cors";
import kitchenRouter from "./routes/kitchen.js";
import bookingRouter from "./routes/booking.js";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/kitchens", kitchenRouter);
app.use("/api/booking", bookingRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
