const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
// E:/tss-11/exp3/assets/css/boot.css

app.get("/", function(req, res){
    res.sendFile(__dirname+"/home.html");
});
app.get("/about", function(req, res){
    res.sendFile(__dirname+"/about.html")
})
app.get("/contact", function(req, res){
    res.sendFile(__dirname+"/contact.html")
})

const port = process.env.PORT || 3000; // 8080

app.listen(port, function(){
    console.log("server running with port ", port);
});

// npm start