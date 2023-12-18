const routes = require("express").Router();

routes.use("/api/city",(require("../cotroller/CityController")));
routes.use ('/api/signup',(require("../cotroller/SignupController")));

module.exports=routes;