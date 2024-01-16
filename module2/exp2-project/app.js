const express = require("express");
const app =express();

let teacher =require("./model/Teacher");
let product = require("./model/employe");

app.set("view engine","ejs");
app.use(express.static(__dirname+"/assets"));
app.use(express.json())
app.use(express.urlencoded({extended :true}));

app.get("/", (req , res)=>{
res.render ("pages/home");});

app.get("/about",(req,res)=>{
res.render("pages/about");});

app.get("/products",(req,res)=>{
res.render("pages/products");});

app.post("/save",(req,res)=>{
Student.create(req.body)
res.redirect("/")});

app.post("/add",(req,res)=>{
teacher.create(req.body);});

app.post("/product-emp",(req,res)=>{
console.log(req.body)
product.create(req.body);
res.redirect("/products")});
    
const port = process.env.PORT || 3333;    
app.listen(port,()=>{
console.log("server is running with port", port)
});




