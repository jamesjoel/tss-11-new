const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.sendFile( __dirname+"/home.html");

})

app.get("/about",function(req,res){
    res.sendFile( __dirname+"/about.html");

})


app.get("/contack",function(req,res){
    res.sendFile( __dirname+"/contack.html");

})


app.listen(3000,function(){
    console.log("server start------");

} );



