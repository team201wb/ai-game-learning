const mongoose = require("mongoose");

const rewardSchema = new mongoose.Schema({
  title: String,
  description: String,
  earned: { type: Boolean, default: false },
});

module.exports = mongoose.model("Reward", rewardSchema);
