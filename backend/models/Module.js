const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  title: String,
  description: String,
  iconUrl: String,
  isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Module", moduleSchema);
