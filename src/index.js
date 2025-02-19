const { createApp } = require("../src/utils/create_app")

const app = createApp()
//start the server
const PORT = process.env.PORT || 7002

app.listen(PORT, async () => {
    try {
        // const db = await mongoose.connect(mongoUrlDockerCompose);
        console.log(`server is running at port : ${PORT}`)
    } catch (error) {
        console.error("error => ", error)
    }

})
