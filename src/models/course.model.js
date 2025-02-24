const { CourseCategory } = require("../utils/utils")
const mongoose = require('mongoose');



// Lesson Schema
const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,  // Could be video URL, text, quiz, etc.
  order: Number,    // Optional: to determine the order of lessons in a course
  duration: Number  // Optional: time duration of the lesson
});

// Course Schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, //Ref single user the one who create this course 
  category: {
    type: [String],
    enum: Object.values(CourseCategory),
  },
  price: Number,
}, { typestamps: true });

console.log(Object.values(CourseCategory))


const Lesson = mongoose.model('Lesson', lessonSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = { Lesson, Course }

