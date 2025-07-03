const express = require("express");
const router = express.Router();
const Reward = require("../models/Reward");

// Get all rewards
router.get("/", async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.json(rewards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update reward status
router.put("/:id", async (req, res) => {
  try {
    const reward = await Reward.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(reward);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
