const express = require("express");
const app = express();
// all requires

// app.set, app.use
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

// all routes

app.get("/", (req, res)=>{
    let a = "Rohit Sharma";
    let b = "rohit@gmail.com";
    let c = 4578447;
    let d = "Mumbai";


    let p = "Nidhi Joshi";
    let q = "nidhi@gmail.com";
    let r = 99988810;
    let s = "Indore";
    
    let color = ["red", "green", "blue", "yellow", "pink", "black", "white"];

    let str = "Welcome... TSS";

    let user1 = { name : a, email : b, con : c, city : d };
    let user2 = { name : p, email : q, con : r, city : s };

    let pagedata = { user1 : user1, user2 : user2, color : color, str : str };
    

    res.render("pages/home", pagedata);
})




app.get("/about", (req, res)=>{
    res.render("pages/about");
})
app.get("/contact", (req, res)=>{
    res.render("pages/contact");
})
app.get("/help", (req, res)=>{
    res.render("pages/help");
})


// server listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})