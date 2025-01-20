const express = require("express");
const {getProfile} = require("../controllers/user.controller");
const verifyToken = require("../middleware/tokenverify");

const router = express.Router()

router.get('/profile', verifyToken, getProfile)

module.exports = router;