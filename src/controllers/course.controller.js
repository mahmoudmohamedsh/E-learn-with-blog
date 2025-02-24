const { Course } = require("../models/course.model")
const User = require("../models/user.model")
const { StatusCode, CourseCategory, throwError } = require("../utils/utils")


exports.createCourse = async (req, res, next) => {
    try {
        const userid = req.user.id
        const { title,
            description,
            imageUrl,
            price } = req.body;
        const user = await User.findById(userid)
        const course = new Course({
            title,
            description,
            imageUrl,
            instructor: user._id,
            price,
            category: [CourseCategory.BACKEND]
        })

        const newCourse = await course.save();

        res.status(StatusCode.CREATED).send({ message: "success", course: newCourse })
    } catch (error) {
        next(error)
    }
}
exports.getAllCourses = async (req, res, next) => {
    try {
        const courses = await Course.find()
        res.status(StatusCode.SUCCESS).send({ message: "sucess", courses })
    } catch (error) {
        next(error)
    }
}
exports.getCourse = async (req, res, next) => {
    try {
        const id = req.params.id
        const course = await Course.findById(id)
        if (!course) throwError("couse not found", StatusCode.NOT_FOUND)
        res.status(StatusCode.SUCCESS).send({ message: "success", course })
    } catch (error) {
        next(error)
    }
}

exports.updateCourse = async (req, res, next) => {
    res.send('update')
}
exports.deleteCourse = async (req, res, next) => {
    res.send('delete')
}

