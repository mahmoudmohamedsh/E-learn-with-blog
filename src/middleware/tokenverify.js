const jwt = require("jsonwebtoken");
const { StatusCode } = require('../utils/utils')
const dovenv = require("dotenv").config()
//Authorization header check bearer
const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers['authorization'];

  if (authHeader && authHeader.startsWith("bearer")) {
    token = authHeader.split(" ")[1];
    if (!token) {
      err.status = StatusCode.UNAUTHORIZED
      next(err)
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decode;
      console.log("decoded user", decode);
      next();
    } catch (err) {
      err.status = StatusCode.BAD_REQUEST
      next(err)
    }
  } else {
    err = new Error()
    err.status = StatusCode.UNAUTHORIZED
    next(err)
  }
}

module.exports = verifyToken;