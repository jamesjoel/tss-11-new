const express = require("express");
const app = express();


app.get("/",function(req, res){
 res.sendFile(__dirname+"/home.html")

});

const port = process.env.port ||3000;
app.listen(port,function(){
    console.log("server start with port", port);

});