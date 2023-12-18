const express = require("express");
const app = express();
const routes= require("./routes/AllRoutes")
const cors= require ("cors");


app.use(express.json());
app.use(express.urlencoded({extended : true})); 
app.use(cors());
app.use(routes);


const port = process.env.PORT || 8080;
app.listen(port, ()=>{
console.log("sever running WITH port",port)
})