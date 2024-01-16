const routes = require ("express").Router();
const city= require ("../module/City")



//:8080/api/city/state
routes.get("/" ,async(req,res)=>{
    let result = await city.distinct("state");
    res.send(result)
})

routes.get("/getcity/:a",async(req,res)=>{
    let x =req.params.a;
    let result =await city.find({state :x})
    res.send(result);
})

module.exports=routes;