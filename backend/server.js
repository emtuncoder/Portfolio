import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.js";
import dotenv from "dotenv";

dotenv.config();

const app = express(); // ✅ DECLARE APP EARLY

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes); // ✅ AFTER app is declared

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
