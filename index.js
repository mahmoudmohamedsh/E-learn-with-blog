const express = require("express")
const dovenv = require("dotenv").config()
const mongoose = require("mongoose");

const app = express();

//database config
const DB_USER = process.env.MONGO_DB_USERNAME
const DB_PASS = process.env.MONGO_DB_PWD
// when starting app locally, use "mongodb://admin:password@localhost:27017" URL instead
// let mongoUrlDockerCompose = `mongodb://${DB_USER}:${DB_PASS}@mongodb`;

let mongoUrlDockerCompose = `mongodb://${DB_USER}:${DB_PASS}@localhost:27017`;

//Middleware
app.use(express.json());
//Routes

//start the server
const PORT = process.env.PORT || 7002

app.listen(PORT, async () => {
    try {
        console.log(mongoUrlDockerCompose);
        await mongoose.connect(mongoUrlDockerCompose);
        console.log(`server is running at port : ${PORT}`)
    } catch (error) {
        console.error("error => ", error)
    }

})