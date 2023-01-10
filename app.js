const express=require('express')
const router=require('./src/route/api')
const app =   express();
const bodyParser=require('body-parser')


//security middleware
const rateLimit=require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss = require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')


//Database
const mongoose=require('mongoose');
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

const Limiter=rateLimit({windowMs:15*60*100,max:3000})

//database

//Front end routing
app.use(express.static('client/build'))
app.get("*",function (req,res){
    req.sendFile(path.resolve(__dirname,'client','build','index.html'))
})


//routing
app.use("/api/v1",router)


module.exports=app