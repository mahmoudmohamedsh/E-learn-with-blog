const express = require('express')
const dovenv = require("dotenv").config()
const mongoose = require("mongoose");
const authRouter = require("../routers/auth.route")
const userRouter = require("../routers/user.route")
const courseRouter = require('../routers/course.router')

exports.createApp = () => {

    const app = express();

    //database config
    const DB_USER = process.env.MONGO_DB_USERNAME
    const DB_PASS = process.env.MONGO_DB_PWD

    /**
     * environment variable interpolation directly connot happen with just dotenv 
     * this code from chatgpt will help do this
            const dotenv = require('dotenv');
            const dotenvExpand = require('dotenv-expand');
    
            // Load .env file and expand the variables
            const myEnv = dotenv.config();
            dotenvExpand(myEnv);
     * and inside the .env do this and the dotenv-expand will process this variable and solve the problem
            MONGO_DB_USERNAME="admin"
            MONGO_DB_PWD="supersecret"
            MONGO_DB_URL_CLOUD="mongodb://${MONGO_DB_USERNAME}:${MONGO_DB_PWD}@mongodb"
     */
    // when starting app inside the containers
    // let mongoUrlDockerCompose = `mongodb://${DB_USER}:${DB_PASS}@mongodb`;
    // when starting app locally, use "mongodb://admin:password@localhost:27017" URL instead
    let mongoUrlDockerCompose = `mongodb://${DB_USER}:${DB_PASS}@localhost:27017`;

    //Middleware
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