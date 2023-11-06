const routes = require("express").Router();
const Teacher = require("../models/Teacher");

routes.get("/", (req, res)=>{
    res.render("pages/teacher");
})
routes.post("/save", (req, res)=>{
    Teacher.create(req.body);
    res.redirect("/");
})


module.exports = routes;