const routes = require("express").Router();

routes.use("/api/city", (require("../controllers/CityController")));
routes.use("/api/country", (require("../controllers/CountryController")));

module.exports = routes;