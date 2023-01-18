const app = require("./app");
require('dotenv').config({path: './config.env'})
port = process.env.PORT
app.listen(port, function () {
    console.log(`Application started! Brum! Brum! ${port}`)
})