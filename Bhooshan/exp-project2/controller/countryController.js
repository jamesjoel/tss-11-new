const routes = require("express").Router()
const country = require("../model/country")

routes.get("/", async(req, res)=>{
    let result = await country.find()
    let pagedata = ({ result : result})
    res.render("pages/country", pagedata)
})

module.exports = routes