const { createApp } = require("../src/utils/create_app")
const mongoose = require("mongoose");

const app = createApp()
//start the server
const PORT = process.env.PORT || 7002
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
let mongoUrlDockerCompose = `mongodb://${DB_USER}:${DB_PASS}@localhost:27017/mydb?authSource=admin`;

app.listen(PORT, async () => {
    try {
        const db = await mongoose.connect(mongoUrlDockerCompose);
        console.log(`server is running at port : ${PORT}`)
    } catch (error) {
        console.error("error => ", error)
    }

})
