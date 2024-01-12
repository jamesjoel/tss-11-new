const routes = require("express").Router();
const Cate = require("../module/Category");

routes.post("/",async(req,res)=>{
//console.log(req.body)
await Cate.create(req.body);
res.send({success : true});
});

routes.get('/',async(req,res)=>{
    let result = await Cate.find();
    res.send({success : true , result : result})
})

module.exports = routes;

