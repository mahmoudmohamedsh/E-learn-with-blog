const express = require('express')
const dovenv = require("dotenv").config()
const morgan = require("morgan")
const authRouter = require("../routers/auth.route")
const userRouter = require("../routers/user.route")
const courseRouter = require('../routers/course.router')
const helmet = require("helmet")
exports.createApp = () => {

    const app = express();

    morgan.token('type',function(req,res){
        return req.headers["authorization"]
    })
    //morgan("",{stream: logstream})
    app.use(morgan(":method :url :status :res[conent-lenght] - :response-time ms :date[web] ->  :type"))
    //Middleware
    app.use(helmet())
    app.use(express.json());
    //Routes
    app.use("/auth", authRouter)
    app.use('/user', userRouter)
    app.use('/course', courseRouter)
    //TODO: MAKEROUTE FOR BLOG
    app.get("/ping", (req, res) => {
        res.json({ message: "pong" });
    });

    //error handler
    app.use((err, req, res, next) => {
        const statusCode = err.status || 500;

        // Send error response
        res.status(statusCode).json({
            message: err.message,
            status: err.status,
        });
    })

    return app;
}