const express = require("express");
const app = express();


let Teacher = require("./models/Teacher");
let Student = require('./models/Student');

let Emp = require("./models/Employee");




app.set("view engine", "ejs");


app.use(express.static(__dirname+"/assets"));
app.use(express.json())
app.use(express.urlencoded({ extended : true }));

app.get("/", (req, res)=>{
    res.render("pages/home");
})


app.get("/about", (req, res)=>{
    
    res.render("pages/about");
})



app.get("/contact", (req, res)=>{
    res.render("pages/contact");
})
app.get("/student", (req, res)=>{
    res.render("pages/student");
})

app.post("/save", (req, res)=>{
    // console.log(req.body);
    Student.create(req.body);
    res.redirect("/");
})

app.get("/teacher", (req, res)=>{
    res.render("pages/teacher");
})

app.post("/save-teacher", (req, res)=>{
    Teacher.create(req.body);
    res.redirect("/");
})


app.post("/save-emp", (req, res)=>{

    // console.log(req.body);
    Emp.create(req.body);
    res.redirect("/about");
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})