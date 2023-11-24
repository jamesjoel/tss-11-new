const routes = require("express").Router()

 routes.use("/",require("../controller/HomeController"))
 routes.use("/teacher",require("../controller/TeacherController"))
 

 module.exports = routes