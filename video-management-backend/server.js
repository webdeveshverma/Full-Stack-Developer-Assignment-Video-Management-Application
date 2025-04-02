const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const videoRoutes = require("./routes/videoRoutes");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());




mongoose.connect(process.env.MONGO_URI) // ✅ Remove deprecated options
  .then(() => console.log(`MongoDB Connected: ${process.env.MONGO_URI}`))
  .catch((err) => console.error("MongoDB Connection Error:", err));







app.use("/uploads", express.static(path.join(__dirname, "uploads")));

  

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/videos", videoRoutes);


const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
