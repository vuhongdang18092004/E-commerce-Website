const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: String,
  //   name: { type: String, default: 'No name' },
  title: String,
  img: String,
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model("Course", Course);
