const routes = require("express").Router()
const patient = require("../model/Patient")

routes.get("/", (req, res)=>{
    res.render("pages/patient")
})

routes.get("/list", async(req, res)=>{
    let result = await patient.find()
    let pagedata = { result : result}
    res.render("pages/patient-list", pagedata)
})

routes.post("/save", async(req, res)=>{
    await patient.create(req.body)
    res.redirect("/patient/list")
})

routes.get("/delete/:id", async(req, res)=>{
    let id = req.params.id
    await patient.deleteMany({_id : id })
    res.redirect("/patient/list")
})

routes.get("/edit/:a", async(req, res)=>{
    let x = req.params.a
    let result = await patient.find({ _id : x})
    let pagedata = { result : result[0]}
    res.render("pages/patient-edit", pagedata)
})

routes.post("/update/:id", async(req, res)=>{
    let id = req.params.id
    await patient.updateMany({_id : id }, req.body)
    res.redirect("/patient/list")
})



module.exports = routes