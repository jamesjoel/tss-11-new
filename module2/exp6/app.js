const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/",(req, res)=>{
    let a = "Rohit sharma";
    let b = " mumbai";
    let c = " 45 hitman";

    let pagedata = {
        name1 : a,
        city : b,
        con : c
    };
    res.render("pages/home",pagedata)
})


app.get("/about", (req , res)=>{
    res.render("pages/about")
});  

app.get("/contact", (req , res)=>{
    res.render("pages/contact")
});  
app.get("/help", (req , res)=>{
    res.render("pages/help")
}); 

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("server is running with port", port);
});

 
