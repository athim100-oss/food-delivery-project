const express=require("express")
const mongoose=require("mongoose")
const UserRouter=require("./Router/UserRouter")
const orderRoute = require("./Router/OrderRouter");
const foodRoute=require("./Router/FoodRouter")
const cors = require("cors");
const port=5000
const app=express();
app.use(cors({
    origin: "http://localhost:3000"
}));


app.use(express.json())

mongoose.connect("mongodb://localhost:27017/catering")
.then(()=>{
    console.log("database connected")
    app.listen(port,()=>{
        console.log("the port number is connected")
        console.log("link => http://localhost:5000")

    })
})
.catch((error)=>{
    console.log("error message")
})

app.use("/User",UserRouter)
app.use("/Order",orderRoute)
app.use("/Food",foodRoute)
