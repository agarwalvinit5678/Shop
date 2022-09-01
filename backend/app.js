const express= require("express");
const app=express();
const errMiddleware=require("./middleware/error");
app.use(express.json())

const product=require("./routes/productRoute");
app.use("/api/v1",product);

app.use(errMiddleware);

module.exports=app; 