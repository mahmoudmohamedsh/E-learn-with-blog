const { StatusCode, throwError } = require("../utils/utils")
const User = require('../models/user.model')

exports.getProfile = async (req, res, next) => {
    try {
        //get user
        const user = await User.findById(req.user.id)
        if (!user) throwError("unautharaized", StatusCode.BAD_REQUEST)
        //get profile
        res.status(StatusCode.SUCCESS).send({ message: "success", profile: user })
        //return profile
    } catch (error) {
        next(error)
    }
}

exports.updateProfile = async (req, res, next) => {
    try {
        const { firstName, lastName, profilePic, website, social } = req.body;
        const user = await User.findById(req.user.id)
        if (!user) throwError("unautharaized", StatusCode.BAD_REQUEST)
        user.profile = {
            firstName,
            lastName,
            social,
            profilePic,
            website
        }
        const newuser = await user.save();
        res.status(StatusCode.SUCCESS).send({ message: "sueccess", profile: newuser.profile })
    } catch (error) {
        next(error)
    }
}



