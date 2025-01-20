const express = require('express')


const verifyRole = require('../Middleware/roleverify')
const verifyToken = require('../middleware/tokenverify')

const router = express.Router()

// TODO: DEFINE ALL OF THIS ROUTES

// routes without any permissions any one can access
router.get('/all')

router.get('/:id')
// create update and delete course
//TODO: verify ownership of course "define middleware since we will use this alot"
router.post('/create',verifyToken)

router.patch('/:id',verifyToken)

router.delete('/:id',verifyToken)


module.exports = router;