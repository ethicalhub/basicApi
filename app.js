const express = require('express')
const app = express()
const mongoose = require('mongoose')
const env = require('dotenv').config()
const postRoute = require('./routes/posts')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect( process.env.DB_URI ,{ useNewUrlParser: true,  useUnifiedTopology: true } ,()=>{console.log("Database Connected")})



app.use("/posts" , postRoute)

app.get("/", (req,res)=>{
    res.send("HI")
})



app.listen(3000 , function(){
    console.log("App is running on Port 3000")
})