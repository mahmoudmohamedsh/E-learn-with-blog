const User = require("../models/user.model");
const { UserRole } = require('../utils/utils')
const jwt = require('jsonwebtoken')
const dovenv = require("dotenv").config()
const bcrypt = require('bcryptjs')
const { StatusCode } = require('../utils/utils')


const register = async (req, res, next) => {

    const { username, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword, role });

        await newUser.save();

        res.status(StatusCode.CREATED).json({ message: `user registered with username ${username}` })
    }
    catch (err) {
        if (!err.status) err.status = StatusCode.BAD_REQUEST
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) return res.status(StatusCode.NOT_FOUND).json({ message: "user not found" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(StatusCode.BAD_REQUEST).json({ message: "user not found" });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" })

        res.status(StatusCode.SUCCESS).json({ token })
    } catch (err) {
        if (!err.status) err.status = StatusCode.BAD_REQUEST
        next(err)
    }
}

module.exports = {
    register,
    login
}