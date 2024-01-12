const routes = require("express").Router();
const Student = require("../models/Student");

routes.get("/", (req, res)=>{
    res.render("pages/student");
})

routes.post("/save", (req, res)=>{
    //console.log(req.body);
    Student.create(req.body);
    res.redirect("/");
})

module.exports = routes;