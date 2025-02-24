const { UserRole } = require('../utils/utils')
const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profilePic: {
        type: String
    },
    website: {
        type: String
    },
    social: [{
        url: { type: String, required: true },
        website: { type: String, required: true, enum: ["FaceBook", "X", "Instegram", "LinkedIn", "mideam"] }
    }],
    courses: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course'
    }]
})


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: Object.values(UserRole),
        default: UserRole.STUDENT
    },
    password: {
        type: String,
        required: true,
    },
    profile: ProfileSchema,
}, { typestamps: true })


module.exports = mongoose.model("User", userSchema)