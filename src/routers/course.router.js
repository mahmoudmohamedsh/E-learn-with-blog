const express = require('express')
const { createCourse, updateCourse, deleteCourse, } = require('../controllers/course.controller')

const verifyRole = require('../Middleware/roleverify')
const verifyToken = require('../middleware/tokenverify')
const verifyOwnerShip = require('../middleware/verifyOwnership')

const router = express.Router()

// TODO: DEFINE ALL OF THIS ROUTES

// routes without any permissions any one can access
router.get('/all')

router.get('/:id')
// create update and delete course
router.post('/create',verifyToken,createCourse)

router.patch('/:id',verifyToken,verifyOwnerShip,updateCourse)

router.delete('/:id',verifyToken,verifyOwnerShip,deleteCourse)


module.exports = router;