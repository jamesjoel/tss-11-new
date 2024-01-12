const routes = require("express").Router();
const Country = require("../models/Country");
const User = require("../models/User");

routes.get("/", async(req, res)=>{
    let result = await Country.find();
    let pagedata = { result };
    res.render("pages/user", pagedata);
})
routes.get("/list", async(req, res)=>{
    let result = await User.find();
    let pagedata = {result};
    res.render("pages/list", pagedata);
})
routes.post("/save", async(req, res)=>{
    await User.create(req.body);
    res.redirect("/user/list");
})
routes.get("/delete/:id", async(req, res)=>{
    let id = req.params.id;
    await User.deleteMany({_id : id});
    res.redirect("/user/list");
})
routes.get("/update/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Country.find();
    let result2 = await User.find({_id : id});
    
    let pagedata = { result,  user : result2[0]};
    res.render("pages/update", pagedata);
})

routes.post("/edit/:id", async(req, res)=>{
    let id = req.params.id;
    await User.updateMany({_id : id}, req.body);
    res.redirect("/user/list");
})


module.exports = routes;

/*

let a = "rohit";

let obj = { x : a };



*/