const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.static(__dirname+"/assets"))

app.get("/", (req, res)=>{
    res.render("pages/home")
})


const port = process.env.PORT || 6238

app.listen(port, ()=>{
    console.log( " server start", port)
})