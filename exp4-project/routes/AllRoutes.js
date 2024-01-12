const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/user", require("../controllers/UserController"));

module.exports = routes;