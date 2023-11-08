const routes = require("express").Router();
const Teacher = require("../models/Teacher");

routes.get("/", (req, res)=>{
    res.render("pages/teacher");
})
routes.post("/save", async (req, res)=>{
    await Teacher.create(req.body);
    res.redirect("/teacher/list");
})

routes.get("/list", async (req, res)=>{
    let result = await Teacher.find();
    let pagedata = { result : result };
    res.render("pages/teacher-list", pagedata);
})


module.exports = routes;