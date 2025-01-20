//TODO: design change base on those questions i have 

const mongoose = require('mongoose');

// Category Schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
});

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
    // can more than one instructor exist ? like in univercity we have the teacher and his 2 or 3 master student help hem
    // in many course website i saw them ref to the course by only single person 
    // and monst of the time the course only explain and it's content created by one person
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, //Ref single user the one who create this course 
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }], // Ref array categories
    // does this efficiant ? case as i know doc of mongodb can only go upto 16MB 
    //   does course with like 200 lesson (videos , quizes , read blog post ) will exceed this size provided by mongo       
  lessons: [lessonSchema],  // Embedding lessons directly inside the course document
  price: Number,
  createdAt: Date,
  updatedAt: Date
});
// create doc for category case we ref this field inside the course entity
const Category = mongoose.model('Category', categorySchema);
const Course = mongoose.model('Course', courseSchema);

