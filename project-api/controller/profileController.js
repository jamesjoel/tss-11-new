const routes = require("express").Router()
const jwt = require("jsonwebtoken");
const signup = require("../module/User")

routes.get("/", async (req,res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "login token");
    let id = obj.id;
    let result = await signup.find({_id : id});
    res.send({success : true , result : result[0]})
    

})

module.exports = routes