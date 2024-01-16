const express = require("express");
const app = express();
const routes = require("./routes/allroutes");
const city = require("./models/city");

app.set("view engine","ejs");
app.use(express.json())
app.use(express.static(__dirname+"/assets"));
app.use(express.urlencoded({ extended : true}));
app.use(routes);


const port = process.env.PORT || 1111;
app.listen(port,()=>{
console.log("server is running with port", port)
});




