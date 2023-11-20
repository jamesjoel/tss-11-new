const express = require("express")
const app = express()
const routes = require("./routes/AllRoutes")

app.use(express.static(__dirname+"/assets"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")

app.use(routes)
 
const port = process.env.PORT || 6238

app.listen(port, ()=>{
    console.log(" server start", port )
})