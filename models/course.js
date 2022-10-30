const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  videos: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("courses", courseSchema);
