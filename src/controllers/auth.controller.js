const User = require("../models/user.model");
const { UserRole, throwError } = require('../utils/utils')
const jwt = require('jsonwebtoken')
require("dotenv").config()
const bcrypt = require('bcryptjs')
const { StatusCode } = require('../utils/utils')


const register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) throwError("crid required", StatusCode.BAD_REQUEST)

        const user = User.findOne({ username })

        if (!user) throwError("user already exist", StatusCode.BAD_REQUEST)

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword });

        await newUser.save();

        res.status(StatusCode.CREATED).json({ message: `user registered with username ${username}` })

    } catch (error) {
        next(error)
    }

}

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) throwError("crid not right-1", StatusCode.BAD_REQUEST)

        const user = await User.findOne({ username });

        if (!user) throwError("crid not right-2", StatusCode.BAD_REQUEST)

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) throwError("crid not right-3", StatusCode.BAD_REQUEST)

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" })

        res.status(StatusCode.SUCCESS).json({ token })
    } catch (err) {
        next(err)
    }


}

module.exports = {
    register,
    login
}