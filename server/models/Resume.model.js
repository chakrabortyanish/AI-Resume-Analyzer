const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    fileUrl: String,
    score: Number,
    skills: [String],
    suggestions: [String],
    atsTips: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", resumeSchema);