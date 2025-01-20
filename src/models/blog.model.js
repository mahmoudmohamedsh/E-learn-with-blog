const blogPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // Reference to the User who created the blog post
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // This will reference the User model
      required: true, // Every blog post must have an author (a user)
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });


  let db = mongoose.connection.useDb("myDataBase")
  module.exports = db.model("BlogPost", userSchema)