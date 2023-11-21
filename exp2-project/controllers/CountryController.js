const routes = require("express").Router();
const Country = require("../models/Country");

routes.get("/", async(req, res)=>{
    let result = await Country.find();
    let pagedata = { result : result };
    res.render("pages/country", pagedata);
})

module.exports = routes;