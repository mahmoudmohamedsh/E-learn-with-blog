const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    /// Will be html for sure to render in frontend with 
    // className that our fronend will handle :) 
    type: String,
    required: true,
  },
  tags: {
    type: [String], // Array of strings for tags
    default: [], // Default is an empty array if no tags are provided
  },
  // Reference to the User who created the blog post
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // This will reference the User model
    required: true, // Every blog post must have an author (a user)
  },
  isPublic: {
    type: Boolean,
    default: false, // Default to false (not published no one see it)
  },
},{ typestamps: true });


let db = mongoose.connection.useDb("myDataBase")
module.exports = db.model("BlogPost", userSchema)