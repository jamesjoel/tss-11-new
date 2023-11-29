const express = require("express");
const app  = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/",(req, res)=>{
    res.render("pages/home");
})
app.get("/about",(req, res)=>{
    res.render("pages/about");
})
app.get("/contact",(req, res)=>{
    res.render("pages/contact");
})

const port = process.env.PORT || 7777;
app.listen(port, ()=>{
    console.log("server running  with port" ,port);
})