const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.render("pages/contact");
})

routes.get("/info/:name/:age/:city", (req, res)=>{
    
    console.log("********");
    console.log(req.params);
})

module.exports = routes;