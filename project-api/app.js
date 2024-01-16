const express = require("express");
const app = express();
<<<<<<< HEAD
const routes= require("./routes/AllRoutes")
const cors= require ("cors");


app.use(express.json());
app.use(express.urlencoded({extended : true})); 
app.use(cors());
app.use(routes);


const port = process.env.PORT || 8080;
app.listen(port, ()=>{
console.log("sever running WITH port",port)
=======
const routes = require("./routes/AllRoutes");
const cors = require("cors");

/*
    For going to live server

*/
// ********************* Live Server (start)
const root = require("path").join(__dirname, "build");
app.use(express.static(__dirname+"/assets"));
app.use(express.static(root));
// ********************* Live Server (end)


app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors());
app.use(routes);

// ************** for Live server
app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})
// ************** for Live server




const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("Server Running With Port ", port);
>>>>>>> 4d7a0369ec211716eb5aece5daf371d0784e2b03
})