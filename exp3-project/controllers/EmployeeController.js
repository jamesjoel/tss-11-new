const routes = require("express").Router();
const Emp = require("../models/Employee");
const City = require("../models/City");

routes.get("/", async (req, res)=>{
    let result = await City.find();
    let pagedata = {city : result};
    res.render("pages/employee", pagedata);
})

routes.get("/list", async (req, res)=>{
    let result = await Emp.find();
    let pagedata = { result : result };
    res.render("pages/employee-list", pagedata);
})

routes.post("/save", async(req, res)=>{
    await Emp.create(req.body);
    res.redirect("/employee/list");
})

routes.get("/delete/:id", async(req, res)=>{
    let id = req.params.id;
    await Emp.deleteMany({ _id : id });
    res.redirect("/employee/list");
})

module.exports = routes;