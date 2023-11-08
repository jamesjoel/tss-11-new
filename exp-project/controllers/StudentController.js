const routes = require("express").Router();
const Student = require("../models/Student")

routes.get("/", (req, res)=>{
    res.render("pages/student");
})

routes.post("/save", async (req, res)=>{
    await Student.create(req.body);
    res.redirect("/student/list");
})

routes.get("/list", async(req, res)=>{
    let result = await Student.find();
    let pagedata = { stu : result };
    res.render("pages/student-list", pagedata);
})

routes.get("/delete/:a", async (req, res)=>{
    // console.log(req.params);
    let x = req.params.a;
    await Student.deleteMany({ _id : x });
    res.redirect("/student/list");
})

module.exports = routes;