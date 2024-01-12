const routes = require("express").Router()

routes.use("/", require("../controller/HomeController"))
routes.use("/patient", require("../controller/PatientController"))
routes.use("/country", require("../controller/countryController"))

module.exports = routes