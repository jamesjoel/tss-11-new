const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json())
app.use(express.urlencoded({ extended : true }));
app.use(cors());

app.use(require("./routes/AllRoutes"));



app.listen(8080, ()=>{
    console.log("server running")
})