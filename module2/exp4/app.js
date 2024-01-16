const express = require("express");
const app = express();

app.set("view engine","ejs");

//app.use(express.static(__dirname+"/assets"));
//render me dirname ki jrurat nhi hoti he

app.get("/",(req, res)=>{
    res.render("home");
});

const port =process.env.PORT||3000;

app.listen(port,()=>{
    console.log("server is running with port ",port );

});
