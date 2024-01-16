const routes = require("express").Router();

routes.use("/",require("../controllers/HomeController"));
routes.use("/student",require("../controllers/StudentController"));
routes.use("/city",require("../controllers/CityController"));
 
        

module.exports = routes;
