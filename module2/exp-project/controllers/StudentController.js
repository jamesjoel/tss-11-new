
const routes = require("express").Router();
const student =require("../models/student");
const city = require ("../models/city");


routes.get("/",async(req,res)=>{
let result = await city.find();
let pagedata = {result : result};
res.render("pages/student",pagedata);
})

routes.post("/save",(req,res)=>{
console.log(req.body);
res.redirect("/");
})

routes.get("/list",(req,res)=>{
res.render("pages/list")
})

module.exports = routes;