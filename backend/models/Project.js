const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "In Progress" },
});

module.exports = mongoose.model("Project", projectSchema);
