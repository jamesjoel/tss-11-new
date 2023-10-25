const express = require("express");
const app = express();
// calling the constructor

app.set("view engine", "ejs"); // pug, jade, handlebar

app.get("/", (req, res)=>{
    // res.sendFile(__dirname+"/home.html");
    res.render("home");
})


app.get("/about", (req, res)=>{
    res.render("about");
})

app.get("/contact", (req, res)=>{
    res.render("contact");
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running with port ", port);
})