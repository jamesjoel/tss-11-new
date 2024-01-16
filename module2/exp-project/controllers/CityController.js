const routes = require("express").Router();
const city = require("../models/city");

routes.get("/",async(req,res)=>{
    let result = await city.find();
    let pagedata = { result : result};
    res.render("pages/city", pagedata);
});

module.exports = routes;
