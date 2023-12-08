const routes = require("express").Router();
const City = require("../models/City")

routes.get("/", async(req, res)=>{
    
    let result = await City.find();
    res.send(result);
})

module.exports = routes;
/*

    res.render()            ejs+data
    res.sendFile()          only file html
    res.redirect()          redirect
    res.send()              only data


    req.body
    req.params

*/