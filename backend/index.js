const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const moduleRoutes = require("./routes/moduleRoutes");
const rewardRoutes = require("./routes/rewardRoutes");
const projectRoutes = require("./routes/projectRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Check env variable (debug ke liye)
console.log("✅ Env:", process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/modules", moduleRoutes);
app.use("/api/rewards", rewardRoutes);
app.use("/api/projects", projectRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🎉 AI Game Learning Backend is running!");
});

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });
