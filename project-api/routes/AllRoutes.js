const routes = require("express").Router();

routes.use("/api/state",(require("../controller/CityController")));
routes.use ('/api/signup',(require("../controller/SignupController")));
routes.use("/api/auth",require("../controller/authController"));
routes.use("/api/user-profile",require("../controller/UserProfileController"));
routes.use("/api/admin-auth",(require("../controller/AdminColtroller")));
routes.use("/api/category",require("../controller/CategoryController"));

module.exports=routes;