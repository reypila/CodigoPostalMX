const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = mongoose.model('User');

let courses = new Schema({
  id_item: {
    type: Number,
    require: true
  },
  status_item: {
    type: Number,
    require: true
  },
  maker: {
    type: String,
    required: true
  },
  create_date: {
    type: Number,
    required: true
  },
  modification_date: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  name: {
    type: String
  }
});

const Courses = mongoose.model('courses', courses);
module.exports = Courses;