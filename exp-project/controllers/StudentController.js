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

routes.get("/edit/:x", async(req, res)=>{
    let a = req.params.x;
    let result = await Student.find({ _id : a });
    let pagedata = {stu : result[0]};
    res.render("pages/student-edit", pagedata)
})

routes.post("/update/:id", async(req, res)=>{
    let id = req.params.id;
    await Student.updateMany({_id : id }, req.body);
    res.redirect("/student/list");
})

module.exports = routes;