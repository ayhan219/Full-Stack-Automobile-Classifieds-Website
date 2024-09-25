const express = require("express")
const app = express();
const mysql =require("mysql2")
const cors = require("cors");
const userRoute = require("./routes/UserRoute")
const carRoute = require("./routes/CarRoute")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");
dotenv.config();

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))
app.use(cookieParser());
app.use(express.json())
app.use('/uploads', express.static('uploads'));


app.use("/api/auth",userRoute)
app.use("/api/car",carRoute)




app.listen(5000,()=>{
    console.log("server listening on port 5000");
    
})