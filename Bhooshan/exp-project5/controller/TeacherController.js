const routes = require("express").Router();
const teacher = require("../model/Teacher")
const country = require("../model/country")

routes.get("/", async(req,res)=>{
    let result = await country.find()
    let pagedata = { result : result}
    res.render("pages/teacher" , pagedata)
})

routes.get("/list", async(req,res)=>{
    let result = await teacher.find()
    let pagedata = { result : result}
    res.render("pages/list", pagedata)
})
routes.post("/save", async(req,res)=>{
    await teacher.create(req.body)
    res.redirect("/teacher/list")
    
})
routes.get("/delete/:id",async(req, res)=>{
    let id = req.params.id
    await teacher.deleteMany({_id : id})
    res.redirect("/teacher/list")
})
routes.get("/edit/:id" , async(req, res)=>{
    let id = req.params.id
    let result = await country.find()
    let result2 = await teacher.find({_id : id})
    let pagedata = { result , teacher : result2[0]}
    res.render("pages/edit", pagedata)
})

routes.post("/update/:id", async(req, res)=>{
    let id = req.params.id
    await teacher.updateMany({_id : id }, req.body)
    res.redirect("/teacher/list")
})

module.exports = routes