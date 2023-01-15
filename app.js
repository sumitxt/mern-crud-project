const express = require('express')
const router = require('./src/routes/api')
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config({path: './config.env'})



//security middleware
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp = require('hpp')
const cors = require('cors')


//Database
const mongoose = require('mongoose');
const path = require("path");

//Security middleware implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())


//bodyParser
app.use(bodyParser.json())


//Rate Limiter

const Limiter = rateLimit({windowMs: 15 * 60 * 100, max: 3000})

//database
let URI = process.env.URI
let OPTION = {user: process.env.DB_USER, pass: process.env.DB_PASS, autoIndex: true}
mongoose.connect(URI, OPTION, (error) => {
    console.log("Database Connection is Successful")
    console.log(error)

})

//Front end routing
app.use(express.static('client/build'))
app.get("*", function (req, res) {
    req.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})


//routing
app.use("/api/v1", router)


module.exports = app