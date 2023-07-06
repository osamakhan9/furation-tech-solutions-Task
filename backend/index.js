const express=require("express");

 const connecttion = require("./config/db");


require("dotenv").config()
const port=process.env.PORT||8080
const app=express();
app.use(express.json())
const cors = require('cors');

app.use(cors());
app.get("/",(req,res)=>{
    res.send("Welcome to server")
})

app.listen(port,async()=>{
    try {
        await connecttion
        console.log(`http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
    
})