const express=require("express");
const colors=require("colors")
 const connecttion = require("./config/db");
 const { notFound, errorHandler }=require("./middlewares/errorMiddleware")

require("dotenv").config()
const port=process.env.PORT||8080
const app=express();
app.use(express.json())
const cors = require('cors');
const authRouter = require("./routes/User");
const busRouter = require("./routes/busRoute");
const cartRouter = require("./routes/cartRoute");
const bookedRouter = require("./routes/bookedRoute");
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Welcome to server")
})
app.use("/api/auth",authRouter)
app.use("/api/bus",busRouter)
app.use("/api/bus/cart",cartRouter)
app.use("/api/bus/book",bookedRouter)
app.use(notFound)
app.use(errorHandler)
app.listen(port,async()=>{
    try {
        await connecttion
        console.log(`http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
    
})