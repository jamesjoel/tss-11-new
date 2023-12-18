const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.static(__dirname+"/assets"))

app.get("/",(req,res)=>{
    res.render("pages/home");
});

app.get("/about",(req,res)=>{
    res.render("pages/about");
});



const port = process.env.PORT||3000;
app.listen(port,()=>{
    console.log("server is running with port",port)
});