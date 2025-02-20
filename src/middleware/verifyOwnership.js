const { Course } = require('../models/course.model')
const { StatusCode } = require('../utils/utils')
const verifyOwnerShip = async (req, res, next) => {

    //get the course id
    const courseID = req.params.id;
    if (!courseID) {
        let err = new Error();
        err.status = StatusCode.BAD_REQUEST
        next(err)
    }

    try {
        const course = await Course.findById({ _id: courseID })
        if (course.instructor._id != req.user.id) {
            let err = new Error();
            err.status = StatusCode.FORBIDDEN
            next(err)
        }
    } catch (error) {
        err.status = StatusCode.BAD_REQUEST
        next(err)
    }

    next()
}

module.exports = verifyOwnerShip;


