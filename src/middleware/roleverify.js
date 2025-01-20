const authorizeRole = (...allwoedRoles) => {
    return (req,res,next)=>{
      if(!allowedRoldes.includes(req.user.role)){
        return res.status(403).json({message:"access denied"})
      }
      next();
    }
  }
  
  module.exports = authorizeRole;