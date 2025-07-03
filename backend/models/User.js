const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  points: { type: Number, default: 0 },
  badges: { type: Number, default: 0 },
  challenges: { type: Number, default: 0 },
  rank: { type: Number, default: 0 },
  rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reward" }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});

module.exports = mongoose.model("User", userSchema);
