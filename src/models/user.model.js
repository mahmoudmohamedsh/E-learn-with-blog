const { UserRole } = require('../utils/utils')
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(UserRole)
    },
    password: {
        type: String,
        required: true,
    }
}, { typestamps: true })

let db = mongoose.connection.useDb("myDataBase")
module.exports = db.model("User", userSchema)