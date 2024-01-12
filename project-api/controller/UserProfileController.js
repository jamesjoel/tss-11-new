const routes= require("express").Router();
const jwt = require("jsonwebtoken");
const user = require("../module/User");


routes.get("/", async(req,res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "the stepping stone");
    let id = obj.id;
    
    let result = await user.find({_id : id})
    res.send({success : true , result:result[0]})

});

module.exports=routes;