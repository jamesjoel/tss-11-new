const routes = require("express").Router();

routes.use("/api/city",(require("../cotroller/CityController")));

module.exports=routes;