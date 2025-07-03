const express = require("express");
const router = express.Router();
const Module = require("../models/Module");

// Get all modules
router.get("/", async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update module progress
router.put("/:id", async (req, res) => {
  try {
    const module = await Module.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(module);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
