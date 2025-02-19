const express = require("express");
const { getProfile } = require("../controllers/user.controller");
const verifyToken = require("../middleware/token_verify");

const router = express.Router()

router.get('/profile', verifyToken, getProfile)


module.exports = router;