const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create new user
router.post("/create", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user details
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("rewards projects");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update user stats
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
