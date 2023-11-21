const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/student", require("../controllers/StudentController"));
routes.use("/country", require("../controllers/CountryController"));

module.exports = routes;