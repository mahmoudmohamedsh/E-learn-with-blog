const { StatusCode } = require("../utils/utils")

//TODO: DEFINE PROFILE
exports.getProfile = (req,res,next) =>{
    res.status(StatusCode.SUCCESS).send({profile:req.user})
}
//TODO: make getCourses


