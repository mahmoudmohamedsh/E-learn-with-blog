const verifyOwnerShip = (req,res,next) => {
    
// TODO: define this course by ID 
// check if instructor id = req.user.id from decoded token
// note better to convert to string and use !==  
    next()
}

module.exports = verifyOwnerShip;


