const routes = require("express").Router();

<<<<<<< HEAD
routes.use("/api/state",(require("../controller/CityController")));
routes.use ('/api/signup',(require("../controller/SignupController")));
routes.use("/api/auth",require("../controller/authController"));
routes.use("/api/user-profile",require("../controller/UserProfileController"));
routes.use("/api/admin-auth",(require("../controller/AdminColtroller")));
routes.use("/api/category",require("../controller/CategoryController"));

module.exports=routes;
=======
routes.use("/api/city", (require("../controllers/CityController")));
routes.use("/api/country", (require("../controllers/CountryController")));
routes.use("/api/signup", (require("../controllers/SignupController")));
routes.use("/api/auth", (require("../controllers/AuthController")));
routes.use("/api/user-profile", (require("../controllers/UserProfileController")));
routes.use("/api/admin-auth", require("../controllers/AdminAuthController"));

// routes.use("/about", require("../controllers/AboutController"));

module.exports = routes;
>>>>>>> 4d7a0369ec211716eb5aece5daf371d0784e2b03
