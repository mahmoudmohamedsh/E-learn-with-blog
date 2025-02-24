const express = require('express')
const { createCourse, updateCourse, deleteCourse, getAllCourses, getCourse } = require('../controllers/course.controller')

const verifyRole = require('../Middleware/role_verify')
const verifyToken = require('../middleware/token_verify')

const router = express.Router()

// TODO: DEFINE ALL OF THIS ROUTES

// routes without any permissions any one can access
router.get('/', getAllCourses)

router.get('/:id', getCourse)
// create update and delete course
router.post('/', verifyToken, createCourse)

router.put('/:id', verifyToken, updateCourse)

router.delete('/:id', verifyToken, deleteCourse)

router.post('/enroll', verifyToken,)

module.exports = router;