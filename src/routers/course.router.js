const express = require('express')
const { createCourse, updateCourse, deleteCourse, } = require('../controllers/course.controller')

<<<<<<< HEAD
const verifyRole = require('../Middleware/roleverify')
const verifyToken = require('../middleware/tokenverify')
const verifyOwnerShip = require('../middleware/verifyOwnership')
=======
const verifyRole = require('../Middleware/role_verify')
const verifyToken = require('../middleware/token_verify')
>>>>>>> f1b2a1fb13466ef816fbe5e4941519e46b971f65

const router = express.Router()

// TODO: DEFINE ALL OF THIS ROUTES

// routes without any permissions any one can access
router.get('/all')

router.get('/all/:id')
// create update and delete course
router.post('/create',verifyToken,createCourse)

router.patch('/:id',verifyToken,verifyOwnerShip,updateCourse)

router.delete('/:id',verifyToken,verifyOwnerShip,deleteCourse)


module.exports = router;