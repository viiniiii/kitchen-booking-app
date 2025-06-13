import express from "express";
import kitchens from '../dummy_data/kitchens.js';

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(kitchens));
  } catch (error) {
    res.status(500).json({ error: "Failed to get kitchen's data", message: error });
  }
});

export default router;